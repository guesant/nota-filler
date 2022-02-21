import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormFieldReceiverID = () => {
  const { register } = useFormContext();
  return (
    <TextField
      required
      fullWidth
      label="CPF/CNPJ"
      variant="filled"
      {...register('receiver.id', { required: true })}
    />
  );
};
