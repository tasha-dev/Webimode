// Importing part
import {ReactNode} from "react";
import ProfileComponent from "@/chunk/page/chat-gpt-app/profileComponent";
import ImageOfMrEhsan from '@/public/img/blog/img-ehsan.jpg';
import CostComponent from "@/chunk/page/chat-gpt-app/costComponent";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import Image from "next/image";
import LogoImage from '@/app/favicon.ico';

// Creating and exporting right side of chat gpt app as default
export default function RightSideComponent():ReactNode {
    // Returning JSX
    return (
        <div className="lg:bg-pageDark bg-dark overflow-auto lg:p-[20px] no-scroll">
            <div className="lg:block hidden">
                <div>
                    <div className="chat-tag">اطاعات شخصی و اعتبار</div>
                    <ProfileComponent cash={2.500} img={ImageOfMrEhsan.src} name="احسان امانیان" />
                </div>
                <div className="h-[2px] bg-gradient-to-r from-transparent to-transparent my-[24px] via-lightGrey" />
                <div>
                    <div className="chat-tag">توضیحات اختصاصی</div>
                    <p className="paragraph-small">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
                </div>
                <div className="h-[2px] bg-gradient-to-r from-transparent to-transparent my-[24px] via-lightGrey" />
                <div>
                    <div className="chat-tag">هزینه های امکانات</div>
                    <ul className="flex flex-col gap-[24px]">
                        <CostComponent price={1} step={1000} title="حالت davinci" total={1300} />
                        <CostComponent price={1} step={1000} title="حالت babbage" total={1300} />
                        <CostComponent price={1} step={1000} title="حالت GPT4 send" total={1300} />
                        <CostComponent price={1} step={1000} title="حالت GPT4 receive" total={1300} />
                    </ul>
                </div>
            </div>
            <div className="lg:hidden flex items-center justify-between gap-[10px] lg:pr-[20px] py-[20px] pl-[30px] pr-[20px]">
                <button className="chat-header-btn"><IconComponent name="person" size={20} /></button>
                <Link href={'/'}>
                    <Image src={LogoImage.src} alt={'لوگو وبیمود'} width={56} height={56} />
                </Link>
                <button className="chat-header-btn"><IconComponent name="undo" size={20} /></button>
            </div>
        </div>
    );
}