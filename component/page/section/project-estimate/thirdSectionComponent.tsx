// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import IconComponent from "@/chunk/iconComponent";
import {Dispatch, ReactNode, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import ProjectComponent from "@/component/projectComponent";
import ProjectImage from '@/public/img/blog/img-random.png';
import * as SwiperType from "swiper/types";
import 'swiper/css';

// Creating and exporting third section of estimate page as default
export default function ThirdSectionComponent():ReactNode {
    // Defining states of component
    const [activeSliderIndex, setActiveSliderIndex]:[number, Dispatch<number>] = useState(0);
    const [activeSliderIndexMQ, setActiveSliderIndexMQ]:[number, Dispatch<number>] = useState(0);
    const [slider, setSlider]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    const [sliderMQ, setSliderMQ]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);

    // Returning JSX
    return (
        <div className="lg:py-[100px] py-[50px]">
            <section className="bg-gradient-to-r from-darkerTheme to-theme lg:py-[64px] py-[20px]">
                <div className="container p-[20px]">
                    <header className="flex items-center lg:justify-between justify-center gap-[10px] flex-wrap lg:mb-[44px] mb-[24px]">
                        <h4 className="lg:text-[36px] text-[20px] font-normal text-white lg:text-start text-center">
                            <span className="font-semibold ml-[1ch] inline-block relative">
                                پرفروش ترین
                                <span className={'text-white absolute right-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                                    <span className={'self-start'}><IconComponent name={'star'} size={14} /></span>
                                    <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                    <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                                </span>
                            </span>
                            سایت های فروشگاهی
                        </h4>
                        <div className="lg:flex hidden items-center gap-[24px]">
                            <button
                                data-active={(activeSliderIndex !== 0)}
                                id="estimate-2-section-slider-prev-btn"
                                className="slider-prev-next-btn-white"
                            >
                                <IconComponent name="chevron-right" size={16} />
                            </button>
                            <button
                                data-active={(activeSliderIndex !== 16)}
                                id="estimate-2-section-slider-next-btn"
                                className="slider-prev-next-btn-white"
                            >
                                <IconComponent name="chevron-left" size={16} />
                            </button>
                        </div>
                    </header>
                    <main>
                        <div className="lg:block hidden">
                            <Swiper
                                onSwiper={setSlider}
                                initialSlide={activeSliderIndex}
                                onSlideChange={(event) => setActiveSliderIndex(event.activeIndex)}
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerGroup={4}
                                slidesPerView={4}
                                navigation={{
                                    prevEl: '#estimate-2-section-slider-prev-btn',
                                    nextEl: '#estimate-2-section-slider-next-btn'
                                }}
                            >
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            </Swiper>
                            <SliderPaginationComponent
                                swiper={slider}
                                theme="white"
                                activeIndex={activeSliderIndex}
                                slidesPerView={4}
                                slidesCount={5}
                            />
                        </div>
                        <div className="lg:hidden block">
                            <Swiper
                                onSwiper={setSliderMQ}
                                initialSlide={activeSliderIndexMQ}
                                onSlideChange={(event) => setActiveSliderIndexMQ(event.activeIndex)}
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerGroup={1}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: '#estimate-2-section-slider-prev-btn-mq',
                                    nextEl: '#estimate-2-section-slider-next-btn-mq'
                                }}
                            >
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                                <SwiperSlide><ProjectComponent img={ProjectImage.src} link="#" minPrice={2450000} maxPrice={7100000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                            </Swiper>
                            <SliderPaginationComponent
                                swiper={sliderMQ}
                                hasButtons
                                prevBtnId="estimate-2-section-slider-prev-btn-mq"
                                nextBtnId="estimate-2-section-slider-next-btn-mq"
                                theme="white"
                                activeIndex={activeSliderIndexMQ}
                                slidesPerView={1}
                                slidesCount={5}
                            />
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
}