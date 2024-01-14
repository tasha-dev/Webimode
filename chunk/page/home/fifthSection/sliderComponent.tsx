// Forcing nextJS to render this component as clinet side component
'use client';

// Defining type of props
interface propsType {
    activeStep: number;
    setActiveStep: Dispatch<any>;
}

// Importing part
import {Dispatch, ReactNode, useEffect, useState}  from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting slider component as default
export default function SliderComponent({activeStep, setActiveStep}:propsType):ReactNode {
    // Defining state of componenet
    const [rotation, setRotation]:[number, Dispatch<any>] = useState(0);

    // Using useEffect hook to set active step automatically
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prevActiveStep:number) => {
                if (prevActiveStep + 1 <= 18) {
                  return prevActiveStep + 1;
                } else {
                  return 4;
                }
              });
        }, 6000);

        return () => clearInterval(interval);
    }, [])

    // Using useEffect hook to set rotation based on activeStep
    useEffect(() => {
        if (activeStep === 1) {setRotation(64)}
        else if (activeStep === 2) {setRotation(43.5)}
        else if (activeStep === 3) {setRotation(23.5)}
        else if (activeStep === 4) {setRotation(0)}
        else if (activeStep === 5) {setRotation(-23.5)}
        else if (activeStep === 6) {setRotation(-43.5)}
        else if (activeStep === 7) {setRotation(-64)}
        else if (activeStep === 8) {setRotation(-82)}
        else if (activeStep === 9) {setRotation(-99)}
        else if (activeStep === 10) {setRotation(-116)}
        else if (activeStep === 11) {setRotation(-135)}
        else if (activeStep === 12) {setRotation(-156)}
        else if (activeStep === 13) {setRotation(-180)}
        else if (activeStep === 14) {setRotation(-205)}
        else if (activeStep === 15) {setRotation(-225)}
        else if (activeStep === 16) {setRotation(-244)}
        else if (activeStep === 17) {setRotation(-260)}
        else if (activeStep === 18) {setRotation(-277)}

        console.log(activeStep);
        
    }, [activeStep])

    // Returning JSX
    return (
        <div
            onClick={() => {
                setActiveStep((prevActiveStep: number) => {
                    if (prevActiveStep + 1 <= 18) {
                        return prevActiveStep + 1;
                    } else {
                        return 1;
                    }
                });
            }}
            style={{transform: `rotate(${rotation}deg)`}}
            className="w-[750px] h-[750px] origin-center aspect-square border-[4px] border-white rounded-full transition-all duration-500 bg-transparent relative z-[1] mt-[53px]"
        >
            <div 
                data-count={1}
                data-active={(activeStep === 1)} 
                className="w-[48px] h-[48px] absolute z-[3] top-[25%] left-[5%] -translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={16} name="shield-check" />
            </div>
            <div 
                data-count={2}
                data-active={(activeStep === 2)} 
                className="w-[56px] h-[56px] absolute z-[3] top-[10%] left-[10%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={24} name="file-search" />
            </div>
            <div 
                data-count={3}
                data-active={(activeStep === 3)} 
                className="w-[64px] h-[64px] absolute z-[3] top-0 left-[25%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={32} name="file-write" />
            </div>
            <div 
                data-count={4}
                data-active={(activeStep === 4)} 
                className="w-[74px] h-[74px] absolute z-[3] top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={32} name="calender-clock" />
            </div>
            <div 
                data-count={5}
                data-active={(activeStep === 5)} 
                className="w-[64px] h-[64px] absolute z-[3] top-0 right-[25%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={32} name="list-right" />
            </div>
            <div 
                data-count={6}
                data-active={(activeStep === 6)} 
                className="w-[56px] h-[56px] absolute z-[3] top-[10%] right-[10%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={24} name="browser" />
            </div>
            <div 
                data-count={7}
                data-active={(activeStep === 7)} 
                className="w-[48px] h-[48px] absolute z-[3] top-[25%] right-[5%] translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={16} name="headphone" />
            </div>
            <div 
                data-count={8}
                data-active={(activeStep === 8)} 
                className="w-[48px] h-[48px] absolute z-[3] top-[40%] right-0 translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={16} name="headphone" />
            </div>
            <div 
                data-count={9}
                data-active={(activeStep === 9)} 
                className="w-[48px] h-[48px] absolute z-[3] top-[55%] right-0 translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={16} name="headphone" />
            </div>
            <div 
                data-count={10}
                data-active={(activeStep === 10)} 
                className="w-[48px] h-[48px] absolute z-[3] bottom-[25%] right-[5%] translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={16} name="headphone" />
            </div>
            <div 
                data-count={11}
                data-active={(activeStep === 11)} 
                className="w-[56px] h-[56px] absolute z-[3] bottom-[10%] right-[10%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={24} name="browser" />
            </div>
            <div 
                data-count={12}
                data-active={(activeStep === 12)} 
                className="w-[64px] h-[64px] absolute z-[3] bottom-0 right-[25%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={32} name="list-right" />
            </div>
            <div 
                data-count={13}
                data-active={(activeStep === 13)} 
                className="w-[74px] h-[74px] absolute z-[3] bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={32} name="calender-clock" />
            </div>
            <div 
                data-count={14}
                data-active={(activeStep === 14)} 
                className="w-[64px] h-[64px] absolute z-[3] bottom-0 left-[25%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={32} name="file-write" />
            </div>
            <div 
                data-count={15}
                data-active={(activeStep === 15)} 
                className="w-[56px] h-[56px] absolute z-[3] bottom-[10%] left-[10%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={24} name="file-search" />
            </div>
            <div 
                data-count={16}
                data-active={(activeStep === 16)} 
                className="w-[48px] h-[48px] absolute z-[3] bottom-[25%] left-[5%] -translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={16} name="shield-check" />
            </div>
            <div 
                data-count={17}
                data-active={(activeStep === 17)} 
                className="w-[48px] h-[48px] absolute z-[3] top-[55%] left-0 -translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={16} name="headphone" />
            </div>
            <div 
                data-count={18}
                data-active={(activeStep === 18)} 
                className="w-[48px] h-[48px] absolute z-[3] top-[40%] left-0 -translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center"
            >
                <IconComponent size={16} name="headphone" />
            </div>
        </div>
    );
}