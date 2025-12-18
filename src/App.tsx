import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import TransportPage from './routes/Transport';
import HotelsPage from './routes/Hotels';
import DetailsPage from './routes/Details';
import Home from './routes/Home';
import RootLayout from './routes/RootLayout';
import { Theme } from './styles/Theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
`;

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "transport",
        element: <TransportPage />
      },
      {
        path: "hotels",
        element: <HotelsPage />
      },
      {
        path: "details",
        element: <DetailsPage />
      }
    ]
  }
]);

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={Theme}>
        <RouterProvider router={Routers} />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
