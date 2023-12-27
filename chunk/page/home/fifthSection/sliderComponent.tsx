// Forcing nextJS to render this component as clinet side component
'use client';

// Importing part
import {ReactNode}  from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting slider component as default
export default function SliderComponent():ReactNode {
    // Returning JSX
    return (
        <div data-pressed={false} className="w-[750px] h-[787px] origin-center aspect-square bg-transparent border-[4px] border-white rounded-full relative transition-all duration-500 z-[1] mt-[53px] data-[pressed='false']:cursor-grab data-[pressed='true']:cursor-grabbing">
            <div className="w-[48px] h-[48px] absolute top-[25%] left-[5%] -translate-x-[50%] transition-all duration-500 bg-theme border text-white border-white hover:bg-white hover:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={16} name="calender-clock" />
            </div>
            <div className="w-[56px] h-[56px] absolute top-[10%] left-[10%] transition-all duration-500 bg-theme border text-white border-white hover:bg-white hover:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={24} name="calender-clock" />
            </div>
            <div className="w-[64px] h-[64px] absolute top-0 left-[25%] transition-all duration-500 bg-theme border text-white border-white hover:bg-white hover:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={32} name="calender-clock" />
            </div>
            <div className="w-[74px] h-[74px] absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-500 bg-theme border text-white border-white hover:bg-white hover:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={32} name="calender-clock" />
            </div>
            <div className="w-[48px] h-[48px] absolute top-[25%] right-[5%] translate-x-[50%] transition-all duration-500 bg-theme border text-white border-white hover:bg-white hover:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={16} name="calender-clock" />
            </div>
            <div className="w-[56px] h-[56px] absolute top-[10%] right-[10%] transition-all duration-500 bg-theme border text-white border-white hover:bg-white hover:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={24} name="calender-clock" />
            </div>
            <div className="w-[64px] h-[64px] absolute top-0 right-[25%] transition-all duration-500 bg-theme border text-white border-white hover:bg-white hover:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={32} name="calender-clock" />
            </div>
        </div>
    );
}