// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import LabelComponent from "@/chunk/page/project-estimate/labelComponent";
import Icon from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    label: string;
    items: string[];
    id: string;
    inputHasMarginRight?: boolean;
}

// Creating and exporting dropdown component as default
export default function DropdownComponent({items, label, id, inputHasMarginRight = false}:propsType):ReactNode {
    // Defining states of component
    const [isOpened, setOpened] = useState<boolean>(false);

    // Returning JSX
    return (
        <div>
            <LabelComponent forProp={id} isActive={isOpened}>{label}</LabelComponent>
            <div className={`relative ${(inputHasMarginRight) ? 'pr-[50px]' : ''}`}>
                <select
                    onFocus={() => setOpened(true)}
                    onBlur={() => setOpened(false)}
                    name={id}
                    id={id}
                    className={'outline-0 text-dark transition-all duration-500 items-center w-full justify-between gap-[20px] border focus:bg-theme/20 bg-white focus:border-theme rounded-[10px] border-lightGrey p-[10px]'}
                >
                    {items.map((item, index) => <option className={'text-dark text-[16px] p-[10px] block'} value={item} key={index}>{item}</option>)}
                </select>
            </div>
        </div>
    );
}