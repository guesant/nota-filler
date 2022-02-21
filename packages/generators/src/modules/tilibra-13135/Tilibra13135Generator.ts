import dateFNSLocalePTBR from 'date-fns/locale/pt-BR';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { assetIBMPlexMonoMediumURL } from '../../assets';
import { INotaFillerGenerator } from '../../interfaces';
import { PAPER } from './helpers';
import { generatePdfContent } from './helpers/generate-pdf-content';
import { ITilibra13135GeneratorPayload } from './interfaces';

export class Tilibra13135Generator
  implements INotaFillerGenerator<ITilibra13135GeneratorPayload>
{
  async generate(
    payload: ITilibra13135GeneratorPayload,
    { dateFNSLocale = dateFNSLocalePTBR } = {}
  ) {
    return pdfMake.createPdf(
      {
        pageSize: {
          ...PAPER.SIZE,
          ...payload.surface,
        },
        pageMargins: PAPER.MARGINS,
        pageOrientation: 'landscape',
        defaultStyle: {
          font: 'IBM Plex Mono',
          bold: true,
        },
        content: [
          ...Array.from(generatePdfContent(payload, { dateFNSLocale })),
        ],
      },
      undefined,
      {
        'IBM Plex Mono': {
          bold: assetIBMPlexMonoMediumURL,
        },
      }
    );
  }
}
