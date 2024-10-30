//

import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//
import App from "./App.jsx";
//
import "./main.css";

// ------------------------------------------------

createRoot(document.getElementById("root")).render(
  <Fragment>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/mock-generator/"}>
      <App />
    </BrowserRouter>
  </Fragment>
);
