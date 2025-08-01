import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.jsx'
import { AdminAuthProvider } from "./context/AdminAuthContext.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminAuthProvider>
        <Router />
    </AdminAuthProvider>
  </StrictMode>,
)
