// Importing part
import IconComponent from "@/chunk/iconComponent";
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    children: string;
    title: string;
    isActive: boolean;
    icon: 'brief-case'|'money-check-edit'|'design'|'replace'|'vote-yes';
    position: 'top' | 'bottom';
}

// Exporting detail component of second section in home page as default
export default function DetailComponent({children, icon, isActive, title, position}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="lg:absolute lg:block flex gap-[12px] items-center lg:p-[18px] lg:w-[166px] transition-all duration-500 lg:z-[2] w-[75%] lg:rounded-[18px] left-0 xl:translate-x-[90%] lg:translate-x-[70%] lg:data-[active='false']:bg-lighterGrey lg:data-[active='true']:bg-theme data-[position='bottom']:top-[30px] data-[position='top']:bottom-[30px]" data-active={isActive} data-position={position} dir='rtl'>
            <div className="bg-white lg:mb-[12px] w-[28px] h-[28px] aspect-square rounded-[8px] lg:transition-none transition-all duration-500 flex justify-center items-center data-[active='true']:text-theme data-[active='false']:text-lightGrey" data-active={isActive}>
                <IconComponent size={16} name={icon} />
            </div>
            <span className="truncate lg:transition-none transition-all duration-500 block font-normal text-[13px] data-[active='true']:text-white data-[active='false']:text-lightGrey lg:mb-[8px]" data-active={isActive}>{title}</span>
            <p className="lg:block hidden font-normal line-clamp-4 text-[12px] data-[active='true']:text-white data-[active='false']:text-lightGrey" data-active={isActive}>{children}</p>
        </div>
    );
}
