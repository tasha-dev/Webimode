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
        <div className="absolute p-[18px] xl:w-[166px] rounded-[18px] left-0 xl:translate-x-[80%] translate-x-[50%] data-[active='false']:bg-lighterGrey data-[active='true']:bg-theme data-[position='bottom']:top-[30px] data-[position='top']:bottom-[30px]" data-active={isActive} data-position={position} dir='rtl'>
            <div className='bg-white mb-[12px] w-[28px] h-[28px] aspect-square rounded-[8px] flex justify-center items-center data-[active="true"]:text-theme data-[active="false"]:text-lightGrey' data-active={isActive}>
                <IconComponent size={16} name={icon} />
            </div>
            <span className="truncate block font-normal text-[13px] data-[active='true']:text-white data-[active='false']:text-lightGrey mb-[8px]" data-active={isActive}>{title}</span>
            <p className="font-normal line-clamp-4 text-[12px] data-[active='true']:text-white data-[active='false']:text-lightGrey" data-active={isActive}>{children}</p>
        </div>
    );
}