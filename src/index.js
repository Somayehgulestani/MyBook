import React from "react";
import ReactDom from "react-dom/client";
import "./tailwind.css";
// import { Stars } from "./stars.js";
// import "./index.css";
import { App } from "./myBook.js";
// import { App1 } from "./restaurant.js";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <App1 /> */}
  </React.StrictMode>,
);
