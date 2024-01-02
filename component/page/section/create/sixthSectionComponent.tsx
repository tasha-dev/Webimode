// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting sixth section of create page as default
export default function SixthSectionComponenet():ReactNode {
    // Returning JSX
    return (
        <section className="lg:my-[225px] my-[50px]">
            <div className="container ">
                <header className="lg:mb-[56px] mb-[40px] flex flex-col items-center justify-center">
                    <div className="sign">مزیت های وبیمود</div>
                    <h3 className="text-dark lg:text-[48px] text-[20px] font-normal text-center">
                        <span className="relative text-theme font-bold inline-block ml-[1ch]">
                            چرا وبیمود
                            <span className={'text-theme absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        بهتر از بقیه سایت هاست
                    </h3>
                </header>
                <div className="lg:p-0 p-[20px]">
                    <main className="lg:w-[85%] mx-auto lg:overflow-hidden overflow-auto">
                        <div className="lg:grid flex grid-cols-5 lg:gap-[50px] gap-[10px] w-full">
                            <div className="lg:col-span-2 lg:shrink shrink-0 lg:w-auto w-[30%] lg:p-[20px] p-[10px] lg:text-[16px] text-[13px] font-normal text-lightGrey"><span className="block truncate">مزایا و امکانات</span></div>
                            <div className="lg:col-span-1 lg:shrink shrink-0 lg:w-auto w-[30%] lg:p-[20px] p-[10px] flex items-center justify-center lg:text-[16px] text-[13px] font-normal text-theme"><span className="block truncate">تیم وبیمود</span></div>
                            <div className="lg:col-span-1 lg:shrink shrink-0 lg:w-auto w-[30%] lg:p-[20px] p-[10px] flex items-center justify-center lg:text-[16px] text-[13px] font-normal text-lightGrey"><span className="block truncate">شرکت طراحی سایت</span></div>
                            <div className="lg:col-span-1 lg:shrink shrink-0 lg:w-auto w-[30%] lg:p-[20px] p-[10px] flex items-center justify-center lg:text-[16px] text-[13px] font-normal text-lightGrey"><span className="block truncate">سایت ساز آنلاین</span></div>
                        </div>
                        <div className="w-full bg-gradient-to-r mb-[20px] from-white to-white via-lightGrey h-[2px] lg:block hidden" />
                        <div className="lg:grid flex grid-cols-5 w-full lg:gap-[50px] gap-[10px]">
                            <div className="lg:col-span-2 lg:shrink shrink-0 lg:w-auto w-[30%] lg:block flex justify-between items-start flex-col">
                                <div className="text-dark font-normal truncate block lg:text-[16px] text-[13px] lg:p-[20px] p-[10px] lg:w-auto w-full">1. پرداخت امن</div>
                                <div className="text-dark font-normal truncate block lg:text-[16px] text-[13px] lg:p-[20px] p-[10px] lg:w-auto w-full">2. امکان بررسی و انتخاب از بین صدها متخصص و نمونه کار</div>
                                <div className="text-dark font-normal truncate block lg:text-[16px] text-[13px] lg:p-[20px] p-[10px] lg:w-auto w-full">3. امکان بررسی تخصصی نظرات سایر کارفرمایان</div>
                                <div className="text-dark font-normal truncate block lg:text-[16px] text-[13px] lg:p-[20px] p-[10px] lg:w-auto w-full">4. ضمانت اجرای کیفیت و تحویل به موقع طبق تعهد</div>
                                <div className="text-dark font-normal truncate block lg:text-[16px] text-[13px] lg:p-[20px] p-[10px] lg:w-auto w-full">5. قیمت رقابتی</div>
                                <div className="text-dark font-normal truncate block lg:text-[16px] text-[13px] lg:p-[20px] p-[10px] lg:w-auto w-full">6. استفاده رایگان بدون هزینه ماهانه یا سالانه برای استفاده از خدمات</div>
                                <div className="text-dark font-normal truncate block lg:text-[16px] text-[13px] lg:p-[20px] p-[10px] lg:w-auto w-full">7. امکان استفاده از خدمات دیجیتال مارکتینگ و تولید محتوا </div>
                                <div className="text-dark font-normal truncate block lg:text-[16px] text-[13px] lg:p-[20px] p-[10px] lg:w-auto w-full">8. عدم نیاز به پرداخت به مجری قبل از تحویل قسمتی از کار</div>
                            </div>
                            <div className="col-span-1 lg:shrink shrink-0 lg:w-auto w-[30%] bg-theme rounded-[20px] overflow-hidden">    
                                <div className="text-white lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">دارد</span></div>
                                <div className="text-white lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">دارد</span></div>
                                <div className="text-white lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">دارد</span></div>
                                <div className="text-white lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">دارد</span></div>
                                <div className="text-white lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">دارد</span></div>
                                <div className="text-white lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">دارد</span></div>
                                <div className="text-white lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">دارد</span></div>
                                <div className="text-white lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">دارد</span></div>
                            </div>
                            <div className="col-span-1 lg:shrink shrink-0 lg:w-auto w-[30%] bg-lightestGrey rounded-[20px] overflow-hidden">    
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                                <div className="text-orange lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-warn" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">گاهی اوقات</span></div>
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                                <div className="text-orange lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-warn" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">گاهی اوقات</span></div>
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                            </div>
                            <div className="col-span-1 lg:shrink shrink-0 lg:w-auto w-[30%] bg-lightestGrey rounded-[20px] overflow-hidden">    
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                                <div className="text-orange lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-warn" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">گاهی اوقات</span></div>
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                                <div className="text-orange lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-warn" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">گاهی اوقات</span></div>
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                                <div className="text-alert lg:text-[16px] text-[13px] font-semibold flex items-center justify-center gap-[8px] lg:p-[20px] p-[10px]"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="truncate lg:block hidden whitespace-nowrap">ندارد</span></div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}