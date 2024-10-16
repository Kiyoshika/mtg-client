import { Stack, Typography, Link } from '@mui/material';
import './App.css';
import './RoomTable.js';
import RoomTable from './RoomTable.js';

function App() {
  return (
      <div className="App">
        <Stack sx={{ margin: 5 }}>
        <Typography variant="h2">MTG Client</Typography>
        <Typography variant="paragraph">version 0.1.0 - 15 October 2024</Typography>
        <Typography sx={{ marginTop: 5}} variant="h4">Build a Deck</Typography>
        <Typography variant="paragraph">Need to build a deck? Check out the {' '}<Link href="#">Deck Builder</Link>.</Typography>
        <Typography sx={{ marginTop: 5 }} variant="h4">Rooms</Typography>
        <RoomTable/>
        </Stack>
      </div>
  );
}

export default App;
