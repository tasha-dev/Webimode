// forcing nextJS to render this component as client side component
'use client';

// Importin part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import Image from 'next/image';
import RandomImage from '@/public/img/blog/img-random.png';

// Defining type of props
interface propsType {
    icon: 'design'|'window'|'poll'|'pencil-paintbrush'|'mobile'|'slack'|'lang'|'ai';
    iconGradiant: 'blue'|'purple'|'green'|'orange'|'deep-green'|'dark-blue'|'pink'|'reversed-pink';
    img: string;
    title: string;
    children: string;
    isLeftSide?: boolean;
}

// Creating and exporting service items as default
export default function ServiceItemComponent({children, icon, img, title, iconGradiant, isLeftSide = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <div 
            data-left-side={isLeftSide}
            className="lg:h-[528px] h-[555px] lg:rounded-r-[40px] lg:data-[left-side='true']:hover:rounded-r-[0px] rounded-r-[20px] transition-all ease-in-out duration-1000 lg:rounded-l-[40px] lg:hover:data-[left-side='false']:rounded-l-[0px] rounded-l-[20px] overflow-hidden relative group"
        >
            <div className={'lg:absolute relative top-0 left-0 w-full transition-all ease-in-out duration-1000 z-[-1] group-hover-skew'}>
                <div className="h-full w-full scale-110 rounded-[40px] bg-black/50 absolute top-0 left-0 z-[2]" />
                <Image className="w-full scale-110 rounded-[40px] object-cover lg:h-full h-[555px]" src={img} alt={title} width={1000} height={528} />
            </div>
            <div 
                data-left-side={isLeftSide}
                className={'transition-all ease-in-out duration-1000 h-full w-full absolute top-0 left-0 lg:p-[44px] p-[20px] flex items-end lg:data-[left-side="false"]:justify-start lg:data-[left-side="true"]:justify-end justify-start data-[left-side="false"]:origin-right data-[left-side="true"]:origin-left group-hover-skew-small-scale'}
            >
                <div 
                    data-left-side={isLeftSide}
                    className="lg:w-[75%] w-full flex flex-col data-[left-side='true']:items-end data-[left-side='false']:items-start justify-start"
                >
                    <div 
                        data-gradiant={iconGradiant} 
                        className="bg-gradient-to-br w-[56px] h-[56px] aspect-auto flex justify-center items-center mb-[12px] rounded-[12px] text-white data-[gradiant='blue']:from-lightTheme data-[gradiant='blue']:to-themeBlue data-[gradiant='green']:from-frogGreen data-[gradiant='green']:to-theme data-[gradiant='purple']:from-themePurple data-[gradiant='purple']:to-themeBlue data-[gradiant='orange']:from-lightOrange data-[gradiant='orange']:to-orange data-[gradiant='deep-green']:from-darkFrogGreen data-[gradiant='deep-green']:to-frogGreen data-[gradiant='pink']:from-pink data-[gradiant='pink']:to-themePurple data-[gradiant='reversed-pink']:from-themePurple data-[gradiant='reversed-pink']:to-pink data-[gradiant='dark-blue']:from-themeBlue data-[gradiant='dark-blue']:to-lightTheme lg:mx-0 mx-auto"
                    >
                        <IconComponent name={icon} size={32} />
                    </div>
                    <span 
                        data-left-side={isLeftSide}
                        className="block w-full truncate text-white text-[24px] font-semibold mb-[4px] lg:data-[left-side='true']:text-end lg:data-[left-side='false']:text-start text-center"
                    >
                            {title}
                    </span>
                    <p 
                        data-left-side={isLeftSide} 
                        className="text-white text-[16px] font-normal line-clamp-2 lg:data-[left-side='false']:text-start lg:data-[left-side='true']:text-end data-[left-side='true']:text-center data-[left-side='false']:text-center"
                    >
                        {children}
                    </p>
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
                </div>
            </div>
            <Image
                alt="نمونه کار"
                src={RandomImage.src}
                width={1000}
                height={1000}
                data-left-side={isLeftSide}
                className="absolute w-[50%] top-0 data-[left-side='true']:right-0 data-[left-side='false']:left-0 h-full data-[left-side='false']:origin-left data-[left-side='true']:origin-right object-cover rounded-[20px] opacity-0 transition-all ease-in-out duration-1000 group-hover-inner-img lg:group-hover:opacity-100"
            />
        </div>
    );
}
