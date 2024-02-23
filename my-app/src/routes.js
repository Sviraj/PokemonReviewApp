import React from "react";
import { useRoutes } from "react-router-dom";
import GangAddEdit from "./pages/GangAddEdit";
import GangListing from "./pages/GangListing";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Loader from "./pages/Loader";

export default function Router(){

    const routes = useRoutes([
        {
            path: '/dashboard',
            //element: <DashboardLayout />,
            children: [
              { path: 'app', element: <GangAddEdit /> },
              { path: 'user', element: <GangListing /> },
              { path: 'donate', element: <Home /> }
            //   { path: 'shopingCart', element: <ShopingCartPage/>},
            //   { path: 'blog', element: <BlogPage /> },
            //   { path: 'profilePage', element: <ProfilePage /> },
            //   { path: 'donationRequestAdd', element: <DonationRequestAdd /> },
            //   { path: 'about', element: <AboutPage /> }
            ],
          },
        //   {
        //     path: 'login',
        //     element: <LoginForm/>,
        //   },
          {
            path: '/',
            element: <Login />,
          },
          {
            path: 'registration',
            element: <Registration />,
          },
          {
            path: 'loader',
            element: <Loader/>
          }
    ]);

    return routes;


}