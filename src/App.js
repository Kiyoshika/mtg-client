import { createTheme, CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
import './App.css';
import './RoomTable.js';
import RoomTable from './RoomTable.js';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <div className="App">
          <Stack sx={{ margin: 5 }}>
          <Typography variant="h2">MTG Client</Typography>
          <Typography variant="paragraph">version 0.1.0 - 15 October 2024</Typography>
          <RoomTable/>
          </Stack>
        </div>
    </ThemeProvider>
  );
}

export default App;
