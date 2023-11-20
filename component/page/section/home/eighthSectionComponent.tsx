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
        <section className="mt-[250px] bg-gradient-to-b from-theme to-darkerTheme">
            <div className="container p-[20px] flex items-center justify-between gap-[40px]">
                <div className="w-[60%]">
                    <div className="sign-white">درخواست همکاری</div>
                    <h4 className="text-white text-[48px] font-normal mb-[12px] relative">
                        پروژه خودتو به 
                        <span className='font-bold inline-block mx-[1ch]'>
                            تیم وبیمود
                        </span>
                        بسپار 
                        <span className={'text-white absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h4>
                    <p className="text-lightGrey text-[20px] leading-[36px] font-normal mb-[40px]">تیم وبیمود با داشتن نیرو های حرفه ای و کارآند در زمینه های مختلف طراحی و توسعه تمام تلاش خود را می کند تا بتواند بهترین خدمات را ارائه دهد .</p>
                    <div className="flex items-start gap-[20px]">
                        <div className={'flex lg:flex-row flex-col gap-[24px] flex-wrap lg:w-auto w-full'}>
                            <Link href={'/contact-us'} className={'btn-primary-white lg:w-auto w-full'}>
                                درخواست همکاری  
                            </Link>
                            <Link href={'/work-samples'} className={'btn-secondary-white lg:w-auto w-full'}>
                                نمونه کار های ما    
                                <IconComponent name={'chevron-left'} size={16} />
                            </Link>
                        </div>
                        <span className="text-white">
                            <IconComponent name="hand-arrow-left" size={112} />
                        </span>
                    </div>
                </div>
                <Image className="w-[40%]" src={LeftSideImage.src} alt="عکس موبایل" width={1000} height={1000} />
            </div>
        </section>
    );
}