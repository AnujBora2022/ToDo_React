import React from "react";
import Navbar from "./components/Navbar";
import YourTasks from "./components/YourTasks";
import App from "./App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function AppFinal() {
  
  // const router = createBrowserRouter([
  //   {path:"/",
  //     element:<Navbar/>
  //   },
  //   {
  //     path:"/",
  //     element:<App/>
  //   },
  //   {
  //     path:"/YourTasks",
  //     element:<YourTasks/>
  //   },
  // ])
  return(
    <>
      <Navbar/>
      
      <App/>
      
    </>
  )
}