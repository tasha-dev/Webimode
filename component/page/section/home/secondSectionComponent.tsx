// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import StepComponent from "@/chunk/page/home/secondSection/stepComponent";

// Creating and exporting second section of home page as default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'lg:mt-[256px] mt-[196px] p-[20px]'}>
            <header className={'flex items-center justify-center flex-col max-w-[560px] mx-auto mb-[40px]'}>
                <div className={'sign'}>تیم وبیمود</div>
                <h4 className={'relative text-[48px] font-bold mb-[8px] text-center'}>
                    <span className={'inline-block ml-[1ch] text-dark'}>مراحل خدمات</span>
                    <span className={'inline-block text-theme'}>وبیمود</span>
                    <span className={'text-theme absolute right-full bottom-full flex flex-col w-[30px]'}>
                        <span className={'self-center'}><IconComponent name={'star'} size={10} /></span>
                        <span className={'self-end'}><IconComponent name={'star'} size={12} /></span>
                        <span className={'self-start'}><IconComponent name={'star'} size={14} /></span>
                    </span>
                </h4>
                <p className={'text-[20px] text-center text-lightGrey leading-[36px]'}>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</p>
            </header>
            <main dir="ltr" className="grid grid-cols-6 my-[232px] relative">
                <div className="w-[56px] h-[56px] aspect-square flex justify-center items-center rounded-full absolute left-0 top-[50%] -translate-y-[50%] bg-white z-[3] border border-theme text-theme">
                    <span className="translate-y-[5px]"><IconComponent name="right-arrow" size={24} /></span>
                </div>
                <StepComponent position="bottom" count="۱" isActive={true} icon='brief-case' title='درخواست و ثبت سفارش'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                <StepComponent position="top" count="۲" isActive={false} icon='money-check-edit' title='بررسی و اعلام هزینه'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                <StepComponent position="bottom" count="۳" isActive={false} icon='design' title='طراحی اولیه'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                <StepComponent position="top" count="۴" isActive={false} icon='replace' title='پیاده سازی و تحویل'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                <StepComponent position="bottom" count="۵" isActive={false} icon='vote-yes' title='تغییر و تکمیل طراحی'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                <div className="h-[2px] bg-lightGrey" />
                <div className="w-[56px] h-[56px] aspect-square flex justify-center items-center rounded-full absolute right-0 top-[50%] -translate-y-[50%] bg-white z-[3] border border-lightGrey text-lightGrey">
                    <IconComponent name="party-horn" size={24} />
                </div>
            </main>
        </section>
    );
}