import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Course from "./pages/course";
import Career from "./pages/career";

const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Login />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <Login />,
  },
  {
    path: "/career",
    element: <Career />,
    errorElement: <Login />,
  },
  {
    path: "/course",
    element: <Course />,
    errorElement: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
