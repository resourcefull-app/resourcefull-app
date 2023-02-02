import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store, { ContextProvider } from "./Components/ContextApi/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider store={store}>
    <App />
  </ContextProvider>
);
