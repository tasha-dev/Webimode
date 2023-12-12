// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    children: string;
    link: string;
}

// Creating and exporting chat item component as default
export default function ChatItemComponent({children, link}:propsType):ReactNode {
    // Returning JSX 
    return (
        <Link href={link} className="group shadow-black bg-pageDark transition-all duration-500 border-[1.5px] border-lightestDark px-[12px] py-[9px] hover:border-theme rounded-[12px] flex items-center justify-between gap-[10px]">
            <span className="block truncate text-[12px] font-normal transition-all duration-500 text-lightGrey group-hover:text-theme">{children}</span>
            <span className="block shrink-0 transition-all duration-500 text-lightGrey group-hover:text-alert"><IconComponent size={12} name="bin" /></span>
        </Link>
    );
}