import format from 'date-fns/format';
import getDate from 'date-fns/getDate';
import dateFNSLocalePTBR from 'date-fns/locale/pt-BR';
import extenso from 'extenso';
import { Content } from 'pdfmake/interfaces';
import { cmPoint as _cmPoint, cmToPt, fixAlignedText } from '../../../helpers';
import {
  ITilibra13135GeneratorPayload,
  ITilibra13135GeneratorPayloadVersion,
} from '../interfaces';
import { PAPER } from './consts';
import { getDefaultNth } from './get-default-nth';

export const generatePdfContent = function* (
  payload: ITilibra13135GeneratorPayload,
  { dateFNSLocale = dateFNSLocalePTBR } = {}
): IterableIterator<Content> {
  const pageSize = {
    ...PAPER.SIZE,
    ...payload.surface,
  };

  const cmPoint = (x: number, y: number, applyFix = true) => {
    const { x: targetX, y: targetY } = _cmPoint(x, y, applyFix);

    const shiftY = pageSize.height / 2 - PAPER.SIZE.height / 2;
    const shiftX = 0;

    return { x: targetX + shiftX, y: targetY + shiftY };
  };

  for (const [
    index,
    {
      value,
      dueDate,
      emissionDate,
      nth = getDefaultNth(index, payload.versions.length),
    },
  ] of Object.entries(
    payload.versions as Record<number, ITilibra13135GeneratorPayloadVersion>
  ).map(([k, v]) => [Number(k), v] as const)) {
    if (index > 0) {
      yield { text: '', pageBreak: 'before', absolutePosition: { x: 0, y: 0 } };
    }

    // Nº
    {
      yield fixAlignedText({
        text: nth,
        alignment: 'center',
        width: cmToPt(3.78),
        fontSize: cmToPt(0.44),
        absolutePosition: cmPoint(5.95, 1.73),
      });
    }

    // Vencimento: __ de ____ de ____.

    {
      yield fixAlignedText({
        text: format(dueDate, 'dd', { locale: dateFNSLocale }),

        absolutePosition: cmPoint(12.89, 1.1),

        fontSize: cmToPt(0.4),

        width: cmToPt(1.2),

        alignment: 'center',
      });

      yield fixAlignedText({
        text: format(dueDate, 'MMMM', { locale: dateFNSLocale }),
        absolutePosition: cmPoint(14.45, 1.1),
        fontSize: cmToPt(0.4),
        width: cmToPt(3.58),
        height: cmToPt(0.4067),
        alignment: 'center',
      });

      yield fixAlignedText({
        text: format(dueDate, 'yyyy', { locale: dateFNSLocale }),
        absolutePosition: cmPoint(18.77, 1.1),
        fontSize: cmToPt(0.4),
        width: cmToPt(1.64),
        height: cmToPt(0.4067),
        alignment: 'center',
      });
    }

    // R$

    {
      const valueLong = (
        new Intl.NumberFormat('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          minimumIntegerDigits: 2,
        }).format(value) + ' '
      ).padEnd(16, '#');

      yield {
        text: valueLong,
        absolutePosition: cmPoint(16.14, 1.76),
        fontSize: cmToPt(0.44),
        width: cmToPt(4.41),
      };
    }

    // No dia: ______________ de _________________ de _________________
    // ________________ _(ei)_
    {
      const dueDateLongDay = extenso(getDate(dueDate));

      yield fixAlignedText({
        text: dueDateLongDay,
        absolutePosition: cmPoint(4.5, 2.5),
        fontSize: cmToPt(0.4),
        width: cmToPt(5.49),
        alignment: 'center',
      });

      const dueDateLongMonth = format(dueDate, 'MMMM', {
        locale: dateFNSLocale,
      });

      yield fixAlignedText({
        text: dueDateLongMonth,
        absolutePosition: cmPoint(10.21, 2.5),
        fontSize: cmToPt(0.4),
        width: cmToPt(5.11),
        alignment: 'center',
      });

      {
        const dueDateLongYear = (
          extenso(format(dueDate, 'yyyy', { locale: dateFNSLocale })) + ' '
        ).padEnd(50, '~');

        const line1 = dueDateLongYear.slice(0, 17);
        const line2 = dueDateLongYear.slice(17);

        yield {
          preserveLeadingSpaces: true,
          text: ' '.repeat(49) + line1,
          absolutePosition: cmPoint(4.32, 2.5),
          fontSize: cmToPt(0.4),
          width: cmToPt(16.42),
          height: cmToPt(0.57),
        };

        yield {
          text: line2,
          absolutePosition: cmPoint(4.3, 3.18),
          fontSize: cmToPt(0.4),
          width: cmToPt(16.42),
          height: cmToPt(0.57),
        };
      }

      yield {
        text: 'ei',
        absolutePosition: cmPoint(13.1, 3.36),
        fontSize: cmToPt(0.26),
        width: cmToPt(1.9),
      };
    }

    // A ________________ CPF/CNPJ _____________
    {
      yield {
        text: payload.receiver.name.toLocaleUpperCase(),
        absolutePosition: cmPoint(4.58, 3.85),
        fontSize: cmToPt(0.4),
        width: cmToPt(5.57),
        height: cmToPt(0.23),
      };

      yield fixAlignedText({
        text: payload.receiver.id,
        absolutePosition: cmPoint(16, 3.85),
        fontSize: cmToPt(0.4),
        width: cmToPt(4.61),
        height: cmToPt(0.23),
        alignment: 'center',
      });
    }

    // Ou à sua ordem, a quantia de _____________________________
    // _____________________________ em moeda corrente deste país

    {
      const valueLongFulfilled = (
        extenso(value, { mode: 'currency' }) + ' '
      ).padEnd(116, '~');

      const line1 = valueLongFulfilled.slice(0, 58);
      const line2 = valueLongFulfilled.slice(58);

      yield {
        preserveLeadingSpaces: true,
        text: ' '.repeat(9) + line1,
        absolutePosition: cmPoint(4.3, 4.62),
        fontSize: cmToPt(0.4),
        width: cmToPt(16.25),
        height: cmToPt(0.57),
      };

      yield {
        text: line2,
        absolutePosition: cmPoint(4.3, 5.3),
        fontSize: cmToPt(0.4),
        width: cmToPt(16.25),
        height: cmToPt(0.57),
      };
    }

    // Local de Pagamento ___________ Data da Emissão: __/__/____

    {
      yield {
        text: payload.paymentAddress,
        absolutePosition: cmPoint(6.75, 6.25),
        fontSize: cmToPt(0.26),
        width: cmToPt(8.18),
        height: cmToPt(0.42),
      };

      if (emissionDate) {
        yield fixAlignedText({
          text: format(emissionDate, 'dd', { locale: dateFNSLocale }),
          absolutePosition: cmPoint(17.05, 6.1),
          fontSize: cmToPt(0.4),
          width: cmToPt(0.75),
          height: cmToPt(0.37),
          alignment: 'center',
        });

        yield fixAlignedText({
          text: format(emissionDate, 'MM', { locale: dateFNSLocale }),
          absolutePosition: cmPoint(18.04, 6.1),
          fontSize: cmToPt(0.4),
          width: cmToPt(0.75),
          height: cmToPt(0.37),
          alignment: 'center',
        });

        yield fixAlignedText({
          text: format(emissionDate, 'yyyy', { locale: dateFNSLocale }),
          absolutePosition: cmPoint(19.12, 6.1),
          fontSize: cmToPt(0.4),
          width: cmToPt(1.19),
          height: cmToPt(0.37),
          alignment: 'center',
        });
      }
    }

    // Nome do Emitente: ________________________________________
    // CPF/CNPJ: _________________________ Endereço: ____________

    {
      yield {
        text: payload.emitter.name.toLocaleUpperCase(),
        absolutePosition: cmPoint(6.55, 6.75),
        fontSize: cmToPt(0.4),
      };

      yield {
        text: payload.emitter.id,
        absolutePosition: cmPoint(5.57, 7.39),
        fontSize: cmToPt(0.4),
      };

      yield {
        text: payload.emitter.address,
        absolutePosition: cmPoint(11.5, 7.54),
        fontSize: cmToPt(0.26),
      };
    }
  }
};
