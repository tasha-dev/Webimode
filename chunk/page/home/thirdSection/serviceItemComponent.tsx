// Importin part
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import {ReactNode} from "react";
import Image from 'next/image';
import MobileImage from '@/public/img/home/thirdSection/services/img-mobile-left-side.png';

// Defining type of props
interface propsType {
    icon: 'design'|'window'|'poll'|'pencil-paintbrush'|'mobile'|'slack'|'lang'|'ai';
    iconGradiant: 'blue'|'purple'|'green'|'orange'|'deep-green'|'dark-blue'|'pink'|'reversed-pink';
    img: string;
    title: string;
    children: string;
    hasMobileImageInLeft?: boolean;
    hasButtons?: boolean;
}

// Creating and exporting service items as default
export default function ServiceItemComponent({children, icon, img, title, hasButtons = false, hasMobileImageInLeft = false, iconGradiant}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className="h-[528px] overflow-hidden rounded-[40px] relative">
            <Image className="absolute top-0 left-0 w-full h-full object-cover" src={img} alt={title} width={1000} height={528} />
            <div className={`h-full w-full absolute top-0 left-0 bg-dark/50 p-[44px] flex ${(hasMobileImageInLeft) ? 'flex-row gap-[20px] justify-between items-end' : 'flex-col justify-end items-start'}`}>
                <div className="w-[75%]">
                    <div data-gradiant={iconGradiant} className="bg-gradient-to-br w-[56px] h-[56px] aspect-auto flex justify-center items-center mb-[12px] rounded-[12px] text-white data-[gradiant='blue']:from-lightTheme data-[gradiant='blue']:to-themeBlue data-[gradiant='green']:from-frogGreen data-[gradiant='green']:to-theme data-[gradiant='purple']:from-themePurple data-[gradiant='purple']:to-themeBlue data-[gradiant='orange']:from-lightOrange data-[gradiant='orange']:to-orange data-[gradiant='deep-green']:from-darkFrogGreen data-[gradiant='deep-green']:to-frogGreen data-[gradiant='pink']:from-pink data-[gradiant='pink']:to-themePurple data-[gradiant='reversed-pink']:from-themePurple data-[gradiant='reversed-pink']:to-pink data-[gradiant='dark-blue']:from-themeBlue data-[gradiant='dark-blue']:to-lightTheme">
                        <IconComponent name={icon} size={28} />
                    </div>
                    <span className="block truncate text-white text-[24px] font-semibold mb-[4px]">{title}</span>
                    <p className="text-white text-[16px] font-normal line-clamp-2">{children}</p>
                    {
                        (hasButtons)
                            ? (
                                <div className={'flex lg:flex-row flex-col mt-[40px] lg:w-auto w-full lg:flex-wrap gap-[12px]'}>
                                    <Link href={'/contact-us'} className={'btn-primary-white lg:w-auto w-full'}>
                                        ثبت سفارش   
                                        <IconComponent name='chevron-left' size={16} />
                                    </Link>
                                    <Link href={'/work-samples'} className={'btn-secondary-white lg:w-auto w-full'}>
                                        نمونه کار های ما
                                        <IconComponent name={'chevron-left'} size={16} />
                                    </Link>
                                </div>
                            ) : false
                    }
                </div>
                {
                    (hasMobileImageInLeft)
                        ? <Image className="w-[50%] h-full" src={MobileImage.src} alt='عکس موبایل' width={500} height={500} />
                        : false
                }
            </div>
        </div>
    );
}