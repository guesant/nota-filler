import { DueDateDimensions } from './DueDateDimensions';
import { ITilibra13135GeneratorFormDataTargetSurface } from './ITilibra13135GeneratorFormDataTargetSurface';
import { Tilibra13135GeneratorFormDataComputedVersion } from './Tilibra13135GeneratorFormDataComputedVersion';

export type ITilibra13135GeneratorFormData = {
  targetSurface: ITilibra13135GeneratorFormDataTargetSurface;

  receiver: {
    id: string;
    name: string;
  };

  emitter: {
    address: string;
    id: string;
    name: string;
  };

  paymentAddress: string;

  versions: {
    quantity: string;

    unitaryValue: string;

    firstDueDate: Date;

    dueDateGap: string;

    dueDateGapDimension: DueDateDimensions;
  };

  computedVersions: Tilibra13135GeneratorFormDataComputedVersion[];

  emissionDate: Date;
};
