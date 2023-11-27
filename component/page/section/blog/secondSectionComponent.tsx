// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import BlogImage from '@/public/img/blog/img-random.png';
import {Navigation} from "swiper/modules";
import 'swiper/css';
import BlogComponent from "@/chunk/page/blog/firstSection/secondSection/blogComponent";

// Defining type of props
interface propsType {
    filter: string;
}

// Creating and exporting second section of blog page as default
export default function SecondSectionComponent({filter}:propsType):ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
    const [isAnySlideRemainingOnRightSide, setSlideRemainingOnRightSide]:[boolean, Dispatch<boolean>] = useState(false);
    const [isAnySlideRemainingOnLeftSide, setSlideRemainingOnLeftSide]:[boolean, Dispatch<boolean>] = useState(true);
    const [content, setContent]:[Array<{
        genre: string;
        img: string;
        date: Date;
        title: string;
        content: string;
        link: string;    
        isBig?: boolean;
    }>, Dispatch<any>] = useState([
        {
            date: new Date(),
            genre: 'دیجیتال',
            img: BlogImage.src,
            link: '#',
            title: 'مدرن ترین سبک های طراحی در 2023',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .'
        },{
            date: new Date(),
            genre: 'دیجیتال',
            img: BlogImage.src,
            link: '#',
            title: 'مدرن ترین سبک های طراحی در 2023',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .'
        },{
            date: new Date(),
            genre: 'دیجیتال',
            img: BlogImage.src,
            link: '#',
            title: 'مدرن ترین سبک های طراحی در 2023',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .'
        }
    ]);
    
    // Returning JSX
    return (
        <section className="mb-[1000px]">
            <div className="container p-[20px]">
                <div>
                    <h4 className="relative">
                        <span>{filter}</span>
                        مقالات
                        <span className={'text-dark absolute right-[102%] bottom-full lg:flex hidden flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h4>
                    <Link href="#" className="btn-primary">
                        مشاهده همه
                        <IconComponent size={16} name="chevron-left" />
                    </Link>
                </div>
                <Swiper
                    spaceBetween={20}
                    initialSlide={activeIndexOfSlider}
                    onSlideChange={(event) => {
                        setActiveIndexOfSlider(event.activeIndex);

                        if (event.activeIndex === 0) {
                            setSlideRemainingOnRightSide(false);
                            setSlideRemainingOnLeftSide(true);
                        } else if (event.activeIndex === 4) {
                            setSlideRemainingOnRightSide(true);
                            setSlideRemainingOnLeftSide(false);
                        } else if (event.activeIndex !== 4 && event.activeIndex !== 0) {
                            setSlideRemainingOnRightSide(true);
                            setSlideRemainingOnLeftSide(true);
                        }
                    }}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '#filtred-blogs-next-slide',
                        prevEl: '#filtred-blogs-prev-slide'
                    }}
                >
                   <SwiperSlide>
                        {
                            content.map((item, index) => (
                                <BlogComponent
                                    key={index}
                                    date={item.date}
                                    genre={item.genre}
                                    img={item.img}
                                    link={item.link}
                                    title={item.title}
                                    isBig={(index === 0)}
                                >
                                    {item.content}
                                </BlogComponent>
                            ))
                        }
                    </SwiperSlide>
                    <SwiperSlide>
                        {
                            content.map((item, index) => (
                                <BlogComponent
                                    key={index}
                                    date={item.date}
                                    genre={item.genre}
                                    img={item.img}
                                    link={item.link}
                                    title={item.title}
                                    isBig={(index === 0)}
                                >
                                    {item.content}
                                </BlogComponent>
                            ))
                        }
                    </SwiperSlide>
                    <SwiperSlide>
                        {
                            content.map((item, index) => (
                                <BlogComponent
                                    key={index}
                                    date={item.date}
                                    genre={item.genre}
                                    img={item.img}
                                    link={item.link}
                                    title={item.title}
                                    isBig={(index === 0)}
                                >
                                    {item.content}
                                </BlogComponent>
                            ))
                        }
                    </SwiperSlide>
                    <SwiperSlide>
                        {
                            content.map((item, index) => (
                                <BlogComponent
                                    key={index}
                                    date={item.date}
                                    genre={item.genre}
                                    img={item.img}
                                    link={item.link}
                                    title={item.title}
                                    isBig={(index === 0)}
                                >
                                    {item.content}
                                </BlogComponent>
                            ))
                        }
                    </SwiperSlide>
                    <SwiperSlide>
                        {
                            content.map((item, index) => (
                                <BlogComponent
                                    key={index}
                                    date={item.date}
                                    genre={item.genre}
                                    img={item.img}
                                    link={item.link}
                                    title={item.title}
                                    isBig={(index === 0)}
                                >
                                    {item.content}
                                </BlogComponent>
                            ))
                        }
                    </SwiperSlide>
                </Swiper>
                <div className='flex gap-[12px] items-center justify-center w-full'>
                    <button id={'filtred-blogs-next-slide'} data-active={isAnySlideRemainingOnRightSide} className="slider-prev-next-btn flex">
                        <IconComponent name="chevron-right" size={16} />
                    </button>
                    <div data-active={(activeIndexOfSlider === 0)} className='slider-slide-bullet' />
                    <div data-active={(activeIndexOfSlider === 1)} className='slider-slide-bullet' />
                    <div data-active={(activeIndexOfSlider === 2)} className='slider-slide-bullet' />
                    <div data-active={(activeIndexOfSlider === 3)} className='slider-slide-bullet' />
                    <div data-active={(activeIndexOfSlider === 4)} className='slider-slide-bullet' />
                    <button id={'filtred-blogs-prev-slide'} data-active={isAnySlideRemainingOnLeftSide} className="slider-prev-next-btn flex">
                        <IconComponent name="chevron-left" size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}