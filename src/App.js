import "./App.css";
import SearchContainer from "./container/SearchContainer";
import AppBarContainer from "./container/AppBarContainer";
import { Stack, ThemeProvider } from "@mui/material";
import DisplayContainer from "./container/DisplayContainer";
import { theme } from "./styles/style";
import { useSelector } from "react-redux";
import LoadingComponent from "./component/LoadingComponent";

function App() {
  const loading = useSelector((state) => state.weatherData.loading);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Stack spacing={2.3} sx={{ height: "100vh" }}>
          <AppBarContainer />
          <DisplayContainer />
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
