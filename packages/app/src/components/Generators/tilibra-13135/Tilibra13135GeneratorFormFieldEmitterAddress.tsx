import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';
import * as styles from './Tilibra13135GeneratorForm.module.css';

export const Tilibra13135GeneratorFormFieldEmitterAddress = () => {
  const { register } = useFormContext();
  return (
    <TextField
      required
      fullWidth
      variant="filled"
      label="Endereço"
      className={styles.address}
      {...register('emitter.address', { required: true })}
    />
  );
};
