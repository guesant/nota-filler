import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CssBaseline from '@mui/material/CssBaseline';
import dateFNSLocalePTBR from 'date-fns/locale/pt-BR';
import { FC } from 'react';

const AppProviders: FC = ({ children }) => (
  <>
    <LocalizationProvider
      locale={dateFNSLocalePTBR}
      dateAdapter={AdapterDateFns}
    >
      <CssBaseline />
      {children}
    </LocalizationProvider>
  </>
);

export default AppProviders;
