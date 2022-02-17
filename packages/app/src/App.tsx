import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CssBaseline from "@mui/material/CssBaseline";
import dateFNSLocalePTBR from "date-fns/locale/pt-BR";

const App = () => (
  <CssBaseline>
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      locale={dateFNSLocalePTBR}
    >
    </LocalizationProvider>
  </CssBaseline>
);

export default App;
