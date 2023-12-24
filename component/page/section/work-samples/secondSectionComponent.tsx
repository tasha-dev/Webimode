// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import ProjectImage from '@/public/img/blog/img-random.png';
import ProjectComponent from "@/component/projectComponent";
import {Swiper, SwiperSlide} from "swiper/react";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import * as SwiperType from "swiper/types";
import 'swiper/css';

// Defining type of props
interface propsType {
    filtering: string;
}

// Creating and exporting second section of work samples page as default
export default function SecondSectionComponent({filtering}:propsType):ReactNode {
    // Defining states of component
    const [activeIndex, setActiveIndex]:[number, Dispatch<number>] = useState(0);
    const [activeIndexXL, setActiveIndexXL]:[number, Dispatch<number>] = useState(0);
    const [activeIndexLG, setActiveIndexLG]:[number, Dispatch<number>] = useState(0);
    const [slider, setSlider]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    const [sliderXL, setSliderXL]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    const [sliderLG, setSliderLG]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    
    // Returning JSX
    return (
        <section className="lg:mb-[234px] mb-[50px]">
            <main className="container p-[20px]">
                <div className="xl:block hidden">
                    <Swiper
                        onSwiper={setSlider}
                        initialSlide={activeIndex}
                        spaceBetween={20}
                        slidesPerGroup={5}
                        slidesPerView={5}
                        onSlideChange={(event) => setActiveIndex(event.activeIndex)}
                    >
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                    </Swiper>
                    <SliderPaginationComponent swiper={slider} activeIndex={activeIndex} slidesCount={4*12} slidesPerView={4} hasNumbers  />
                </div>
                <div className="xl:hidden lg:block hidden">
                    <Swiper
                        onSwiper={setSliderXL}
                        initialSlide={activeIndexXL}
                        spaceBetween={20}
                        slidesPerGroup={2}
                        slidesPerView={2}
                        onSlideChange={(event) => setActiveIndexXL(event.activeIndex)}
                    >
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                    </Swiper>
                    <SliderPaginationComponent swiper={sliderXL} activeIndex={activeIndexXL} slidesCount={24} slidesPerView={2} hasNumbers  />
                </div>
                <div className="lg:hidden block">
                    <Swiper
                        onSwiper={setSliderLG}
                        initialSlide={activeIndexLG}
                        spaceBetween={20}
                        slidesPerGroup={1}
                        slidesPerView={1}
                        onSlideChange={(event) => setActiveIndexLG(event.activeIndex)}
                    >
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                        <SwiperSlide><ProjectComponent theme="theme" img={ProjectImage.src} link="#" maxPrice={7100000} minPrice={2450000} rating={4.5} title="سایت فروشگاهی آترامارت">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</ProjectComponent></SwiperSlide>
                    </Swiper>
                    <SliderPaginationComponent swiper={sliderLG} activeIndex={activeIndexLG} slidesCount={12} slidesPerView={1} hasNumbers />
                </div>
            </main>
        </section>
    );
}