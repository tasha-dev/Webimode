// Forcing nextJS to render this component as clinet side component
'use client';

// Importing part
import {Dispatch, ReactNode, useEffect, useState}  from "react";
import {nameType} from "@/chunk/iconComponent";
import SliderItemComponent from "@/chunk/page/home/fifthSection/slider/sliderItemComponent";

// Defining type of props
interface propsType {
    activeStep: number;
    setActiveStep: Dispatch<any>;
}

// Creating and exporting slider component as default
export default function SliderComponent({activeStep, setActiveStep}:propsType):ReactNode {
    // Defining data to render in JSX
    const data: nameType[] = [
        'calender-clock',
        "addsign",
        "ai",
        "browser",
        "caller",
        'file',
        'file-write',
        'globe',
        'gear',
        'bell',
        'location',
        'telephone'
    ];

    // Defining a function to add to step
    function handleStepIncreament():void {
        setActiveStep((prevActiveStep: number) => {
            if (prevActiveStep + 1 <= 12) {return prevActiveStep + 1}
            else {return 1}
        });
    }

    // Using useEffect to set active step automaticcaly
    useEffect(() => {
        const interval = setInterval(handleStepIncreament, 6000);
        return () => clearInterval(interval);
    }, [])

    // Returning JSX
    return (
        <div 
            onClick={handleStepIncreament}
            data-active-step={activeStep}
            className="w-[750px] h-[750px] home-fifth-section-slider aspect-square relative border-4 border-white bg-transparent rounded-full mt-[50px] transition-all duration-500"
        >
            <img src="https://www.mathsisfun.com/geometry/images/degrees-360.svg" alt="" className="absolute top-0 left-0 w-full rounded-full" />

            {
                data.map((item:nameType, index:number) => (
                    <SliderItemComponent 
                        icon={item} 
                        activeIndex={activeStep} 
                        index={index + 1} 
                    />
                ))
            }
        </div>
    );
}