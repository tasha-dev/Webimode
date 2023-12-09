// Importing part
import {ReactNode} from "react";
import rocketImage from '@/public/img/mission/img-rocket.png';
import Image from "next/image";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";
import LineMorphComponent from '@/chunk/animation/lineMorphComponent';

// Creating and exporting mission component as default
export default function MissionComponent():ReactNode {
    // returning JSX
    return (
        <div className={'bg-gradient-to-b from-theme to-darkerTheme'}>
            <div className="container xl:h-[465px] flex xl:flex-row flex-col-reverse lg:gap-[100px] gap-0">
                <div className={'xl:w-[50%] w-full relative xl:h-[465px] z-[1]'}>
                    <div className="w-full absolute right-0 top-0 lg:block hidden">
                        <div className="relative xl:h-[574px] animate-circleMotion">
                            <div className="w-[16px] h-[16px] aspect-square rounded-full bg-pink z-[10] absolute -top-[30%] left-[50%]" />
                            <div className="w-[16px] h-[16px] aspect-square rounded-full bg-themePurple z-[10] absolute -top-[20%] right-[30%]" />
                            <div className="w-[16px] h-[16px] aspect-square rounded-full bg-theme z-[10] absolute -top-[10%] left-[20%]" />
                            <div className="w-[16px] h-[16px] aspect-square rounded-full bg-themeBlue z-[10] absolute top-[20%] right-[35%]" />
                            <div className="w-[16px] h-[16px] aspect-square rounded-full bg-themeBlue z-[10] absolute top-[30%] left-0" />
                            <div className="w-[10px] h-[10px] aspect-square rounded-full bg-white z-[10] absolute top-[60%] left-[12%]" />
                            <div className="w-[20px] h-[20px] aspect-square rounded-full bg-themePurple z-[10] absolute top-[70%] right-[45%]" />
                            <div className="w-[20px] h-[20px] aspect-square rounded-full bg-themePurple z-[10] absolute top-[75%] left-[20%]" />
                            <div className="w-[10px] h-[10px] aspect-square rounded-full bg-white z-[10] absolute top-[90%] right-[10%]" />
                        </div>
                    </div>
                    <LineMorphComponent strokeColor="white" className="aspect-square xl:w-[80%] w-[100%] absolute right-[50%] top-[50%] translate-x-[50%] -translate-y-[50%] z-[-1]" />
                    <Image className={'z-[5] w-[70%] xl:-translate-y-[calc(574px-465px)] xl:h-[574px]'} src={rocketImage.src} alt="عکس موشک" width={422} height={574} />
                </div>
                <div className={'xl:w-[50%] w-full xl:py-[60px] py-[32px] xl:px-[68px] px-[16px] lg:block flex items-center justify-center flex-col'}>
                    <div className={'sign-white'}>ماموریت وبیمود</div>
                    <h3 className={'text-white font-bold lg:text-[48px] text-[20px] lg:truncate w-full lg:mb-[17px] mb-[8px] lg:text-start text-center'}>ماموریت وبیمود چیست ؟</h3>
                    <p className={'text-lightGrey font-normal line-clamp-3 lg:text-[20px] text-[13px] lg:leading-[36px] leading-[26px] lg:mb-[40px] mb-[32px] lg:text-start text-center'}>هدف ما در وبیمود این هست که مسیر ایده های شما تا واقعیت را بسیار راحت و ساده کنیم تا شما بتوانید با کمترین هزینه و بهترین کیفیت ، وب سیات و خدمات مورد نیاز کسب و کار آنلاین خود را داشته باشید</p>
                    <div className={'flex lg:flex-row flex-col gap-[24px] flex-wrap lg:w-auto w-full'}>
                        <Link href={'/about-us'} className={'btn-primary-white lg:w-auto w-full'}>
                            درباره ما
                            <IconComponent name={'chevron-left'} size={16} />
                        </Link>
                        <Link href={'tel:9120000000'} className={'btn-secondary-white lg:w-auto w-full'}>
                            <IconComponent name={'telephone'} size={16} />
                            تماس با ما
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}