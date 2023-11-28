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
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";

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
                                prevEl: '#prev-services-section-10-slider-btn',
                                nextEl: '#next-services-section-10-slider-btn',
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
                        <SliderPaginationComponent 
                            hasButtons
                            hasSlideRemainingLeftSide={isAnySlideRemainingOnLeftSide}
                            hasSlideRemainingRightSide={isAnySlideRemainingOnRightSide}
                            nextBtnId="next-services-section-10-slider-btn"
                            prevBtnId="prev-services-section-10-slider-btn"
                            activeIndex={activeIndexOfSlider}
                            slidesCount={5}
                            slidesPerView={3} 
                        />
                    </div>
                    <div className="lg:hidden block">
                    <Swiper
                            modules={[Navigation]}
                            slidesPerGroup={1}
                            slidesPerView={1}
                            spaceBetween={20}
                            navigation={{
                                prevEl: '#prev-services-slider-section-10-btn-mq',
                                nextEl: '#next-services-slider-section-10-btn-mq',
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
                        <SliderPaginationComponent 
                            hasButtons
                            hasSlideRemainingLeftSide={isAnySlideRemainingOnLeftSideMQ}
                            hasSlideRemainingRightSide={isAnySlideRemainingOnRightSideMQ}
                            nextBtnId="next-services-slider-section-10-btn-mq"
                            prevBtnId="prev-services-slider-section-10-btn-mq"
                            activeIndex={activeIndexOfSliderMQ}
                            slidesCount={5}
                            slidesPerView={1} 
                        />
                    </div>
                </main>
            </div>
        </section>
    );
}