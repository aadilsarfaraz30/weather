import "./App.css";
import AppBarContainer from "./container/AppBarContainer";
import { Stack, ThemeProvider } from "@mui/material";
import DisplayContainer from "./container/DisplayContainer";
import { theme } from "./styles/style";

function App() {
return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {navigator.geolocation ? 
        <Stack spacing={2.3} sx={{ height: "100vh" }}>
        <AppBarContainer />
        <DisplayContainer />
      </Stack> : alert('Open your GPS')}
      </div>
    </ThemeProvider>
  );
}

export default App;
