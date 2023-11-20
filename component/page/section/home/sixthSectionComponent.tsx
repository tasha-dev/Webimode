// Forcing nextJS to render this componet as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import {Swiper, SwiperSlide} from "swiper/react";
import CommentComponent from '@/chunk/page/home/sixthSection/commentComponent';

// Creating and exorting sixth section component as default
export default function SixthSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [activeIndexOfSliderMQ, setActiveIndexOfSliderMQ]:[number, Dispatch<number>] = useState(0);

    // Returning JSX
    return (
        <section className="lg:my-[256px] my-[196px]">
            <div className="container p-[20px]">
                <header className="flex flex-col items-center justify-center lg:mb-[56px] mb-[40px]">
                    <div className="sign">رضایت شما</div>
                    <h4 className={'relative lg:text-[48px] text-[20px] text-center'}>
                        <span className={'inline-block ml-[1ch] font-bold text-theme'}>نظرات</span>
                        <span className={'inline-block font-normal text-dark'}>مشتریان عزیز ما</span>
                        <span className={'text-theme absolute left-full bottom-full flex flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                        <svg className="absolute right-[105%] top-[50%] -translate-y-[50%] aspect-square lg:w-[39px] w-[20px]" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.7624 6.30709C29.2969 2.70597 20.0915 4.99685 13.4633 9.40499C10.2997 11.5207 7.53351 14.5932 7.28762 18.5562C7.16959 20.4267 7.61716 22.3357 8.8274 23.817C9.6001 24.7578 10.8975 25.6811 12.1643 25.2078C13.8777 24.5806 13.0943 22.5943 11.7606 22.063C9.32441 21.111 7.27473 24.3699 6.47736 26.1343C5.41545 28.4787 5.06248 31.0581 4.88691 33.6154C4.85364 34.3061 3.78611 34.1395 3.81938 33.4488C4.00324 30.5199 4.49339 27.5395 5.89189 24.9493C6.87425 23.1144 8.48056 21.1035 10.7437 20.9349C12.4503 20.8286 14.3589 22.2946 14.1718 24.1294C13.9318 26.3039 11.304 26.7387 9.67228 25.8875C5.53993 23.7014 5.5346 17.6861 7.51222 14.0928C9.96965 9.65489 14.9361 6.9756 19.5623 5.36161C25.2067 3.43435 31.5495 3.08249 36.9557 5.86505C37.2317 6.00755 37.0422 6.42533 36.7624 6.30709Z" fill="currentColor"/>
                            <path d="M8.34438 30.2538C7.88566 30.0082 6.86911 31.2661 6.62956 31.527C6.19898 32.0562 5.86167 32.6249 5.5653 33.2497C5.34019 33.7365 4.98772 34.4022 4.34022 34.2514C3.71319 34.1286 3.48183 33.2227 3.2346 32.7367C2.65671 31.5032 2.0303 30.2622 1.50472 29.012C1.25217 28.4009 2.14526 28.093 2.42965 28.6593C2.92789 29.607 3.34577 30.5918 3.79171 31.5561C3.8994 31.8215 4.19219 32.8116 4.47576 32.9056C4.73506 32.9958 4.83508 32.5143 5.00563 32.2179C5.6128 31.1943 6.90678 29.4329 8.24723 29.4433C8.42086 29.4455 8.55885 29.5168 8.63318 29.6775C8.67412 29.7336 8.68702 29.8102 8.72797 29.8663C8.81519 30.1036 8.55138 30.3606 8.34438 30.2538Z" fill="currentColor"/>
                            <path d="M37.3556 5.38082C37.8166 5.45279 37.9645 6.09722 37.5756 6.3596C37.4953 6.39676 37.3907 6.43013 37.3217 6.39451C36.9562 6.18833 36.7105 5.85173 36.7301 5.40744C36.7006 5.27855 36.7476 5.13677 36.8764 5.10718C37.6816 4.88493 38.1389 5.77649 38.186 6.43003C38.23 6.78485 38.1489 7.145 37.8479 7.32169C37.4909 7.53933 37.0769 7.32558 36.8479 7.04129C36.3861 6.49698 36.0804 5.43027 36.8635 5.03061C37.6224 4.62716 38.2738 5.54902 38.2929 6.22304C38.3043 6.94558 37.7168 7.5249 36.9927 7.387C36.3414 7.26047 35.8576 6.53875 36.251 5.92913C36.6558 5.24672 37.6695 5.2807 37.9721 6.0487C38.0965 6.36636 38.0602 6.75834 37.8449 7.02297C37.622 7.33612 37.1626 7.41352 36.8888 7.09739C36.7212 6.89726 36.6135 6.63191 36.474 6.4113C36.3792 6.22253 36.2639 6.0057 36.298 5.78734C36.3306 5.41962 36.6391 5.1944 36.9697 5.1466C37.3488 5.10636 37.6976 5.26023 37.8947 5.58925C38.1253 6.0229 38.0495 6.50814 37.9533 6.96533C37.9025 7.13138 37.7509 7.30654 37.5325 7.27245C36.747 7.05041 36.2018 6.24454 36.4276 5.43477C36.4784 5.26873 36.6338 5.06931 36.8484 5.12766C37.6134 5.32165 37.8372 6.27617 37.2573 6.80697C36.9093 7.12544 36.4793 6.5364 36.8273 6.21792C36.9152 6.13223 36.8803 5.87825 36.7385 5.83126C36.8788 5.72889 37.019 5.62652 37.1593 5.52414C37.0464 5.92902 37.217 6.42788 37.6704 6.54837C37.5302 6.65075 37.3899 6.75312 37.2777 6.83501C37.3399 6.59618 37.5506 5.88347 37.1624 5.82286C36.9925 5.79635 37.013 5.8244 37.0464 5.92902C37.0851 6.15875 37.2693 6.4112 37.3679 6.57571C37.4089 6.63181 37.3846 6.62802 37.3194 6.56813C37.3475 6.54766 37.3512 6.52339 37.3588 6.47487C37.3497 6.37403 37.3611 6.30125 37.2996 6.2171C37.2011 6.05259 36.9994 6.07081 36.8553 6.19744C36.5953 6.43024 36.8766 6.69784 37.1193 6.73571C37.4589 6.78874 37.6408 6.41949 37.5893 6.11319C37.5915 5.93957 37.4967 5.75079 37.3625 5.65528C37.1593 5.52414 37.0357 5.67883 37.0297 5.87671C37.0236 6.0746 37.1594 6.31947 37.258 6.48398C37.3323 6.64471 37.5408 6.90094 37.562 6.60601C37.5832 6.31108 37.4019 5.56202 37.0153 5.65078C37.1032 5.56509 37.1911 5.47941 37.2753 5.41798C37.2655 5.64013 37.3845 5.83269 37.5877 5.96383C37.4664 5.94489 37.3656 5.954 37.2685 5.93885C37.3208 5.92217 37.3246 5.8979 37.2837 5.8418C36.9963 5.77209 37.0402 5.33158 37.3556 5.38082Z" fill="currentColor"/>
                        </svg>
                    </h4>
                </header>
                <main>
                    <div className="lg:block hidden">
                        <Swiper
                            initialSlide={activeIndexOfSlider}
                            onSlideChange={(event) => setActiveIndexOfSlider(event.activeIndex)}
                            spaceBetween={20}
                            slidesPerView={3}
                            slidesPerGroup={3}
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
                        <div className="flex justify-center items-center gap-[12px] mt-[32px]">
                            <div data-active={(activeIndexOfSlider/3 === 0)} className="slider-slide-bullet" />
                            <div data-active={(activeIndexOfSlider/3 === 1)} className="slider-slide-bullet" />
                            <div data-active={(activeIndexOfSlider/3 === 2)} className="slider-slide-bullet" />
                            <div data-active={(activeIndexOfSlider/3 === 3)} className="slider-slide-bullet" />
                            <div data-active={(activeIndexOfSlider/3 === 4)} className="slider-slide-bullet" />
                        </div>
                    </div>
                    <div className="lg:hidden block">
                    <Swiper
                            initialSlide={activeIndexOfSliderMQ}
                            onSlideChange={(event) => setActiveIndexOfSliderMQ(event.activeIndex)}
                            spaceBetween={20}
                            slidesPerView={1}
                            slidesPerGroup={1}
                        >
                            <SwiperSlide><CommentComponent adminReply="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است ." likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                            <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                            <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                            <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                            <SwiperSlide><CommentComponent likeCount={12} dislikeCount={12} rating={4.3} name={'احسان امانیان'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</CommentComponent></SwiperSlide>
                        </Swiper>
                        <div className="flex justify-center items-center gap-[12px] mt-[32px]">
                            <div data-active={(activeIndexOfSliderMQ === 0)} className="slider-slide-bullet" />
                            <div data-active={(activeIndexOfSliderMQ === 1)} className="slider-slide-bullet" />
                            <div data-active={(activeIndexOfSliderMQ === 2)} className="slider-slide-bullet" />
                            <div data-active={(activeIndexOfSliderMQ === 3)} className="slider-slide-bullet" />
                            <div data-active={(activeIndexOfSliderMQ === 4)} className="slider-slide-bullet" />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}