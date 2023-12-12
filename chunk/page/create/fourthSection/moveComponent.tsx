// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    index: number;
    title: string;
    children: string;
    isActive: boolean;
    icon: 'file-write'|'file-search'|'party-horn';
    isFirstOne?: boolean;
}

// Creating and exporting move component of fourth section in create page as default
export default function MoveComponent({children, index, isActive, title, icon, isFirstOne = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="relative flex items-center">
            <div data-active={isActive} data-first={isFirstOne} className="w-full absolute top-[50%] left-0 data-[first='false']:translate-x-[50%] border-dashed border-b-2 data-[active='false']:border-b-lightGrey data-[active='true']:border-b-theme z-[-1]" />
            <div data-active={isActive} className="w-[64px] h-[64px] aspect-square shrink-0 transition-all duration-500 rounded-[16px] flex items-center justify-center border bg-lightestGrey data-[active='true']:text-theme data-[active='true']:border-theme data-[active='false']:text-lightGrey data-[active='false']:border-lighterGrey">
                <IconComponent name={icon} size={32} />
            </div>
            <div data-active={isActive} className="rounded-[32px] mr-[20px] hover:bg-lighterGrey transition-all duration-500 bg-lightestGrey border p-[24px] data-[active='false']:border-lighterGrey data-[active='true']:border-theme">
                <div>
                    <div data-active={isActive} className="shadow-custom-outer w-[31px] h-[31px] aspect-square rounded-[8px] flex items-center justify-center data-[active='false']:bg-lighterGrey data-[active='false']:text-dark/50 mb-[12px] data-[active='true']:bg-theme data-[active='true']:text-white">
                        {index}
                    </div>
                    <span data-active={isActive} className="block truncate text-[20px] font-semibold mb-[8px] data-[active='true']:text-theme data-[active='false']:text-dark">
                        {title}
                    </span>
                    <p data-active={isActive} className="line-clamp-3 leading-[24px] text-[13px] font-normal data-[active='true']:text-theme data-[active='false']:text-dark">
                        {children}
                    </p>
                </div>
            </div>
        </div> 
    );
}