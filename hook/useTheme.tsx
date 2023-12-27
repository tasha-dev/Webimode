// Importing part
import {useState, useEffect, Dispatch} from "react";

// Defining type of theme
type themeType = 'light' | 'dark';

// Creating and exporting useTheme hook as default
export default function useTheme():[themeType, Dispatch<any>] {
    // Defining state of hook
    const [theme, setTheme]:[themeType, Dispatch<any>] = useState('light');

    // Using useEffect to save theme in local storage
    useEffect(() => {
        const documentElement:HTMLElement = document.documentElement;

        (documentElement.classList.contains('light'))
            ? documentElement.classList.replace('light', 'dark')
            : (documentElement.classList.contains('dark')) 
                ? documentElement.classList.replace('dark', 'light')
                : documentElement.classList.add('dark')
    }, [theme])

    // Returning theme
    return [theme, setTheme];
}