import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import TransportPage from './routes/Transport';
import HotelsPage from './routes/Hotels';
import DetailsPage from './routes/Details';
import Layout from './routes/Layout';
import Home from './routes/Home';

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
    element: <Layout />,
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
      <RouterProvider router={Routers} />
    </Wrapper>
  );
}

export default App;
