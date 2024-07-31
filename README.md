# EP-7 : Finding the Path

useEffect with no dependency array it will be called whenever the component renders.

```jsx
useEffect(() => {
  // do task
});
```

useEffect with dependency array is empty : only called in initial render of component

useEffect with dependency array is xx : every time xx changes useEffect will be called.

---

do not create useState variable in if-else , loop , functions.

they should be created only in funx. comp. at the top level.

---

### Routing :

```jsx
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
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
```

Outlet gets filled by matching route of children
