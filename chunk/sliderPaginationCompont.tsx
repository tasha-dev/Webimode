// Importing part
import {ReactNode} from "react";
import IconComponent from "./iconComponent";

// Defining type of props
interface propsType {
    prevBtnId?: string;
    nextBtnId?: string;
    hasSlideRemainingRightSide?: boolean;
    hasSlideRemainingLeftSide?: boolean;
    activeIndex: number;
    hasButtons?: boolean;
    slidesPerView: number;
    slidesCount: number;
}

// Creating and exporting slider pagination as default
export default function SliderPaginationComponent({activeIndex, slidesCount, hasButtons = false, slidesPerView, nextBtnId, prevBtnId, hasSlideRemainingLeftSide, hasSlideRemainingRightSide}:propsType):ReactNode {
    // Conditional rendering
    if (hasButtons) {
        return (
            <div className="flex items-center justify-center gap-[20px] mt-[64px]">
                <button id={prevBtnId} data-active={hasSlideRemainingRightSide} className="slider-prev-next-btn flex">
                    <IconComponent name="chevron-right" size={16} />
                </button>
                <div className='flex gap-[12px] items-center justify-center'>
                    {
                        [... new Array(slidesCount)].map((item, index) => (
                            <div key={index} data-active={(activeIndex/slidesPerView === index)} className='slider-slide-bullet' />
                        ))
                    }
                </div>
                <button id={nextBtnId} data-active={hasSlideRemainingLeftSide} className="slider-prev-next-btn flex">
                    <IconComponent name="chevron-left" size={16} />
                </button>
            </div>
        );
    } else {
        return (
            <div className='flex gap-[12px] items-center justify-center mt-[64px] w-full'>
                {
                    [... new Array(slidesCount)].map((item, index) => (
                        <div key={index} data-active={(activeIndex/slidesPerView === index)} className='slider-slide-bullet' />
                    ))
                }
            </div>
        );
    }
}