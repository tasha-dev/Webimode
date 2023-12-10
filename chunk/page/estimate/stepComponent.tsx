// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {EventHandler, ReactNode} from "react";
import CountComponent from "./countComponent";
import DropdownComponent from "@/chunk/dropdownComponent";
import MultiRangeSlider from "multi-range-slider-react";
import '@/public/style/multi-slider.style.css';

// Defining type of props
interface propsType {
    title: string;
    number: number;
    subTitle: string;
    contentType: 'dropdown' | 'range';
    children?: ReactNode;
    isLastOne?: boolean;
    dropdownTitle?: string;
    maxRange?: number;
    minRange?: number;
    onRangeChange?: EventHandler<any>;
}

// Creating and exporting step component as default
export default function StepComponent({contentType, subTitle, title, children, number, isLastOne = false, dropdownTitle = '', maxRange = 10, minRange = 0, onRangeChange}:propsType):ReactNode {
    // Returning JSX
    return (
        <div data-content={contentType} className="flex lg:items-center lg:flex-row flex-col justify-between lg:gap-[10px] gap-[24px] lg:w-auto w-full lg:data-[content='range']:py-0 data-[content='range']:py-[20px]">
            <div className="flex items-center gap-[24px] lg:w-[60%] w-full">
                <CountComponent isLastOne={isLastOne} isActive={(number === 1)} number={number} nextGoingToActive={(number === 1)} />
                <div className="w-full lg:overflow-visible overflow-hidden">
                    <span className="block mb-[8px] text-white lg:text-[20px] text-[16px] font-normal truncate w-full">{title}</span>
                    <span className="text-[13px] font-normal text-lightGrey truncate block w-full">{subTitle}</span>
                </div>
            </div>
            {
                (contentType === 'dropdown')
                    ? <DropdownComponent theme="dark" title={dropdownTitle}>{children}</DropdownComponent> 
                    : <div dir="ltr" className="lg:w-[306px] w-full lg:pr-0 pr-[60px]">
                        <MultiRangeSlider 
                            baseClassName="multi-range-slider-black"
                            ruler={false} 
                            label={false}
                            min={minRange} 
                            max={maxRange} 
                            minValue={minRange} 
                            maxValue={maxRange} 
                            onChange={onRangeChange}
                        />
                    </div>
            }
        </div>
    );
}