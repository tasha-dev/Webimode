// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {useState, EventHandler, ReactNode, Dispatch} from "react";
import IconComponent from "@/chunk/iconComponent";

// Definin type of props
interface propsType {
    onSubmit?: EventHandler<any>;
    isEditable?: boolean;
    children?: string;
    deleteFunction?: EventHandler<any>;
}

// Creating and exporting input component as default
export default function InputComponent({onSubmit, isEditable, children, deleteFunction}:propsType):ReactNode {
    // Conditional rendering
    if (isEditable) {
        // Defining states of component
        const [isFocused, setFocused]:[boolean, Dispatch<boolean>] = useState(false);
        const [inputValue, setInputValue]:[string, Dispatch<string>] = useState('');

        // Returning JSX
        return (
            <form
                action="#"
                onSubmit={onSubmit}
                noValidate
                data-focused={isFocused}
                className="w-full flex gap-[10px] border transition-all duration-500 border-theme p-[16px] rounded-[16px] overflow-hidden bg-transparent data-[focused='true']:bg-theme"
            >
                <input
                    type="text"
                    required
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="سایت مشابه مد نظر را وارد کنید"
                    className="transition-all w-full duration-500 outline-0 bg-transparent placeholder:text-lightestGrey placeholder:text-[16px] text-white text-[16px]"
                />
                <button className="w-[32px] h-[32px] flex transition-all duration-500 justify-center items-center rounded-[10px] border group border-white aspect-square shrink-0 hover:bg-white hover:text-theme">
                    <span className="w-[60%] h-[60%] rounded-full transition-all duration-500 bg-white text-theme group-hover:bg-theme group-hover:text-white">+</span>
                </button>
            </form>
        );
    } else {
        return (
            <div className="w-full flex items-center gap-[10px] border transition-all duration-500 border-theme p-[16px] rounded-[16px] overflow-hidden bg-transparent data-[focused='true']:bg-theme">
                <span className="truncate w-full block text-[16px] text-white font-fredoka">{children}</span>
                <button 
                    onClick={deleteFunction}
                    className="text-lightestGrey w-[32px] h-[32px] flex transition-all duration-500 justify-center items-center rounded-[10px] border border-white aspect-square shrink-0 hover:bg-white hover:text-theme"
                >
                    <IconComponent size={20} name="circle-x" />
                </button>
            </div>
        );
    }
}