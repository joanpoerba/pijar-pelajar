import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Login/>
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Login/>
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Login/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
