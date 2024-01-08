// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState, useEffect, MutableRefObject, useRef} from "react";
import FeaturesComponent from "@/chunk/page/home/seventhSection/featuresComponent";
import IconComponent from "@/chunk/iconComponent";
import {Swiper, SwiperSlide} from "swiper/react";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import doElsCollide from "@/utils/doElsCollide";
import * as SwiperType from "swiper/types";
import 'swiper/css';
import SkipButtonComponent from "@/chunk/skipButtonComponent";

// Creating and exporting seventh section of home page as default
export default function SeventhSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [activeFeatureIndex, setActiveFeatureIndex]:[number, Dispatch<number>] = useState(1);
    const [slider, setSlider]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);

    // Defining refrences
    const firstLineHelper:MutableRefObject<any> = useRef();
    const secondLineHelper:MutableRefObject<any> = useRef();
    const thirdLineHelper:MutableRefObject<any> = useRef();
    const fourthLineHelper:MutableRefObject<any> = useRef();
    const fifthLineHelper:MutableRefObject<any> = useRef();
    const sixthLineHelper:MutableRefObject<any> = useRef();
    const mainStickyPart:MutableRefObject<any> = useRef();

    // Using useEffect hook to animate
    useEffect(() => {
      function handleAnimate(): void {
        if (innerWidth > 1024) {
          if (doElsCollide(firstLineHelper.current, mainStickyPart.current)) {
            setActiveFeatureIndex(1);
          } else if (doElsCollide(secondLineHelper.current, mainStickyPart.current)) {
            setActiveFeatureIndex(2);
          } else if (doElsCollide(thirdLineHelper.current, mainStickyPart.current)) {
            setActiveFeatureIndex(3);
          } else if (doElsCollide(fourthLineHelper.current, mainStickyPart.current)) {
            setActiveFeatureIndex(4);
          } else if (doElsCollide(fifthLineHelper.current, mainStickyPart.current)) {
            setActiveFeatureIndex(5);
          } else if (doElsCollide(sixthLineHelper.current, mainStickyPart.current)) {
            setActiveFeatureIndex(6);
          }
        } else {
          setActiveFeatureIndex(1);
        }
      }

      addEventListener('scroll', handleAnimate);
      
      return () => removeEventListener('scroll', handleAnimate);
    }, [])

    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <header className="lg:mb-[100px] mb-[56px] lg:block flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center">
                        <div className="sign">امنیت وبیمود</div>
                    </div>
                    <div className="flex lg:flex row flex-col items-center lg:justify-between justify-center lg:gap-[100px] gap-[8px]">
                        <div>
                            <h4 className="lg:text-[48px] text-[20px] block text-dark font-normal whitespace-nowrap relative text-center">
                                ما 
                                <span className="text-theme mr-[1ch] font-bold">امنیت پرداختی و سرویس</span>    
                                <span className={'text-theme absolute right-[102%] bottom-full lg:flex hidden flex-col w-[30px]'}>
                                    <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                    <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                    <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                                </span>
                            </h4>
                            <h4 className="lg:text-[48px] text-[20px] whitespace-nowrap block text-dark font-normal text-center">شما را تضمین میکنیم.</h4>
                        </div>
                        <p className="paragraph text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان .</p>
                    </div>
                </header>
                <div className="h-[4200px] relative lg:block hidden">
                    <div className="absolute top-0 left-0 w-full">
                        <div ref={firstLineHelper} className="w-full left-0 h-[calc(4200px/6)]"/>
                        <div ref={secondLineHelper} className="w-full left-0 h-[calc(4200px/6)]"/>
                        <div ref={thirdLineHelper} className="w-full left-0 h-[calc(4200px/6)]"/>
                        <div ref={fourthLineHelper} className="w-full left-0 h-[calc(4200px/6)]"/>
                        <div ref={fifthLineHelper} className="w-full left-0 h-[calc(4200px/6)]"/>
                        <div ref={sixthLineHelper} className="w-full left-0 h-[calc(4200px/6)]"/>
                    </div>
                    <div className="sticky top-[20%]">
                      <main ref={mainStickyPart} className="grid grid-cols-6 gap-[20px] relative">
                          <FeaturesComponent icon="shield-check" isActive={(activeFeatureIndex >= 1)} isGoingToBeActive={(activeFeatureIndex === 1)} position="top" title="خرید امن با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                          <FeaturesComponent icon="hand-holding-dollor" isActive={(activeFeatureIndex >= 2)} isGoingToBeActive={(activeFeatureIndex === 2)} position="bottom" title="مرکز حل اختلافات با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                          <FeaturesComponent icon="shaking-hands" isActive={(activeFeatureIndex >= 3)} isGoingToBeActive={(activeFeatureIndex === 3)} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                          <FeaturesComponent icon="shaking-hands" isActive={(activeFeatureIndex >= 4)} isGoingToBeActive={(activeFeatureIndex === 4)} position="bottom" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                          <FeaturesComponent icon="hand-holding-dollor" isActive={(activeFeatureIndex >= 5)} isGoingToBeActive={(activeFeatureIndex === 5)} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                          <FeaturesComponent hasNoLeft icon="shaking-hands" isActive={(activeFeatureIndex >= 6)} isGoingToBeActive={false} position="bottom" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                      </main>
                      <SkipButtonComponent id="#eighth-section" marginTop={10} />
                    </div>
                </div>
                <div className="lg:hidden block">
                    <Swiper  
                      onSwiper={setSlider}
                        initialSlide={activeIndexOfSlider}
                        onSlideChange={(event) => setActiveIndexOfSlider(event.activeIndex)}
                        spaceBetween={20}
                    >
                        <SwiperSlide><FeaturesComponent icon="shield-check" isActive={true} isGoingToBeActive={true} position="top" title="خرید امن با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent></SwiperSlide>
                        <SwiperSlide><FeaturesComponent icon="hand-holding-dollor" isActive={false} isGoingToBeActive={false} position="bottom" title="مرکز حل اختلافات با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent></SwiperSlide>
                        <SwiperSlide><FeaturesComponent icon="shaking-hands" isActive={false} isGoingToBeActive={false} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent></SwiperSlide>
                        <SwiperSlide><FeaturesComponent icon="shaking-hands" isActive={false} isGoingToBeActive={false} position="bottom" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent></SwiperSlide>
                        <SwiperSlide><FeaturesComponent icon="hand-holding-dollor" isActive={false} isGoingToBeActive={false} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent></SwiperSlide>
                        <SwiperSlide><FeaturesComponent hasNoLeft icon="shaking-hands" isActive={false} isGoingToBeActive={false} position="bottom" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent></SwiperSlide>
                    </Swiper>
                    <SliderPaginationComponent swiper={slider} activeIndex={activeIndexOfSlider} slidesCount={6} slidesPerView={1} />
                </div>
            </div>
        </section>
    );
}
