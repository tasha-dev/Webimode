// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    icon: 'person'|'mail'|'file-write';
    inputType: 'mail'|'text'|'tell';
    placeHolder: string;
    isTextArea?: boolean;
    name: string;
    required?: boolean;
}

// Creating and exporting input of component from footer as default
export default function InputComponent({icon, inputType, placeHolder, isTextArea = false, name, required = false}:propsType):ReactNode {
    // Defining state of component
    const [isFocused, setFocused]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
        <div data-focused={isFocused} data-textarea={isTextArea} className="flex transition-all duration-500 data-[textarea='true']:items-start data-[textarea='false']:items-center justify-between gap-[10px] rounded-[13px] bg-transparent border-[1.5px] border-lightTheme overflow-hidden data-[focused='false']:bg-darkerTheme data-[focused='true']:bg-lightTheme/70">
            {
                (isTextArea)
                    ? (
                        <textarea 
                            onFocus={() => setFocused(true)} 
                            onBlur={() => setFocused(false)} 
                            data-focused={isFocused}
                            className="p-[16px] outline-0 w-full transition-all duration-500 h-[150px] bg-transparent placeholder:text-lightTheme text-[16px] font-normal resize-none data-[focused='true']:text-white data-[focused='false']:text-lightTheme" 
                            required={required} 
                            placeholder={placeHolder} 
                            name={name} 
                            id={name} 
                        />
                    ) : (
                        <input 
                            onFocus={() => setFocused(true)} 
                            onBlur={() => setFocused(false)} 
                            data-focused={isFocused}
                            className="p-[16px] outline-0 w-full transition-all duration-500 bg-transparent placeholder:text-lightTheme text-[16px] font-normal data-[focused='true']:text-white data-[focused='false']:text-lightTheme" 
                            required={required} 
                            placeholder={placeHolder} 
                            type={inputType} 
                            name={name} 
                            id={name} 
                        />
                    )
            }
            <span data-focused={isFocused} className="p-[16px] transition-all duration-500 data-[focused='false']:text-lightTheme data-[focused='true']:text-white"><IconComponent name={icon} size={24} /></span>
        </div>
    );
}