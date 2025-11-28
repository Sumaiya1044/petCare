import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Profile from "../pages/Profile";
import PrivateRoute from "../route/PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },
      { path: "/forget-password", element: <ForgetPassword /> }, 
      { path: "/profile", element: <PrivateRoute><Profile /></PrivateRoute> },
      { path: "/details/:id", element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute> },
      {
        path: "/*",
        element: <h2>Error 404</h2>,
      },

    ]
  }
]);

export default router;
