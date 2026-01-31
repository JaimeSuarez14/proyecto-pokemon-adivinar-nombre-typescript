
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router"
import { router } from "./routes.ts"

createRoot(document.getElementById('root')!).render(
  <RouterProvider  router={router} />
)
