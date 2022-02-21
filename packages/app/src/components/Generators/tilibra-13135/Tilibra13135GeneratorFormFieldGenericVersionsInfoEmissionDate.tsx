import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormFieldGenericVersionsInfoEmissionDate =
  () => {
    const { control } = useFormContext();

    return (
      <Box sx={{ mt: 1 }}>
        <Controller
          control={control}
          name={'emissionDate'}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              label="Data de Emissão"
              renderInput={(parameters) => (
                <TextField fullWidth {...parameters} />
              )}
              {...field}
            />
          )}
        />
      </Box>
    );
  };
