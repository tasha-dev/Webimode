// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    percentage: number;
    theme: 'orange'|'blue'|'green';
}

// Creating and exporting circle progress bar as default
export default function CircleProgressComponent({percentage, theme}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="aspect-square lg:w-[40%] w-[30%] rounded-full shadow-xl relative p-[5px] flex bg-lightGrey">
            <div className="rounded-full absolute w-full h-full z-[1] top-0 left-0" style={{background: `conic-gradient(${(theme === 'blue') ? '#2B96CC' : (theme === 'green') ? '#93AF40' : (theme === 'orange') ? '#FCAA0B' : ''} ${percentage}%, #BBBBBB 0)`}} />
            <div className="h-full w-full bg-white rounded-full flex items-center justify-center z-[2]">
                <span data-theme={theme} className="data-[theme='orange']:text-lightOrange data-[theme='blue']:text-themeBlue data-[theme='green']:text-lightGreen text-[30px] font-bold">
                    {percentage}%
                </span>
            </div>
        </div>
    );
}