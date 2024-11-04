import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import BlogPage from "../pages/BlogPage";
import AboutUsPage from "../pages/AboutUsPage";
import Slider1 from "../components/Slider1";
import ContactUs from "../pages/ContactUs";
import GalaryPage from "../pages/GalaryPage";
import FeaturedProductsDetails from "../pages/FeaturedProductsDetails";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import OurTeam from "../pages/OurTeam";
import BestSelling from "../pages/BestSelling";
import Video from "../pages/Video";
import TopSaverDetails from "../pages/TopSaverDetails";




const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>
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
        },
        {
          path: '/galary',
          element: <GalaryPage></GalaryPage>
        },
        {
          path: '/featured-products/:id',
          element: <PrivateRoute><FeaturedProductsDetails></FeaturedProductsDetails></PrivateRoute>,
          loader: ({params})=> fetch(`https://glowing-cosmetics-shop-server.vercel.app/featured-products/${params.id}`),
        },{
          path:'/video',
          element: <Video></Video>
        },{
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/our-team',
          element: <OurTeam></OurTeam>
        },
        {
          path: '/best-selling',
          element: <BestSelling></BestSelling>
        },
        {
          path: '/top-savers/:id',
          element: <PrivateRoute><TopSaverDetails></TopSaverDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/top-savers/${params.id}`),
        }
       
        
      ]
    },
  ]);

export default router;