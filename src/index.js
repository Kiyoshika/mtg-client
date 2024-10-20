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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);