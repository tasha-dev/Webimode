// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import React, {ReactNode} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    children: ReactNode;
    link: string;
    isDropdown?: boolean;
}

// Creating and exporting header link component as default
export default function LinkComponent({children, link, isDropdown = false}:propsType):ReactNode {
    // Getting URL of the current page
    const currentURL:string = usePathname();

    // Returning JSX
    return (
        <Link href={link} data-current-page={(currentURL === link)} className={`${(isDropdown) ? 'gap-[20px] flex justify-between text-lightGrey transition-all duration-500 group-hover:text-dark' : `text-dark`} text-[16px] relative font-normal items-center data-[current-page="false"]:after:hidden data-[current-page="false"]:before:hidden data-[current-page="true"]:after:block data-[current-page="true"]:before:block before:absolute after:absolute before:w-[10px] after:w-[30px] before:bg-theme after:bg-dark after:h-[4px] before:h-[4px] after:rounded-[20rem] before:rounded-[20rem] before:top-[120%] after:top-[120%] before:right-0 after:right-[15px]`}>
            {children}
            {
                (isDropdown)
                    ? <IconComponent name={'chevron-down'} size={15} />
                    : false
            }
        </Link>
    );
}