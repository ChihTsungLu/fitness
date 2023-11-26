import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ErrorPage from "./Pages/ErrorPage.tsx";
import Trainer from "./Pages/Trainer/Trainer.tsx";
import { ContextProvider } from "./ContextProvider/Contexts.tsx";
import { TrainerProvider } from "./ContextProvider/TrainerContext.tsx";
import { ClientProvider } from "./ContextProvider/ClientContext.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Client from "./Pages/Client/Client.tsx";
import Service from "./Components/Service.tsx";
import Home from "./Pages/Home/Home.tsx";
import Auth from "./features/Auth.tsx";
import ProtectedRoute from "./Components/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/", // Index route for the Home component
    index: true,
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/trainer",
    index:true,
    element: (
      <ProtectedRoute>
        <Trainer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/client",
    element: <Client />,
  },
  {
    path: "/service",
    element: <Service />,
  },


]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <TrainerProvider>
      <ClientProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </ClientProvider>
    </TrainerProvider>
  </ContextProvider>
);
