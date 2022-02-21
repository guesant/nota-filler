import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormFieldPaymentAddress = () => {
  const { register } = useFormContext();

  return (
    <TextField
      required
      fullWidth
      variant="filled"
      label="Local de Pagamento"
      {...register('paymentAddress', { required: true })}
    />
  );
};
