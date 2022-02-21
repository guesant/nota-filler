import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormFieldGenericVersionsInfoQuantity = () => {
  const { register } = useFormContext();
  return (
    <TextField
      required
      fullWidth
      type="number"
      variant="filled"
      inputProps={{ min: 1 }}
      label="Quantidade de Notas Promissórias"
      {...register('versions.quantity', { required: true })}
    />
  );
};
