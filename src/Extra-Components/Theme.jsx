import React, { createContext, useEffect, useState } from 'react';
 



 export const ThemeContext=createContext()
const Theme = ({children}) => { 
   const [theme,setTheme]=useState("light") 

    useEffect(()=>{
         const saveTheme=localStorage.getItem('theme') 
         if(saveTheme){
            setTheme(saveTheme)
            document.documentElement.setAttribute('data-theme',saveTheme)
         }
    },[]) 


    useEffect(()=>{
     document.documentElement.setAttribute('data-theme',theme)
      localStorage.setItem('theme',theme)
    },[theme])


    return (
         <ThemeContext value={{theme,setTheme}}>{children}</ThemeContext>
    );
};

export default Theme;