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
import * as SwiperTypes from 'swiper/types';

// Defining type of slider data
type sliderData = {
  img: string, 
  alt: string
}

// Creating and exporting fourth section of home page as default
export default function FourthSectionComponent():ReactNode {
  // Defining states of component
  const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
  const [activeIndexOfSliderMQ, setActiveIndexOfSliderMQ]:[number, Dispatch<number>] = useState(0);
  
  // Defining data of sliders to render
  const data:sliderData[] = [
    {alt: "عکس لوگو چت بی تی", img: chatGPTImage.src},
    {alt: "عکس لوگو جاوا", img: javaImage.src},
    {alt: "عکس لوگو سی پلاس پلاس", img: cPlusPlusImage.src},
    {alt: "عکس لوگو ایندیزاین", img: IndisignImage.src},
    {alt: "عکس لوگو سی اس اس", img: cssImage.src},
    {alt: "عکس لوگو ریکت", img: reactImage.src},
    {alt: "عکس لوگو پی اچ پی", img: phpImage.src},
    {alt: "عکس لوگو جاوااسکریپت", img: jsImage.src},
    {alt: "عکس لوگو اچ تی ام ال", img: htmlImage.src},
    {alt: "عکس لوگو فوتوشاپ", img: PhotoahopImage.src},
    {alt: "عکس لوگو ایلوستریتور", img: illustratorImage.src},
    {alt: "عکس لوگو ادوبی ایکس دی", img: XDImage.src},
    {alt: "عکس لوگو سی شارپ", img: cSharpImage.src},
    {alt: "عکس لوگو فیگما", img: figmaImage.src},
    {alt: "عکس لوگو چت بی تی", img: chatGPTImage.src},
    {alt: "عکس لوگو جاوا", img: javaImage.src},
    {alt: "عکس لوگو سی پلاس پلاس", img: cPlusPlusImage.src},
    {alt: "عکس لوگو ایندیزاین", img: IndisignImage.src},
    {alt: "عکس لوگو سی اس اس", img: cssImage.src},
    {alt: "عکس لوگو ریکت", img: reactImage.src},
    {alt: "عکس لوگو پی اچ پی", img: phpImage.src},
    {alt: "عکس لوگو جاوااسکریپت", img: jsImage.src},
    {alt: "عکس لوگو اچ تی ام ال", img: htmlImage.src},
    {alt: "عکس لوگو فوتوشاپ", img: PhotoahopImage.src},
    {alt: "عکس لوگو ایلوستریتور", img: illustratorImage.src},
    {alt: "عکس لوگو ادوبی ایکس دی", img: XDImage.src},
    {alt: "عکس لوگو سی شارپ", img: cSharpImage.src},
    {alt: "عکس لوگو فیگما", img: figmaImage.src},
    {alt: "عکس لوگو چت بی تی", img: chatGPTImage.src},
    {alt: "عکس لوگو جاوا", img: javaImage.src},
    {alt: "عکس لوگو سی پلاس پلاس", img: cPlusPlusImage.src},
    {alt: "عکس لوگو ایندیزاین", img: IndisignImage.src},
    {alt: "عکس لوگو سی اس اس", img: cssImage.src},
    {alt: "عکس لوگو ریکت", img: reactImage.src},
    {alt: "عکس لوگو پی اچ پی", img: phpImage.src},
    {alt: "عکس لوگو جاوااسکریپت", img: jsImage.src},
    {alt: "عکس لوگو اچ تی ام ال", img: htmlImage.src},
    {alt: "عکس لوگو فوتوشاپ", img: PhotoahopImage.src},
    {alt: "عکس لوگو ایلوستریتور", img: illustratorImage.src},
    {alt: "عکس لوگو ادوبی ایکس دی", img: XDImage.src},
    {alt: "عکس لوگو سی شارپ", img: cSharpImage.src},
    {alt: "عکس لوگو فیگما", img: figmaImage.src}
  ];

  // Defining functions for sorting animation of slider
  function addSortingAttr(event:SwiperTypes.Swiper):void {
    const Element3:HTMLElement | null = event.slides[event.activeIndex + 2];
    const Element4:HTMLElement | null = event.slides[event.activeIndex + 3];
    const Element5:HTMLElement | null = event.slides[event.activeIndex + 4];
    const Element6:HTMLElement | null = event.slides[event.activeIndex + 5];
    const Element7:HTMLElement | null = event.slides[event.activeIndex + 6];
    const Element8:HTMLElement | null = event.slides[event.activeIndex + 7];
    const Element9:HTMLElement | null = event.slides[event.activeIndex + 8];
    const Element10:HTMLElement | null = event.slides[event.activeIndex + 9];
    const Element11:HTMLElement | null = event.slides[event.activeIndex + 10];
    const Element12:HTMLElement | null = event.slides[event.activeIndex + 11];

    Element3?.firstElementChild?.setAttribute('data-view-index', '1');
    Element4?.firstElementChild?.setAttribute('data-view-index', '1');
    Element12?.firstElementChild?.setAttribute('data-view-index', '1');
    Element11?.firstElementChild?.setAttribute('data-view-index', '1');

    Element5?.firstElementChild?.setAttribute('data-view-index', '2');
    Element6?.firstElementChild?.setAttribute('data-view-index', '2');
    Element9?.firstElementChild?.setAttribute('data-view-index', '2');
    Element10?.firstElementChild?.setAttribute('data-view-index', '2');

    Element7?.firstElementChild?.setAttribute('data-view-index', '3');
    Element8?.firstElementChild?.setAttribute('data-view-index', '3');
  }

  function clearSortingAttr(event:SwiperTypes.Swiper):void {
    const Element3:HTMLElement | null = event.slides[event.activeIndex + 2];
    const Element4:HTMLElement | null = event.slides[event.activeIndex + 3];
    const Element5:HTMLElement | null = event.slides[event.activeIndex + 4];
    const Element6:HTMLElement | null = event.slides[event.activeIndex + 5];
    const Element7:HTMLElement | null = event.slides[event.activeIndex + 6];
    const Element8:HTMLElement | null = event.slides[event.activeIndex + 7];
    const Element9:HTMLElement | null = event.slides[event.activeIndex + 8];
    const Element10:HTMLElement | null = event.slides[event.activeIndex + 9];
    const Element11:HTMLElement | null = event.slides[event.activeIndex + 10];
    const Element12:HTMLElement | null = event.slides[event.activeIndex + 11];

    Element3?.firstElementChild?.setAttribute('data-view-index', '4');
    Element4?.firstElementChild?.setAttribute('data-view-index', '4');
    Element12?.firstElementChild?.setAttribute('data-view-index', '4');
    Element11?.firstElementChild?.setAttribute('data-view-index', '4');

    Element5?.firstElementChild?.setAttribute('data-view-index', '4');
    Element6?.firstElementChild?.setAttribute('data-view-index', '4');
    Element9?.firstElementChild?.setAttribute('data-view-index', '4');
    Element10?.firstElementChild?.setAttribute('data-view-index', '4');

    Element7?.firstElementChild?.setAttribute('data-view-index', '4');
    Element8?.firstElementChild?.setAttribute('data-view-index', '4');
  }

  function addSortingAttrMQ(event:SwiperTypes.Swiper):void {
    const Element2:HTMLElement | null = event.slides[event.activeIndex + 1];
    const Element3:HTMLElement | null = event.slides[event.activeIndex + 2];
    const Element4:HTMLElement | null = event.slides[event.activeIndex + 3];

    Element2?.firstElementChild?.setAttribute('data-view-index', '2');
    Element3?.firstElementChild?.setAttribute('data-view-index', '3');
    Element4?.firstElementChild?.setAttribute('data-view-index', '2');
  }

  function clearSortingAttrMQ(event:SwiperTypes.Swiper):void {
    const Element2:HTMLElement | null = event.slides[event.activeIndex + 1];
    const Element3:HTMLElement | null = event.slides[event.activeIndex + 2];
    const Element4:HTMLElement | null = event.slides[event.activeIndex + 3];

    Element2?.firstElementChild?.setAttribute('data-view-index', '4');
    Element3?.firstElementChild?.setAttribute('data-view-index', '4');
    Element4?.firstElementChild?.setAttribute('data-view-index', '4');
  }



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
        <main>
          <div className='lg:flex hidden items-center justify-between gap-[18px]'>
            <button id='prev-tech-slider-btn' data-active={(activeIndexOfSlider !== 0)} className='slider-prev-next-btn lg:flex hidden shrink-0'>
              <IconComponent size={16} name="chevron-right" />
            </button>
            <Swiper
              onSwiper={(event) => addSortingAttr(event)}
              modules={[Navigation, Autoplay, Mousewheel]}
              initialSlide={activeIndexOfSlider}
              direction='horizontal'
              mousewheel={true}
              slidesPerView={14}
              spaceBetween={32}
              autoplay={{delay: 2000}}
              grabCursor
              className='home-fourth-section-slider'
              onTouchMove={(event) => clearSortingAttr(event)}
              onSlideChange={(event) => {
                addSortingAttr(event);
                setActiveIndexOfSlider(event.activeIndex);
              }}
              navigation={{
                nextEl: '#next-tech-slider-btn',
                prevEl: '#prev-tech-slider-btn',
              }}
            >
              {
                data.map(item => item).map((item: sliderData, index: number) => (
                  <SwiperSlide key={index}>
                    <SliderItemComponent
                      alt={item.alt}
                      img={item.img}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <button id='next-tech-slider-btn' data-active={(activeIndexOfSlider !== 28)} className='slider-prev-next-btn lg:flex hidden shrink-0'>
              <IconComponent size={16} name="chevron-left" />
            </button>
          </div>
          <div className='lg:hidden flex items-center justify-between gap-[18px]'>
            <button id='prev-tech-slider-btn-mq' data-active={(activeIndexOfSlider !== 0)} className='slider-prev-next-btn lg:flex hidden shrink-0'>
              <IconComponent size={16} name="chevron-right" />
            </button>
            <Swiper
              onSwiper={(event) => addSortingAttrMQ(event)}
              modules={[Navigation, Autoplay, Mousewheel]}
              initialSlide={activeIndexOfSliderMQ}
              direction='horizontal'
              mousewheel={true}
              slidesPerView={5}
              spaceBetween={10}
              autoplay={{delay: 2000}}
              grabCursor
              className='home-fourth-section-slider-mq'
              onTouchMove={(event) => clearSortingAttrMQ(event)}
              onSlideChange={(event) => {
                addSortingAttrMQ(event);
                setActiveIndexOfSliderMQ(event.activeIndex);
              }}
              navigation={{
                nextEl: '#next-tech-slider-btn-mq',
                prevEl: '#prev-tech-slider-btn-mq',
              }}
            >
              {
                data.map(item => item).map((item: sliderData, index: number) => (
                  <SwiperSlide key={index}>
                    <SliderItemComponent
                      alt={item.alt}
                      img={item.img}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <button id='next-tech-slider-btn-mq' data-active={(activeIndexOfSlider !== 28)} className='slider-prev-next-btn lg:flex hidden shrink-0'>
              <IconComponent size={16} name="chevron-left" />
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}
