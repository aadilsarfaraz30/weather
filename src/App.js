import "./App.css";
import SearchContainer from "./container/SearchContainer";
import AppBarContainer from "./container/AppBarContainer";
import { Stack, ThemeProvider } from "@mui/material";
import DisplayContainer from "./container/DisplayContainer";
import { theme } from "./styles/style";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Stack spacing={4} sx={{height: '100vh'}}>
      <AppBarContainer/>
      <SearchContainer />
      <DisplayContainer/> 
    </Stack>
    </div>
    </ThemeProvider>
  );
}

export default App;

