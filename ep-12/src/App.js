// ## Namaste React Course by Akshay Saini
// Chapter 05 - Let's get Hooked!

import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantDetail from "./Components/RestaurantDetail";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/AppStore";
import Cart from "./Components/Cart";
const AppLayout = () => {
  const [userName, setUserName] = useState("Default User");
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ userName: userName, setUserName }}>
          <Header />
          <Outlet />
          <UserContext.Provider
            value={{ userName: "FooterContext - " + userName, setUserName }}
          >
            <Footer />
          </UserContext.Provider>
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const Grocery = lazy(() => import("./Components/Grocery"));
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Grocery />
          </Suspense>
        ),
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
