// Importing part
import {ReactNode} from "react";
import rocketImage from '@/public/img/mission/img-rocket.png';
import Image from "next/image";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting mission component as default
export default function MissionComponent():ReactNode {
    // returning JSX
    return (
        <div className={'bg-gradient-to-b from-theme to-darkerTheme xl:h-[465px] flex xl:flex-row flex-col-reverse gap-[100px]'}>
            <div className={'xl:w-[50%] w-full relative xl:h-[465px]'}>
                <video hidden className={'absolute top-0 left-0 w-full h-full pointer-events-none object-cover object-right'} src="/video/video-mission-bg.mp4" autoPlay={true} loop>
                    <source src="/video/video-mission-bg.mp4" />
                </video>
                <Image className={'w-[70%] xl:-translate-y-[20%]'} src={rocketImage.src} alt="عکس موشک" width={422} height={574} />
            </div>
            <div className={'xl:w-[50%] w-full xl:py-[60px] py-[32px] xl:px-[68px] px-[16px] lg:block flex items-center justify-center flex-col'}>
                <div className={'sign-white'}>ماموریت وبیمود</div>
                <h3 className={'text-white font-bold lg:text-[48px] text-[20px] lg:truncate w-full lg:mb-[17px] mb-[8px] lg:text-start text-center'}>ماموریت وبیمود چیست ؟</h3>
                <p className={'text-lightGrey font-normal lg:text-[20px] text-[13px] lg:leading-[36px] leading-[26px] lg:mb-[40px] mb-[32px] lg:text-start text-center'}>هدف ما در وبیمود این هست که مسیر ایده های شما تا واقعیت را بسیار راحت و ساده کنیم تا شما بتوانید با کمترین هزینه و بهترین کیفیت ، وب سیات و خدمات مورد نیاز کسب و کار آنلاین خود را داشته باشید</p>
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
    );
}