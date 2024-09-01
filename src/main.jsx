import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppFinal from './App.jsx'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx';

const router = createBrowserRouter([
  {path:"/",
    element:<>
      <Navbar />
      <App/>
    </>
  },
  
  {
    path:"/YourTasks",
    element:<>
      <Navbar/>
    </>
  },
])

createRoot(document.getElementById('root')).render(
  
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>, 
)
