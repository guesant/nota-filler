import addDays from 'date-fns/addDays';
import addMonths from 'date-fns/addMonths';
import { DueDateDimensions } from '../interfaces/DueDateDimensions';

export const getNextDueDate = (
  previousDueDate: Date,
  dueDateGap: number,
  dueDateDimension: DueDateDimensions = DueDateDimensions.MONTH
) => {
  switch (dueDateDimension) {
    case DueDateDimensions.DAYS: {
      return addDays(previousDueDate, dueDateGap);
    }

    case DueDateDimensions.MONTH:
    default: {
      return addMonths(previousDueDate, dueDateGap);
    }
  }
};
