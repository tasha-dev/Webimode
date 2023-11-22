// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import {Dispatch, ReactNode, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import BlogComponent from "@/component/blogComponent";
import BlogImage from '@/public/img/blog/img-random.png';

// Creating and exporting tenth section of home page as default
export default function TenthSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [isAnySlideRemainingOnRightSide, setSlideRemainingOnRightSide]:[boolean, Dispatch<boolean>] = useState(false);
    const [isAnySlideRemainingOnLeftSide, setSlideRemainingOnLeftSide]:[boolean, Dispatch<boolean>] = useState(true);
    const [activeIndexOfSliderMQ, setActiveIndexOfSliderMQ]:[number, Dispatch<number>] = useState(0);
    const [isAnySlideRemainingOnRightSideMQ, setSlideRemainingOnRightSideMQ]:[boolean, Dispatch<boolean>] = useState(false);
    const [isAnySlideRemainingOnLeftSideMQ, setSlideRemainingOnLeftSideMQ]:[boolean, Dispatch<boolean>] = useState(true);

    // Returnining JSX
    return (
        <section className="lg:mt-[256px] mt-[196px]">
            <div className="container p-[20px]">
                <header className="flex items-end justify-between gap-[10px] lg:mb-[51px] mb-[24px]">
                    <div>
                        <div className="sign">مقالات وبیمود</div>
                        <h4 className="lg:text-[48px] text-[20px] font-normal text-dark truncate">
                            <span className="inline-block ml-[1ch] font-bold text-theme">مقالات</span>
                            تیم وبیمود   
                        </h4>
                    </div>
                    <div className="lg:block hidden">
                        <Link href='/blogs' className="btn-secondary-theme">
                            مشاهده همه
                            <IconComponent size={16} name="chevron-left" />
                        </Link>
                    </div>
                    <div className="lg:hidden block">
                        <Link href='/blogs' className="btn-secondary-theme-icon"><IconComponent size={16} name="chevron-left" /></Link>
                    </div>
                </header>
                <main>
                    <div className="lg:block hidden">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerGroup={3}
                            slidesPerView={3}
                            spaceBetween={20}
                            navigation={{
                                nextEl: '#prev-services-section-10-slider-btn',
                                prevEl: '#next-services-section-10-slider-btn',
                            }}
                            onSlideChange={(event) => {
                                setActiveIndexOfSlider(event.activeIndex);

                                if (event.activeIndex === 0) {
                                    setSlideRemainingOnRightSide(false);
                                    setSlideRemainingOnLeftSide(true);
                                } else if (event.activeIndex/3 === 4) {
                                    setSlideRemainingOnRightSide(true);
                                    setSlideRemainingOnLeftSide(false);
                                } else if (event.activeIndex/3 !== 4 && event.activeIndex !== 0) {
                                    setSlideRemainingOnRightSide(true);
                                    setSlideRemainingOnLeftSide(true);
                                }
                            }}
                        > 
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                        </Swiper>
                        <div className='flex justify-center items-center gap-[20px] mt-[40px]'>
                            <button id='next-services-section-10-slider-btn' data-active={isAnySlideRemainingOnRightSide} className='slider-prev-next-btn sm:flex hidden'>
                                <IconComponent name='chevron-right' size={16} />
                            </button>
                            <div className='flex gap-[12px] items-center justify-center lg:w-auto w-full'>
                                <div data-active={(activeIndexOfSlider/3 === 0)} className='slider-slide-bullet' />
                                <div data-active={(activeIndexOfSlider/3 === 1)} className='slider-slide-bullet' />
                                <div data-active={(activeIndexOfSlider/3 === 2)} className='slider-slide-bullet' />
                                <div data-active={(activeIndexOfSlider/3 === 3)} className='slider-slide-bullet' />
                                <div data-active={(activeIndexOfSlider/3 === 4)} className='slider-slide-bullet' />
                            </div>
                            <button id='prev-services-section-10-slider-btn' data-active={isAnySlideRemainingOnLeftSide} className='slider-prev-next-btn sm:flex hidden'>
                                <IconComponent name='chevron-left' size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="lg:hidden block">
                    <Swiper
                            modules={[Navigation]}
                            slidesPerGroup={1}
                            slidesPerView={1}
                            spaceBetween={20}
                            navigation={{
                                nextEl: '#prev-services-slider-section-10-btn-mq',
                                prevEl: '#next-services-slider-section-10-btn-mq',
                            }}
                            onSlideChange={(event) => {
                                setActiveIndexOfSliderMQ(event.activeIndex);

                                if (event.activeIndex === 0) {
                                    setSlideRemainingOnRightSideMQ(false);
                                    setSlideRemainingOnLeftSideMQ(true);
                                } else if (event.activeIndex/3 === 4) {
                                    setSlideRemainingOnRightSideMQ(true);
                                    setSlideRemainingOnLeftSideMQ(false);
                                } else if (event.activeIndex/3 !== 4 && event.activeIndex !== 0) {
                                    setSlideRemainingOnRightSideMQ(true);
                                    setSlideRemainingOnLeftSideMQ(true);
                                }
                            }}
                        > 
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                            <SwiperSlide><BlogComponent link="/blog/#" title="مدرن ترین سبک های طراحی در 2023" date={new Date()} genre="دیجیتال" img={BlogImage.src}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد . </BlogComponent></SwiperSlide>
                        </Swiper>
                        <div className='flex justify-center items-center gap-[20px] mt-[40px]'>
                            <button id='next-services-slider-section-10-btn-mq' data-active={isAnySlideRemainingOnRightSideMQ} className='slider-prev-next-btn sm:flex hidden'>
                                <IconComponent name='chevron-right' size={16} />
                            </button>
                            <div className='flex gap-[12px] items-center justify-center lg:w-auto w-full'>
                                <div data-active={(activeIndexOfSliderMQ === 0)} className='slider-slide-bullet' />
                                <div data-active={(activeIndexOfSliderMQ === 1)} className='slider-slide-bullet' />
                                <div data-active={(activeIndexOfSliderMQ === 2)} className='slider-slide-bullet' />
                                <div data-active={(activeIndexOfSliderMQ === 3)} className='slider-slide-bullet' />
                                <div data-active={(activeIndexOfSliderMQ === 4)} className='slider-slide-bullet' />
                            </div>
                            <button id='prev-services-slider-section-10-btn-mq' data-active={isAnySlideRemainingOnLeftSideMQ} className='slider-prev-next-btn sm:flex hidden'>
                                <IconComponent name='chevron-left' size={16} />
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}