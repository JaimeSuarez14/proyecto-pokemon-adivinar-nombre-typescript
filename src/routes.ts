import { createBrowserRouter } from "react-router";
import App from "./App";
import Login from "./pages/login";

export const router  = createBrowserRouter([
  { 
    path: "/", 
    Component: App, 
    children: [
      {
        index: true,
        Component: Login
      },
      {
        path:"dashboard",
        Component: Login
      }
  ]
  },
])