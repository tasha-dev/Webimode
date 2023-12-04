// Importing part
import {ReactNode} from "react";
import IconComponent from "./iconComponent";

// Defining type of props
interface propsType {
    activeIndex: number;
    slidesPerView: number;
    slidesCount: number;
    prevBtnId?: string;
    nextBtnId?: string;
    hasButtons?: boolean;
    theme?: 'theme' | 'white';
}

// Creating and exporting slider pagination as default
export default function SliderPaginationComponent({activeIndex, slidesCount, hasButtons = false, slidesPerView, nextBtnId, prevBtnId, theme = 'theme'}:propsType):ReactNode {
    // Conditional rendering
    if (hasButtons) {
        return (
            <div className="flex items-center justify-center gap-[20px] mt-[64px]">
                <button id={prevBtnId} data-active={(activeIndex !== 0)} className={(theme === 'theme') ? "slider-prev-next-btn" : "slider-prev-next-btn-white"}>
                    <IconComponent name="chevron-right" size={16} />
                </button>
                <div className='flex gap-[12px] items-center justify-center'>
                    {
                        [... new Array(slidesCount)].map((item, index) => (
                            <div key={index} data-active={(activeIndex/slidesPerView === index)} className={(theme === 'theme') ? "slider-slide-bullet" : "slider-slide-bullet-white"} />
                        ))
                    }
                </div>
                <button id={nextBtnId} data-active={(activeIndex !== ((slidesCount*slidesPerView)-slidesPerView))} className={(theme === 'theme') ? "slider-prev-next-btn" : "slider-prev-next-btn-white"}>
                    <IconComponent name="chevron-left" size={16} />
                </button>
            </div>
        );
    } else {
        return (
            <div className='flex gap-[12px] items-center justify-center mt-[64px] w-full'>
                {
                    [... new Array(slidesCount)].map((item, index) => (
                        <div key={index} data-active={(activeIndex/slidesPerView === index)} className={(theme === 'theme') ? "slider-slide-bullet" : "slider-slide-bullet-white"} />
                    ))
                }
            </div>
        );
    }
}