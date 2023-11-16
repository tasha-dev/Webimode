// Importin part
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import {ReactNode} from "react";
import Image from 'next/image';
import mobileImage from '@/public/img/home/thirdSection/img-mobile-left-side.png';

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
        <div>
            <div>
                <div data-gradiant={iconGradiant}>
                    <IconComponent name={icon} size={28} />
                </div>
                <span>{title}</span>
                <span>{children}</span>
                {
                    (hasButtons)
                        ? (
                            <div className={'flex lg:flex-row flex-col lg:w-auto w-full lg:flex-wrap lg:gap-[34px] gap-[24px]'}>
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
                    ? (
                        <Image src={mobileImage.src} alt='عکس موبایل' width={210} height={486} />
                    ) : false
            }
        </div>
    );
}