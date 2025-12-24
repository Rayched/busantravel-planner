import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import TransportPage from './routes/Transport';
import HotelsPage from './routes/HotelDetails';
import DailyPlansPage from './routes/DailyPlans';
import Home from './routes/Home';
import RootLayout from './routes/Layouts/RootLayout';
import { Theme } from './styles/Theme';
import PlaceInfoPage from './routes/PlaceInfo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100dvw;
  height: 100dvh;
  font-family: "NotoSans", "NotoSans-KR";
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
        path: "dailyplans",
        element: <DailyPlansPage />
      },
      {
        path: "placeinfos",
        element: <PlaceInfoPage />
      }
    ]
  }
], {
  basename: "/busantravel-planner"
});

function App() {
  return (
    <Wrapper>
      <ThemeProvider theme={Theme}>
        <RouterProvider router={Routers}/>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
