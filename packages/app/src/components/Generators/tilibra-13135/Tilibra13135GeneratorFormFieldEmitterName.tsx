import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormFieldEmitterName = () => {
  const { register } = useFormContext();
  return (
    <TextField
      required
      label="Nome"
      variant="filled"
      fullWidth
      {...register('emitter.name', { required: true })}
    />
  );
};
