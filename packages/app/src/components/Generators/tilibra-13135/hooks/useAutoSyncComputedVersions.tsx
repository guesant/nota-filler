import debounce from 'lodash.debounce';
import { useCallback, useEffect, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { getNextDueDate } from '../helpers/get-next-due-date';
import { ITilibra13135GeneratorFormData } from '../interfaces/ITilibra13135GeneratorFormData';
import { Tilibra13135GeneratorFormDataComputedVersion } from '../interfaces/Tilibra13135GeneratorFormDataComputedVersion';

export const useAutoSyncComputedVersions = () => {
  const {
    control,
    setValue: _setValue,
    getValues: _getValues,
  } = useFormContext<ITilibra13135GeneratorFormData>();

  const depsFields = useWatch({
    control,
    name: [
      'versions.quantity',
      'versions.unitaryValue',
      'versions.dueDateGap',
      'versions.firstDueDate',
      'versions.dueDateGapDimension',
    ],
  } as any);

  const getValues = _getValues as any;
  const setValue = _setValue as any;

  const syncComputedVersions = useCallback(() => {
    const quantity = Number(getValues('versions.quantity'));

    const unitaryValue = Number(getValues('versions.unitaryValue'));

    const dueDateGap = Number(getValues('versions.dueDateGap'));

    const firstDueDate = getValues('versions.firstDueDate');

    const dueDateGapDimension = getValues('versions.dueDateGapDimension');

    const generateComputedVersions =
      function* (): IterableIterator<Tilibra13135GeneratorFormDataComputedVersion> {
        let previousDueDate = firstDueDate;

        for (let i = 0; i < quantity; i++) {
          const currentDueDate =
            i === 0
              ? previousDueDate
              : getNextDueDate(
                  previousDueDate,
                  dueDateGap,
                  dueDateGapDimension
                );

          yield {
            value: unitaryValue,
            dueDate: currentDueDate,
          };

          previousDueDate = currentDueDate;
        }
      };

    setValue('computedVersions', Array.from(generateComputedVersions()));
  }, []);

  const debouncedSyncComputedVersions = useMemo(
    () => debounce(syncComputedVersions, 300),
    [syncComputedVersions]
  );

  useEffect(() => {
    debouncedSyncComputedVersions();
    return () => {
      debouncedSyncComputedVersions.cancel();
    };
  }, [debouncedSyncComputedVersions]);

  useEffect(() => {
    debouncedSyncComputedVersions();
  }, [depsFields, debouncedSyncComputedVersions]);

  return null;
};
