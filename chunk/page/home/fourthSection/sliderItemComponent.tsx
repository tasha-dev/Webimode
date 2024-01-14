// Importing part
import {ReactNode} from "react";
import Image from 'next/image';

// Defining type of props
interface propsType {
    img: string;
    alt: string;
    item: '1' | '2' | '3' | '4' | '5' | '6' | '7';
}

// Creating and exporting slider item component as default
export default function SliderItemComponent({alt, img, item}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="h-[80px] flex items-center justify-center">
            <Image 
                src={img} 
                alt={alt} 
                data-item={item}
                width={100} 
                height={100} 
                className={`rounded-full object-cover aspect-square pointer-events-none lg:data-[item='1']:w-[24px] data-[item='1']:w-[40px] lg:data-[item='2']:w-[28px] data-[item='2']:w-[50px] lg:data-[item='3']:w-[32px] data-[item='3']:w-[60px] lg:data-[item='4']:w-[36px] data-[item='4']:w-[50px] lg:data-[item='5']:w-[48px] data-[item='5']:w-[48px] lg:data-[item='6']:w-[48px] data-[item='6']:w-[40px]`} 
            />
        </div>
    );
}