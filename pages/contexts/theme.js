'use client';

import { createContext, useEffect, useState } from "react"
// 1.1 create the context
export const ThemeContext = createContext();

// 1.2 create the context wrapper (provider)
export default function ThemeWrapper({children}){

    const [isDarkTheme, setIsDarkTheme] = useState(true);

    function initialThemeHandle(){
        // take the initial value
        isDarkTheme && document.querySelector("body").classList.add("dark"); // add dark class to the body element
    }
    
    function toggleThemeHandler() {
        setIsDarkTheme(!isDarkTheme);
        document.querySelector("body").classList.toggle("dark"); // add dark class to the body element
    }
    
    const globalState = {
        isDarkTheme: true,
        toggleThemeHandler
    }

    useEffect(()=>initialThemeHandle());

    return(
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    )

}