import { Locale } from 'date-fns';
import { TCreatedPdf } from 'pdfmake/build/pdfmake';

export interface INotaFillerGenerator<IPayload> {
  generate(
    payload: IPayload,
    options?: { dateFNSLocale?: Locale }
  ): Promise<TCreatedPdf>;
}
