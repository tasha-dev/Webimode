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
import 'swiper/css';

// Creating and exporting seventh section of blog page as default
export default function SeventhSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [activeIndexOfSliderXL, setActiveIndexOfSliderXL]:[number, Dispatch<number>] = useState(0);
    const [activeIndexOfSliderLG, setActiveIndexOfSliderLG]:[number, Dispatch<number>] = useState(0);

    // Returning JSX
    return (
        <section className="lg:mt-[200px] mt-[50px]">
            <div className="container p-[20px]">
                <BlogGenreHeaderComponent highlightedTitle={'پربازدید ترین'} nonHighlightedTitle="مقالات" link="#" />
                <main>
                    <div className="xl:block hidden">
                        <Swiper
                            modules={[Navigation]}
                            initialSlide={activeIndexOfSlider}
                            spaceBetween={20}
                            onSlideChange={(event) => setActiveIndexOfSlider(event.activeIndex)}
                            navigation={{
                                nextEl: '#most-viewed-blogs-next-slide-btn',
                                prevEl: '#most-viewed-blogs-prev-slide-btn'
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
                        <SliderPaginationComponent hasButtons nextBtnId="most-viewed-blogs-next-slide-btn" prevBtnId="most-viewed-blogs-prev-slide-btn" slidesPerView={1} slidesCount={5} activeIndex={activeIndexOfSlider} />
                    </div>
                    <div className="xl:hidden lg:block hidden">
                        <Swiper
                            modules={[Navigation]}
                            initialSlide={activeIndexOfSliderXL}
                            spaceBetween={20}
                            onSlideChange={(event) => setActiveIndexOfSliderXL(event.activeIndex)}
                            navigation={{
                                nextEl: '#most-viewed-blogs-next-slide-btn-xl',
                                prevEl: '#most-viewed-blogs-prev-slide-btn-xl'
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
                        <SliderPaginationComponent hasButtons nextBtnId="most-viewed-blogs-next-slide-btn-xl" prevBtnId="most-viewed-blogs-prev-slide-btn-xl" slidesPerView={1} slidesCount={5} activeIndex={activeIndexOfSliderXL} />
                    </div>
                    <div className="lg:hidden block">
                        <Swiper
                            modules={[Navigation]}
                            initialSlide={activeIndexOfSliderLG}
                            spaceBetween={20}
                            onSlideChange={(event) => setActiveIndexOfSliderLG(event.activeIndex)}
                            navigation={{
                                nextEl: '#most-viewed-blogs-next-slide-btn-lg',
                                prevEl: '#most-viewed-blogs-prev-slide-btn-lg'
                            }}
                        >
                            <SwiperSlide><BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent date={new Date()} genre="دیجیتال" img={RandomImage.src} link="#" title="مدرن ترین سبک های طراحی در 2023">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                        </Swiper>
                        <SliderPaginationComponent hasButtons nextBtnId="most-viewed-blogs-next-slide-btn-lg" prevBtnId="most-viewed-blogs-prev-slide-btn-lg" slidesPerView={1} slidesCount={5} activeIndex={activeIndexOfSliderLG} />
                    </div>
                </main>
            </div>
        </section>
    );
}