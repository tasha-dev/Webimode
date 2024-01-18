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
import {Navigation, Autoplay, Mousewheel} from 'swiper/modules';

// Creating and exporting fourth section of home page as default
export default function FourthSectionComponent():ReactNode {
  // Defining states of component
  const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
  
  // Returning JSX
  return (
    <section className="lg:my-[128px] my-[50px]">
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
          <p className={'paragraph text-center'}>
              تیم وبیمود افتخار این را دارد که بتواند تمام نیاز های کارفمایان را در انواع زمینههای مختلف طراحی و برنامه نوسی و...
              <br className='lg:block hidden'/>
              در بهترین حالت ممکن برطرف کند .
          </p>
        </header>
        <main className='gap-[24px] flex items-center justify-center'>
          <button id='prev-tech-slider-btn' data-active={(activeIndexOfSlider !== 0)} className='slider-prev-next-btn lg:flex hidden shrink-0'>
            <IconComponent size={16} name="chevron-right" />
          </button>
          <Swiper 
              modules={[Navigation, Autoplay, Mousewheel]}
              initialSlide={activeIndexOfSlider}
              direction='horizontal'
              mousewheel={true}
              slidesPerView={14} 
              slidesPerGroup={14}
              spaceBetween={32}
              grabCursor
              onSlideChange={(event) => setActiveIndexOfSlider(event.activeIndex)}
              className='home-fourth-section-slider'
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '#next-tech-slider-btn',
                prevEl: '#prev-tech-slider-btn',
              }}
            >
                <div className='swiper-group'>
                  <SwiperSlide key={1}><SliderItemComponent alt="عکس لوگو چت بی تی" img={chatGPTImage.src} /></SwiperSlide>
                  <SwiperSlide key={2}><SliderItemComponent alt="عکس لوگو جاوا" img={javaImage.src} /></SwiperSlide>
                  <SwiperSlide key={3}><SliderItemComponent alt="عکس لوگو سی پلاس پلاس" img={cPlusPlusImage.src} /></SwiperSlide>
                  <SwiperSlide key={4}><SliderItemComponent alt="عکس لوگو ایندیزاین" img={IndisignImage.src} /></SwiperSlide>
                  <SwiperSlide key={5}><SliderItemComponent alt="عکس لوگو سی اس اس" img={cssImage.src} /></SwiperSlide>
                  <SwiperSlide key={6}><SliderItemComponent alt="عکس لوگو ریکت" img={reactImage.src} /></SwiperSlide>
                  <SwiperSlide key={7}><SliderItemComponent alt="عکس لوگو پی اچ پی" img={phpImage.src} /></SwiperSlide>
                  <SwiperSlide key={8}><SliderItemComponent alt="عکس لوگو جاوااسکریپت" img={jsImage.src} /></SwiperSlide>
                  <SwiperSlide key={9}><SliderItemComponent alt="عکس لوگو اچ تی ام ال" img={htmlImage.src} /></SwiperSlide>
                  <SwiperSlide key={10}><SliderItemComponent alt="عکس لوگو فوتوشاپ" img={PhotoahopImage.src} /></SwiperSlide>
                  <SwiperSlide key={11}><SliderItemComponent alt="عکس لوگو ایلوستریتور" img={illustratorImage.src} /></SwiperSlide>
                  <SwiperSlide key={12}><SliderItemComponent alt="عکس لوگو ادوبی ایکس دی" img={XDImage.src} /></SwiperSlide>
                  <SwiperSlide key={13}><SliderItemComponent alt="عکس لوگو سی شارپ" img={cSharpImage.src} /></SwiperSlide>
                  <SwiperSlide key={14}><SliderItemComponent alt="عکس لوگو فیگما" img={figmaImage.src} /></SwiperSlide>
                </div>
                <div className='swiper-group'>
                  <SwiperSlide key={15}><SliderItemComponent alt="عکس لوگو چت بی تی" img={chatGPTImage.src} /></SwiperSlide>
                  <SwiperSlide key={16}><SliderItemComponent alt="عکس لوگو جاوا" img={javaImage.src} /></SwiperSlide>
                  <SwiperSlide key={17}><SliderItemComponent alt="عکس لوگو سی پلاس پلاس" img={cPlusPlusImage.src} /></SwiperSlide>
                  <SwiperSlide key={18}><SliderItemComponent alt="عکس لوگو ایندیزاین" img={IndisignImage.src} /></SwiperSlide>
                  <SwiperSlide key={19}><SliderItemComponent alt="عکس لوگو سی اس اس" img={cssImage.src} /></SwiperSlide>
                  <SwiperSlide key={20}><SliderItemComponent alt="عکس لوگو ریکت" img={reactImage.src} /></SwiperSlide>
                  <SwiperSlide key={21}><SliderItemComponent alt="عکس لوگو پی اچ پی" img={phpImage.src} /></SwiperSlide>
                  <SwiperSlide key={22}><SliderItemComponent alt="عکس لوگو جاوااسکریپت" img={jsImage.src} /></SwiperSlide>
                  <SwiperSlide key={23}><SliderItemComponent alt="عکس لوگو اچ تی ام ال" img={htmlImage.src} /></SwiperSlide>
                  <SwiperSlide key={24}><SliderItemComponent alt="عکس لوگو فوتوشاپ" img={PhotoahopImage.src} /></SwiperSlide>
                  <SwiperSlide key={25}><SliderItemComponent alt="عکس لوگو ایلوستریتور" img={illustratorImage.src} /></SwiperSlide>
                  <SwiperSlide key={26}><SliderItemComponent alt="عکس لوگو ادوبی ایکس دی" img={XDImage.src} /></SwiperSlide>
                  <SwiperSlide key={27}><SliderItemComponent alt="عکس لوگو سی شارپ" img={cSharpImage.src} /></SwiperSlide>
                  <SwiperSlide key={28}><SliderItemComponent alt="عکس لوگو فیگما" img={figmaImage.src} /></SwiperSlide>
                </div>
                <div className='swiper-group'>
                  <SwiperSlide key={29}><SliderItemComponent alt="عکس لوگو چت بی تی" img={chatGPTImage.src} /></SwiperSlide>
                  <SwiperSlide key={30}><SliderItemComponent alt="عکس لوگو جاوا" img={javaImage.src} /></SwiperSlide>
                  <SwiperSlide key={31}><SliderItemComponent alt="عکس لوگو سی پلاس پلاس" img={cPlusPlusImage.src} /></SwiperSlide>
                  <SwiperSlide key={32}><SliderItemComponent alt="عکس لوگو ایندیزاین" img={IndisignImage.src} /></SwiperSlide>
                  <SwiperSlide key={33}><SliderItemComponent alt="عکس لوگو سی اس اس" img={cssImage.src} /></SwiperSlide>
                  <SwiperSlide key={34}><SliderItemComponent alt="عکس لوگو ریکت" img={reactImage.src} /></SwiperSlide>
                  <SwiperSlide key={35}><SliderItemComponent alt="عکس لوگو پی اچ پی" img={phpImage.src} /></SwiperSlide>
                  <SwiperSlide key={36}><SliderItemComponent alt="عکس لوگو جاوااسکریپت" img={jsImage.src} /></SwiperSlide>
                  <SwiperSlide key={37}><SliderItemComponent alt="عکس لوگو اچ تی ام ال" img={htmlImage.src} /></SwiperSlide>
                  <SwiperSlide key={38}><SliderItemComponent alt="عکس لوگو فوتوشاپ" img={PhotoahopImage.src} /></SwiperSlide>
                  <SwiperSlide key={39}><SliderItemComponent alt="عکس لوگو ایلوستریتور" img={illustratorImage.src} /></SwiperSlide>
                  <SwiperSlide key={40}><SliderItemComponent alt="عکس لوگو ادوبی ایکس دی" img={XDImage.src} /></SwiperSlide>
                  <SwiperSlide key={41}><SliderItemComponent alt="عکس لوگو سی شارپ" img={cSharpImage.src} /></SwiperSlide>
                  <SwiperSlide key={42}><SliderItemComponent alt="عکس لوگو فیگما" img={figmaImage.src} /></SwiperSlide>
                </div>
          </Swiper>
          <Swiper 
              modules={[Navigation, Autoplay, Mousewheel]}
              initialSlide={activeIndexOfSlider}
              direction='horizontal'
              mousewheel={true}
              slidesPerView={5} 
              slidesPerGroup={5}
              spaceBetween={20}
              grabCursor
              onSlideChange={(event) => setActiveIndexOfSlider(event.activeIndex)}
              className='home-fourth-section-slider-mq'
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '#next-tech-slider-btn',
                prevEl: '#prev-tech-slider-btn',
              }}
            >
            <div className='swiper-group'>
              <SwiperSlide key={43}><SliderItemComponent alt="عکس لوگو چت بی تی" img={chatGPTImage.src} /></SwiperSlide>
              <SwiperSlide key={44}><SliderItemComponent alt="عکس لوگو جاوا" img={javaImage.src} /></SwiperSlide>
              <SwiperSlide key={45}><SliderItemComponent alt="عکس لوگو سی پلاس پلاس" img={cPlusPlusImage.src} /></SwiperSlide>
              <SwiperSlide key={46}><SliderItemComponent alt="عکس لوگو ایندیزاین" img={IndisignImage.src} /></SwiperSlide>
              <SwiperSlide key={47}><SliderItemComponent alt="عکس لوگو سی اس اس" img={cssImage.src} /></SwiperSlide>
            </div>
            <div className='swiper-group'>
              <SwiperSlide key={48}><SliderItemComponent alt="عکس لوگو پی اچ پی" img={phpImage.src} /></SwiperSlide>
              <SwiperSlide key={49}><SliderItemComponent alt="عکس لوگو جاوااسکریپت" img={jsImage.src} /></SwiperSlide>
              <SwiperSlide key={50}><SliderItemComponent alt="عکس لوگو اچ تی ام ال" img={htmlImage.src} /></SwiperSlide>
              <SwiperSlide key={51}><SliderItemComponent alt="عکس لوگو فوتوشاپ" img={PhotoahopImage.src} /></SwiperSlide>
              <SwiperSlide key={52}><SliderItemComponent alt="عکس لوگو ایلوستریتور" img={illustratorImage.src} /></SwiperSlide>
            </div>
            <div className='swiper-group'>
              <SwiperSlide key={53}><SliderItemComponent alt="عکس لوگو ادوبی ایکس دی" img={XDImage.src} /></SwiperSlide>
              <SwiperSlide key={54}><SliderItemComponent alt="عکس لوگو سی شارپ" img={cSharpImage.src} /></SwiperSlide>
              <SwiperSlide key={55}><SliderItemComponent alt="عکس لوگو فیگما" img={figmaImage.src} /></SwiperSlide>
              <SwiperSlide key={56}><SliderItemComponent alt="عکس لوگو پی اچ پی" img={phpImage.src} /></SwiperSlide>
              <SwiperSlide key={57}><SliderItemComponent alt="عکس لوگو جاوااسکریپت" img={jsImage.src} /></SwiperSlide>
            </div>
          </Swiper>
          <button id='next-tech-slider-btn' data-active={(activeIndexOfSlider !== 28)} className='slider-prev-next-btn lg:flex hidden shrink-0'>
            <IconComponent size={16} name="chevron-left" />
          </button>
        </main>
      </div>
    </section>
  );
}
