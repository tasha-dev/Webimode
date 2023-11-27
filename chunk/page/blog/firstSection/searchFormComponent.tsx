// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    placeHolder: string;
    name: string;
}

// Creating and exporting search form component as default
export default function SearchFormComponent({ name, placeHolder }: propsType):ReactNode {
    // Defining state of component
    const [isFocused, setFocused]: [boolean, Dispatch<boolean>] = useState(false);

    // Returninng JSX
    return (
        <form action='#' data-focused={isFocused} className="w-[50%] mb-[64px] transition-all duration-500 flex items-center justify-between rounded-[18px] border-[1.5px] data-[focused='false']:border-lightGrey data-[focused='true']:border-dark overflow-hidden">
            <input onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} required type="text" data-focused={isFocused} placeholder={placeHolder} name={name} id={name} className="p-[16px] w-full transition-all duration-500 outline-0 text-[16px] data-[focused='true']:text-dark data-[focused='false']:text-lightGrey font-normal" />
            <button data-focused={isFocused} className="p-[20px] relative before:transition-all before:duration-500 before:content-[''] before:absolute before:right-0 before:top-[50%] before:translate-y-[-50%] before:w-[1px] transition-all duration-500 before:rounded-[2px] before:h-[20px] data-[focused='true']:before:bg-dark data-[focused='false']:before:bg-lightGrey data-[focused='true']:text-dark data-[focused='false']:text-lightGrey focus:bg-lighterGrey outline-0 focus:text-lightGrey">
                <IconComponent size={16} name="search" />
            </button>
        </form>
    );
}

