import { cmToPt } from '@nota-filler/generators/src/helpers';
import { ITilibra13135GeneratorFormDataTargetSurface } from '../interfaces/ITilibra13135GeneratorFormDataTargetSurface';

export const getSurfaceSizeFromTargetSurface = (
  targetSurface: ITilibra13135GeneratorFormDataTargetSurface
) => {
  switch (targetSurface) {
    case 'A4': {
      return {
        width: cmToPt(29.7),
        height: cmToPt(21),
      };
    }

    case 'default':
    default: {
      return undefined;
    }
  }
};
