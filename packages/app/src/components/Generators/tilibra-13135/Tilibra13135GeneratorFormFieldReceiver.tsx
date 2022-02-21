import * as styles from './Tilibra13135GeneratorForm.module.css';
import { Tilibra13135GeneratorFormFieldReceiverID } from './Tilibra13135GeneratorFormFieldReceiverID';
import { Tilibra13135GeneratorFormFieldReceiverName } from './Tilibra13135GeneratorFormFieldReceiverName';

const Tilibra13135GeneratorFormFieldReceiver = () => (
  <>
    <div className={styles.personFields}>
      <Tilibra13135GeneratorFormFieldReceiverName />
      <Tilibra13135GeneratorFormFieldReceiverID />
    </div>
  </>
);

export default Tilibra13135GeneratorFormFieldReceiver;
