import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Router/Router";
import { Toaster } from "react-hot-toast";





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Toaster position="top-right"></Toaster>
   <RouterProvider router={router} />
 

  </React.StrictMode>
);
