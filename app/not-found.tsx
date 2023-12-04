// Importing part
import {ReactNode} from "react";
import Image from 'next/image';
import NotFoundImage from '@/public/img/img-404.svg';
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting 404 page as default
export default function NotFoundPage(): ReactNode {
    // Returning JSX
    return (
        <section className="lg:pt-[250px] pt-[68px]">
            <div className="container px-[20x] lg:py-[200px] py-[20px]">
                <main className="lg:w-[75%] w-full flex flex-col items-center justify-center mx-auto">
                    <Image className="lg:w-[75%] w-full mb-[50px] mx-auto" width={1000} height={1000} alt="صفحه مورد نظر یافت نشد!" src={NotFoundImage.src} />
                    <h1 className="font-bold lg:text-[64px] text-[32px] text-dark relative text-center lg:mb-[50px] mb-[15px]">
                        صفحه مورد
                        <span className="font-black text-theme inline-block mr-[1ch]">نظر یافت نشد!</span>
                        <span className={'text-theme absolute right-[102%] bottom-full lg:flex hidden flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h1>
                    <Link className="btn-primary" href='/'>
                        بازگشت به خانه
                        <IconComponent size={16} name="chevron-left" />
                    </Link>
                </main>
            </div>
        </section>
    );
}