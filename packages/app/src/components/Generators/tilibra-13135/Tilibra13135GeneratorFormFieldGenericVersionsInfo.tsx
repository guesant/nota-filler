import * as styles from './Tilibra13135GeneratorForm.module.css';
import { Tilibra13135GeneratorFormFieldGenericVersionsInfoFirstDueDate } from './Tilibra13135GeneratorFormFieldGenericVersionsInfoFirstDueDate';
import { Tilibra13135GeneratorFormFieldGenericVersionsInfoNextDueDates } from './Tilibra13135GeneratorFormFieldGenericVersionsInfoNextDueDates';
import { Tilibra13135GeneratorFormFieldGenericVersionsInfoQuantity } from './Tilibra13135GeneratorFormFieldGenericVersionsInfoQuantity';
import { Tilibra13135GeneratorFormFieldGenericVersionsInfoUnitaryValue } from './Tilibra13135GeneratorFormFieldGenericVersionsInfoUnitaryValue';

export const Tilibra13135GeneratorFormFieldGenericVersionsInfo = () => (
  <>
    <div className={styles.genericVersionsInfo}>
      <Tilibra13135GeneratorFormFieldGenericVersionsInfoQuantity />

      <Tilibra13135GeneratorFormFieldGenericVersionsInfoUnitaryValue />

      <Tilibra13135GeneratorFormFieldGenericVersionsInfoFirstDueDate />

      <Tilibra13135GeneratorFormFieldGenericVersionsInfoNextDueDates />
    </div>
  </>
);
