// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    children: ReactNode;
    forProp: string;
    isActive: boolean;
}

// Creating and exporting label component as default
export default function LabelComponent({children, forProp, isActive}:propsType):ReactNode {
    // Returning JSX
    return (
        <label htmlFor={forProp} className={'flex items-center gap-[10px] mb-[20px]'}>
            <span
                data-active={isActive}
                className={'transition-all duration-500 data-[active="false"]:text-dark data-[active="true"]:text-theme lg:block hidden'}
            >
                <IconComponent name={'left-polygon'} size={40}/>
            </span>
            <div
                data-active={isActive}
                className={'transition-all duration-500 bg-gradient-to-r data-[active="false"]:from-dark data-[active="true"]:from-theme lg:hidden block w-full h-[2px]'}
            />
            <span
                data-active={isActive}
                className={'transition-all shrink-0 duration-500 font-bold text-[20px] data-[active="false"]:text-dark data-[active="true"]:text-theme'}
            >
                {children}
            </span>
            <div
                data-active={isActive}
                className={'transition-all duration-500 bg-gradient-to-l data-[active="false"]:from-dark data-[active="true"]:from-theme lg:hidden block w-full h-[2px]'}
            />
        </label>
    );
}