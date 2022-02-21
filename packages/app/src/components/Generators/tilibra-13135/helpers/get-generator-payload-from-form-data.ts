import { ITilibra13135GeneratorPayload } from '@nota-filler/generators/src/modules/tilibra-13135';
import { ITilibra13135GeneratorFormData } from '../interfaces/ITilibra13135GeneratorFormData';
import { getSurfaceSizeFromTargetSurface } from './get-surface-size-from-target-surface';

export const getGeneratorPayloadFromFormData = (
  data: ITilibra13135GeneratorFormData
): ITilibra13135GeneratorPayload => ({
  surface: getSurfaceSizeFromTargetSurface(data.targetSurface),
  emitter: data.emitter,
  receiver: data.receiver,
  paymentAddress: data.paymentAddress,
  versions: [
    ...data.computedVersions.map((i) => ({
      ...i,
      emissionDate: data.emissionDate,
    })),
  ],
});
