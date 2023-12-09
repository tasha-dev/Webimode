// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    number: number;
    isActive: boolean;
    nextGoingToActive: boolean;
    isLastOne: boolean;
}

// Creating and exporting count component as default
export default function CountComponent({isActive, number, nextGoingToActive, isLastOne}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="relative w-[40px] h-[40px] shrink-0">
            <div data-active={isActive} className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-[20px] font-bold shadow-custom data-[active='true']:bg-theme data-[active='true']:text-white data-[active='false']:bg-lighterGrey data-[active='false']:text-lightGrey">
                {number}
            </div>
            {
                (isLastOne)
                    ? false
                    : <div className="absolute top-full left-[50%] -translate-x-[50%] h-[80px] border-r-[3px] border-dashed border-r-lighterGrey" />
            }
        </div>
    );
}