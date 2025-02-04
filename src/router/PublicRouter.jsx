import { createBrowserRouter } from "react-router-dom";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
import Home from "../pages/Home";
import About from "../pages/About";
import Foreign from "../pages/Foreign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/foreign",
    element: <Foreign />,
  },
]);
export default router;
