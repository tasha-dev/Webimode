// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import DetailComponent from '@/chunk/page/home/secondSection/detailComponent';

// Creating and exporting second section of home page as default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'lg:mt-[256px] mt-[196px]'}>
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
            <main dir="ltr">
                <div><IconComponent name="right-arrow" size={22} /></div>
                <div><IconComponent name="party-horn" size={22} /></div>
                <div>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
                <div>
                    <div>۱</div>
                    <DetailComponent isChecked={true} icon='brief-case' title='درخواست و ثبت سفارش'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</DetailComponent>
                </div>
                <div>
                    <div>۲</div>
                    <DetailComponent isChecked={false} icon='money-check-edit' title='بررسی و اعلام هزینه'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</DetailComponent>
                </div>
                <div>
                    <div>۳</div>
                    <DetailComponent isChecked={false} icon='design' title='طراحی اولیه'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</DetailComponent>
                </div>
                <div>
                    <div>۴</div>
                    <DetailComponent isChecked={false} icon='replace' title='پیاده سازی و تحویل'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</DetailComponent>
                </div>
                <div>
                    <div>۵</div>
                    <DetailComponent isChecked={false} icon='vote-yes' title='تغییر و تکمیل طراحی'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</DetailComponent>
                </div>
            </main>
        </section>
    );
}