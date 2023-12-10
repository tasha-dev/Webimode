// Forcing nextJS to render this component as client side componnent
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import StepComponent from "@/chunk/page/estimate/stepComponent";
import Link from "next/link";

// Creating and exporting first section of estimate page as defatault
export default function FirstSectionComponent():ReactNode {
    // Defining states of component
    const [subject, setSubject]:[string, Dispatch<string>] = useState('default');
    const [cms, setCms]:[string, Dispatch<string>] = useState('default');
    const [features, setFeatures]:[string, Dispatch<string>] = useState('default');
    const [pagesCountMax, setPagesCountMax]:[number, Dispatch<number>] = useState(0);
    const [pagesCountMin, setPagesCountMin]:[number, Dispatch<number>] = useState(0);

    // Returning JSX
    return (
        <section className="bg-dark pb-[96px]">
            <div className="container p-[20px]">
                <header className="mb-[48px] lg:w-[75%] w-full mx-auto">
                    <h1 className="text-white font-normal text-[36px] mb-[16px] text-center">
                        <span className="relative text-theme font-semibold inline-block ml-[1ch]">
                            قیمت پروژه ای
                            <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        که میخوای رو به راحتی پیدا کن 
                        !
                    </h1>
                    <p className="paragraph text-center">در اینجا می توانید به راحتی قیمت های انواع پروژه هایی که مد نظرتان هست با هر نوع خدماتی که می خواهید را بفهمید تا بتونید به راحتی از قیمت ها باخبر و شوید و با خیالی پروژه خود را ثبت کنید .</p>
                </header>
                <main>
                    <div className="bg-pageDark px-[56px] py-[52px] rounded-[88px] border-4 border-lightestDark">
                        <div className="flex flex-col gap-[60px] lg:mb-[128px] mb-[50px]">
                            <StepComponent dropdownTitle="موضوع سایت خود را وارد کنید" contentType="dropdown" number={1} subTitle="انواع سایت در زمینه های متفاوت" title="موضوع سایت خود را  وارد کنید :">
                                <button onClick={() => setSubject('1')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setSubject('2')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setSubject('3')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setSubject('4')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setSubject('5')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            </StepComponent>
                            <StepComponent onRangeChange={(event) => {
                                setPagesCountMax(event.maxValue);
                                setPagesCountMin(event.minValue);
                            }} contentType="range" number={2} subTitle="انواع تنوع در تعداد صفحات برای طراحی پروژه شما" title="تعداد صفحات سایت خود را  وارد کنید :" />
                            <StepComponent dropdownTitle="نوع سیستم مدیریت محتوا" contentType="dropdown" number={3} subTitle="انواع سیستم های مدیریت محتوا برای بهبود عملکرد سایت شما" title="نوع سیستم مدیریت محتوا سایت خود را  وارد کنید :">
                                <button onClick={() => setCms('1')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setCms('2')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setCms('3')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setCms('4')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setCms('5')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            </StepComponent>
                            <StepComponent isLastOne dropdownTitle="ویژگی های سایت شما" contentType="dropdown" number={4} subTitle="انواع ویژگی های جانبی برای بهبود سایت" title="ویژگی های سایت خود را  وارد کنید :">
                                <button onClick={() => setFeatures('1')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setFeatures('2')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setFeatures('3')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setFeatures('4')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                                <button onClick={() => setFeatures('5')} data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            </StepComponent>
                        </div>
                        <div className="py-[32px] px-[40px] bg-theme shadow-custom rounded-[48px] grid grid-cols-3 gap-[50px] mb-[56px]">
                            <div className="col-span-2">
                                <span className="mb-[32px] text-white text-[24px] font-normal block">موارد انتخاب شده برای طراحی سایت خود  :</span>
                                <ul className="flex flex-col gap-[24px]">
                                    <li className="flex items-center gap-[16px] text-white">
                                        <IconComponent size={24} name="check-circle" />
                                        <span className="text-[16px] font-normal text-current block">موضوع سایت خود را وارد کنید ( {subject} )</span>
                                    </li>
                                    <li className="flex items-center gap-[16px] text-white">
                                        <IconComponent size={24} name="check-circle" />
                                        <span className="text-[16px] font-normal text-current block">تعداد صفحات سایت خود را وارد کنید ( {pagesCountMin} الی {pagesCountMax} صفحه )</span>
                                    </li>
                                    <li className="flex items-center gap-[16px] text-white">
                                        <IconComponent size={24} name="check-circle" />
                                        <span className="text-[16px] font-normal text-current block">نوع سیستم مدیریت محتوا سایت خود را وارد کنید ( {cms})</span>
                                    </li>
                                    <li className="flex items-center gap-[16px] text-white">
                                        <IconComponent size={24} name="check-circle" />
                                        <span className="text-[16px] font-normal text-current block">ویژگی های سایت خود را وارد کنید ( {features} )</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="shadow-custom p-[48px] flex flex-col items-center justify-center shadow-custom bg-dark rounded-[40px] text-white">
                                <IconComponent size={28} name="money-check-edit" />
                                <span className="block mb-[16px] text-current text-center text-[24px] font-semibold">قیمت تخمین زده شده :</span>
                                <div className="flex items-end justify-center gap-[1ch] flex-wrap">
                                    <span className="block text-current font-bold text-[32px]">12,344,000</span>
                                    <span className="block text-current font-semibold text-[16px]">میلیون تومان</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col items-center justify-center gap-[24px] flex-wrap lg:w-auto w-full">
                            <Link className="btn-primary lg:w-auto w-full" href='/estimate'>
                                تخمین قیمت پروژه
                                <IconComponent name="chevron-left" size={16} />
                            </Link>
                            <Link className="btn-secondary-white lg:w-auto w-full" href='/create'>
                                ثبت درخواست همکاری
                                <IconComponent name="chevron-left" size={16} />
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}