import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartPage, HomePage, LoginPage, RegisterPage } from "../pages";
import { ProductDetail } from "../components";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage/>,
    },
    {
      path: "/signup",
      element: <RegisterPage />,
    },
    {
      path:"/home",
      element:<HomePage/>
    },
    {
      path:"/cart",
      element:<CartPage/>
    },
    {
      path:"/productdetails",
      element:<ProductDetail/>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
