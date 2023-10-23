import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './ErrorPage.tsx'
import Trainer from './Pages/Trainer.tsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Client from './Pages/Client.tsx'
import Service from './Pages/Service.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "trainer",
    element: <Trainer/>
  },
  {
    path: "client",
    element: <Client/>
  },
  {
    path: "service",
    element: <Service/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
