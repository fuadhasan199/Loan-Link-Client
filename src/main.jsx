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
import AddLoans from './Dashboard/AddLoans.jsx'
import ManageLoan from './Dashboard/ManageLoan.jsx'
import PendingApplication from './Dashboard/PendingApplication.jsx'
import ManageUser from './Dashboard/ManageUser.jsx'
import AllSysytemLoan from './Dashboard/AllSysytemLoan.jsx'
import About from './Extra-Components/About.jsx'
import Contack from './Extra-Components/Contack.jsx'
import Theme from './Extra-Components/Theme.jsx'
import UpdateUser from './Dashboard/UpdateUser.jsx'





 const router=createBrowserRouter([
    
   {
    path:'/',
    element:<Mainlayout></Mainlayout> ,children: [
    
       {
        index:true, 
        element:<Home></Home>,
        
       } , 
       {
          path:'/all-loans',
          element: <AllLoans></AllLoans>,
          
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
            path:'/about',
            element:<About></About>
          }, 
          {
            path:'/contact',
            element:<Contack></Contack>
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
          element:<PrivateRoute> <LoanApplication></LoanApplication>  </PrivateRoute> 
          
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
         } , 
          
        //  Manager Routes

         {
          path:'add-loan',
          element:<AddLoans></AddLoans>
         },
         {
          path:'manage-loan',
          element:<ManageLoan></ManageLoan>
         },
         {
          path:'pending-loan',
          element:<PendingApplication></PendingApplication>
         } , 

        //  admin Routes
         {
           path:'manage-user',
           element:<ManageUser></ManageUser>
         } ,
         { 
          path:'all-system-loan',
          element:<AllSysytemLoan></AllSysytemLoan>
         },
         {
          path:'Update-Users/:id',
          element:<UpdateUser></UpdateUser>
         }
        ]
       } 

 
    ]} 
   
  
 ]) 




createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Theme>

  
    <AuthProvider>
 <RouterProvider router={router} ></RouterProvider>
    </AuthProvider> 
      </Theme>
   
  </StrictMode>,
)
