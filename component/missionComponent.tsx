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
        <div>
            <div>
                <video src="/video/video-mission-bg.mp4" autoPlay={true} loop className={'pointer-events-none'}>
                    <source src="/video/video-mission-bg.mp4" />
                </video>
                <Image src={rocketImage.src} alt="عکس موشک" width={422} height={574} />
            </div>
            <div>
                <div className={'sign-white'}>ماموریت وبیمود</div>
                <h1>ماموریت وبیمود چیست ؟</h1>
                <p>هدف ما در وبیمود این هست که مسیر ایده های شما تا واقعیت را بسیار راحت و ساده کنیم تا شما بتوانید با کمترین هزینه و بهترین کیفیت ، وب سیات و خدمات مورد نیاز کسب و کار آنلاین خود را داشته باشید</p>
                <div>
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