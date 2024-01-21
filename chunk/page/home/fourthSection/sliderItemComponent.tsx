// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {MutableRefObject, ReactNode, useRef} from "react";
import Image from 'next/image';
import useIsElementInView from "@/hook/useIsElementInView";

// Defining type of props
interface propsType {
    img: string;
    alt: string;
}

// Creating and exporting slider item component as default
export default function SliderItemComponent({alt, img}:propsType):ReactNode {
    // Defining refrence to elemnt
    const elementRef:MutableRefObject<HTMLDivElement | null> = useRef(null);

    // Checking if element is in view
    const isElementInView:boolean = useIsElementInView(elementRef);

    // Returning JSX
    return (
        <div 
            ref={elementRef} 
            data-showing={isElementInView} 
            data-view-index={4}
            className="h-[80px] flex items-center justify-center slider-item transition-all duration-500"
        >
            <Image 
                src={img} 
                alt={alt} 
                width={100} 
                height={100} 
                className={`rounded-full object-cover aspect-square pointer-events-none w-[50px]`} 
            />
        </div>
    );
}