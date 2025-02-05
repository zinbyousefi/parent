import { createBrowserRouter } from "react-router-dom";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
import Home from "../pages/Home";
import About from "../pages/About";
import Foreign from "../pages/Foreign";
import ProfileLayout from "../layout/ProfileLayout";
import MyAccount from "../pages/MyAccount";
import MyTravels from "../pages/MyTravels";

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
  {
    path: "/profile",
    element: (
      <ProfileLayout>
        <MyAccount />
      </ProfileLayout>
    ),
  },
  {
    path: "/my-account",
    element: (
      <ProfileLayout>
        <MyAccount />
      </ProfileLayout>
    ),
  },
  {
    path: "/my-travels",
    element: (
      <ProfileLayout>
        <MyTravels />
      </ProfileLayout>
    ),
  },
]);
export default router;
