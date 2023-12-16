// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    title: string;
    icon: 'window' | 'circle-state' | 'bell-ring' | 'ticket' | 'wallet' | 'question-circle' | 'gear';
    link: string;
    isActive: boolean;
}

// Creating and exporting nav item of dashboard pages as default
export default function NavItemComponent({icon, link, title, isActive}:propsType):ReactNode {
    // Returning JSX
    return (
        <li>
            <Link href={link} data-active={isActive} className="flex transition-all duration-500 items-center gap-[12px] px-[16px] py-[12px] w-full data-[active='false']:bg-lightestGrey data-[active='false']:hover:bg-lighterGrey data-[active='false']:text-lightGrey data-[active='true']:bg-theme data-[active='true']:text-white rounded-[14px] shadow-custom-outer-active">
                <span className="shrink-0 text-current">
                    <IconComponent name={icon} size={20} />
                </span>
                <span className="text-current text-[13px] font-normal truncate block w-full">{title}</span>
            </Link>
        </li>
    );
}