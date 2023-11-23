// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import FeaturesComponent from "@/chunk/page/home/seventhSection/featuresComponent";
import IconComponent from "@/chunk/iconComponent";
import {Swiper, SwiperSlide} from "swiper/react";

// Creating and exporting seventh section of home page as default
export default function SeventhSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);

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
                <main className="lg:grid hidden grid-cols-6 gap-[20px]">
                    <FeaturesComponent icon="shield-check" isActive={true} isGoingToBeActive={true} position="top" title="خرید امن با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="hand-holding-dollor" isActive={false} isGoingToBeActive={false} position="bottom" title="مرکز حل اختلافات با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="shaking-hands" isActive={false} isGoingToBeActive={false} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="shaking-hands" isActive={false} isGoingToBeActive={false} position="bottom" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent icon="hand-holding-dollor" isActive={false} isGoingToBeActive={false} position="top" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                    <FeaturesComponent hasNoLeft icon="shaking-hands" isActive={false} isGoingToBeActive={false} position="bottom" title="ضمانت بازگشت وجه با وبیمود">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</FeaturesComponent>
                </main>
                <div className="lg:hidden block">
                    <Swiper  
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
                    <div className='flex gap-[12px] items-center justify-center w-full'>
                        <div data-active={(activeIndexOfSlider === 0)} className='slider-slide-bullet' />
                        <div data-active={(activeIndexOfSlider === 1)} className='slider-slide-bullet' />
                        <div data-active={(activeIndexOfSlider === 2)} className='slider-slide-bullet' />
                        <div data-active={(activeIndexOfSlider === 3)} className='slider-slide-bullet' />
                        <div data-active={(activeIndexOfSlider === 4)} className='slider-slide-bullet' />
                        <div data-active={(activeIndexOfSlider === 5)} className='slider-slide-bullet' />
                    </div>
                </div>
            </div>
        </section>
    );
}