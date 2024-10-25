import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import ElementPage from "../pages/ElementPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>
        },
        {
            path: '/element',
            element: <ElementPage></ElementPage>
        }
      ]
    },
  ]);

export default router;