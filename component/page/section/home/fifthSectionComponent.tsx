// Importing part
import {ReactNode} from "react";
import IconComponent from '@/chunk/iconComponent';
import Image from "next/image";
import BgImage from '@/public/img/home/fifthSection/img-bg-overlay.png';
import SliderComponent from "@/chunk/page/home/fifthSection/sliderComponent";

// Creating and exorting fifth section component as default
export default function FifthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="bg-theme relative lg:h-[717px] h-[488px] overflow-hidden">
            <Image src={BgImage.src} width={1140} height={717} alt="عکس بکگراند" className="opacity-50 w-full h-full object-cover absolute top-0 left-0 z-[1] pointer-events-none" />
            <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b via-dark/10 from-transparent to-dark/80 z-[3] pointer-events-none" />
            <div className="container px-[20px] lg:py-[48px] py-[32px] z-[2] relative">
                <header className="flex flex-col items-center justify-center lg:mb-[56px] mb-[40px]">
                    <div className="sign-white">چرا وبیمود</div>
                    <h4 className={'relative lg:text-[48px] text-[20px] text-center text-white'}>
                        <span className={'inline-block font-normal'}>چرا باید</span>
                        <span className={'inline-block relative mx-[1ch] font-bold'}>
                            وبیمود
                            <span className={'text-white absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        <span className={'inline-block font-normal'}>را انتخاب کنید ?</span>
                    </h4>
                </header>
                <main className="flex flex-col items-center justify-center">
                    <h6 className="text-center mb-[4px] text-white text-[16px] font-bold">پشتیبانی 24/7 در کنار شما</h6>
                    <p className="text-center paragraph-small">
                        تیم وبیمود افتخار این را دارد بتا بتواند در تمامی مراحل ایده پردازی تا 
                        <br />
                        تحویل و پشتیبانی پروژه در تمام ساعت زور و روز های هفته ر کنار شما باشد
                    </p>
                    <SliderComponent />
                </main>
            </div>
        </section>
    );
}