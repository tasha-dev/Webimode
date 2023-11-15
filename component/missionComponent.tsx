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
        <div className={'bg-gradient-to-b from-theme to-darkerTheme h-[465px] flex gap-[100px]'}>
            <div className={'w-[50%] relative h-[465px]'}>
                <video className={'absolute top-0 left-0 w-full h-full pointer-events-none object-cover object-right'} src="/video/video-mission-bg.mp4" autoPlay={true} loop>
                    <source src="/video/video-mission-bg.mp4" />
                </video>
                <Image className={'w-[70%] -translate-y-[20%]'} src={rocketImage.src} alt="عکس موشک" width={422} height={574} />
            </div>
            <div className={'w-[50%] py-[60px] px-[68px]'}>
                <div className={'sign-white'}>ماموریت وبیمود</div>
                <h3 className={'text-white font-bold text-[48px] truncate w-full mb-[17px]'}>ماموریت وبیمود چیست ؟</h3>
                <p className={'text-lightGrey font-normal text-[20px] leading-[36px] mb-[40px]'}>هدف ما در وبیمود این هست که مسیر ایده های شما تا واقعیت را بسیار راحت و ساده کنیم تا شما بتوانید با کمترین هزینه و بهترین کیفیت ، وب سیات و خدمات مورد نیاز کسب و کار آنلاین خود را داشته باشید</p>
                <div className={'flex gap-[24px] flex-wrap'}>
                    <Link href={'/about-us'} className={'btn-primary-white'}>
                        درباره ما
                        <IconComponent name={'chevron-left'} size={16} />
                    </Link>
                    <Link href={'tel:9120000000'} className={'btn-secondary-white'}>
                        <IconComponent name={'telephone'} size={16} />
                        تماس با ما
                    </Link>
                </div>
            </div>
        </div>
    );
}