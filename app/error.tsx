// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Image from 'next/image';
import ErrorImage from '@/public/img/code-pages/img-error.png';

// Creating and exporting 404 page as default
export default function NotFoundPage(): ReactNode {
    // Returning JSX
    return (
        <section id="error-page">
            <div className="container p-[20px]">
                <main className="lg:w-[75%] w-full flex flex-col items-center justify-center mx-auto">
                    <Image className="w-full mb-[50px] mx-auto" width={1000} height={1000} alt="صفحه مورد نظر یافت نشد!" src={ErrorImage.src} />
                    <h1 className="font-bold lg:text-[36px] text-[20px] text-dark relative text-center">
                        دسترسی به این بخش در اطلاع ثانویه
                        <span className="font-semibold text-theme inline-block mr-[1ch]">مسدود می باشد !</span>
                    </h1>
                </main>
            </div>
        </section>
    );
}