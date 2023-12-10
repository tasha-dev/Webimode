// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import StepComponent from "@/chunk/page/estimate/stepComponent";

// Creating and exporting first section of estimate page as defatault
export default function FirstSectionComponent():ReactNode {
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
                    <div className="bg-pageDark px-[56px] py-[52px] rounded-[88px] border-4 border-lightestDark flex flex-col gap-[60px]">
                        <StepComponent dropdownTitle="موضوع سایت خود را وارد کنید" contentType="dropdown" number={1} subTitle="انواع سایت در زمینه های متفاوت" title="موضوع سایت خود را  وارد کنید :">
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                        </StepComponent>
                        <StepComponent contentType="range" number={2} subTitle="انواع تنوع در تعداد صفحات برای طراحی پروژه شما" title="تعداد صفحات سایت خود را  وارد کنید :" />
                        <StepComponent dropdownTitle="نوع سیستم مدیریت محتوا" contentType="dropdown" number={3} subTitle="انواع سیستم های مدیریت محتوا برای بهبود عملکرد سایت شما" title="نوع سیستم مدیریت محتوا سایت خود را  وارد کنید :">
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                        </StepComponent>
                        <StepComponent isLastOne dropdownTitle="ویژگی های سایت شما" contentType="dropdown" number={4} subTitle="انواع ویژگی های جانبی برای بهبود سایت" title="ویژگی های سایت خود را  وارد کنید :">
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                            <button data-theme={'dark'} className="dropdown-inner-btn">دکمه</button>
                        </StepComponent>
                    </div>
                </main>
            </div>
        </section>
    );
}