import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormFieldReceiverName = () => {
  const { register } = useFormContext();
  return (
    <TextField
      required
      fullWidth
      label="Nome"
      variant="filled"
      {...register('receiver.name', { required: true })}
    />
  );
};
