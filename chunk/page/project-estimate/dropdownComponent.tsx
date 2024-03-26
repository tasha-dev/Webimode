// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import LabelComponent from "@/chunk/page/project-estimate/labelComponent";
import Icon from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    label: string;
    placeHolder: string;
    items: string[];
    id: string;
}

// Creating and exporting dropdown component as default
export default function DropdownComponent({items, placeHolder, label, id}:propsType):ReactNode {
    // Defining states of component
    const [isOpened, setOpened] = useState<boolean>(false);

    // Returning JSX
    return (
        <div>
            <LabelComponent forProp={id} isActive={isOpened}>{label}</LabelComponent>
            <div className={'relative'}>
                <button id={id} onClick={() => setOpened(prevState => !prevState)} data-active={isOpened} className={'flex transition-all duration-500 items-center w-full justify-between gap-[20px] border data-[active="true"]:bg-theme/20 data-[active="false"]:bg-white data-[active="true"]:border-theme rounded-[10px] data-[active="false"]:border-lightGrey p-[10px]'}>
                    <span
                        data-active={isOpened}
                        className={'w-full block transition-all duration-500 text-right truncate text-[16px] font-normal data-[active="true"]:text-theme data-[active="false"]:text-lightGrey'}
                    >
                        {placeHolder}
                    </span>
                    <span data-active={isOpened} className={'shrink-0 transition-all duration-500 data-[active="false"]:text-lightGrey data-[active="true"]:text-theme'}>
                        <Icon name={'chevron-down'} size={10} />
                    </span>
                </button>
                <div data-opened={isOpened} className={'absolute transition-all z-20 py-[20px] flex flex-col duration-500 top-[110%] left-0 w-full lg:h-[200px] h-[100px] overflow-auto bg-white shadow-2xl shadow-black/20 rounded-[10px] data-[opened="true"]:visible data-[opened="true"]:opacity-100 data-[opened="false"]:invisible data-[opened="false"]:opacity-0 '}>
                    {
                        items.map((item, index) => (
                            <button key={index} className={'p-[10px] bg-white hover:bg-lighterGrey transition-all duration-500 text-[16px] font-normal text-right'}>
                                {item}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}