import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CreateRoom from './CreateRoom';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/createRoom",
    element: <CreateRoom/>
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