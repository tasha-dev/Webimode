// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState, Dispatch} from 'react';
import IconComponent from '@/chunk/iconComponent';
import {UseFormRegister} from "react-hook-form";

// Defining type of props
interface propsType {
    placeHolder: string;
    name: string;
    icon: 'person' | 'telephone' | 'caller' | 'mail' | 'slash-eye';
    inputType: 'text' | 'email' | 'password' | 'tel';
    errorText: string | undefined;
    register: UseFormRegister<any>;
}

// Creating and exporting input component as default
export default function InputComponent({placeHolder, name,icon, inputType, errorText, register}: propsType): ReactNode {
    // Defining state of component
    const [isFocused, setFoucused]: [boolean, Dispatch<boolean>] = useState(false);

    // Conditional rendering
    if (inputType === 'password') {
        // Defining state of component
        const [isPasswordShowing, setPasswordShowing]: [boolean, Dispatch<boolean>] = useState(false);

        // Returning JSX
        return (
            <div>
                <div data-focused={isFocused}
                     className="rounded-[16px] overflow-hidden flex justify-between items-center border-2 transition-all duration-500 data-[focused='true']:border-dark data-[focused='false']:border-lightGrey">
                    <input
                        {...register(name, {
                            onBlur: () => setFoucused(false)
                        })}
                        placeholder={placeHolder}
                        onFocus={() => setFoucused(true)}
                        data-focused={isFocused}
                        type={(isPasswordShowing) ? 'text' : 'password'}
                        className="p-[16px] text-[16px] font-normal w-full outline-0 transition-all duration-500 data-[focused='true']:text-dark data-[focused='false']:text-lightGrey"
                    />
                    <button
                        type={'button'}
                        onClick={() => (isPasswordShowing) ? setPasswordShowing(false) : setPasswordShowing(true)}
                        data-focused={isFocused}
                        className="p-[20px] data-[focused='true']:text-dark data-[focused='false']:text-lightGrey transition-all duration-500 hover:bg-lighterGrey focus:bg-lighterGrey outline-0"
                    >
                        <IconComponent size={16} name={icon}/>
                    </button>
                </div>
                {
                    (errorText)
                        ? <p className={'mt-[20px] text-[15px] font-normal text-red-600'}>{errorText}</p>
                        : false
                }
            </div>
        );
    } else {
        return (
            <div>
                <div data-focused={isFocused} className="rounded-[16px] overflow-hidden flex justify-between items-center border-2 transition-all duration-500 data-[focused='true']:border-dark data-[focused='false']:border-lightGrey">
                    <input
                        {...register(name, {
                            onBlur: () => setFoucused(false)
                        })}
                        placeholder={placeHolder}
                        onFocus={() => setFoucused(true)}
                        data-focused={isFocused}
                        className="p-[16px] text-[16px] font-normal w-full outline-0 transition-all duration-500 data-[focused='true']:text-dark data-[focused='false']:text-lightGrey data-[type='tel']:text-end"
                    />
                    <div data-focused={isFocused}
                         className="p-[16px] data-[focused='true']:text-dark data-[focused='false']:text-lightGrey transition-all duration-500"
                    >
                        <IconComponent size={16} name={icon}/>
                    </div>
                </div>
                {
                    (errorText)
                        ? <p className={'mt-[20px] text-[15px] font-normal text-red-600'}>{errorText}</p>
                        : false
                }
            </div>
        );
    }
}
