import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Trainer from "./Pages/Trainer.tsx";
import { ContextProvider } from "./ContextProvider/Contexts.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Client from "./Pages/Client.tsx";
import Service from "./Pages/Service.tsx";
import Home from "./Pages/Home.tsx";
import Auth from "./Components/Auth.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // Index route for the Home component
        index: true,
        element: <Home />,
      },
      {
        path:"auth",
        element:<Auth/>
      },
      {
        path: "trainer",
        element: <Trainer />,
      },
      {
        path: "client",
        element: <Client />,
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ContextProvider>
);
