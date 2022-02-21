import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { version } from '../../package.json';

const AppHeader = () => (
  <>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} noWrap>
          Preenchedor de Notas Promissórias
        </Typography>
        <Typography component="div" noWrap>
          <span>v{version}</span>
        </Typography>
      </Toolbar>
    </AppBar>
  </>
);

export default AppHeader;
