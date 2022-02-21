import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import * as styles from './Tilibra13135GeneratorForm.module.css';

export const Tilibra13135GeneratorFormFieldGenericVersionsInfoFirstDueDate =
  () => {
    const { control } = useFormContext();

    return (
      <Box className={styles.firstDueDateContainer} sx={{ mt: 1.5 }}>
        <Controller
          control={control}
          name={'versions.firstDueDate'}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              label="Primeiro Vencimento"
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
