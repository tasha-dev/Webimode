// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import BlogImage from '@/public/img/blog/img-random.png';
import {Navigation} from "swiper/modules";
import BlogComponent from "@/chunk/page/blog/firstSection/secondSection/blogComponent";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import BlogGenreHeaderComponent from "@/chunk/page/blog/blogGenreHeaderComponent";
import 'swiper/css';

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
        <section className="mt-[100px]">
            <div className="container p-[20px]">
                <BlogGenreHeaderComponent highlightedTitle={filter} link="#" />
                <main>
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
                </main>
            </div>
        </section>
    );
}