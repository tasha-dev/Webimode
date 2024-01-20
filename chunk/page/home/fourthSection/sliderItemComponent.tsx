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
    hiddenOnMq? : boolean;
}

// Creating and exporting slider item component as default
export default function SliderItemComponent({alt, img, hiddenOnMq = false}:propsType):ReactNode {
    // Defining refrence to elemnt
    const elementRef:MutableRefObject<HTMLDivElement | null> = useRef(null);

    // Checking if element is in view
    const isElementInView:boolean = useIsElementInView(elementRef);

    // Returning JSX
    return (
        <div 
            ref={elementRef} 
            data-showing={isElementInView} 
            data-hides-on-mq={hiddenOnMq}
            className="h-[80px] data-[hides-on-mq='false']:flex lg:data-[hides-on-mq='true']:flex data-[hides-on-mq='true']:hidden items-center justify-center slider-item transition-all duration-500"
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