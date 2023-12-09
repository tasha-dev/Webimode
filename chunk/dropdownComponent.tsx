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
                className="flex items-center w-full justify-between bg-white/10 border border-white/30 gap-[10px] rounded-[16px] p-[16px]" 
                data-theme={theme} 
                onClick={() => (isOpened) ? setOpened(false) : setOpened(true)}
            >
                <span className="block shrink-0 text-lighterGrey font-normal text-[16px]">{title}</span>
                <span className="block text-lightGrey"><IconComponent size={16} name="chevron-down" /></span>
            </button>
            <div data-opened={isOpened} className="absolute transition-all duration-500 data-[opened='true']:visible data-[opened='true']:opacity-100 data-[opened='false']:invisible data-[opened='false']:opacity-0 top-[110%] left-0 py-[16px] bg-white/10 border border-white/30 w-full rounded-[16px]">
                {children}
            </div>
        </div>
    );
}