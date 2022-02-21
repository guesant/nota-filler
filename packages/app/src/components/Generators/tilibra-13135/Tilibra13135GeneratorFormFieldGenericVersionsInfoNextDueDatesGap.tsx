import TextField from '@mui/material/TextField';
import { useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormFieldGenericVersionsInfoNextDueDatesGap =
  () => {
    const { register } = useFormContext();

    return (
      <TextField
        required
        fullWidth
        type={'number'}
        variant="filled"
        defaultValue={'1'}
        inputProps={{ min: 0 }}
        sx={{ textAlign: 'right' }}
        label="Espaçar os vencimentos em:"
        {...register('versions.dueDateGap', { required: true })}
      />
    );
  };
