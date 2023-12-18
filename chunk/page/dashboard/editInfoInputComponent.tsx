// Forcing nextJS to render this component as client side component
'use client';

import IconComponent from "@/chunk/iconComponent";
// Importing part
import {Dispatch, ReactNode, useState} from "react";

// Defining type of props
interface propsType {
    label: string;
    id: string;
    type: 'text' | 'tel' | 'email' | 'passowrd';
    placeHolder: string;
}

// Creating and exporting edit info input component as defualt
export default function EditInfoInputComponent({id, label, type, placeHolder}:propsType):ReactNode {
    // Conditional rendering
    if (type !== 'passowrd') {
        return (
            <div>
                <label className="mb-[12px] block text-[16px] font-normal truncate text-dark" htmlFor={id}>{label}</label>
                {
                    (id === 'meli-code-input')
                        ? <input minLength={10} maxLength={10} className="appearance-none bg-lightestGrey border border-lighterGrey transition-all duration-500 text-right rounded-[12px] placeholder:transition-all placeholder:duration-500 outline-0 w-full block p-[12px] text-[13px] font-normal placeholder:text-lightGrey text-lightGrey focus:placeholder:text-dark focus:text-dark focus:border-theme" required type={type} placeholder={placeHolder} id={id} name={id} />
                        : <input className="appearance-none bg-lightestGrey border border-lighterGrey transition-all duration-500 text-right rounded-[12px] placeholder:transition-all placeholder:duration-500 outline-0 w-full block p-[12px] text-[13px] font-normal placeholder:text-lightGrey text-lightGrey focus:placeholder:text-dark focus:text-dark focus:border-theme" required type={type} placeholder={placeHolder} id={id} name={id} />
                }
            </div>
        );
    } else {
        // Defining states of component
        const [inputType, setInputType]:[string, Dispatch<string>] = useState('password');
        const [isFocused, setFocused]:[boolean, Dispatch<boolean>] = useState(false);

        // Returning JSX
        return (
            <div>
                <label className="mb-[12px] block text-[16px] font-normal truncate text-dark" htmlFor={id}>{label}</label>
                <div data-focused={isFocused} className="overflow-hidden rounded-[12px] flex gap-[10px] bg-lightestGrey border data-[focused='false']:border-lighterGrey data-[focused='true']:border-theme transition-all duration-500">
                    <input 
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        className="p-[12px] w-full outline-0 bg-transparent" required type={inputType} placeholder={placeHolder} id={id} name={id} minLength={8} maxLength={10} 
                    />
                    <button type="button" onClick={() => (inputType === 'password') ? setInputType('text') : setInputType('password')} className="shrink-0 aspect-square w-[50px] transition-all duration-500 bg-lightestGrey text-lightGrey hover:bg-lighterGrey text-[13px] font-normal focus:bg-lighterGrey flex items-center justify-center placeholder:text-lightGrey focus:placeholder:text-dark focus:text-dark">
                        <IconComponent name={'slash-eye'} size={16} />
                    </button>
                </div>
            </div>            
        );
    }
}