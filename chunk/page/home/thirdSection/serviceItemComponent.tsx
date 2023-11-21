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
        <div className="lg:h-[528px] h-[555px] overflow-hidden rounded-[40px] relative">
            <Image className="absolute top-0 left-0 w-full h-full object-cover" src={img} alt={title} width={1000} height={528} />
            <div className={`h-full w-full absolute top-0 left-0 bg-dark/50 p-[44px] flex ${(hasMobileImageInLeft) ? 'lg:flex-row flex-col gap-[20px] lg:justify-between justify-end lg:items-end items-center' : 'flex-col justify-end items-start'}`}>
                <div className="lg:w-[75%] w-full">
                    <div data-gradiant={iconGradiant} className="bg-gradient-to-br w-[56px] h-[56px] aspect-auto flex justify-center items-center mb-[12px] rounded-[12px] text-white data-[gradiant='blue']:from-lightTheme data-[gradiant='blue']:to-themeBlue data-[gradiant='green']:from-frogGreen data-[gradiant='green']:to-theme data-[gradiant='purple']:from-themePurple data-[gradiant='purple']:to-themeBlue data-[gradiant='orange']:from-lightOrange data-[gradiant='orange']:to-orange data-[gradiant='deep-green']:from-darkFrogGreen data-[gradiant='deep-green']:to-frogGreen data-[gradiant='pink']:from-pink data-[gradiant='pink']:to-themePurple data-[gradiant='reversed-pink']:from-themePurple data-[gradiant='reversed-pink']:to-pink data-[gradiant='dark-blue']:from-themeBlue data-[gradiant='dark-blue']:to-lightTheme lg:mx-0 mx-auto">
                        {
                            (icon === 'design') 
                              ? (
                                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M24.5 19.6294V14.9628C24.4996 13.3954 24.1477 11.848 23.4701 10.4347C22.7924 9.02131 21.8064 7.77794 20.5847 6.79611H23.6565C23.915 7.23666 24.3116 7.5797 24.7848 7.77212C25.258 7.96455 25.7814 7.99563 26.274 7.86056C26.7667 7.72549 27.201 7.43179 27.5099 7.02494C27.8188 6.61808 27.9849 6.12076 27.9826 5.60995C27.9803 5.09914 27.8097 4.60333 27.4972 4.19928C27.1847 3.79522 26.7477 3.50545 26.2538 3.37481C25.76 3.24418 25.2369 3.27997 24.7655 3.47665C24.294 3.67332 23.9006 4.01992 23.646 4.46278H18.501C18.2463 3.46226 17.6656 2.57511 16.8505 1.94148C16.0354 1.30785 15.0324 0.963867 14 0.963867C12.9676 0.963867 11.9646 1.30785 11.1495 1.94148C10.3344 2.57511 9.75365 3.46226 9.499 4.46278H4.3435C4.08495 4.02223 3.68839 3.67919 3.21521 3.48676C2.74202 3.29434 2.2186 3.26325 1.72597 3.39833C1.23334 3.5334 0.798964 3.82709 0.490093 4.23395C0.181222 4.6408 0.0150763 5.13812 0.0173749 5.64893C0.0196736 6.15974 0.190288 6.65555 0.502809 7.05961C0.815329 7.46367 1.25233 7.75344 1.74615 7.88407C2.23998 8.01471 2.7631 7.97891 3.23454 7.78224C3.70597 7.58556 4.09943 7.23897 4.354 6.79611H7.41533C6.19355 7.77794 5.20755 9.02131 4.52995 10.4347C3.85234 11.848 3.50039 13.3954 3.5 14.9628V19.6294C2.57174 19.6294 1.6815 19.9982 1.02513 20.6546C0.368749 21.3109 0 22.2012 0 23.1294L0 25.4628C0 26.391 0.368749 27.2813 1.02513 27.9377C1.6815 28.594 2.57174 28.9628 3.5 28.9628H5.83333C6.76159 28.9628 7.65183 28.594 8.30821 27.9377C8.96458 27.2813 9.33333 26.391 9.33333 25.4628V23.1294C9.33333 22.2012 8.96458 21.3109 8.30821 20.6546C7.65183 19.9982 6.76159 19.6294 5.83333 19.6294V14.9628C5.83523 13.5263 6.21601 12.1157 6.93724 10.8733C7.65847 9.631 8.69463 8.60089 9.94117 7.88694C10.3389 8.61608 10.9258 9.2246 11.64 9.64856C12.3542 10.0725 13.1694 10.2963 14 10.2963C14.8306 10.2963 15.6458 10.0725 16.36 9.64856C17.0742 9.2246 17.6611 8.61608 18.0588 7.88694C19.3054 8.60089 20.3415 9.631 21.0628 10.8733C21.784 12.1157 22.1648 13.5263 22.1667 14.9628V19.6294C21.2384 19.6294 20.3482 19.9982 19.6918 20.6546C19.0354 21.3109 18.6667 22.2012 18.6667 23.1294V25.4628C18.6667 26.391 19.0354 27.2813 19.6918 27.9377C20.3482 28.594 21.2384 28.9628 22.1667 28.9628H24.5C25.4283 28.9628 26.3185 28.594 26.9749 27.9377C27.6313 27.2813 28 26.391 28 25.4628V23.1294C28 22.2012 27.6313 21.3109 26.9749 20.6546C26.3185 19.9982 25.4283 19.6294 24.5 19.6294Z" fill="currentColor"/>
                                  </svg>
                              )
                              : <IconComponent name={icon} size={32} />
                        }  
                    </div>
                    <span className="block truncate text-white text-[24px] font-semibold mb-[4px] lg:text-start text-center">{title}</span>
                    <p className="text-white text-[16px] font-normal line-clamp-2 lg:text-start text-center">{children}</p>
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
                        ? <Image className="w-[50%] lg:block hidden h-full" src={MobileImage.src} alt='عکس موبایل' width={500} height={500} />
                        : false
                }
            </div>
        </div>
    );
}
