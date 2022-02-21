import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormFieldGenericVersionsInfoUnitaryValue =
  () => {
    const { register } = useFormContext();

    return (
      <FormControl fullWidth variant="filled">
        <InputLabel>Valor Unitário </InputLabel>
        <FilledInput
          required
          type="number"
          inputProps={{ min: 0 }}
          {...register('versions.unitaryValue', { required: true })}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </FormControl>
    );
  };
