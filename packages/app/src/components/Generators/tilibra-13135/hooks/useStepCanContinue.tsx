import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { Steps } from '../interfaces/Steps';

const REQUIRED_FIELDS_BY_STEPS = {
  [Steps.RECEIVER]: ['receiver.name', 'receiver.id'],
  [Steps.EMITTER]: ['emitter.name', 'emitter.id', 'emitter.address'],
  [Steps.PAYMENT_ADDRESS]: ['paymentAddress'],
  [Steps.NOTES]: [
    'versions.quantity',
    'versions.unitaryValue',
    'versions.firstDueDate',
    'versions.dueDateGap',
    'versions.dueDateGapDimension',
  ],
  [Steps.NOTES_REVIEW]: ['computedVersions'],
};

export const useStepCanContinue = () => {
  const { trigger } = useFormContext();
  return useCallback(
    async (step: Steps) => {
      const requiredFields = (REQUIRED_FIELDS_BY_STEPS as any)[step] as
        | string[]
        | undefined;
      return requiredFields ? trigger(requiredFields) : true;
    },
    [trigger]
  );
};
