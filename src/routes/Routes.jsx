import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import ElementPage from "../pages/ElementPage";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";
import AboutUsPage from "../pages/AboutUsPage";
import Slider1 from "../components/Slider1";
import ContactUs from "../pages/ContactUs";

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
            element: <AboutUsPage></AboutUsPage>,
            children: [
              {
                path: '/about-us',
                element: <Slider1 name={`“ Millions of combinations, meaning you get a totally unique piece of furniture exactly the way you want it.”`}></Slider1>
              },
              {
                path: '/about-us/grand',
                element: <Slider1 name={`“ Great tags, Millie has got used to it, nothing like the old tin tags of years gone by. Light weight and great colours available.”`}></Slider1>
              },
              {
                path: '/about-us/perker',
                element: <Slider1 name={`“ Amazing product. The results are so transformative in texture and my face feels plump and healthy. Highly recommend! “`}></Slider1>
              },
              {
                path: '/about-us/beast',
                element: <Slider1 name={`“ Millions of combinations, meaning you get a totally unique piece of furniture exactly the way you want it.”`}></Slider1>
              },
              {
                path: '/about-us/heyden',
                element: <Slider1 name={`“ Great tags, Millie has got used to it, nothing like the old tin tags of years gone by. Light weight and great colours available.”`}></Slider1>
              },
              {
                path: '/about-us/good-mood',
                element: <Slider1 name={`“ Amazing product. The results are so transformative in texture and my face feels plump and healthy. Highly recommend! “`}></Slider1>
              }
            ]
        },
        {
          path: '/contact',
          element: <ContactUs></ContactUs>
        }
      ]
    },
  ]);

export default router;