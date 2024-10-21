import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CreateRoom from './CreateRoom';
import DeckBuilder from './DeckBuilder';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import PlayerTable from './PlayerTable';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/createRoom",
    element: <CreateRoom/>
  },
  {
    path: "/deckBuilder",
    element: <DeckBuilder/>
  },
  {
    path: "/roomTest",
    element: <PlayerTable/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </DndProvider>
  </React.StrictMode>
);