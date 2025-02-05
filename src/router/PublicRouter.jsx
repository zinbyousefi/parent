import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Foreign from "../pages/Foreign";
import ProfileLayout from "../layout/ProfileLayout";
import MyAccount from "../pages/MyAccount";
import MyOrders from "../pages/MyOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
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
    path: "/my-orders",
    element: (
      <ProfileLayout>
        <MyOrders />
      </ProfileLayout>
    ),
  },
]);
export default router;
