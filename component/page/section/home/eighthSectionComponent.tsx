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
        <section>
            <div className="container p-[20px]">
                <div className="sign-white">درخواست همکاری</div>
                <h4>
                    پروژه خودتو به 
                    <span>تیم وبیمود</span>
                    بسپار 
                    <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                        <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                        <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                        <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                    </span>
                </h4>
                <p>تیم وبیمود با داشتن نیرو های حرفه ای و کارآند در زمینه های مختلف طراحی و توسعه تمام تلاش خود را می کند تا بتواند بهترین خدمات را ارائه دهد .</p>
                <div className={'flex lg:flex-row flex-col gap-[24px] flex-wrap lg:w-auto w-full'}>
                    <Link href={'/contact-us'} className={'btn-primary-white lg:w-auto w-full'}>
                        درخواست همکاری  
                    </Link>
                    <Link href={'/work-samples'} className={'btn-secondary-white lg:w-auto w-full'}>
                        نمونه کار های ما    
                        <IconComponent name={'chevron-left'} size={16} />
                    </Link>
                </div>
            </div>
            <Image src={LeftSideImage.src} alt="عکس موبایل" width={1000} height={1000} />
        </section>
    );
}