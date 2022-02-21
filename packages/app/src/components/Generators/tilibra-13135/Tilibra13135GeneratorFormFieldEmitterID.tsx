import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormFieldEmitterID = () => {
  const { register } = useFormContext();
  return (
    <TextField
      required
      fullWidth
      variant="filled"
      label="CPF/CNPJ"
      {...register('emitter.id', { required: true })}
    />
  );
};
