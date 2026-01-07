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
import ViewDetails from './Extra-Components/ViewDetails.jsx'
import LoanApplication from './Extra-Components/LoanApplication.jsx'
import MyLoan from './Dashboard/MyLoan.jsx'
import Profile from './Dashboard/Profile.jsx'





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
         path:'/details/:id',
         element: <PrivateRoute> <ViewDetails></ViewDetails> </PrivateRoute>  ,
         loader:({params})=>fetch(`http://localhost:3000/availableloan/${params.id}`)
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
          path:'/apply-loan',
          element:<LoanApplication></LoanApplication> 
        },
       {
        path:'/dashboard',
        element:<PrivateRoute> <Dashboard></Dashboard>  </PrivateRoute>,
        children:[
          {
             path:'my-loan',
             element:<MyLoan></MyLoan>
          } , 
          { 

      
          path:'profile',
          element:<Profile></Profile>    
         }
        ]
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
