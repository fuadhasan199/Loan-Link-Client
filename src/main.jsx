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
import Dashboard from './Pages/Dashboard.jsx'
import UseAvatar from './Pages/UseAvatar.jsx'





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
          element:<AllLoans></AllLoans>
       }, 
       {
         path:'/dashboard',
         element:<Dashboard></Dashboard>
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
