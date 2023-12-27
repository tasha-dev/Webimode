// Forcing nextJS to render this component as clinet side component
'use client';

// Defining type of props
interface propsTYpe {
    activeStep: number;
    setActiveStep: Dispatch<number>;
}

// Importing part
import {Dispatch, MutableRefObject, ReactNode, useEffect, useRef, useState}  from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting slider component as default
export default function SliderComponent({activeStep, setActiveStep}:propsTYpe):ReactNode {
    // Defining state of componenet
    const [isDragging, setDragging]:[boolean, Dispatch<boolean>] = useState(false);
    const [initialAngle, setInitialAngle]:[number, Dispatch<number>] = useState(0);
    const [rotation, setRotation]:[number, Dispatch<number>] = useState(0);
    const [transition, setTransition]:[string, Dispatch<string>] = useState('');

    // Defining a refrences
    const circleRefrence:MutableRefObject<any> = useRef();
    const circle:HTMLDivElement = circleRefrence.current;

    // Defining a function to get angle of mouse
    function getMouseAngle(event:any):number {
        const rect:DOMRect = circle.getBoundingClientRect();
        const centerX:number = rect.left + rect.width / 2;
        const centerY:number = rect.top + rect.height / 2;
        const deltaX:number = event.clientX - centerX;
        const deltaY:number = event.clientY - centerY;

        return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    }

    // Using useEffect hook to set active Step
    useEffect(() => {
        if (rotation >= 59 && rotation <= 67) {setActiveStep(1)}
        else if (rotation >= 40 && rotation <= 47) {setActiveStep(2)}
        else if (rotation >= 21 && rotation <= 26) {setActiveStep(3)}
        else if (rotation <= 2 && rotation >= -2) {setActiveStep(4)}
        else if (rotation <= -59 && rotation >= -67) {setActiveStep(5)}
        else if (rotation <= -40 && rotation >= -47) {setActiveStep(6)}
        else if (rotation <= -21 && rotation >= -26) {setActiveStep(7)}
    }, [rotation])

    // Returning JSX
    return (
        <div
            onMouseDown={(event): void => {
                setDragging(true);
                setInitialAngle(getMouseAngle(event));
                setTransition('none');
            }}
            onMouseMove={(event): void => {
                if (isDragging) {
                    const currentAngle: number = getMouseAngle(event);
                    const rotation: number = currentAngle - initialAngle;

                    setRotation(Math.round(rotation));
                }
            }}
            onMouseUp={(): void => {
                if (isDragging) {
                    setDragging(false);
                    setTransition('transform 0.3s ease');

                    if (activeStep === 1) {setRotation(63);}
                    else if (activeStep === 2) {setRotation(43);}
                    else if (activeStep === 3) {setRotation(22);}
                    else if (activeStep === 4) {setRotation(0);}
                    else if (activeStep === 5) {setRotation(-63);}
                    else if (activeStep === 6) {setRotation(-43);}
                    else if (activeStep === 7) {setRotation(-22);}
                    else {setRotation(0)}
                }
            }}
            style={{
                transform: `rotate(${rotation}deg)`,
                transition: transition,
                cursor: (!isDragging) ? 'grab' : 'grabbing'
            }}
            ref={circleRefrence}
            className="w-[750px] h-[787px] origin-center aspect-square border-[4px] border-white rounded-full bg-transparent relative z-[1] mt-[53px]"
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
            <div data-active={(activeStep === 5)} className="w-[48px] h-[48px] absolute z-[3] top-[25%] right-[5%] translate-x-[50%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={16} name="headphone" />
            </div>
            <div data-active={(activeStep === 6)} className="w-[56px] h-[56px] absolute z-[3] top-[10%] right-[10%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={24} name="browser" />
            </div>
            <div data-active={(activeStep === 7)} className="w-[64px] h-[64px] absolute z-[3] top-0 right-[25%] transition-all duration-500 data-[active='false']:bg-theme border data-[active='false']:text-white border-white data-[active='true']:bg-white data-[active='true']:text-lightTheme rounded-full flex items-center justify-center">
                <IconComponent size={32} name="list-right" />
            </div>
        </div>
    );
}