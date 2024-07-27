console.log("Hii");
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  {
    id: "h1-tag",
  },
  "Hello World"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "h1-tag-2",
  },
  "Hello World 2 "
);

const container = React.createElement("div", {}, [heading, heading2]);

root.render(container);
