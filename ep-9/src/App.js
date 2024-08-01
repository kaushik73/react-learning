// ## Namaste React Course by Akshay Saini
// Chapter 05 - Let's get Hooked!

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantDetail from "./Components/RestaurantDetail";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
