// Forcing nextJS to render this component as client side component
'use client';

import IconComponent from "@/chunk/iconComponent";
// Importing part
import {Dispatch, ReactNode, useState} from "react";
import {UseFormRegister} from "react-hook-form";

// Defining type of props
interface propsType {
    label: string;
    name: string;
    type: 'text' | 'tel' | 'email' | 'passowrd';
    placeHolder: string;
    register: UseFormRegister<any>;
    errorText: string | undefined;
}

// Creating and exporting edit info input component as defualt
export default function EditInfoInputComponent({register, errorText, label, type, placeHolder, name}:propsType):ReactNode {
    // Conditional rendering
    if (type !== 'passowrd') {
        return (
            <div>
                <label className="mb-[12px] block text-[16px] font-normal truncate dark:text-white text-dark">{label}</label>
                {
                    (name === 'meli')
                        ? <input {...register(name)} className="appearance-none dark:bg-lightestDark bg-lightestGrey border dark:border-white/20 border-lighterGrey transition-all duration-500 text-right rounded-[12px] placeholder:transition-all placeholder:duration-500 outline-0 w-full block p-[12px] text-[13px] font-normal placeholder:text-lightGrey text-lightGrey focus:placeholder:text-dark focus:text-dark dark:focus:border-theme focus:border-theme" placeholder={placeHolder} />
                        : <input {...register(name)} className="appearance-none bg-lightestGrey border dark:bg-lightestDark dark:border-white/20 border-lighterGrey transition-all duration-500 text-right rounded-[12px] placeholder:transition-all placeholder:duration-500 outline-0 w-full block p-[12px] text-[13px] font-normal placeholder:text-lightGrey text-lightGrey dark:focus:placeholder:text-white dark:focus:text-white focus:placeholder:text-dark focus:text-dark dark:focus:border-theme focus:border-theme" placeholder={placeHolder} />
                }
                {
                    (errorText)
                        ? <p className={'text-[16px] font-normal text-red-600 mt-[16px]'}>{errorText}</p>
                        : false
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
                <label className="mb-[12px] block text-[16px] font-normal truncate text-dark">{label}</label>
                <div data-focused={isFocused} className="overflow-hidden rounded-[12px] flex gap-[10px] dark:bg-lightestDark dark:border-white/20 bg-lightestGrey border data-[focused='false']:border-lighterGrey data-[focused='true']:border-theme transition-all duration-500">
                    <input
                        {...register(name, {
                            onBlur: () => setFocused(false)
                        })}
                        type={inputType}
                        onFocus={() => setFocused(true)}
                        className="p-[12px] dark:placeholder:text-lightGrey dark:text-lightGrey w-full outline-0 bg-transparent" placeholder={placeHolder}
                    />
                    <button type="button" onClick={() => (inputType === 'password') ? setInputType('text') : setInputType('password')} className="shrink-0 aspect-square w-[50px] transition-all duration-500 dark:bg-lightestDark bg-lightestGrey text-lightGrey hover:bg-lighterGrey text-[13px] font-normal focus:bg-lighterGrey flex items-center justify-center dark:focus:text-white focus:text-dark">
                        <IconComponent name={'slash-eye'} size={16} />
                    </button>
                </div>
                {
                    (errorText)
                        ? <p className={'text-[16px] font-normal text-red-600 mt-[16px]'}>{errorText}</p>
                        : false
                }
            </div>            
        );
    }
}