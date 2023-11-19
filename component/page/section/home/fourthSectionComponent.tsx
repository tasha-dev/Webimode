// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from 'react';
import IconComponent from '@/chunk/iconComponent';
import chatGPTImage from '@/public/img/home/fourthSection/img-chat-gpt.png';
import javaImage from '@/public/img/home/fourthSection/img-java.png';
import cPlusPlusImage from '@/public/img/home/fourthSection/img-c++.png';
import IndisignImage from '@/public/img/home/fourthSection/img-indisign.png';
import reactImage from '@/public/img/home/fourthSection/img-react.png';
import cssImage from '@/public/img/home/fourthSection/img-css.png';
import phpImage from '@/public/img/home/fourthSection/img-php.png';
import jsImage from '@/public/img/home/fourthSection/img-js.png';
import htmlImage from '@/public/img/home/fourthSection/img-html.png';
import illustratorImage from '@/public/img/home/fourthSection/img-ilustrator.png';
import PhotoahopImage from '@/public/img/home/fourthSection/img-photoshop.png';
import XDImage from '@/public/img/home/fourthSection/img-xd.png';
import cSharpImage from '@/public/img/home/fourthSection/img-xd.png';
import figmaImage from '@/public/img/home/fourthSection/img-figma.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import SliderItemComponent from '@/chunk/page/home/fourthSection/sliderItemComponent';
import {Navigation} from 'swiper/modules';

// Creating and exporting fourth section of home page as default
export default function FourthSectionComponent():ReactNode {
  // Defining states of component
  const [isAnySlideRemainingOnRightSide, setSlideRemainingOnRightSide]:[boolean, Dispatch<boolean>] = useState(false);
  const [isAnySlideRemainingOnLeftSide, setSlideRemainingOnLeftSide]:[boolean, Dispatch<boolean>] = useState(true);
  const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
  
  // Returning JSX
  return (
    <section className="my-[256px]">
      <div className="container p-[20px]">
        <header className={'flex items-center justify-center flex-col mx-auto lg:mb-[40px] mb-[32px]'}>
          <div className={'sign'}>مهارت وبیمود</div>
          <h4 className={'relative lg:text-[48px] text-[20px] font-bold lg:mb-[8px] mb-[12px] text-center'}>
            <span className={'inline-block ml-[1ch] text-theme'}>مهارت های</span>
            <span className={'inline-block text-dark'}>تیم وبیمود</span>
            <span className={'text-theme absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
              <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
              <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
              <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
            </span>
          </h4>
          <p className={'lg:text-[20px] text-[13px] text-center text-lightGrey lg:leading-[36px] leading-[28px]'}>
              تیم وبیمود افتخار این را دارد که بتواند تمام نیاز های کارفمایان را در انواع زمینههای مختلف طراحی و برنامه نوسی و...
              <br className='lg:block hidden'/>
              در بهترین حالت ممکن برطرف کند .
          </p>
        </header>
        <main className='gap-[24px] flex items-center justify-center'>
          <button id='prev-tech-slider-btn' data-active={isAnySlideRemainingOnRightSide} className='slider-prev-next-btn lg:flex hidden'>
            <IconComponent size={16} name="chevron-right" />
          </button>
          <Swiper 
            modules={[Navigation]}
            initialSlide={activeIndexOfSlider}
            slidesPerView={14} 
            spaceBetween={32}
            breakpoints={{
              1024: {slidesPerView: 14},
              1: {slidesPerView: 4}
            }}
            onSlideChange={(event) => {
              setActiveIndexOfSlider(event.activeIndex)

              if (window.innerWidth > 1024) {
                if (event.activeIndex === 0) {
                  setSlideRemainingOnRightSide(false);
                  setSlideRemainingOnLeftSide(true);
                } else if (event.activeIndex === 16) {
                  setSlideRemainingOnRightSide(true);
                  setSlideRemainingOnLeftSide(false);
                } else if (event.activeIndex !== 16 && event.activeIndex !== 0) {
                  setSlideRemainingOnRightSide(true);
                  setSlideRemainingOnLeftSide(true);
                }
              }
            }}
            className='p-[20px] border border-lightGrey rounded-[20px] lg:bg-white bg-lighterGrey'
            navigation={{
              nextEl: '#next-tech-slider-btn',
              prevEl: '#prev-tech-slider-btn',
            }}
          >
              <SwiperSlide><SliderItemComponent alt="عکس لوگو چت بی تی" img={chatGPTImage.src} size={24} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو جاوا" img={javaImage.src} size={28} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو سی پلاس پلاس"  img={cPlusPlusImage.src} size={32} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو ایندیزاین" img={IndisignImage.src} size={36} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو ریکت" img={reactImage.src} size={40} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو سی اس اس" img={cssImage.src} size={48} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو پی اچ پی" img={phpImage.src} size={56} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو جاوااسکریپت" img={jsImage.src} size={56} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو اچ تی ام ال" img={htmlImage.src} size={56} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو ایلوستریتور" img={illustratorImage.src} size={48} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو فوتوشاپ" img={PhotoahopImage.src} size={40} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو ادوبی ایکس دی" img={XDImage.src} size={36} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو سی شارپ" img={cSharpImage.src} size={32} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو فیگما" img={figmaImage.src} size={28} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو جاوا" img={javaImage.src} size={24} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو چت بی تی" img={chatGPTImage.src} size={24} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو جاوا" img={javaImage.src} size={28} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو سی پلاس پلاس" img={cPlusPlusImage.src} size={32} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو ایندیزاین" img={IndisignImage.src} size={36} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو ریکت" img={reactImage.src} size={40} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو سی اس اس" img={cssImage.src} size={48} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو پی اچ پی" img={phpImage.src} size={56} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو جاوااسکریپت" img={jsImage.src} size={56} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو اچ تی ام ال" img={htmlImage.src} size={56} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو ایلوستریتور" img={illustratorImage.src} size={48} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو فوتوشاپ" img={PhotoahopImage.src} size={40} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو ادوبی ایکس دی" img={XDImage.src} size={36} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو سی شارپ" img={cSharpImage.src} size={32} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو فیگما" img={figmaImage.src} size={28} /></SwiperSlide>
              <SwiperSlide><SliderItemComponent alt="عکس لوگو جاوا" img={javaImage.src} size={24} /></SwiperSlide>
          </Swiper>
          <button id='next-tech-slider-btn' data-active={isAnySlideRemainingOnLeftSide} className='slider-prev-next-btn lg:flex hidden'>
            <IconComponent size={16} name="chevron-left" />
          </button>
        </main>
      </div>
    </section>
  );
}
