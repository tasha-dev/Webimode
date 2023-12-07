// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting sixth section of create page as default
export default function SixthSectionComponenet():ReactNode {
    // Returning JSX
    return (
        <section className="lg:my-[225px] my-[196px]">
            <div className="container p-[20px]">
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
                <main className="lg:w-[80%] w-full mx-auto overflow-hidden">
                    <div className="grid grid-cols-5">
                        <div className="col-span-2 truncate p-[20px] text-[20px] font-normal text-lightGrey"><span className="block truncate">مزایا و امکانات</span></div>
                        <div className="col-span-1 truncate p-[20px] flex items-center justify-center text-[20px] font-normal text-theme"><span className="block truncate">تیم وبیمود</span></div>
                        <div className="col-span-1 truncate p-[20px] flex items-center justify-center text-[20px] font-normal text-lightGrey"><span className="block truncate">شرکت طراحی سایت</span></div>
                        <div className="col-span-1 truncate p-[20px] flex items-center justify-center text-[20px] font-normal text-lightGrey"><span className="block truncate">سایت ساز آنلاین</span></div>
                    </div>
                    <div className="w-full bg-gradient-to-r my-[16px] from-white to-white via-lightGrey h-[2px]" />
                    <div className="grid grid-cols-5 lg:gap-[100px] gap-[50px]">
                        <div className="col-span-2">
                            <div className="p-[20px] text-dark font-normal truncate block">1. پرداخت امن</div>
                            <div className="p-[20px] text-dark font-normal truncate block">2. امکان بررسی و انتخاب از بین صدها متخصص و نمونه کار</div>
                            <div className="p-[20px] text-dark font-normal truncate block">3. امکان بررسی تخصصی نظرات سایر کارفرمایان</div>
                            <div className="p-[20px] text-dark font-normal truncate block">4. ضمانت اجرای کیفیت و تحویل به موقع طبق تعهد</div>
                            <div className="p-[20px] text-dark font-normal truncate block">5. قیمت رقابتی</div>
                            <div className="p-[20px] text-dark font-normal truncate block">6. استفاده رایگان بدون هزینه ماهانه یا سالانه برای استفاده از خدمات</div>
                            <div className="p-[20px] text-dark font-normal truncate block">7. امکان استفاده از خدمات دیجیتال مارکتینگ و تولید محتوا </div>
                            <div className="p-[20px] text-dark font-normal truncate block">8. عدم نیاز به پرداخت به مجری قبل از تحویل قسمتی از کار</div>
                        </div>
                        <div className="col-span-1 bg-theme shadow-custom rounded-[32px] p-[10px]">    
                            <div className="text-white text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="lg:block hidden truncate">دارد</span></div>
                            <div className="text-white text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="lg:block hidden truncate">دارد</span></div>
                            <div className="text-white text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="lg:block hidden truncate">دارد</span></div>
                            <div className="text-white text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="lg:block hidden truncate">دارد</span></div>
                            <div className="text-white text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="lg:block hidden truncate">دارد</span></div>
                            <div className="text-white text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="lg:block hidden truncate">دارد</span></div>
                            <div className="text-white text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="lg:block hidden truncate">دارد</span></div>
                            <div className="text-white text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-check" size={24} /></span><span className="lg:block hidden truncate">دارد</span></div>
                        </div>
                        <div className="col-span-1 bg-lightestGrey rounded-[32px] p-[10px]">    
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                            <div className="text-orange text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-warn" size={24} /></span><span className="lg:block hidden truncate">گاهی اوقات</span></div>
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                            <div className="text-orange text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-warn" size={24} /></span><span className="lg:block hidden truncate">گاهی اوقات</span></div>
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                        </div>
                        <div className="col-span-1 bg-lightestGrey rounded-[32px] p-[10px]">    
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                            <div className="text-orange text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-warn" size={24} /></span><span className="lg:block hidden truncate">گاهی اوقات</span></div>
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                            <div className="text-orange text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-warn" size={24} /></span><span className="lg:block hidden truncate">گاهی اوقات</span></div>
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                            <div className="text-alert text-[16px] font-semibold p-[20px] flex items-center justify-center gap-[8px] truncate"><span className="shrink-0"><IconComponent name="circle-x" size={24} /></span><span className="lg:block hidden truncate">ندارد</span></div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}