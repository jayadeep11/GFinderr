import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserDetails from './components/UserDetails.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/userdetails/:username',
    element: <UserDetails />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
