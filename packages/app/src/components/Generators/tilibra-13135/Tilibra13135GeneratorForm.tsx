import { createElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { getDefaultFormData } from './helpers/get-default-form-data';
import { onFormSubmit } from './hooks/onFormSubmit';
import { useAutoSyncComputedVersions } from './hooks/useAutoSyncComputedVersions';
import { ITilibra13135GeneratorFormData } from './interfaces/ITilibra13135GeneratorFormData';
import * as styles from './Tilibra13135GeneratorForm.module.css';
import Tilibra13135GeneratorFormStepper from './Tilibra13135GeneratorFormStepper';

const Tilibra13135GeneratorForm = () => {
  const methods = useForm<ITilibra13135GeneratorFormData>({
    defaultValues: getDefaultFormData(),
    mode: 'all',
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form className={styles.container} onSubmit={handleSubmit(onFormSubmit)}>
        {createElement(useAutoSyncComputedVersions)}
        <Tilibra13135GeneratorFormStepper />
      </form>
    </FormProvider>
  );
};

export default Tilibra13135GeneratorForm;
