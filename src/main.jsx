import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Contex from "./Utils/Contex.jsx";
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById("root")).render(
  <Contex>
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
  </Contex>
);
