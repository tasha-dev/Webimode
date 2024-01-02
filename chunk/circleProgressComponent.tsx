// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    percentage: number;
    theme: 'orange'|'blue'|'green'|'theme';
    size?: number | 'full';
}

// Creating and exporting circle progress bar as default
export default function CircleProgressComponent({percentage, theme, size = 40}:propsType):ReactNode {
    // Returning JSX
    return (
        <div 
            data-size={size} 
            className="aspect-square data-[size='40']:lg:w-[40%] data-[size='40']:sm:w-[30%] data-[size='40']:w-[35%] data-[size='full']:w-full rounded-full shadow-xl relative p-[5px] flex bg-lightGrey"
        >
            <div 
                className="rounded-full absolute w-full h-full z-[1] top-0 left-0" 
                style={{background: `conic-gradient(${
                    (theme === 'blue') 
                        ? '#2B96CC' 
                        : (theme === 'green') 
                            ? '#93AF40' 
                                : (theme === 'orange') 
                                    ? '#FCAA0B' 
                                    : '#49B486'
                    } ${percentage}%, #BBBBBB 0)`
                }} 
            />
            <div className="h-full w-full bg-white rounded-full flex items-center justify-center z-[2]">
                <span data-size={size} data-theme={theme} className="data-[theme='orange']:text-lightOrange data-[theme='blue']:text-themeBlue data-[theme='green']:text-lightGreen data-[size='40']:text-[30px] data-[size='full']:xl:text-[30px] data-[size='full']:sm:text-[20px] data-[size='full']:text-[15px] font-bold">
                    {percentage}%
                </span>
            </div>
        </div>
    );
}