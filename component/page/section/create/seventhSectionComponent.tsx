// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from 'react';
import IconComponent from '@/chunk/iconComponent';
import ServiceItemComponent from '@/component/serviceItemComponent';
import Link from 'next/link';
import FigmaImage from '@/public/img/home/thirdSection/services/img-figma.png';
import CodeImage from '@/public/img/home/thirdSection/services/img-code.png';
import ChartsImage from '@/public/img/home/thirdSection/services/img-charts.png';
import PencilImage from '@/public/img/home/thirdSection/services/img-pencil.png';
import MobileImage from '@/public/img/home/thirdSection/services/img-mobile.png';
import SocialsImage from '@/public/img/home/thirdSection/services/img-socials.png';
import ManImage from '@/public/img/home/thirdSection/services/img-man.png';
import AiImage from '@/public/img/home/thirdSection/services/img-ai.png';
import SliderPaginationComponent from '@/chunk/sliderPaginationCompont';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import * as SwiperType from "swiper/types";
import 'swiper/css';

// Creating and exporting seventh section component as default
export default function SeventhSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveInderOfSlider]:[number, Dispatch<number>] = useState(0);
    const [slider, setSlider]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);

    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <header className='xl:mb-[40px] mb-[32px]'>
                    <div className='flex xl:gap-[50px] gap-[8px] xl:flex-row flex-col xl:items-stretch items-center justify-between'>
                        <div className='flex flex-col xl:items-start items-center'>
                            <div className='sign shrink-0'>بهترین حدمات</div>
                            <h4 className='xl:text-[48px] text-[20px] xl:text-start text-center'>
                                <span className='font-bold inline-block ml-[10px] text-theme'>خدمات</span>
                                <span className='font-normal inline-block text-dark'>تیم وبیمود</span>
                            </h4>
                        </div>
                        <div className='flex justify-around flex-col'>
                            <div className={'xl:flex hidden gap-[34px] shrink-0'}>
                                <Link href={'/contact-us'} className={'btn-primary'}>
                                    درخواست همکاری  
                                    <IconComponent name='chevron-left' size={16} />
                                </Link>
                                <Link href={'/work-samples'} className={'btn-secondary'}>
                                    نمونه کار های ما
                                    <IconComponent name={'chevron-left'} size={16} />
                                </Link>
                            </div>
                            <p className='paragraph xl:text-start text-center'>بهترین و با کیفیت ترین خدمات طراحی و پشتیبانی و برنامه نویسی را با تیم وبیمود در بلاترین سطح تجربه کنید !</p>
                        </div>
                    </div>
                </header>
                <main className='xl:grid hidden grid-cols-2 gap-[20px]'>
                <ServiceItemComponent icon='design' iconGradiant='blue' img={FigmaImage.src} title='طراحی UI UX'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='window' iconGradiant='purple' img={CodeImage.src} title='برنامه نویسی وب سایت'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='poll' iconGradiant='green' img={ChartsImage.src} title='تولید محتوا'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='pencil-paintbrush' iconGradiant='orange' img={PencilImage.src} title='طراحی لوگو'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='mobile' iconGradiant='deep-green' img={MobileImage.src} title='اپلیکیشن اندروید'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='slack' iconGradiant='dark-blue' img={SocialsImage.src} title='مدیریت شبکه اجتماعی'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='lang' iconGradiant='pink' img={ManImage.src} title='ترجمه مقالات و مدارک'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                <ServiceItemComponent icon='ai' iconGradiant='reversed-pink' img={AiImage.src} title='هوش مصنوعی'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
                </main>
                <div className="xl:hidden block">
                    <Swiper 
                        onSwiper={setSlider}
                        onSlideChange={(event) => {setActiveInderOfSlider(event.activeIndex)}}
                        initialSlide={activeIndexOfSlider}
                        modules={[Navigation]}
                        spaceBetween={20}
                        navigation={{
                            nextEl: '#next-services-slider-btn',
                            prevEl: '#prev-services-slider-btn',
                        }}
                    >
                        <SwiperSlide><ServiceItemComponent icon='design' iconGradiant='blue' img={FigmaImage.src} title='طراحی UI UX'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='window' iconGradiant='purple' img={CodeImage.src} title='برنامه نویسی وب سایت'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='poll' iconGradiant='green' img={ChartsImage.src} title='تولید محتوا'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='pencil-paintbrush' iconGradiant='orange' img={PencilImage.src} title='طراحی لوگو'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='mobile' iconGradiant='deep-green' img={MobileImage.src} title='اپلیکیشن اندروید'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='slack' iconGradiant='dark-blue' img={SocialsImage.src} title='مدیریت شبکه اجتماعی'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='lang' iconGradiant='pink' img={ManImage.src} title='ترجمه مقالات و مدارک'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='ai' iconGradiant='reversed-pink' img={AiImage.src} title='هوش مصنوعی'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                    </Swiper>
                    <SliderPaginationComponent 
                        swiper={slider}
                        activeIndex={activeIndexOfSlider} 
                        slidesCount={8} 
                        hasButtons 
                        slidesPerView={1} 
                        nextBtnId="next-services-slider-btn"
                        prevBtnId="prev-services-slider-btn" 
                    />
                </div> 
            </div>
        </section>
    );
}
