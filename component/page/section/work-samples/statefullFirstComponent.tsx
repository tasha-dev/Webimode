// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import FirstSectionComponent from "@/component/page/section/work-samples/firstSectionComponent";
import {SwiperSlide} from "swiper/react";
import IconComponent from "@/chunk/iconComponent";
import SecondSectionComponent from "@/component/page/section/work-samples/secondSectionComponent";

// Creating and exporting state full component of first and second section of work samples page
export default function StatefullFirstComponent():ReactNode {
    // Defining states of component
    const [filtering, setFiltering]:[string, Dispatch<string>] = useState('طراحی سایت');
    const filterings:Array<string> = [
        'طراحی سایت',
        'گرافیک دیزاین',
        'طراحی اپلیکیشن',
        'طراحی لوگو',
        'موشن دیزاین',
        'طراحی سایت',
        'گرافیک دیزاین',
        'طراحی اپلیکیشن',
        'طراحی لوگو',
        'موشن دیزاین',
        'طراحی سایت',
        'گرافیک دیزاین',
        'طراحی اپلیکیشن',
        'طراحی لوگو',
        'موشن دیزاین',
        'طراحی سایت',
        'گرافیک دیزاین',
        'طراحی اپلیکیشن',
        'طراحی لوگو',
        'موشن دیزاین',
        'طراحی سایت',
        'گرافیک دیزاین',
        'طراحی اپلیکیشن',
        'طراحی لوگو',
        'موشن دیزاین',
    ];

    // Returning JSX
    return (
        <>
            <FirstSectionComponent>
                {
                    filterings.map((item, index) => (
                        <SwiperSlide key={index}>
                            <button 
                                className="px-[16px] py-[12px] flex items-center justify-between gap-[10px] border border-theme transition-all duration-500 rounded-[16px] shadow-custom lg:data-[active='false']:hover:bg-lighterGrey lg:data-[active='false']:bg-white bg-transparent data-[active='false']:text-theme data-[active='true']:bg-theme data-[active='true']:text-white w-full" 
                                data-active={(filtering === item)}
                                onClick={() => setFiltering(item)}
                            >
                                <span className="lg:text-[24px] text-[15px] block truncate font-bold">{item}</span>
                                <span className="shrink-0 lg:block hidden"><IconComponent size={20} name="chevron-down" /></span>
                                <span className="shrink-0 lg:hidden block"><IconComponent size={15} name="chevron-down" /></span>
                            </button>
                        </SwiperSlide>
                    ))
                }
            </FirstSectionComponent>
            <SecondSectionComponent filtering={filtering} />
        </>
    );
}