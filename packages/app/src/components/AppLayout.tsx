import Box from '@mui/material/Box';
import { FC, Suspense } from 'react';
import * as styles from '../App.module.css';
import AppHeader from './AppHeader';
import AppProviders from './AppProviders';
import Loading from './Loading';

const AppLayout: FC = ({ children }) => (
  <AppProviders>
    <Box className={styles.app}>
      <AppHeader />
      <Box sx={{ flex: 1, height: '100%', overflow: 'auto' }}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </Box>
    </Box>
  </AppProviders>
);

export default AppLayout;
