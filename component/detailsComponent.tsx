// Forcing nextJS to render this component as client side component
'use client';

// Importig part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    children: ReactNode;
    title: string;
    isOpened?: boolean;
}

// Creating and exporting details component as default
export default function DetailsComponent({children, title, isOpened = false}:propsType):ReactNode {
    // Defining state of component
    const [isOpenedState, setOpenedState]:[boolean, Dispatch<boolean>] = useState(isOpened);

    // Returning JSX
    return (
        <div data-opened={isOpenedState} className="transition-all overflow-hidden duration-500 ease-in-out border rounded-[16px] shadow-custom data-[opened='true']:bg-theme data-[opened='false']:bg-white data-[opened='false']:border-lightGrey data-[opened='true']:border-theme data-[opened='false']:h-[60px] data-[opened='true']:lg:h-auto data-[opened='true']:h-[180px]">
            <button 
                onClick={() => (isOpenedState) ? setOpenedState(false) : setOpenedState(true)} 
                data-opened={isOpenedState} 
                className="transition-all duration-500 flex items-center justify-between w-full gap-[10px] p-[16px] h-[60px] data-[opened='false']:text-lightGrey data-[opened='true']:text-white"
            >
                <div className="flex items-center justify-start gap-[12px] w-[75%]">
                    <div className="w-[16px] h-[16px] rounded-full bg-current aspect-square shrink-0" />
                    <span className="text-[16px] font-normal block truncate text-current w-full text-start">{title}</span>
                </div>
                <span data-opened={isOpenedState} className="transitiona-all duration-500 data-[opened='true']:rotate-180 data-[opened='false']:rotate-0  shrink-0">
                    <IconComponent size={24} name="chevron-bottom-circle" />
                </span>
            </button>
            <div className="h-full lg:overflow-hidden overflow-auto">
                <div className="h-[2px] w-full mx-[16px] bg-gradient-to-r sticky top-0 from-transparent to-transparent via-white mb-[16px]" />
                <div data-opened={isOpenedState} className="transitiona-all duration-500 pb-[16px] px-[16px] [&>p]:text-[16px] [&>p]:font-normal [&>p]:data-[opened='false']:text-lightGrey [&>p]:data-[opened='true']:text-white [&>p]:leading-[32px] data-[opened='false']:scale-110 data-[opened='true']:scale-100">
                    {children}
                </div>
            </div>
        </div>
    );
}