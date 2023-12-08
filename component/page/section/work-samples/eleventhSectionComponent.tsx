// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, Dispatch, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import ScoreComponent from "@/chunk/page/singleBlog/scoreComponent";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import CommentComponent from "@/component/commentComponent";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";

// Creating and exporting eleventh section of work samples page as default
export default function EleventhSectionComponent(): ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [activeIndexOfSliderXL, setActiveIndexOfSliderXL]:[number, Dispatch<number>] = useState(0);
    const [activeIndexOfSliderLG, setActiveIndexOfSliderLG]:[number, Dispatch<number>] = useState(0);

    // Returning JSX
    return (
        <section className="mt-[96px]">
            <div className="container p-[20px]">
                <header className="xl:block hidden mb-[97px]">
                    <div className="flex items-center">
                        <div className="w-full h-[2px] bg-gradient-to-l from-transparent to-lightGrey" />
                        <div className="w-[56px] h-[56px] aspect-square text-lightGrey flex items-center justify-center rounded-full bg-white border border-lightGrey">
                            <IconComponent name="chat" size={32} />
                        </div>
                        <div className="w-full h-[2px] bg-gradient-to-r from-transparent to-lightGrey" />
                    </div>
                </header>
                <main>
                    <div className="container px-[20px] py-[40px]">
                        <div className="sign">نظرات کاربران</div>
                        <div className="flex items-center justify-between flex-wrap gap-[20px] mb-[40px]">
                            <h5 className="text-[48px]">
                                <span className='font-bold inline-block ml-[1ch] text-theme'>نظرات</span>
                                <span className="font-normal inline-block text-dark">کاربران وبیمود</span>
                            </h5>
                            <div className="xl:flex hidden gap-[24px]">
                                <button id='single-blog-comment-prev-btn' data-active={(activeIndexOfSlider !== 0)} className="slider-prev-next-btn shadow-custom"><IconComponent name="chevron-right" size={16} /></button>
                                <button id='single-blog-comment-next-btn' data-active={(activeIndexOfSlider !== 12)} className="slider-prev-next-btn shadow-custom"><IconComponent name="chevron-left" size={16} /></button>
                            </div>
                        </div>
                        <form action="#" className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 lg:gap-[20px] gap-[24px]">
                            <input className="transition-all duration-500 rounded-[16px] col-span-1 bg-transparent placeholder:transition-all placeholder:duration-500 p-[16px] text-[16px] font-normal border outline-0 border-lightGrey focus:border-dark placeholder:text-lightGrey text-lightGrey focus:placeholder:text-dark focus:text-dark" type="text" required placeholder="نام خود را وارد کنید ...." />
                            <div className="xl:col-span-2 col-span-1 relative overflow-hidden">
                                <input className="transition-all duration-500 rounded-[16px] bg-transparent pr-[16px] placeholder:transition-all placeholder:duration-500 pl-[55px] py-[16px] text-[16px] font-normal border outline-0 border-lightGrey focus:border-dark placeholder:text-lightGrey text-lightGrey focus:placeholder:text-dark focus:text-dark w-full" type="text" required placeholder="نظر خود را وارد کنید ...." />
                                <button className="w-[45px] h-[45px] absolute top-[50%] -translate-y-[50%] left-[6px] rounded-[12px] bg-lighterGrey text-lightGrey flex justify-center items-center" type="button">
                                    <IconComponent name="send" size={20} />
                                </button>
                            </div>
                            <ScoreComponent />
                            <div className="xl:hidden flex col-span-1 lg:items-end lg:justify-end items-center justify-center">
                                <button className="btn-primary lg:w-auto w-full">
                                    ثبت نظر
                                    <IconComponent size={16} name="chevron-left" />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="container px-[20px] py-[68px] relative">
                        <div className="flex items-center justify-center w-[56px] h-[56px] bg-lightestGrey border-[3px] border-white rounded-full text-lighterGrey absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%]">
                            <IconComponent name="chat" size={24} />
                        </div>
                        <main>
                            <div className="xl:block hidden">
                                <Swiper
                                    modules={[Navigation]}
                                    initialSlide={activeIndexOfSlider}
                                    onSlideChange={(event) => setActiveIndexOfSlider(event.activeIndex)}
                                    spaceBetween={20}
                                    slidesPerView={3}
                                    slidesPerGroup={3}
                                    navigation={{
                                        prevEl: '#single-blog-comment-prev-btn',
                                        nextEl: '#single-blog-comment-next-btn'
                                    }}
                                >
                                    <SwiperSlide><CommentComponent adminReply="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ." likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                </Swiper>
                                <SliderPaginationComponent activeIndex={activeIndexOfSlider} slidesCount={5} slidesPerView={3} />
                            </div>
                            <div className="xl:hidden lg:block hidden">
                                <Swiper
                                    initialSlide={activeIndexOfSliderXL}
                                    onSlideChange={(event) => setActiveIndexOfSliderXL(event.activeIndex)}
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    slidesPerGroup={2}
                                >
                                    <SwiperSlide><CommentComponent adminReply="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ." likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                </Swiper>
                                <SliderPaginationComponent activeIndex={activeIndexOfSliderXL} slidesCount={10} slidesPerView={2} />
                            </div>
                            <div className="lg:hidden block">
                                <Swiper
                                    modules={[Navigation]}
                                    initialSlide={activeIndexOfSliderLG}
                                    onSlideChange={(event) => setActiveIndexOfSliderLG(event.activeIndex)}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    slidesPerGroup={1}
                                    navigation={{
                                        prevEl: '#single-blog-comment-prev-btn-lg',
                                        nextEl: '#single-blog-comment-next-btn-lg'
                                    }}
                                >
                                    <SwiperSlide><CommentComponent adminReply="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ." likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                    <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                                </Swiper>
                                <SliderPaginationComponent
                                    hasButtons
                                    nextBtnId="single-blog-comment-next-btn-lg"
                                    prevBtnId="single-blog-comment-prev-btn-lg"
                                    activeIndex={activeIndexOfSliderLG}
                                    slidesCount={5}
                                    slidesPerView={1}
                                />
                            </div>
                        </main>
                    </div>
                </main>
            </div>
        </section>
    );
}