import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import VerticalTabs from "./components/Dashboard/dashboard"
import NavBar from "./components/navBar/navBar"
import reportWebVitals from "./reportWebVitals";
import { Authentication } from "./components/authentication/authentication";
import { Dashboard } from "./components/Dashboard/dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar/>
    <VerticalTabs />
    <App />
    <Authentication />
    <Dashboard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
