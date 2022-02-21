import { DueDateDimensions } from '../interfaces/DueDateDimensions';
import { ITilibra13135GeneratorFormData } from '../interfaces/ITilibra13135GeneratorFormData';

export const getDefaultFormData = (): ITilibra13135GeneratorFormData => ({
  targetSurface: 'default',

  receiver: {
    id: '',
    name: '',
  },

  emitter: {
    id: '',
    name: '',
    address: '',
  },

  paymentAddress: '',

  versions: {
    dueDateGap: '1',
    dueDateGapDimension: DueDateDimensions.MONTH,

    firstDueDate: new Date(),

    quantity: '1',
    unitaryValue: '100',
  },

  computedVersions: [],
  emissionDate: new Date(),
});
