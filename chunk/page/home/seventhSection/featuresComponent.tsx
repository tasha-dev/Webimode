// Importing part
import IconComponent from "@/chunk/iconComponent";
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    isActive: boolean;
    isGoingToBeActive: boolean;
    title: string;
    children: string;
    position: 'top' | 'bottom';
    icon: 'shield-check'|'hand-holding-dollor'|'shaking-hands';
    hasNoLeft?: boolean;
}

// Creating and exporting feature component as default
export default function FeaturesComponent({children, isActive, position, title, icon, hasNoLeft = false, isGoingToBeActive}:propsType):ReactNode {
    // Returning JSX
    return (
        <div data-active={isActive} data-position={position} className="data-[position='bottom']:lg:mt-[120px]">
            <div data-active={isActive} className="mx-auto transition-all duration-500 w-[64px] h-[64px] aspect-square flex justify-center items-center rounded-[16px] mb-[16px] data-[active='true']:text-white data-[active='true']:bg-theme data-[active='false']:text-lightGrey data-[active='false']:bg-lighterGrey data-[active='true']:shadow-theme">
                <IconComponent name={icon} size={32} />
            </div>
            <span data-active={isActive} className="lg:truncate transition-all duration-500 block mb-[8px] text-[16px] w-full text-center data-[active='true']:text-theme data-[active='false']:text-lightGrey">{title}</span>
            <p data-active={isActive} className="lg:line-clamp-4 transition-all duration-500 text-center text-[12px] font-normal data-[active='false']:text-lighterGrey data-[active='true']:text-dark leading-[24px] mb-[20px]">{children}</p>
            <div className="relative lg:block flex items-center justify-center">
                <svg data-active={isActive} className="data-[active='true']:text-theme transition-all duration-500 data-[active='false']:text-lightGrey w-full" viewBox="0 0 214 268" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M107.493 217.026L3.12142 160.586L107.493 106.494L211.865 160.586L107.493 217.026Z" fill="white" stroke="currentColor" stroke-width="2" />
                    <path d="M169 160.5L106.5 191.5V58L169 30V160.5Z" fill="currentColor" stroke="currentColor" />
                    <path d="M106.5 191.5V58L46 30.5V160L106.5 191.5Z" fill="currentColor" stroke="currentColor" />
                    <path d="M106.5 58L46 30.5L106.5 1.5L169 30L106.5 58Z" fill="white" stroke="currentColor" />
                </svg>
                {
                    (position === 'top' && !hasNoLeft)
                        ? <div 
                            data-going-active={isGoingToBeActive} 
                            data-active={isActive} 
                            className="lg:block transition-all duration-500 hidden h-[200px] w-[7px] data-[active='false']:bg-lightGrey data-[active='true']:bg-theme data-[going-active='true']:bg-gradient-to-b data-[going-active='true']:via-lightGrey data-[going-active='true']:from-theme data-[going-active='true']:to-lightGrey rotate-[60deg] absolute top-[50%] -translate-y-[4%] right-full z-[-1]" 
                        />
                        : (hasNoLeft)
                            ? false
                            : <div 
                                data-going-active={isGoingToBeActive} 
                                data-active={isActive} 
                                className="lg:block transition-all duration-500 hidden h-[230px] w-[7px] data-[active='false']:bg-lightGrey data-[active='true']:bg-theme data-[going-active='true']:bg-gradient-to-t data-[going-active='true']:via-lightGrey data-[going-active='true']:from-theme data-[going-active='true']:to-lightGrey rotate-[-60deg] absolute top-[50%] -translate-y-[55%] left-0 z-[-1]" 
                            />
                }
            </div>
        </div>
    );
}
