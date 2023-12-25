// Importing part
import {useState, useEffect, Dispatch} from "react";

// Defining type of theme
type themeType = 'light' | 'dark';

// Creating and exporting useTheme hook as default
export default function useTheme():[themeType, Dispatch<any>] {
    // Defining state of hook
    const [theme, setTheme]:[themeType, Dispatch<any>] = useState('light');

    // Using useEffect hook to check if theme is set in local storage
    useEffect(() => {
        const localStorageTheme:string|null = localStorage.getItem('theme');

        if (localStorageTheme !== null) {
            setTheme(localStorageTheme);
        }
    }, [])

    // Using useEffect to save theme in local storage
    useEffect(() => {
        localStorage.setItem('theme', theme);

        (theme === 'dark')
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
        
    }, [theme])

    // Returning theme
    return [theme, setTheme];
}