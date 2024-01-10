// Importing part
import {ReactNode} from "react";
import IconComponent from "./iconComponent";
import {Swiper} from "swiper/types";

// Defining type of props
interface propsType {
    activeIndex: number;
    slidesPerView: number;
    swiper: Swiper | null;
    slidesCount: number;
    prevBtnId?: string;
    nextBtnId?: string;
    hasButtons?: boolean;
    theme?: 'theme' | 'white' | 'alert';
    hasNumbers?: boolean;
}

// Creating and exporting slider pagination as default
export default function SliderPaginationComponent({
    activeIndex,
    slidesCount,
    hasButtons = false,
    slidesPerView,
    nextBtnId,
    prevBtnId,
    theme = 'theme',
    hasNumbers = false,
    swiper
}:propsType):ReactNode {
    // Conditional rendering
    if (hasNumbers) {
        return (
            <div className='flex gap-[24px] items-center justify-center lg:mt-[64px] mt-[20px] w-full'>
                {
                    (slidesCount < 10)
                        ? [... new Array(slidesCount)].map((item, index) => (
                            <div 
                                key={index} 
                                data-active={(activeIndex/slidesPerView === index)} 
                                onClick={() => swiper?.slideTo(index * slidesPerView)}
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
                                            onClick={() => swiper?.slideTo(index * slidesPerView)}
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
                <div className="flex items-center justify-center gap-[20px] lg:mt-[64px] mt-[20px]">
                    <button id={prevBtnId} data-active={(activeIndex !== 0)} className={`slider-prev-next-btn${(theme === 'theme') ? '' : (theme === 'white') ? '-white' : '-alert'}`}>
                        <IconComponent name="chevron-right" size={16} />
                    </button>
                    <div className='flex gap-[12px] items-center justify-center'>
                        {
                            (slidesCount < 10)
                                ? [... new Array(slidesCount)].map((item, index) => (
                                    <div
                                        key={index}
                                        data-active={(activeIndex / slidesPerView === index)}
                                        onClick={() => swiper?.slideTo(index * slidesPerView)}
                                        className={`slider-slide-bullet${(theme === 'theme') ? '' : (theme === 'white') ? '-white' : '-alert'}`}
                                    />
                                )) : (
                                    <>
                                        {
                                            [... new Array(4)].map((item, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => swiper?.slideTo(index * slidesPerView)}
                                                    data-active={(Math.floor(activeIndex / slidesPerView) === index)}
                                                    className={`slider-slide-bullet${(theme === 'theme') ? '' : (theme === 'white') ? '-white' : '-alert'}`}
                                                />
                                            ))
                                        }
                                        <span className="text-[24px] text-lightGrey font-normal">...</span>
                                        <div
                                            data-active={(Math.floor(activeIndex / slidesPerView) === 10)}
                                            className={`slider-slide-bullet${(theme === 'theme') ? '' : (theme === 'white') ? '-white' : '-alert'}`}
                                        />
                                    </>
                                )
                        }
                    </div>
                    <button 
                        id={nextBtnId} 
                        data-active={(activeIndex !== ((slidesCount*slidesPerView)-slidesPerView))} 
                        className={`slider-prev-next-btn${(theme === 'theme') ? '' : (theme === 'white') ? '-white' : '-alert'}`}
                    >
                        <IconComponent name="chevron-left" size={16} />
                    </button>
                </div>
            );
        } else {
            return (
                <div className='flex gap-[12px] items-center justify-center lg:mt-[64px] mt-[20px] w-full'>
                    {
                        (slidesCount < 10)
                            ? [... new Array(slidesCount)].map((item, index) => (
                                <div
                                    key={index}
                                    data-active={(activeIndex / slidesPerView === index)}
                                    onClick={() => swiper?.slideTo(index * slidesPerView)}
                                    className={`slider-slide-bullet${(theme === 'theme') ? '' : (theme === 'white') ? '-white' : '-alert'}`}
                                />
                            )) : (
                                <>
                                    {
                                        [... new Array(4)].map((item, index) => (
                                            <div
                                                key={index}
                                                onClick={() => swiper?.slideTo(index * slidesPerView)}
                                                data-active={(Math.floor(activeIndex / slidesPerView) === index)}
                                                className={`slider-slide-bullet${(theme === 'theme') ? '' : (theme === 'white') ? '-white' : '-alert'}`}
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