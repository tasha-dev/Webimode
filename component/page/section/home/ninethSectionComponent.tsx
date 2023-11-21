// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import IconComponent from "@/chunk/iconComponent";
import FeatureComponent from "@/chunk/page/home/ninethSection/featureComponent";
import Link from "next/link";
import {ReactNode, useState, Dispatch} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

// Creating and exporting nineth section of home page as default
export default function NinethSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);

    // Returning JSX
    return (
        <section className="lg:mt-[256px] mt-[196px] overflow-hidden">
            <div className="container p-[20px]">
                <header className="mb-[100px] flex flex-col items-center justify-center">
                    <div className="sign">آمار و ارغام</div>
                    <h4 className="lg:text-[48px] text-[20px] font-normal text-dark text-center lg:mb-[12px] mb-[8px]">
                        تیم وبیمود 
                        <span className="text-theme font-semibold mx-[1ch]">بهترین هارا</span>
                        <br className="lg:hidden block" />
                        به شما ارائه می هد   
                    </h4>
                    <p className="text-lightGrey font-normal lg:text-[20px] text-[13px] lg:leading-[36px] leading-[26px] text-center mb-[30px]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنا نلورم
                        <br className="lg:block hidden" />
                        ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .
                    </p>
                    <div className="lg:flex hidden gap-[24px] flex-wrap">
                        <Link href='/contact-us' className="btn-primary">
                            درخواست همکاری  
                            <IconComponent name="chevron-left" size={16} />
                        </Link>
                        <Link href='/work-samples' className="btn-secondary">
                            نمونه کار های ما    
                            <IconComponent name="chevron-left" size={16} />
                        </Link>
                    </div>
                </header>
                <main>
                    <div className="lg:grid hidden grid-cols-3 gap-[64px] mx-[calc(163px-20px)]">
                        <FeatureComponent percentage={56} theme="green" title="سئو بهینه تر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent>
                        <FeatureComponent percentage={79} theme="blue" title="سرعت بیشتر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent>
                        <FeatureComponent percentage={86} theme="orange" title="امنیت بالاتر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent>
                    </div>
                    <div className="lg:hidden block">
                        <Swiper
                            initialSlide={activeIndexOfSlider}
                            className="overflow-visible"
                            spaceBetween={20}
                            onSlideChange={(event) => setActiveIndexOfSlider(event.activeIndex)}
                        > 
                            <SwiperSlide><FeatureComponent percentage={56} theme="green" title="سئو بهینه تر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent></SwiperSlide>
                            <SwiperSlide><FeatureComponent percentage={79} theme="blue" title="سرعت بیشتر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent></SwiperSlide>
                            <SwiperSlide><FeatureComponent percentage={86} theme="orange" title="امنیت بالاتر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent></SwiperSlide>
                        </Swiper>
                        <div className='flex gap-[12px] items-center justify-center lg:w-auto w-full mt-[32px]'>
                            <div data-active={(activeIndexOfSlider === 0)} className='slider-slide-bullet' />
                            <div data-active={(activeIndexOfSlider === 1)} className='slider-slide-bullet' />
                            <div data-active={(activeIndexOfSlider === 2)} className='slider-slide-bullet' />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}