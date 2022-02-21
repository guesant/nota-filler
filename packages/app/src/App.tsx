import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';

const Tilibra13135Generator = lazy(
  async () =>
    import('./components/Generators/tilibra-13135/Tilibra13135Generator')
);

const App = () => (
  <AppLayout>
    <Routes>
      <Route path={'generators'}>
        <Route path={'tilibra'}>
          <Route path={'13135'} element={<Tilibra13135Generator />} />
          <Route path={''} element={<Navigate to={'13135'} />} />
        </Route>
        <Route path={''} element={<Navigate to={'tilibra/13135'} />} />
      </Route>
      <Route path={'*'} element={<Navigate to={'generators'} />} />
    </Routes>
  </AppLayout>
);

export default App;
