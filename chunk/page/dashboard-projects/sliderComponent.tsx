// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import {Swiper, SwiperSlide}  from "swiper/react";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import {Navigation} from "swiper/modules";
import ProjectStateComponent from '@/chunk/page/dashboard/projectStateComponent'
import DoneProjectComponent from '@/chunk/page/dashboard-projects/doneProjectComponent';
import RandomImage from '@/public/img/blog/img-random.png';
import * as SwiperType from "swiper/types";
import 'swiper/css';

// Defining type of props
interface propsType {
    title: 'done-projects' | 'in-progress-project';
}

// Creating and exporting slider component as default
export default function SliderComponent({title}:propsType):ReactNode {
    // Defining state of component
    const [filter, setFilter]:['all', Dispatch<"all">] = useState('all');
    const [isFilterDropDownOpened, setFilterDropDownOpened]:[boolean, Dispatch<boolean>] = useState(false);
    const [activeSliderIndex, setActiveSliderIndex]:[number, Dispatch<number>] = useState(0);
    const [activeSliderIndexMQ, setActiveSliderIndexMQ]:[number, Dispatch<number>] = useState(0);
    const [slider, setSlider]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    const [sliderMQ, setSliderMQ]:[SwiperType.Swiper | null, Dispatch<any>] = useState(null);
    
    // Returning JSX
    return (
        <div className="lg:w-auto w-[calc(93vw-20px)] overflow-hidden">
            <div className="flex items-center justify-between gap-[20px] flex-wrap mb-[24px]">
                <span className="text-[24px] font-normal">
                    {
                        (title === 'done-projects')
                            ? 'پروژه های انجام شده'
                            : 'پروژه های در حال انجام'
                    }
                </span>
                <div className="relative">
                    <button 
                        onClick={() => (isFilterDropDownOpened) ? setFilterDropDownOpened(false) : setFilterDropDownOpened(true)}
                        data-opened={isFilterDropDownOpened}
                        className="flex items-center justify-between gap-[12px] rounded-[12px] border border-lightGrey bg-lighterGrey px-[12px] py-[10px]"
                    >
                        <div className="flex items-center gap-[8px]">
                            <IconComponent size={16} name="filter" />
                            {
                                (filter === 'all')
                                    ? 'همه پروژه ها'
                                    : 'idk'
                            }
                        </div>
                        <IconComponent size={16} name="chevron-down" />
                    </button>
                    <div data-opened={isFilterDropDownOpened} className="absolute z-[20] bg-lighterGrey border border-lightGrey rounded-[12px] overflow-hidden py-[20px] left-0 top-[110%] w-full transition-all duration-500 data-[opened='true']:opacity-100 data-[opened='true']:visible data-[opened='false']:opacity-0 data-[opened='false']:invisible">
                        <button className="p-[10px] text-[13px] transition-all duration-500 hover:bg-dark/20 w-full text-start text-dark font-normal truncate block" onClick={() => {setFilter('all');setFilterDropDownOpened(false)}}>همه پروژه ها</button>
                        <button className="p-[10px] text-[13px] transition-all duration-500 hover:bg-dark/20 w-full text-start text-dark font-normal truncate block" onClick={() => {setFilter('all');setFilterDropDownOpened(false)}}>همه پروژه ها</button>
                        <button className="p-[10px] text-[13px] transition-all duration-500 hover:bg-dark/20 w-full text-start text-dark font-normal truncate block" onClick={() => {setFilter('all');setFilterDropDownOpened(false)}}>همه پروژه ها</button>
                    </div>
                </div>
            </div>
            <div className="lg:block hidden w-full overflow-hidden">
                <Swiper
                    onSwiper={setSlider}
                    initialSlide={activeSliderIndex}
                    spaceBetween={20}
                    slidesPerGroup={3}
                    slidesPerView={3}
                    modules={[Navigation]}
                    onSlideChange={(event) => setActiveSliderIndex(event.activeIndex)}
                    navigation={{
                        prevEl: (title === 'done-projects') ? '#prev-done-projects-slider-btn' : '#prev-in-progress-projects-slider-btn',
                        nextEl: (title === 'done-projects') ? '#next-done-projects-slider-btn' : '#next-in-progress-projects-slider-btn'
                    }}
                >
                    {
                        (title === 'in-progress-project')
                            ? (
                                <>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                </>
                            ) : (
                                <>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                </>
                            )
                    }
                </Swiper>
                <SliderPaginationComponent 
                    swiper={slider}
                    hasButtons
                    activeIndex={activeSliderIndex}
                    slidesCount={5}
                    slidesPerView={3}
                    nextBtnId={(title === 'done-projects') ? 'next-done-projects-slider-btn' : 'next-in-progress-projects-slider-btn'}
                    prevBtnId={(title === 'done-projects') ? 'prev-done-projects-slider-btn' : 'prev-in-progress-projects-slider-btn'}
                />
            </div>
            <div className="lg:hidden block w-full overflow-hidden">
                <Swiper
                    onSwiper={setSliderMQ}
                    initialSlide={activeSliderIndexMQ}
                    spaceBetween={20}
                    slidesPerGroup={1}
                    slidesPerView={1}
                    modules={[Navigation]}
                    onSlideChange={(event) => setActiveSliderIndexMQ(event.activeIndex)}
                    navigation={{
                        prevEl: (title === 'done-projects') ? '#prev-done-projects-slider-btn-mq' : '#prev-in-progress-projects-slider-btn-mq',
                        nextEl: (title === 'done-projects') ? '#next-done-projects-slider-btn-mq' : '#next-in-progress-projects-slider-btn-mq'
                    }}
                >
                    {
                        (title === 'in-progress-project')
                            ? (
                                <>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                    <SwiperSlide><ProjectStateComponent backEndProgress={24} link="#" theme="theme" title="پروژه طراحی سایت فروشگاهی مبیت" uiUxProgress={48} frontEndProgress={73} deadLine={new Date('12/20/2026 12:30').toISOString()} /></SwiperSlide>
                                </>
                            ) : (
                                <>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                    <SwiperSlide><DoneProjectComponent price={126500000} img={RandomImage.src} link="#" tags={['asdasd', 'asdasd', 'asdsd']} title="طراحی سایت فروشگاهی" startDate={'12/20/2023 12:00'} endDate={'12/20/2010 10:30'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است .</DoneProjectComponent></SwiperSlide>
                                </>
                            )
                    }
                </Swiper>
                <SliderPaginationComponent 
                    swiper={sliderMQ}
                    hasButtons
                    activeIndex={activeSliderIndex}
                    slidesCount={5}
                    slidesPerView={1}
                    nextBtnId={(title === 'done-projects') ? 'next-done-projects-slider-btn-mq' : 'next-in-progress-projects-slider-btn-mq'}
                    prevBtnId={(title === 'done-projects') ? 'prev-done-projects-slider-btn-mq' : 'prev-in-progress-projects-slider-btn-mq'}
                />
            </div>
        </div>
    );
}