// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import LeftSideImage from '@/public/img/img-estimate.png';
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting estimate component as default
export default function EstimateComponent():ReactNode {
    // Returning JSX
    return (
        <div className="container lg:my-[249px] my-[196px] lg:rounded-[20px] shadow-custom bg-gradient-to-t from-darkerTheme to-darkestTheme">
            <div className="lg:grid lg:grid-cols-2 gap-[15px] p-[40px]">
                <div className="lg:col-span-1 lg:block flex flex-col items-center justify-center lg:mb-0 mb-[40px]">
                    <div className="sign-white">تخمین قیمت</div>
                    <h5 className="font-normal text-white lg:text-[48px] text-[20px] lg:mb-[16px] mb-[12px] lg:text-start text-center">
                        <span className="text-theme font-semibold inline-block ml-[1ch]">قیمت پروژت</span>
                        رو به راحتی تخمین بزن
                    </h5>
                    <p className="paragraph lg:mb-[40px] mb-[32px] lg:text-start text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                    <div className="flex lg:flex-row flex-col items-center gap-[24px] flex-wrap lg:w-auto w-full">
                        <Link className="btn-primary-white lg:w-auto w-full" href='#'>
                            تخمین قیمت پروژه
                            <IconComponent name="chevron-left" size={16} />
                        </Link>
                        <Link className="btn-secondary-white lg:w-auto w-full" href='#'>
                            ثبت درخواست همکاری
                            <IconComponent name="chevron-left" size={16} />
                        </Link>
                    </div>
                </div>
                <div className="relative lg:h-[425px] h-auto">
                    <Image width={500} height={500} alt="عکس سمت چپ" src={LeftSideImage.src} className="lg:absolute lg:w-[90%] w-full bottom-0 left-0 lg:animate-circleMotion" />
                </div>
            </div>
        </div>
    );
}

