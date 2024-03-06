import Hrader1 from "./components/header/header1";
import Hrader2 from "./components/header/header2";
import Lastheader from "./components/header/lastheader";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext,useMode } from "./them";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Hrader1/>
        <Hrader2/>
        <Lastheader/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
