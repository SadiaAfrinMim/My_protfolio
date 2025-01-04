import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Router/Router";





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <div className="w-11/12 mx-auto space-y-8">
   <RouterProvider router={router} />
   </div>

  </React.StrictMode>
);
