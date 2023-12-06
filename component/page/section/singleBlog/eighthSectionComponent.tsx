// Forcing nextJS to render this component as client side component
'use client';

// Importing part 
import IconComponent from "@/chunk/iconComponent";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import CommentComponent from "@/component/commentComponent";
import {Dispatch, ReactNode, useState} from "react";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

// Creating and exporting eighth section of signle blog page as default
export default function EighthSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [activeIndexOfSliderMQ, setActiveIndexOfSliderMQ]:[number, Dispatch<number>] = useState(0);

    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <header>
                    <div className="sign">نظرات کاربران</div>
                    <div>
                        <h5>
                            <span>نظرات</span>
                            کاربران وبیمود
                        </h5>
                        <div>
                            <button id='single-blog-comment-prev-btn' data-active={(activeIndexOfSlider !== 0)} className="slider-prev-next-btn"><IconComponent name="chevron-right" size={16} /></button>
                            <button id='single-blog-comment-next-btn' data-active={(activeIndexOfSlider !== 12)} className="slider-prev-next-btn"><IconComponent name="chevron-left" size={16} /></button>
                        </div>
                    </div>
                </header>
                <main>
                    <form action="#">
                        <input type="text" required placeholder="نام خود را وارد کنید ...." />
                        <div>
                            <input type="text" required placeholder="نظر خود را وارد کنید ...." />
                            <button type="button"><IconComponent name="send" size={20} /></button>
                        </div>
                        <div>
                            <span>امتیاز شما ( از 5 ) :</span>
                            <div>
                                <button>&#43;</button>
                                <button>&#45;</button>
                            </div>
                        </div>
                    </form>
                    <div><IconComponent name="chat" size={24} /></div>
                    <div>
                        <div className="lg:block hidden">
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
                                <SliderPaginationComponent activeIndex={activeIndexOfSliderMQ} slidesCount={5} slidesPerView={1} />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}