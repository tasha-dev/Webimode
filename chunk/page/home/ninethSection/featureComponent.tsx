// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, MutableRefObject, ReactNode, useEffect, useMemo, useRef, useState} from "react";
import CircleProgressComponent from "@/chunk/circleProgressComponent";
import useIsElementInView from "@/hook/useIsElementInView";

// Defining type of props
interface propsType {
    percentage: number;
    theme: 'orange'|'blue'|'green';
    title: string;
    children: string;
}

// Creating and exporting feature component as default
export default function FeatureComponent({children, percentage, theme, title}:propsType):ReactNode {
    // Defining state of component
    const [percentageState, setPercentageState]:[number, Dispatch<any>] = useState(0);

    // Defining a refrence to element
    const elementRef:MutableRefObject<any> = useRef(null);
    
    // Getting a boolean which represents if element is showable
    const isElementShowing:boolean = useIsElementInView(elementRef);

    // Using useEffect and useMomo to animate element
    let interval:NodeJS.Timeout;

    useEffect(() => {
        if (isElementShowing) {
            interval = setInterval(() => setPercentageState((prevState:number) => prevState + 1), 30)
        }
    }, [isElementShowing])


    useMemo(() => {
        if (percentageState >= percentage) {
            setPercentageState(percentage)
            clearInterval(interval)
        }
    }, [percentageState])


    // Returning JSX
    return (
        <div 
            ref={elementRef}
            data-theme={theme} 
            className="lg:px-[16px] lg:py-[24px] px-[20px] py-[20px] lg:rounded-[64px] rounded-[20px] shadow-custom data-[theme='orange']:bg-lightOrange data-[theme='blue']:bg-themeBlue data-[theme='green']:bg-lightGreen"
        >
            <div className='flex justify-center lg:mt-[-70px] mt-[-90px]'>
                <CircleProgressComponent percentage={percentageState} theme={theme} />
            </div>
            <span className="mb-[8px] text-center mt-[16px] truncate block text-white lg:text-[32px] text-[20px] font-semibold">{title}</span>
            <p className="text-white text-center font-normal lg:text-[16px] text-[13px] leading-[32px] line-clamp-5">{children}</p>
        </div>
    );
}