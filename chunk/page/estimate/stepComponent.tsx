// Importing part
import {ReactNode} from "react";
import CountComponent from "./countComponent";
import DropdownComponent from "@/chunk/dropdownComponent";

// Defining type of props
interface propsType {
    title: string;
    number: number;
    subTitle: string;
    contentType: 'dropdown' | 'range';
    children?: ReactNode;
    isLastOne?: boolean;
}

// Creating and exporting step component as default
export default function StepComponent({contentType, subTitle, title, children, number, isLastOne = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="flex items-center justify-between gap-[10px]">
            <div className="flex items-center gap-[24px] w-full">
                <CountComponent isLastOne={isLastOne} isActive={(number === 1)} number={number} nextGoingToActive={(number === 1)} />
                <div className="w-full">
                    <span className="block mb-[8px] text-white text-[20px] font-normal truncate">{title}</span>
                    <span className="text-[13px] font-normal text-lightGrey truncate block">{subTitle}</span>
                </div>
            </div>
            {
                (contentType === 'dropdown')
                    ? (
                        <DropdownComponent theme="dark" title="موضوع سایت خود را وارد کنید">
                            {children}
                        </DropdownComponent>
                    ) : (
                        <p>asdasdasd</p>
                    )
            }
        </div>
    );
}