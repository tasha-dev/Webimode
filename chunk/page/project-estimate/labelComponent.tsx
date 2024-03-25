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
                className={'transition-all duration-500 data-[active="false"]:text-dark data-[active="true"]:text-theme'}
            >
                <IconComponent name={'left-polygon'} size={20} />
            </span>
            <span
                data-active={isActive}
                className={'transition-all duration-500 font-bold text-[20px] data-[active="false"]:text-dark data-[active="true"]:text-theme'}
            >
                {children}
            </span>
        </label>
    );
}