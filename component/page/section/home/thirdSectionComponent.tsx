// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import IconComponent from '@/chunk/iconComponent';
import ServiceItemComponent from '@/chunk/page/home/thirdSection/serviceItemComponent';
import Link from 'next/link';
import {Dispatch, ReactNode, useState} from 'react';
import FigmaImage from '@/public/img/home/thirdSection/services/img-figma.png';
import CodeImage from '@/public/img/home/thirdSection/services/img-code.png';
import ChartsImage from '@/public/img/home/thirdSection/services/img-charts.png';
import PencilImage from '@/public/img/home/thirdSection/services/img-pencil.png';
import MobileImage from '@/public/img/home/thirdSection/services/img-mobile.png';
import SocialsImage from '@/public/img/home/thirdSection/services/img-socials.png';
import ManImage from '@/public/img/home/thirdSection/services/img-man.png';
import AiImage from '@/public/img/home/thirdSection/services/img-ai.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

// Creating and exporting third section component as default
export default function ThirdSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveInderOfSlider]:[number, Dispatch<number>] = useState(0);
    const [isAnySlideRemainingOnRightSide, setSlideRemainingOnRightSide]:[boolean, Dispatch<boolean>] = useState(false);
    const [isAnySlideRemainingOnLeftSide, setSlideRemainingOnLeftSide]:[boolean, Dispatch<boolean>] = useState(true);
    
    // Returning JSX
    return (
        <section className='xl:mt-[500px] mt-[196px]'>
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
                            <p className='text-lightGrey xl:text-start text-center xl:text-[20px] text-[13px] font-normal xl:truncate'>بهترین و با کیفیت ترین خدمات طراحی و پشتیبانی و برنامه نویسی را با تیم وبیمود در بلاترین سطح تجربه کنید !</p>
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
                        </div>
                    </div>
                </header>
                <main className='xl:grid hidden grid-cols-2 gap-[20px]'>
                <ServiceItemComponent icon='design' iconGradiant='blue' img={FigmaImage.src} hasButtons hasMobileImageInLeft title='طراحی UI UX'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent>
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
                        initialSlide={activeIndexOfSlider}
                        modules={[Navigation]}
                        spaceBetween={10}
                        navigation={{
                            nextEl: '#prev-services-slider-btn',
                            prevEl: '#next-services-slider-btn',
                        }}
                        onSlideChange={(event) => {
                            setActiveInderOfSlider(event.activeIndex);

                            if (event.activeIndex === 0) {
                                setSlideRemainingOnRightSide(false);
                                setSlideRemainingOnLeftSide(true);
                              } else if (event.activeIndex === 7) {
                                setSlideRemainingOnRightSide(true);
                                setSlideRemainingOnLeftSide(false);
                              } else if (event.activeIndex !== 7 && event.activeIndex !== 0) {
                                setSlideRemainingOnRightSide(true);
                                setSlideRemainingOnLeftSide(true);
                              }
                          }}
                    >
                        <SwiperSlide><ServiceItemComponent icon='design' iconGradiant='blue' img={FigmaImage.src} hasButtons hasMobileImageInLeft title='طراحی UI UX'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='window' iconGradiant='purple' img={CodeImage.src} title='برنامه نویسی وب سایت'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='poll' iconGradiant='green' img={ChartsImage.src} title='تولید محتوا'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='pencil-paintbrush' iconGradiant='orange' img={PencilImage.src} title='طراحی لوگو'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='mobile' iconGradiant='deep-green' img={MobileImage.src} title='اپلیکیشن اندروید'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='slack' iconGradiant='dark-blue' img={SocialsImage.src} title='مدیریت شبکه اجتماعی'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='lang' iconGradiant='pink' img={ManImage.src} title='ترجمه مقالات و مدارک'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                        <SwiperSlide><ServiceItemComponent icon='ai' iconGradiant='reversed-pink' img={AiImage.src} title='هوش مصنوعی'>بهترین طراحی طراحی و تجربه کاربری در زمینه وب سایت و اپلیکیشن با مدرن ترین متود های روز دنیا</ServiceItemComponent></SwiperSlide>
                    </Swiper>
                    <div className='flex justify-between items-center mx-[32px] mt-[40px]'>
                        <button id='next-services-slider-btn' data-active={isAnySlideRemainingOnRightSide} className='slider-prev-next-btn sm:flex hidden'>
                            <IconComponent name='chevron-right' size={16} />
                        </button>
                        <div className='flex gap-[12px] items-center justify-center lg:w-auto w-full'>
                            <div data-active={(activeIndexOfSlider === 0)} className='slider-slide-bullet' />
                            <div data-active={(activeIndexOfSlider === 1)} className='slider-slide-bullet' />
                            <div data-active={(activeIndexOfSlider === 2)} className='slider-slide-bullet' />
                            <div data-active={(activeIndexOfSlider === 3)} className='slider-slide-bullet' />
                            <div data-active={(activeIndexOfSlider === 4)} className='slider-slide-bullet' />
                            <div data-active={(activeIndexOfSlider === 5)} className='slider-slide-bullet' />
                            <div data-active={(activeIndexOfSlider === 6)} className='slider-slide-bullet' />
                            <div data-active={(activeIndexOfSlider === 7)} className='slider-slide-bullet' />
                        </div>
                        <button id='prev-services-slider-btn' data-active={isAnySlideRemainingOnLeftSide} className='slider-prev-next-btn sm:flex hidden'>
                            <IconComponent name='chevron-left' size={16} />
                        </button>
                    </div>
                </div> 
            </div>
        </section>
    );
}
