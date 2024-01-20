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
    // Defining states of component
    const [rotation, setRotatation]:[number, Dispatch<number>] = useState(0);

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
        const interval = setInterval(handleStepIncreament, 3000);
        return () => clearInterval(interval);
    }, [])

    // Using useEffect to rotate the circle when activeStep changes
    useEffect(() => {
        if (activeStep === 1) {setRotatation(90)}
        else if (activeStep === 2) {setRotatation(60)}
        else if (activeStep === 3) {setRotatation(30)}
        else if (activeStep === 4) {setRotatation(0)}
        else if (activeStep === 5) {setRotatation(-30)}
        else if (activeStep === 6) {setRotatation(-60)}
        else if (activeStep === 7) {setRotatation(-90)}
        else if (activeStep === 8) {setRotatation(-120)}
        else if (activeStep === 9) {setRotatation(-150)}
        else if (activeStep === 10) {setRotatation(-180)}
        else if (activeStep === 11) {setRotatation(-210)}
        else if (activeStep === 12) {setRotatation(-240)}

        const activeElement:HTMLDivElement | null = document.querySelector('.home-fifth-section-slider-item[data-active="true"]');
        const previousEl:Element | null| undefined = activeElement?.previousElementSibling;
        const nextEl:Element | null| undefined = activeElement?.nextElementSibling;

        const AllNextOfActive = document.querySelectorAll('.home-fifth-section-slider-item[data-next-of-active="true"]');
        const AllPrevOfActive = document.querySelectorAll('.home-fifth-section-slider-item[data-prev-of-active="true"]');
        
        AllNextOfActive.forEach((item) => item.setAttribute('data-next-of-active', 'false'));
        AllPrevOfActive.forEach((item) => item.setAttribute('data-prev-of-active', 'false'));

        if (nextEl !== null) {nextEl?.setAttribute('data-next-of-active', 'true')};
        if (previousEl !== null) {previousEl?.setAttribute('data-prev-of-active', 'true')};
    }, [activeStep])

    // Returning JSX
    return (
        <div className="w-[750px] h-[750px] relative mt-[50px]">
            <img src="https://www.mathsisfun.com/geometry/images/degrees-360.svg" alt="" className="absolute top-0 left-0 w-full rounded-full opacity-0" />

            <div
                onClick={handleStepIncreament}
                data-active-step={activeStep}
                style={{transform: `rotate(${rotation}deg)`}}
                className="w-[750px] h-[750px] home-fifth-section-slider aspect-square relative border-4 border-white bg-transparent rounded-full transition-all duration-500"
            >
                {
                    data.map((item: nameType, index: number) => (
                        <SliderItemComponent
                            isPrevOfActive={false}
                            isNextOfActive={false}
                            key={index + 1}
                            icon={item}
                            activeIndex={activeStep}
                            index={index + 1}
                        />
                    ))
                }
            </div>
        </div>
    );
}