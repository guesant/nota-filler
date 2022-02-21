import DatePicker from '@mui/lab/DatePicker';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Fragment } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import * as styles from './Tilibra13135GeneratorForm.module.css';

export const Tilibra13135GeneratorFormComputedVersions = () => {
  const { watch, control, register } = useFormContext();

  const quantity = Number(watch('versions.quantity', 1));

  const computedVersions = watch('computedVersions') as any[];

  return (
    <>
      <Box sx={{ mt: 1 }}>
        {quantity <= 0 && (
          <>
            <Alert severity={'warning'}>
              Por favor, indique ao menos 1 versão.
            </Alert>
          </>
        )}

        {quantity > 0 && (
          <>
            <div className={styles.versions}>
              {computedVersions.map((_, idx) => (
                <Fragment key={idx}>
                  <fieldset>
                    <legend>Nota {idx + 1}</legend>

                    <div className={styles.item}>
                      <Box>
                        <FormControl fullWidth variant="filled">
                          <InputLabel>Valor</InputLabel>
                          <FilledInput
                            required
                            type="number"
                            inputProps={{ min: 0 }}
                            {...register(`computedVersions.${idx}.value`, {
                              required: true,
                            })}
                            startAdornment={
                              <InputAdornment position="start">
                                R$
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Box>

                      <Box>
                        <Controller
                          name={`computedVersions.${idx}.dueDate`}
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <DatePicker
                              label="Data do Vencimento"
                              renderInput={(parameters) => (
                                <TextField fullWidth {...parameters} />
                              )}
                              {...field}
                            />
                          )}
                        />
                      </Box>
                    </div>
                  </fieldset>
                </Fragment>
              ))}
            </div>
          </>
        )}
      </Box>
    </>
  );
};
