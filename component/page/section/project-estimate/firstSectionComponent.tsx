// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting first section of project estimate page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'mb-[50px]'}>
            <div className="container">
                <header className={'flex flex-col items-center justify-center'}>
                    <div className="sign">تخمین قیمت خدمات</div>
                    <h2 className={'lg:inline-block hidden text-[40px] relative mb-[20px]'}>
                        <span className={'text-dark font-normal inline-block ml-[10px]'}>قیمت هر نوع پروژه ای روکه میخوای به راحتی</span>
                        <span className={'text-theme font-bold inline-block'}>تخمین بزن</span>
                        <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14}/></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14}/></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18}/></span>
                            </span>
                    </h2>
                    <div className={'lg:hidden flex flex-col items-center justify-center mb-[20px]'}>
                        <h2 className={'text-[20px] font-normal text-dark mb-[30px]'}>قیمت هر نوع پروژه ای روکه
                            میخوای</h2>
                        <h2 className={'text-[20px] font-bold text-theme relative'}>
                            به راحتی تخمین بزن
                            <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[10px]'}>
                                    <span className={'self-center'}><IconComponent name={'star'} size={4}/></span>
                                    <span className={'self-end'}><IconComponent name={'star'} size={5}/></span>
                                    <span className={'self-start'}><IconComponent name={'star'} size={8}/></span>
                                </span>
                        </h2>
                    </div>
                </header>
                <main>
                    <p className="lg:text-[20px] text-[13px] text-dark lg:leading-[36px] leading-[28px] text-center font-light">
                        با وارد اطالاعات کردن مورد نیاز
                        <span className={'font-bold'}>به راحتی قیمت پروژه مد نظرتون رو محاسبه کنید و به دست تیم حرفه ای ما بسپارید !</span>
                    </p>
                </main>
            </div>
        </section>
    );
}