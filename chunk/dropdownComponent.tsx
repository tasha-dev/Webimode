// Forcing nextJS to render this component as client side component 
'use client';

// Importing part 
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "./iconComponent";

// Defining type of props
interface propsType {
    children: ReactNode;
    title: string;
    theme: 'dark';
}

// Creating and exporting dropdown component as default
export default function DropdownComponent({children, title, theme}:propsType):ReactNode {
    // Defining state of component
    const [isOpened, setOpened]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
        <div className="shrink-0 relative w-[306px]">
            <button 
                className="flex items-center transition-all duration-500 shadow-lg w-full justify-between data-[theme='dark']:bg-lightestDark border data-[theme='dark']:data-[opened='true']:text-theme data-[theme='dark']:data-[opened='false']:text-lighterGrey data-[theme='dark']:data-[opened='true']:border-theme data-[theme='dark']:data-[opened='false']:border-white/20 gap-[10px] rounded-[16px] p-[16px]" 
                data-theme={theme} 
                data-opened={isOpened}
                onClick={() => setOpened(true)}
                onBlur={() => setOpened(false)}
            >
                <span className="block truncate text-current font-normal text-[16px]">{title}</span>
                <span className="block text-current"><IconComponent size={16} name="chevron-down" /></span>
            </button>
            <div data-theme={theme}  data-opened={isOpened} className="absolute transition-all z-[10] duration-500 data-[opened='true']:visible data-[opened='true']:opacity-100 data-[opened='false']:invisible data-[opened='false']:opacity-0 top-[110%] left-0 py-[10px] data-[theme='dark']:bg-lightestDark border data-[theme='dark']:border-theme w-full rounded-[16px]">
                {children}
            </div>
        </div>
    );
}