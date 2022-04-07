import "./App.css";
import SearchContainer from "./container/SearchContainer";
import AppBarContainer from "./container/AppBarContainer";
import { Stack } from "@mui/material";
import DisplayContainer from "./container/DisplayContainer";

function App() {
  return (
    <div className="App">
      <Stack spacing={4} sx={{height: '100vh'}}>
      <AppBarContainer/>
      <SearchContainer />
      <DisplayContainer/> 
    </Stack>
    </div>
  );
}

export default App;

