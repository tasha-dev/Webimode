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
    hasNumbers?: boolean;
}

// Creating and exporting slider pagination as default
export default function SliderPaginationComponent({activeIndex, slidesCount, hasButtons = false, slidesPerView, nextBtnId, prevBtnId, theme = 'theme', hasNumbers = false}:propsType):ReactNode {
    // Conditional rendering
    if (hasNumbers) {
        return (
            <div className='flex gap-[24px] items-center justify-center mt-[64px] w-full'>
                {
                    (slidesCount < 10)
                        ? [... new Array(slidesCount)].map((item, index) => (
                            <div 
                                key={index} 
                                data-active={(activeIndex/slidesPerView === index)} 
                                className={
                                    (theme === 'theme') 
                                    ? "slider-slide-bullet-number" 
                                    : "slider-slide-bullet-number-white"
                                }
                            >
                            </div>
                        )) : (
                            <>
                                {
                                    [... new Array(slidesCount)].slice(0,4).map((item, index) => (
                                        <div
                                            key={index}
                                            data-active={(Math.floor(activeIndex / slidesPerView) === index)}
                                            className={`${(theme === 'theme') ? "slider-slide-bullet-number": "slider-slide-bullet-number-white"}`}
                                        >
                                            {index + 1}
                                        </div>
                                    ))
                                }
                                <span className="text-[24px] text-lightGrey font-normal">...</span>
                                <div
                                    data-active={(Math.floor(activeIndex / slidesPerView) === 10)}
                                    className={
                                        (theme === 'theme')
                                            ? "slider-slide-bullet-number"
                                            : "slider-slide-bullet-number-white"
                                    }
                                >
                                    12
                                </div>
                            </>
                        )
                }
            </div>
        );
    } else {
        if (hasButtons) {
            return (
                <div className="flex items-center justify-center gap-[20px] mt-[64px]">
                    <button id={prevBtnId} data-active={(activeIndex !== 0)} className={(theme === 'theme') ? "slider-prev-next-btn" : "slider-prev-next-btn-white"}>
                        <IconComponent name="chevron-right" size={16} />
                    </button>
                    <div className='flex gap-[12px] items-center justify-center'>
                        {
                            (slidesCount < 10)
                                ? [... new Array(slidesCount)].map((item, index) => (
                                    <div
                                        key={index}
                                        data-active={(activeIndex / slidesPerView === index)}
                                        className={
                                            (theme === 'theme')
                                                ? "slider-slide-bullet"
                                                : "slider-slide-bullet-white"
                                        }
                                    />
                                )) : (
                                    <>
                                        {
                                            [... new Array(4)].map((item, index) => (
                                                <div
                                                    key={index}
                                                    data-active={(Math.floor(activeIndex / slidesPerView) === index)}
                                                    className={
                                                        (theme === 'theme')
                                                            ? "slider-slide-bullet"
                                                            : "slider-slide-bullet-white"
                                                    }
                                                />
                                            ))
                                        }
                                        <span className="text-[24px] text-lightGrey font-normal">...</span>
                                        <div
                                            data-active={(Math.floor(activeIndex / slidesPerView) === 10)}
                                            className={
                                                (theme === 'theme')
                                                    ? "slider-slide-bullet"
                                                    : "slider-slide-bullet-white"
                                            }
                                        />
                                    </>
                                )
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
                        (slidesCount < 10)
                            ? [... new Array(slidesCount)].map((item, index) => (
                                <div
                                    key={index}
                                    data-active={(activeIndex / slidesPerView === index)}
                                    className={
                                        (theme === 'theme')
                                            ? "slider-slide-bullet"
                                            : "slider-slide-bullet-white"
                                    }
                                />
                            )) : (
                                <>
                                    {
                                        [... new Array(4)].map((item, index) => (
                                            <div
                                                key={index}
                                                data-active={(Math.floor(activeIndex / slidesPerView) === index)}
                                                className={
                                                    (theme === 'theme')
                                                        ? "slider-slide-bullet"
                                                        : "slider-slide-bullet-white"
                                                }
                                            />
                                        ))
                                    }
                                    <span className="text-[24px] text-lightGrey font-normal">...</span>
                                    <div
                                        data-active={(Math.floor(activeIndex / slidesPerView) === 10)}
                                        className={
                                            (theme === 'theme')
                                                ? "slider-slide-bullet"
                                                : "slider-slide-bullet-white"
                                        }
                                    />
                                </>
                            )
                    }
                </div>
            );
        }
    }
}