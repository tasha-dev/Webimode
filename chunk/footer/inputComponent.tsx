// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import {UseFormRegister} from "react-hook-form";

// Defining type of props
interface propsType {
    icon: 'person'|'mail'|'file-write';
    placeHolder: string;
    isTextArea?: boolean;
    name: string;
    errorText: string | undefined;
    register: UseFormRegister<any>;
}

// Creating and exporting input of component from footer as default
export default function InputComponent({icon, placeHolder, isTextArea = false, name, errorText, register}:propsType):ReactNode {
    // Defining state of component
    const [isFocused, setFocused]:[boolean, Dispatch<boolean>] = useState(false);

    // Returning JSX
    return (
        <div>
            <div data-focused={isFocused} data-textarea={isTextArea}
                 className="flex transition-all duration-500 data-[textarea='true']:items-start data-[textarea='false']:items-center justify-between gap-[10px] rounded-[13px] bg-transparent border-[1.5px] border-lightTheme overflow-hidden data-[focused='false']:bg-darkerTheme data-[focused='true']:bg-lightTheme/70">
                {
                    (isTextArea)
                        ? (
                            <textarea
                                {...register(name, {
                                    onBlur: () => setFocused(false)
                                })}
                                onFocus={() => setFocused(true)}
                                data-focused={isFocused}
                                className="p-[16px] outline-0 w-full transition-all duration-500 h-[150px] bg-transparent placeholder:text-lightTheme text-[16px] font-normal resize-none data-[focused='true']:text-white data-[focused='false']:text-lightTheme"
                                placeholder={placeHolder}
                            />
                        ) : (
                            <input
                                {...register(name, {
                                    onBlur: () => setFocused(false)
                                })}
                                onFocus={() => setFocused(true)}
                                data-focused={isFocused}
                                className="p-[16px] outline-0 w-full transition-all duration-500 bg-transparent placeholder:text-lightTheme text-[16px] font-normal data-[focused='true']:text-white data-[focused='false']:text-lightTheme"
                                placeholder={placeHolder}
                            />
                        )
                }
                <span data-focused={isFocused} className="p-[16px] transition-all duration-500 data-[focused='false']:text-lightTheme data-[focused='true']:text-white">
                    <IconComponent name={icon} size={24}/>
                </span>
            </div>
            {
                (errorText)
                    ? (
                        <div className={'px-[16px] pb-[16px] mx-[20px] bg-red-950 border-[1.5px] border-red-600 rounded-x-[13px] rounded-b-[13px] pt-[16px]'}>
                            <p className={'text-red-600 font-normal text-[15px]'}>{errorText}</p>
                        </div>
                    ) : false
            }
        </div>
    );
}