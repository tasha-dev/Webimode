// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import DatePicker from "react-multi-date-picker"
import IconComponent from "@/chunk/iconComponent";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import {Value} from "react-multi-date-picker"
import '@/public/style/date-picker.style.css';
import {Swiper, SwiperSlide} from "swiper/react";
import SliderPaginationComponent from "@/chunk/sliderPaginationCompont";
import PaymentComponent from "../dashboard/paymentComponent";
import {Navigation} from "swiper/modules";
import 'swiper/css';

// Defining type of props
interface propsType {
    date: Date;
    paymentType: 'cash-out' | 'deposit';
}

// Creating and exporting payment component of payment page on dashboard as default
export default function PaymentSliderComponent({date, paymentType}:propsType):ReactNode {
    // Defining state of component
    const [dateValue, setDateValue] = useState<Value>(date);
    const [activeSlide, setActiveSlide]:[number, Dispatch<number>] = useState(0);

    // Returning JSX
    return (
        <div>
            <div className="flex items-center gap-[12px] flex-wrap mb-[28px]">
                <div data-payment={paymentType} className="text-white w-[36px] h-[21px] flex items-center justify-center rounded-[8px] data-[payment='deposit']:bg-theme data-[payment='cash-out']:bg-alert">
                    <IconComponent width={18} height={9} name={(paymentType === 'cash-out') ? 'cash-out' : 'deposit'} />
                </div>
                <span data-payment={paymentType} className="text-[20px] font-semibold data-[payment='deposit']:text-theme data-[payment='cash-out']:text-alert">
                    {
                        (paymentType === 'cash-out')
                            ? 'تراکنش های برداشتی'
                            : 'تراکنش های واریزی'
                    }
                </span>
                <div 
                    data-payment={paymentType}
                    className="w-[1px] h-[32px] rounded-[50px] data-[payment='deposit']:bg-theme data-[payment='cash-out']:bg-alert"
                />
                <DatePicker 
                    range
                    type="button"
                    inputClass={(paymentType === 'cash-out') ? "date-picker-input-cash-out" : "date-picker-input-deposit"}
                    className={(paymentType === 'cash-out') ? "date-picker-cash-out" : "date-picker-deposit"}
                    calendar={persian}
                    locale={persian_fa}
                    value={dateValue}
                    onChange={setDateValue}
                    rangeHover
                    calendarPosition="bottom-center"
                />
            </div>
            <div className="lg:block hidden">
                <Swiper
                    modules={[Navigation]}
                    initialSlide={activeSlide}
                    slidesPerView={4}
                    slidesPerGroup={4}
                    spaceBetween={22}
                    onSlideChange={(event) => setActiveSlide(event.activeIndex)}
                    navigation={{
                        prevEl: (paymentType === 'cash-out') ? '#cash-out-prev-btn' : '#deposit-prev-btn',
                        nextEl: (paymentType === 'cash-out') ? '#cash-out-next-btn' : '#deposit-next-btn'
                    }}
                >
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                </Swiper>
                <SliderPaginationComponent
                    theme={(paymentType === 'cash-out') ? 'alert' : 'theme'}
                    activeIndex={activeSlide}
                    slidesCount={5}
                    slidesPerView={4}
                    hasButtons
                    nextBtnId={(paymentType === 'cash-out') ? 'cash-out-next-btn' : 'deposit-next-btn'}
                    prevBtnId={(paymentType === 'cash-out') ? 'cash-out-prev-btn' : 'deposit-prev-btn'}
                />
            </div>
            <div className="lg:hidden block">
                <Swiper
                    modules={[Navigation]}
                    initialSlide={activeSlide}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    spaceBetween={22}
                    onSlideChange={(event) => setActiveSlide(event.activeIndex)}
                    navigation={{
                        prevEl: (paymentType === 'cash-out') ? '#cash-out-prev-btn' : '#deposit-prev-btn',
                        nextEl: (paymentType === 'cash-out') ? '#cash-out-next-btn' : '#deposit-next-btn'
                    }}
                >
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                    <SwiperSlide><PaymentComponent date={new Date().toISOString()} link="#" paymentType={paymentType} price={256000} /></SwiperSlide>
                </Swiper>
                <SliderPaginationComponent
                    theme={(paymentType === 'cash-out') ? 'alert' : 'theme'}
                    activeIndex={activeSlide}
                    slidesCount={5}
                    slidesPerView={1}
                    hasButtons
                    nextBtnId={(paymentType === 'cash-out') ? 'cash-out-next-btn' : 'deposit-next-btn'}
                    prevBtnId={(paymentType === 'cash-out') ? 'cash-out-prev-btn' : 'deposit-prev-btn'}
                />
            </div>
        </div>
    );
}