import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router' 
import Mainlayout from './Layout/Mainlayout.jsx'
import Register from './Sign/Register.jsx'
import Home from './Pages/Home.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'
import LogIn from './Sign/LogIn.jsx'
import AllLoans from './Pages/AllLoans.jsx'

import UseAvatar from './Pages/UseAvatar.jsx'
import PrivateRoute from './Auth/PrivateRoute.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'





 const router=createBrowserRouter([
    
   {
    path:'/',
    element:<Mainlayout></Mainlayout> ,children: [
    
       {
        index:true, 
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:3000/availableloan')
       } , 
       {
          path:'/all-loans',
          element: <AllLoans></AllLoans>,
           loader:()=>fetch('http://localhost:3000/availableloan')
       }, 
     
       {
         path:'/use-avatar',
         element:<UseAvatar></UseAvatar>
       },


       {
        path:'/register',
        element:<Register></Register>
       }, 
       
       {
        path:'/login',
        element:<LogIn></LogIn> 
       },
       {
        path:'/dashboard',
        element:<PrivateRoute> <Dashboard></Dashboard>  </PrivateRoute>
       } 

 
    ]} 
   
  
 ]) 




createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <AuthProvider>
 <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
   
  </StrictMode>,
)
