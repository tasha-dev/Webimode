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
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";

// Defining type of props
interface propsType {
    filter: string;
}

// Creating and exporting second section of blog page as default
export default function SecondSectionComponent({filter}:propsType):ReactNode {
    // Defining states of component
    const [activeIndexOfSlider, setActiveIndexOfSlider]:[number, Dispatch<number>] = useState(0);
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
        <section className="mb-[1000px] mt-[100px]">
            <div className="container p-[20px]">
                <div className="flex mb-[64px] justify-between items-center">
                    <h4 className="relative text-[32px] font-normal text-theme">
                        <span className="text-current ml-[1ch] inline-block">{filter}</span>
                        <span className={'text-current absolute right-[102%] bottom-full lg:flex hidden flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h4>
                    <div>
                        <Link href="#" className="btn-primary">
                            مشاهده همه
                            <IconComponent size={16} name="chevron-left" />
                        </Link>
                    </div>
                </div>
                <Swiper
                    spaceBetween={20}
                    initialSlide={activeIndexOfSlider}
                    onSlideChange={(event) => {setActiveIndexOfSlider(event.activeIndex)}}
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '#filtred-blogs-next-slide',
                        prevEl: '#filtred-blogs-prev-slide'
                    }}
                >
                   <SwiperSlide>
                        <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-rows-2 gap-[20px]">
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-rows-2 gap-[20px]">
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-rows-2 gap-[20px]">
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-rows-2 gap-[20px]">
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-2 grid-cols-1 xl:grid-rows-2 gap-[20px]">
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
                        </div>
                    </SwiperSlide>
                </Swiper>
                <SliderPaginationComponent 
                    activeIndex={activeIndexOfSlider} 
                    slidesCount={5} 
                    hasButtons 
                    slidesPerView={1} 
                    nextBtnId="filtred-blogs-next-slide"
                    prevBtnId="filtred-blogs-prev-slide" 
                />
            </div>
        </section>
    );
}