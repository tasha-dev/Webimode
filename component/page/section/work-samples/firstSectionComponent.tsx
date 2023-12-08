// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import IconComponent from "@/chunk/iconComponent";
import {Dispatch, ReactNode, useState, useEffect} from "react";
import {Swiper} from "swiper/react";
import {Navigation} from "swiper/modules";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import 'swiper/css';

// Defining type of props
interface propsType {
    children: ReactNode;
}

// Creating and exporting first section of work samples page as default
export default function FirstSectionComponent({children}:propsType):ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [isMobileFilterModalOpened, setMobileFilterModalOpened]:[boolean, Dispatch<boolean>] = useState(false);

    // Using useEffect hook to prevent window to scroll when mobile filter modal is opened
    useEffect(() => {
        (isMobileFilterModalOpened)
            ? document.body.classList.add('overflow-hidden')
            : document.body.classList.remove('overflow-hidden')
    }, [isMobileFilterModalOpened])

    // Returning JSX
    return (
        <section className="lg:mb-[80px] mb-[36px]">
            <div className="container relative p-[20px]">
                <div className="absolute lg:block hidden top-0 left-0 w-full h-full pointer-events-none m-[20px]">
                    <div className="absolute top-0 right-[200px] w-[24px] h-[24px] aspect-square bg-themePurple rounded-full" />
                    <div className="w-[24px] h-[24px] aspect-square rounded-full bg-pink absolute top-0 left-[200px]" />
                    <div className="absolute w-[16px] h-[16px] aspect-square rounded-full bg-themeBlue right-0 top-[100px]" />
                    <div className="absolute w-[12px] h-[12px] aspect-square rounded-full bg-themePurple left-0 top-[80px]" />
                    <div className="w-[16px] h-[16px] aspect-square rounded-full bg-pink absolute right-[100px] top-[200px]" />
                    <div className="absolute left-[100px] top-[200px] w-[8px] h-[8px] aspect-square bg-themeBlue rounded-full" />
                </div>
                <header className="flex items-center justify-center flex-col lg:mb-[100px] mb-[24px]">
                    <div className="sign">انواع نمونه کار ها</div>
                    <h1 className="lg:text-[48px] text-[32px] font-normal text-dark lg:mb-[12px] mb-[8px] text-center">
                        <span className="font-bold text-theme inline-block ml-[1ch]">بهترین و متنوع ترین</span>
                        نمونه کار ها فقط در وبیمود
                    </h1>
                    <p className="paragraph text-center lg:w-[80%]">بهترین و متنوع ترین نمونه کار ها در تمام زمینه های طراحی سایت ، اپلیکیشن ، پوستر ، لوگو ، موشن گرافیک و.... را فقط در تیم وبیمود می توانید با بالاترین کیفیت پیدا کنید .</p>
                </header>
                <main>
                    <div className="lg:block hidden">
                        <div className="flex items-center gap-[24px]">
                            <button data-active={(activeIndexOfSlider !== 0)} className="slider-prev-next-btn shrink-0" id="work-smaples-first-slider-prev-btn">
                                <IconComponent name="chevron-right" size={16} />
                            </button>
                            <Swiper
                                className="w-full"
                                initialSlide={activeIndexOfSlider}
                                modules={[Navigation]}
                                spaceBetween={18}
                                slidesPerGroup={5}
                                slidesPerView={5}
                                onSlideChange={(event) => setActiveIndexOfSlider(event.activeIndex)}
                                navigation={{
                                    nextEl: '#work-smaples-first-slider-next-btn',
                                    prevEl: '#work-smaples-first-slider-prev-btn'
                                }}
                            >
                                {children}
                            </Swiper>
                            <button data-active={(activeIndexOfSlider !== 20)} className="slider-prev-next-btn shrink-0" id="work-smaples-first-slider-next-btn">
                                <IconComponent name="chevron-left" size={16} />
                            </button>
                        </div>
                        <SliderPaginationComponent activeIndex={activeIndexOfSlider} slidesCount={5} slidesPerView={5} />
                    </div>
                    <div className="lg:hidden block">
                        <button onClick={() => setMobileFilterModalOpened(true)} className="bg-lightestGrey w-full border-[1.5px] rounded-[12px] border-lightGrey flex items-center justify-between gap-[10px] p-[12px] text-lightGrey">
                            <div className="flex items-center gap-[12px] w-[80%]">
                                <span className="shrink-0 text-current"><IconComponent size={20} name="filter" /></span>
                                <span className="text-current text-[13px] font-normal truncate block w-full text-start">دسته بندی پروژه ها</span>
                            </div>
                            <span className="shrink-0 text-current"><IconComponent size={20} name="chevron-down" /></span>
                        </button>
                        <div data-opened={isMobileFilterModalOpened} className="fixed top-0 left-0 w-full transition-all duration-500 h-full bg-lighterGrey z-[100] overflow-auto data-[opened='false']:opacity-0 data-[opened='false']:invisible data-[opened='true']:opacity-100 data-[opened='true']:visible">
                            <div>
                                <div className="p-[20px] sticky top-0 left-0 w-full z-30 bg-lighterGrey border-b border-b-lightestDark">
                                    <button onClick={() => setMobileFilterModalOpened(false)} className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-lightGrey text-gray-600">
                                        <IconComponent size={20} name="circle-x" />
                                    </button>
                                </div>
                                <div className="p-[20px] z-20 flex flex-col gap-[20px]">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}