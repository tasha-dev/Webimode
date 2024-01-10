// Importing part
import {ReactNode} from "react";
import Image from 'next/image';

// Defining type of props
interface propsType {
    img: string;
    alt: string;
    size: number;
}

// Creating and exporting slider item component as default
export default function SliderItemComponent({alt, img, size}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className='h-[80px] flex justify-center items-center'>
            <Image 
                src={img} 
                alt={alt} 
                width={size} 
                height={size} 
                className={`lg:w-auto lg:h-auto w-[56px] h-[56px] rounded-full object-cover aspect-square pointer-events-none`} 
            />
        </div>
    );
}