// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import Image from "next/image";
import LeftSideImage from '@/public/img/home/eighthSection/img-left-side.png';

// Creating and exporting eighth section of home page as default
export default function EighthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="lg:mt-[250px] mt-[50px] bg-gradient-to-b from-theme to-darkerTheme overflow-hidden">
            <div className="container p-[20px] flex lg:flex-row flex-col items-center justify-between lg:gap-[40px] gap-[20px]">
                <div className="lg:w-[60%] w-full lg:block flex flex-col items-center justify-center">
                    <div className="sign-white">درخواست همکاری</div>
                    <h4 className="text-white lg:text-[48px] text-[20px] font-normal mb-[12px] relative lg:text-start text-center">
                        پروژه خودتو به 
                        <span className='font-bold inline-block mx-[1ch]'>
                            تیم وبیمود
                        </span>
                        بسپار 
                        <span className={'text-white absolute right-[102%] bottom-full lg:flex hidden flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h4>
                    <p className="paragraph lg:mb-[40px] mb-[32px] lg:text-start text-center">تیم وبیمود با داشتن نیرو های حرفه ای و کارآند در زمینه های مختلف طراحی و توسعه تمام تلاش خود را می کند تا بتواند بهترین خدمات را ارائه دهد .</p>
                    <div className="flex items-start gap-[20px] lg:w-auto w-full">
                        <div className={'flex lg:flex-row flex-col gap-[24px] flex-wrap lg:w-auto w-full'}>
                            <Link href={'/contact-us'} className={'btn-primary-white lg:w-auto w-full'}>
                                درخواست همکاری  
                            </Link>
                            <Link href={'/work-samples'} className={'btn-secondary-white lg:w-auto w-full'}>
                                نمونه کار های ما    
                                <IconComponent name={'chevron-left'} size={16} />
                            </Link>
                        </div>
                        <span className="text-white lg:block hidden">
                            <IconComponent name="hand-arrow-left" size={112} />
                        </span>
                    </div>
                </div>
                <Image className="lg:w-[60%] w-full animate-circleMotion" src={LeftSideImage.src} alt="عکس موبایل" width={1000} height={1000} />
            </div>
        </section>
    );
}