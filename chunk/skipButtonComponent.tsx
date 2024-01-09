// Importing part
import Link from "next/link";
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    id: `#${string}`;
    marginTop?: number;
}

// Creating and exporting skip button component as default
export default function SkipButtonComponent({id, marginTop = 250}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={`lg:flex hidden items-center justify-center`} style={{marginTop: `${marginTop}px`}}>
            <Link 
                href={id} 
                className="px-[16px] py-[8px] rounded-[12px] text-lightGrey font-normal text-[15px] transition-all duration-500 bg-lightestGrey hover:bg-theme hover:text-white"
            >
                رد کردن
            </Link>
        </div>
    );
}