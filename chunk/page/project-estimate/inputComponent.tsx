// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ChangeEventHandler, ReactNode, useState} from "react";
import LabelComponent from "@/chunk/page/project-estimate/labelComponent";

// Defining type of props
interface propsType {
    label?: string;
    type?: 'number' | 'text' | 'tel' | 'email';
    istextArea?: boolean;
    placeHolder: string;
    id: string;
    inputHasMarginRight?: boolean;
    onChange?: ChangeEventHandler;
}

// Creating and exporting input component as default
export default function InputComponent({placeHolder, onChange, inputHasMarginRight = false, label, istextArea = false, type = 'text', id}:propsType):ReactNode {
    // Defining states of component
    const [isFocused, setFocused] = useState<boolean>(false);

    // Conditional rendering
    if (istextArea) {
        return (
            <div>
                {
                    (label)
                        ? (<LabelComponent forProp={id} isActive={isFocused}>{label}</LabelComponent>)
                        : false
                }
                <div className={(inputHasMarginRight) ? 'lg:pr-[50px]' : ''}>
                    <textarea
                        onChange={onChange}
                        className={'transition-all text-right placeholder:text-right resize-none outline-0 duration-500 w-full border focus:bg-theme/20 bg-white focus:border-theme rounded-[10px] border-lightGrey p-[10px] h-[140px]'}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        name={id}
                        id={id}
                        required
                        placeholder={placeHolder}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                {
                    (label)
                        ? (<LabelComponent forProp={id} isActive={isFocused}>{label}</LabelComponent>)
                        : false
                }
                <div className={(inputHasMarginRight) ? 'lg:pr-[50px]' : ''}>
                    <input
                        className={'transition-all text-right placeholder:text-right outline-0 duration-500 w-full border focus:bg-theme/20 bg-white focus:border-theme rounded-[10px] border-lightGrey p-[10px]'}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onChange={onChange}
                        name={id}
                        id={id}
                        max={(type === 'number') ? 365 : 1000}
                        min={1}
                        maxLength={(type === 'text') ? 1000 : undefined}
                        minLength={(type === 'text') ? 2 : undefined}
                        required
                        type={type}
                        placeholder={placeHolder}
                    />
                </div>
            </div>
        );
    }
}