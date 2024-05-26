import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import IncidentEntryPage from "./assets/IncidentEntryPage";
import IncidentListPage from "./assets/IncidentListPage.jsx";
import IncidentList from "./assets/IncidentList.jsx";
import IncidentRegistrationPage from "./assets/IncidentRegistrationPage.jsx";
import IncidentAttend from "./assets/IncidentAttend.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "incident-entry",
    element: <IncidentEntryPage />,
  },
  {
    path: "incident-list",
    element: <IncidentListPage />,
  },
  {
    path: "incident-list-filtered",
    element: <IncidentList />,
  },
  {
    path: "incident-register-attention",
    element: <IncidentRegistrationPage />,
  },
  {
    path: "incident-attended",
    element: <IncidentAttend />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
