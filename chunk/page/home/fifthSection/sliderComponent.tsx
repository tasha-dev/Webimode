// Forcing nextJS to render this component as clinet side component
'use client';

// Defining type of props
interface propsTYpe {
    activeStep: number;
    setActiveStep: Dispatch<any>;
}

// Importing part
import {Dispatch, ReactNode, useEffect, useState}  from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting slider component as default
export default function SliderComponent({activeStep, setActiveStep}:propsTYpe):ReactNode {
    // Defining state of componenet
    const [rotation, setRotation]:[number, Dispatch<any>] = useState(0);

    // Using useEffect hook to set active step automatically
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevActiveStep:number) => {
                if (prevActiveStep + 1 <= 7) {
                  return prevActiveStep + 1;
                } else {
                  return 1;
                }
              });
        }, 6000);

        return () => clearInterval(interval);
    }, [])

    // Using useEffect hook to set rotation based on activeStep
    useEffect(() => {
        if (activeStep === 1) {setRotation(63)}
        else if (activeStep === 2) {setRotation(43.5)}
        else if (activeStep === 3) {setRotation(23.5)}
        else if (activeStep === 4) {setRotation(0)}
        else if (activeStep === 5) {setRotation(-23.5)}
        else if (activeStep === 6) {setRotation(-43.5)}
        else if (activeStep === 7) {setRotation(-63)}
    }, [activeStep])

    // Returning JSX
    return (
        <div
            style={{transform: `rotate(${rotation}deg)`}}
            className="w-[750px] h-[750px] origin-center aspect-square border-[4px] border-white rounded-full transition-all duration-500 bg-transparent relative z-[1] mt-[53px]"
        >
            <div data-active={(activeStep === 1)} className="w-[48px] h-[48px] absolute z-[3] top-[25%] left-[5%] -translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={16} name="shield-check" />
            </div>
            <div data-active={(activeStep === 2)} className="w-[56px] h-[56px] absolute z-[3] top-[10%] left-[10%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={24} name="file-search" />
            </div>
            <div data-active={(activeStep === 3)} className="w-[64px] h-[64px] absolute z-[3] top-0 left-[25%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={32} name="file-write" />
            </div>
            <div data-active={(activeStep === 4)} className="w-[74px] h-[74px] absolute z-[3] top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={32} name="calender-clock" />
            </div>
            <div data-active={(activeStep === 5)} className="w-[64px] h-[64px] absolute z-[3] top-0 right-[25%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={32} name="list-right" />
            </div>
            <div data-active={(activeStep === 6)} className="w-[56px] h-[56px] absolute z-[3] top-[10%] right-[10%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={24} name="browser" />
            </div>
            <div data-active={(activeStep === 7)} className="w-[48px] h-[48px] absolute z-[3] top-[25%] right-[5%] translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={16} name="headphone" />
            </div>
            <div className="w-[48px] h-[48px] absolute z-[3] top-[40%] right-0 translate-x-[50%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={16} name="headphone" />
            </div>
            <div className="w-[48px] h-[48px] absolute z-[3] top-[55%] right-0 translate-x-[50%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={16} name="headphone" />
            </div>
            <div className="w-[48px] h-[48px] absolute z-[3] top-[40%] left-0 -translate-x-[50%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={16} name="headphone" />
            </div>
            <div className="w-[48px] h-[48px] absolute z-[3] top-[55%] left-0 -translate-x-[50%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={16} name="headphone" />
            </div>
            <div className="w-[48px] h-[48px] absolute z-[3] bottom-[25%] left-[5%] -translate-x-[50%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={16} name="shield-check" />
            </div>
            <div className="w-[56px] h-[56px] absolute z-[3] bottom-[10%] left-[10%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={24} name="file-search" />
            </div>
            <div className="w-[64px] h-[64px] absolute z-[3] bottom-0 left-[25%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={32} name="file-write" />
            </div>
            <div className="w-[74px] h-[74px] absolute z-[3] bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={32} name="calender-clock" />
            </div>
            <div className="w-[64px] h-[64px] absolute z-[3] bottom-0 right-[25%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={32} name="list-right" />
            </div>
            <div className="w-[56px] h-[56px] absolute z-[3] bottom-[10%] right-[10%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={24} name="browser" />
            </div>
            <div className="w-[48px] h-[48px] absolute z-[3] bottom-[25%] right-[5%] translate-x-[50%] transition-all duration-500 bg-theme border text-white border-white rounded-full flex items-center justify-center">
                <IconComponent size={16} name="headphone" />
            </div>
        </div>
    );
}