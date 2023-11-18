// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import StepComponent from "@/chunk/page/home/secondSection/stepComponent";

// Creating and exporting second section of home page as default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'lg:mt-[256px] mt-[196px] p-[20px]'}>
            <header className={'flex items-center justify-center flex-col mx-auto lg:mb-[40px] mb-[32px]'}>
                <div className={'sign'}>تیم وبیمود</div>
                <h4 className={'relative lg:text-[48px] text-[20px] font-bold mb-[8px] text-center'}>
                    <span className={'inline-block ml-[1ch] text-dark'}>مراحل خدمات</span>
                    <span className={'inline-block text-theme'}>وبیمود</span>
                    <span className={'text-theme absolute right-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                        <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                        <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                        <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                    </span>
                </h4>
                <p className={'lg:text-[20px] text-[13px] text-center text-lightGrey lg:leading-[36px] leading-[28px]'}>
                    تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین
                    <br />
                    مرحله آن پشتیبان شماست .
                </p>
            </header>
            <main dir="ltr" className="grid lg:grid-cols-6 grid-cols-1 lg:mt-[232px] mt-[32px] relative">
                <div className="w-[56px] h-[56px] aspect-square flex justify-center items-center rounded-full lg:absolute left-0 top-[50%] lg:-translate-y-[50%] lg:rotate-0 rotate-90 lg:mx-0 mx-auto bg-white z-[3] border border-theme text-theme">
                    <span className="translate-y-[5px]"><IconComponent name="right-arrow" size={24} /></span>
                </div>
                <StepComponent isFirstOne position="bottom" count="۱" isActive={true} icon='brief-case' title='درخواست و ثبت سفارش'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                <StepComponent position="top" count="۲" isActive={false} icon='money-check-edit' title='بررسی و اعلام هزینه'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                <StepComponent position="bottom" count="۳" isActive={false} icon='design' title='طراحی اولیه'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                <StepComponent position="top" count="۴" isActive={false} icon='replace' title='پیاده سازی و تحویل'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                <StepComponent position="bottom" count="۵" isActive={false} icon='vote-yes' title='تغییر و تکمیل طراحی'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                <div className="h-[2px] bg-lightGrey lg:block hidden" />
                <div className="w-[56px] h-[56px] aspect-square lg:flex hidden justify-center items-center rounded-full absolute right-0 top-[50%] -translate-y-[50%] bg-white z-[3] border border-lightGrey text-lightGrey">
                    <IconComponent name="party-horn" size={24} />
                </div>
            </main>
        </section>
    );
}
