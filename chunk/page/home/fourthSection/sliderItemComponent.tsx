// Importing part
import {ReactNode} from "react";
import Image from 'next/image';

// Defining type of props
interface propsType {
    img: string;
    alt: string;
}

// Creating and exporting slider item component as default
export default function SliderItemComponent({alt, img}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="h-[80px] flex items-center justify-center slider-item">
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