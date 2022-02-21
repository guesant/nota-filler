import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Controller, useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormFieldGenericVersionsInfoNextDueDatesGapDimension =
  () => {
    const { watch, control } = useFormContext();

    const gap = Number(watch('versions.dueDateGap'));

    return (
      <FormControl fullWidth variant="filled">
        <InputLabel>Dimensão do Espaçamento</InputLabel>

        <Controller
          control={control}
          rules={{ required: true }}
          name={'versions.dueDateGapDimension'}
          render={({ field }) => (
            <Select required label="Age" {...field}>
              <MenuItem value="days">{gap > 1 ? 'Dias' : 'Dia'}</MenuItem>
              <MenuItem value="months">{gap > 1 ? 'Meses' : 'Mês'}</MenuItem>
            </Select>
          )}
        />
      </FormControl>
    );
  };
