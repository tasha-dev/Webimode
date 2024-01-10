// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import BlogGenreHeaderComponent from "@/chunk/page/blog/blogGenreHeaderComponent";
import {Swiper, SwiperSlide} from 'swiper/react';
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import BlogComponent from "@/component/blogComponent";
import RandomImage from '@/public/img/blog/img-random.png';
import {Navigation} from "swiper/modules";
import * as SwiperType from "swiper/types";
import 'swiper/css';

// Creating and exporting third section of blog page as default
export default function ThirdSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [activeIndexOfSliderXL, setActiveIndexOfSliderXL]:[number, Dispatch<number>] = useState(0);
    const [activeIndexOfSliderLG, setActiveIndexOfSliderLG]:[number, Dispatch<number>] = useState(0);
    const [slider, setSlider]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    const [sliderXL, setSliderXL]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    const [sliderLG, setSliderLG]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);

    // Returning JSX
    return (
        <section className="lg:mt-[80px] mt-[50px]">
            <div className="container p-[20px]">
                <BlogGenreHeaderComponent highlightedTitle={'داغ ترین'} nonHighlightedTitle="مقالات" link="#" />
                <main>
                    <div className="xl:block hidden">
                        <Swiper
                            onSwiper={setSlider}
                            modules={[Navigation]}
                            initialSlide={activeIndexOfSlider}
                            spaceBetween={20}
                            onSlideChange={(event) => setActiveIndexOfSlider(event.activeIndex)}
                            navigation={{
                                nextEl: '#hot-blogs-next-slide-btn',
                                prevEl: '#hot-blogs-prev-slide-btn'
                            }}
                        >
                            <SwiperSlide>
                                <div className="grid grid-cols-3 gap-y-[32px] gap-x-[20px]">
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid grid-cols-3 gap-y-[32px] gap-x-[20px]">
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid grid-cols-3 gap-y-[32px] gap-x-[20px]">
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid grid-cols-3 gap-y-[32px] gap-x-[20px]">
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid grid-cols-3 gap-y-[32px] gap-x-[20px]">
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <SliderPaginationComponent
                            swiper={slider}
                            hasButtons 
                            nextBtnId="hot-blogs-next-slide-btn" 
                            prevBtnId="hot-blogs-prev-slide-btn" 
                            slidesPerView={1} 
                            slidesCount={5} 
                            activeIndex={activeIndexOfSlider} 
                        />
                    </div>
                    <div className="xl:hidden lg:block hidden">
                        <Swiper
                            onSwiper={setSliderXL}
                            modules={[Navigation]}
                            initialSlide={activeIndexOfSliderXL}
                            spaceBetween={20}
                            onSlideChange={(event) => setActiveIndexOfSliderXL(event.activeIndex)}
                            navigation={{
                                nextEl: '#hot-blogs-next-slide-btn-xl',
                                prevEl: '#hot-blogs-prev-slide-btn-xl'
                            }}
                        >
                            <SwiperSlide>
                                <div className="grid grid-cols-2 gap-y-[32px] gap-x-[20px]">
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid grid-cols-2 gap-y-[32px] gap-x-[20px]">
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid grid-cols-2 gap-y-[32px] gap-x-[20px]">
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid grid-cols-2 gap-y-[32px] gap-x-[20px]">
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="grid grid-cols-2 gap-y-[32px] gap-x-[20px]">
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                    <BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <SliderPaginationComponent
                            swiper={sliderLG}
                            hasButtons 
                            nextBtnId="hot-blogs-next-slide-btn-xl" 
                            prevBtnId="hot-blogs-prev-slide-btn-xl" 
                            slidesPerView={1} 
                            slidesCount={5} 
                            activeIndex={activeIndexOfSliderXL} 
                        />
                    </div>
                    <div className="lg:hidden block">
                        <Swiper
                            onSwiper={setSliderLG}
                            modules={[Navigation]}
                            initialSlide={activeIndexOfSliderLG}
                            spaceBetween={20}
                            onSlideChange={(event) => setActiveIndexOfSliderLG(event.activeIndex)}
                            navigation={{
                                nextEl: '#hot-blogs-next-slide-btn-lg',
                                prevEl: '#hot-blogs-prev-slide-btn-lg'
                            }}
                        >
                            <SwiperSlide><BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                        </Swiper>
                        <SliderPaginationComponent
                            swiper={sliderXL}
                            hasButtons 
                            nextBtnId="hot-blogs-next-slide-btn-lg" 
                            prevBtnId="hot-blogs-prev-slide-btn-lg" 
                            slidesPerView={1} 
                            slidesCount={5} 
                            activeIndex={activeIndexOfSliderLG} 
                        />
                    </div>
                </main>
            </div>
        </section>
    );
}