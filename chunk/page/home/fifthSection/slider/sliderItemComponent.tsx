// Importing part
import {ReactNode} from "react";
import IconComponent, {nameType} from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    activeIndex: number;
    icon: nameType;    
    index: number;
    isPrevOfActive: boolean;
    isNextOfActive: boolean;
}

// Creating and exporting slidet item component as default
export default function SliderItemComponent({icon, activeIndex, index, isNextOfActive, isPrevOfActive}:propsType):ReactNode {
    // Returning JSX
    return (
        <div 
            data-active={(activeIndex === index)}
            data-index={index}
            data-prev-of-active={isPrevOfActive}
            data-next-of-active={isNextOfActive}
            className="w-[74px] h-[74px] transition-all duration-500 home-fifth-section-slider-item border absolute rounded-full border-white flex items-center justify-center data-[active='false']:bg-theme data-[active='false']:text-white data-[active='true']:bg-white data-[active='true']:text-theme"
        >
            <IconComponent
                name={icon}
                size={30}
            />
        </div>
    );
}
