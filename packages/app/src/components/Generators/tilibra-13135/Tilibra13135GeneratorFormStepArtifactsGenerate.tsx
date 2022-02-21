import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useFormContext } from 'react-hook-form';

export const Tilibra13135GeneratorFormStepArtifactsGenerate = () => {
  const {
    formState: { isSubmitting, isValid },
  } = useFormContext();

  const canSubmit = isValid && !isSubmitting;

  return (
    <Box>
      <Button
        fullWidth
        variant="contained"
        disabled={!canSubmit}
        type={'submit'}
      >
        Gerar o Arquivo PDF
      </Button>
    </Box>
  );
};
