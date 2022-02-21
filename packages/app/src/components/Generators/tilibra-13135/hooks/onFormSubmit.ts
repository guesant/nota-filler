import { getGeneratorPayloadFromFormData } from '../helpers/get-generator-payload-from-form-data';
import { ITilibra13135GeneratorFormData } from '../interfaces/ITilibra13135GeneratorFormData';

export const onFormSubmit = async (data: ITilibra13135GeneratorFormData) => {
  const { modules } = await import('@nota-filler/generators');

  const tilibra13135Generator =
    new modules.tilibra13135.Tilibra13135Generator();

  const createdPDF = await tilibra13135Generator.generate(
    getGeneratorPayloadFromFormData(data)
  );

  createdPDF.open();
};
