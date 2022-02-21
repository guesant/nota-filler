import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MobileStepper from '@mui/material/MobileStepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Dispatch, FC, SetStateAction } from 'react';

const ResponsiveStepper: FC<{
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  stepsLabels: string[];

  canContinue: (stepIndex: number) => Promise<boolean>;
}> = ({
  activeStep,
  setActiveStep,
  children,
  stepsLabels: steps,
  canContinue,
}) => {
  const handleNext = async () => {
    if (await canContinue(activeStep)) {
      setActiveStep((previousActiveStep) => previousActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((previousActiveStep) => previousActiveStep - 1);
  };

  const isSmallViewport = useMediaQuery('(max-width:600px)');

  const maxSteps = steps.length;

  const userCanContinue = activeStep !== maxSteps - 1;

  if (isSmallViewport) {
    return (
      <>
        {children}

        <Divider />

        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ display: 'flex', flexDirection: 'row' }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={!userCanContinue}
            >
              Próximo
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Voltar
            </Button>
          }
        />
      </>
    );
  }

  return (
    <>
      {
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mt: 4 }}>
          {steps.map((label) => (
            <Step sx={{ mb: 2 }} key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      }

      <Divider />

      {children}

      <Divider />

      <Box sx={{ display: 'flex', flexDirection: 'row', p: 1 }}>
        <Button
          sx={{ mr: 1 }}
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Voltar
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {activeStep !== steps.length - 1 && (
          <Button onClick={handleNext} disabled={!userCanContinue}>
            Próximo
          </Button>
        )}
      </Box>
    </>
  );
};

export default ResponsiveStepper;
