// Importing part
import {ReactNode} from "react";
import Link from "next/link";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting first section of home page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <div>تیم وبیمود</div>
                <h1>وبیمود</h1>
                <h2>واقعی کردن ایده ها</h2>
                <p>بهترین خدمات برنامه نویسی ، طرای سایت ، طراحی لوگو ، انیمیشن و... با تیم حرفه ای وبیمود کسب و کار خود را به سطح باللاتری ببرید !</p>
                <div>
                    <Link href={'tel:9120000000'} className={'btn-primary'}>
                        <IconComponent name={'telephone'} size={20} />
                        ارتباط با ما
                    </Link>
                    <Link href={'/work-samples'} className={'btn-secondary'}>
                        نمونه کار های ما
                        <IconComponent name={'chevron-left'} size={20} />
                    </Link>
                </div>
            </main>
            <div>

            </div>
        </section>
    );
}