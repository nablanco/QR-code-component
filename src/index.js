import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Component from "./components/Component/Component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="app">
      <Component></Component>
    </div>
  </React.StrictMode>
);
