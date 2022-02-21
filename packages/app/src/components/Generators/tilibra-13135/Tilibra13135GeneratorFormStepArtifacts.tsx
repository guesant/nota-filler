import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Tilibra13135GeneratorFormFieldGenericVersionsInfoEmissionDate } from './Tilibra13135GeneratorFormFieldGenericVersionsInfoEmissionDate';
import { Tilibra13135GeneratorFormStepArtifactsGenerate } from './Tilibra13135GeneratorFormStepArtifactsGenerate';

const Tilibra13135GeneratorFormStepArtifacts = () => (
  <>
    <Typography variant={'h6'}>Concluir</Typography>

    <Tilibra13135GeneratorFormFieldGenericVersionsInfoEmissionDate />

    <Divider />

    <Tilibra13135GeneratorFormStepArtifactsGenerate />
  </>
);

export default Tilibra13135GeneratorFormStepArtifacts;
