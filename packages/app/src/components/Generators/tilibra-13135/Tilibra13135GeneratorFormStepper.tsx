import Box from '@mui/material/Box';
import { Fragment, useState } from 'react';
import ResponsiveStepper from '../../ResponsiveStepper';
import { stepsLabels } from './consts/steps-labels';
import { StepsComponents } from './hooks/StepsComponents';
import { useStepCanContinue } from './hooks/useStepCanContinue';
import * as styles from './Tilibra13135GeneratorForm.module.css';

const Tilibra13135GeneratorFormStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const canContinue = useStepCanContinue();

  return (
    <ResponsiveStepper
      canContinue={canContinue}
      activeStep={activeStep}
      stepsLabels={stepsLabels}
      setActiveStep={setActiveStep}
    >
      <div className={styles.fields}>
        {StepsComponents.map(([stepKey, Component]) => {
          const comp = <Component />;
          return (
            <Fragment key={stepKey}>
              {activeStep === stepKey ? (
                <>{comp}</>
              ) : (
                <Box sx={{ display: 'none' }}>{comp}</Box>
              )}
            </Fragment>
          );
        })}
      </div>
    </ResponsiveStepper>
  );
};

export default Tilibra13135GeneratorFormStepper;
