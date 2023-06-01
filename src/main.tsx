import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routing/routes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* updating App component by RouterProvider this is to manage all routes into our page*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);
