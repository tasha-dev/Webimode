// Importing part
import {ReactNode} from "react";
import Image from 'next/image';
import NotFoundImage from '@/public/img/code-pages/img-404.png';

// Creating and exporting 404 page as default
export default function NotFoundPage(): ReactNode {
    // Returning JSX
    return (
        <section id="404-page">
            <div className="container p-[20px]">
                <main className="lg:w-[75%] w-full flex flex-col items-center justify-center mx-auto">
                    <Image className="w-full mb-[50px] mx-auto" width={1000} height={1000} alt="صفحه مورد نظر یافت نشد!" src={NotFoundImage.src} />
                    <h1 className="font-bold lg:text-[36px] text-[20px] text-dark relative text-center">
                        صفحه مورد
                        <span className="font-semibold text-theme inline-block mr-[1ch]">نظر یافت نشد!</span>
                    </h1>
                </main>
            </div>
        </section>
    );
}