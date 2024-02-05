// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import IconComponent from "@/chunk/iconComponent";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import CommentComponent from "@/component/commentComponent";
import {Dispatch, ReactNode, useState} from "react";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import ScoreComponent from "@/chunk/page/singleBlog/scoreComponent";
import * as SwiperType from "swiper/types";
import 'swiper/css';
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

// Defining type of form
const formSchema = z.object({
    name: z.string().min(2, 'نام کمتر از 2 کارکتر میباشد.').max(100, 'نام بیشتر از 100 کارکتر میباشد.'),
    text: z.string().min(10, 'متن کمتر از 10 کارکتر میباشد.').max(200, 'متن بیشتر از 200 کارکتر میباشد.'),
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting Tenth section of Create page as default
export default function TenthSectionComponent():ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [activeIndexOfSliderXL, setActiveIndexOfSliderXL]:[number, Dispatch<number>] = useState(0);
    const [activeIndexOfSliderLG, setActiveIndexOfSliderLG]:[number, Dispatch<number>] = useState(0);
    const [slider, setSlider]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    const [sliderXL, setSliderXL]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    const [sliderLG, setSliderLG]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    const [score, setScore]:[number, Dispatch<number>] = useState(5.0);

    // Defining useForm hook to handle form
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValidating
        }
    } = useForm<formType>({
        resolver: zodResolver(formSchema)
    });

    // Defining on submit event handler of form
    const submitEventHandler:SubmitHandler<formType> = ({name, text}) => {
        console.log({
            name: name,
            text: text,
            score: score
        })
    }

    // Returning JSX
    return (
        <section>
            <header>
                <div className="container px-[20px] py-[40px]">
                    <div className="sign">نظرات کاربران</div>
                    <div className="flex items-center justify-between flex-wrap gap-[20px] mb-[40px]">
                        <h5 className="lg:text-[48px] text-[20px]">
                            <span className='font-bold inline-block ml-[1ch] text-theme'>نظرات</span>
                            <span className="font-normal inline-block text-dark">کاربران وبیمود</span>
                        </h5>
                        <div className="xl:flex hidden gap-[24px]">
                            <button id='single-blog-comment-prev-btn' data-active={(activeIndexOfSlider !== 0)} className="slider-prev-next-btn shadow-custom"><IconComponent name="chevron-right" size={16} /></button>
                            <button id='single-blog-comment-next-btn' data-active={(activeIndexOfSlider !== 12)} className="slider-prev-next-btn shadow-custom"><IconComponent name="chevron-left" size={16} /></button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(submitEventHandler)} action="#" className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 lg:gap-[20px] gap-[24px]">
                        <div className={'col-span-1'}>
                            <input {...register('name')} className="transition-all w-full duration-500 rounded-[16px] bg-transparent placeholder:transition-all placeholder:duration-500 p-[16px] text-[16px] font-normal border outline-0 border-lightGrey focus:border-dark placeholder:text-lightGrey text-lightGrey focus:placeholder:text-dark focus:text-dark" placeholder="نام خود را وارد کنید ...."/>
                            {
                                (errors.name?.message)
                                    ? <p className={'text-[16px] font-normal text-red-600 mt-[16px]'}>{errors.name?.message}</p>
                                    : false
                            }
                        </div>
                        <div className={'xl:col-span-2 col-span-1'}>
                            <div className="relative overflow-hidden">
                                <input {...register('text')}
                                       className="transition-all duration-500 rounded-[16px] bg-transparent pr-[16px] placeholder:transition-all placeholder:duration-500 pl-[55px] py-[16px] text-[16px] font-normal border outline-0 border-lightGrey focus:border-dark placeholder:text-lightGrey text-lightGrey focus:placeholder:text-dark focus:text-dark w-full"
                                       placeholder="نظر خود را وارد کنید ...."/>
                                <button disabled={isValidating}
                                        className="w-[45px] h-[45px] absolute top-[50%] -translate-y-[50%] left-[6px] rounded-[12px] bg-lighterGrey text-lightGrey flex justify-center items-center">
                                    <IconComponent name="send" size={20}/>
                                </button>
                            </div>
                            {
                                (errors.text?.message)
                                    ? <p className={'text-[16px] font-normal text-red-600 mt-[16px]'}>{errors.text?.message}</p>
                                    : false
                            }
                        </div>
                        <div>
                            <ScoreComponent score={score} setScore={setScore}/>
                        </div>
                        <div
                            className="xl:hidden flex col-span-1 lg:items-end lg:justify-end items-center justify-center">
                            <button className="btn-primary lg:w-auto w-full">
                                ثبت نظر
                                <IconComponent size={16} name="chevron-left"/>
                            </button>
                        </div>
                    </form>
                    {
                        (errors.root?.message)
                            ? <p className={'text-[16px] font-normal text-red-600 mt-[16px]'}>{errors.root?.message}</p>
                            : false
                    }
                </div>
            </header>
            <div className="container px-[20px] py-[68px] relative">
                <main>
                    <div className="xl:block hidden">
                        <Swiper
                            onSwiper={setSlider}
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
                        <SliderPaginationComponent swiper={slider} activeIndex={activeIndexOfSlider} slidesCount={5} slidesPerView={3} />
                    </div>
                    <div className="xl:hidden lg:block hidden">
                        <Swiper
                            onSwiper={setSliderXL}
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
                        <SliderPaginationComponent swiper={sliderXL} activeIndex={activeIndexOfSliderXL} slidesCount={10} slidesPerView={2} />
                    </div>
                    <div className="lg:hidden block">
                        <Swiper
                            onSwiper={setSliderLG}
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
                            swiper={sliderLG}
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
        </section>
    );
}
