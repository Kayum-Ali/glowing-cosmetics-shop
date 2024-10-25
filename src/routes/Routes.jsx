import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import ElementPage from "../pages/ElementPage";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";
import AboutUsPage from "../pages/AboutUsPage";

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
        },
        {
            path: '/shop',
            element: <ShopPage></ShopPage>
        },
        {
            path: '/blog',
            element: <BlogPage></BlogPage>
        },
        {
            path: '/about-us',
            element: <AboutUsPage></AboutUsPage>
        }
      ]
    },
  ]);

export default router;