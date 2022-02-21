import * as styles from './Tilibra13135GeneratorForm.module.css';
import { Tilibra13135GeneratorFormFieldEmitterAddress } from './Tilibra13135GeneratorFormFieldEmitterAddress';
import { Tilibra13135GeneratorFormFieldEmitterID } from './Tilibra13135GeneratorFormFieldEmitterID';
import { Tilibra13135GeneratorFormFieldEmitterName } from './Tilibra13135GeneratorFormFieldEmitterName';

export const Tilibra13135GeneratorFormFieldEmitter = () => (
  <>
    <div className={styles.personFields}>
      <Tilibra13135GeneratorFormFieldEmitterName />

      <Tilibra13135GeneratorFormFieldEmitterID />

      <Tilibra13135GeneratorFormFieldEmitterAddress />
    </div>
  </>
);
