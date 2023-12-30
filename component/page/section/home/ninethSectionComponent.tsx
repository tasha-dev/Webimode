// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import IconComponent from "@/chunk/iconComponent";
import FeatureComponent from "@/chunk/page/home/ninethSection/featureComponent";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import Link from "next/link";
import {ReactNode, useState, Dispatch} from "react";
import * as SwiperType from "swiper/types";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

// Creating and exporting nineth section of home page as default
export default function NinethSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [slider, setSlider]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);

    // Returning JSX
    return (
        <section className="lg:mt-[128px] mt-[50px] overflow-hidden">
            <div className="container p-[20px]">
                <header className="mb-[100px] flex flex-col items-center justify-center">
                    <div className="sign">آمار و ارغام</div>
                    <h4 className="lg:text-[48px] text-[20px] font-normal text-dark text-center lg:mb-[12px] mb-[8px]">
                        تیم وبیمود 
                        <span className="text-theme font-semibold mx-[1ch]">بهترین هارا</span>
                        <br className="lg:hidden block" />
                        به شما ارائه می هد   
                    </h4>
                    <p className="paragraph text-center mb-[30px]">
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
                            onSwiper={setSlider}
                            initialSlide={activeIndexOfSlider}
                            className="overflow-visible"
                            spaceBetween={20}
                            onSlideChange={(event) => setActiveIndexOfSlider(event.activeIndex)}
                        > 
                            <SwiperSlide><FeatureComponent percentage={56} theme="green" title="سئو بهینه تر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent></SwiperSlide>
                            <SwiperSlide><FeatureComponent percentage={79} theme="blue" title="سرعت بیشتر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent></SwiperSlide>
                            <SwiperSlide><FeatureComponent percentage={86} theme="orange" title="امنیت بالاتر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent></SwiperSlide>
                        </Swiper>
                        <SliderPaginationComponent swiper={slider} activeIndex={activeIndexOfSlider} slidesCount={3} slidesPerView={1} />
                    </div>
                </main>
            </div>
        </section>
    );
}