// Importing part
import {ReactNode} from "react";
import IconComponent from '@/chunk/iconComponent';
import Image from "next/image";
import MainImage from '@/public/img/home/fifthSection/img-main.png';

// Creating and exorting fifth section component as default
export default function FifthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="bg-theme">
            <div className="container px-[20px] py-[48px]">
                <header>
                    <div className="sign-white">چرا وبیمود</div>
                    <h4 className={'relative lg:text-[48px] text-[20px] text-center text-white'}>
                        <span className={'inline-block ml-[1ch] font-normal'}>چرا باید</span>
                        <span className={'inline-block ml-[1ch] font-bold'}>وبیمود</span>
                        <span className={'inline-block font-normal'}>را انتخاب کنید ?</span>
                        <span className={'text-theme absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h4>
                </header>
                <main>
                    <h6>پشتیبانی 24/7 در کنار شما</h6>
                    <p>تیم وبیمود افتخار این را دارد بتا بتواند در تمامی مراحل ایده پردازی تا تحویل و پشتیبانی پروژه در تمام ساعت زور و روز های هفته ر کنار شما باشد</p>
                    <Image src={MainImage.src} alt={'ویژگی های وبیمود'} width={750} height={787} />
                </main>
            </div>
        </section>
    );
}