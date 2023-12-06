// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import VideoPlayerComponent from "@/component/videoPlayerComponet";

// Creating and exporting first section of create blog page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container p-[20px] grid lg:grid-cols-2 gric-cols-1 gap-[35px]">
                <main className="flex flex-col lg:items-start items-center lg:justify-start justify-center">
                    <div className="sign">خدمات طراحی سایت</div>
                    <h1 className="lg:text-[48px] text-[20px] lg:text-start text-center">
                        <span className="text-theme inline-block ml-[1ch] font-bold">صفر تا صد</span>
                        <span className="inline-block text-dark font-normal">طراحی پروژه شما با وبیمود</span>
                    </h1>
                    <p className={'paragraph lg:text-start text-center mb-[40px]'}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                    <div className={'flex lg:flex-row flex-col lg:w-auto w-full lg:flex-wrap lg:gap-[34px] gap-[24px]'}>
                        <Link href={'tel:9120000000'} className={'btn-primary text-big lg:w-auto w-full'}>
                            <span className={'lg:inline hidden'}><IconComponent name={'telephone'} size={16} /></span>
                            <span className={'lg:hidden inline'}><IconComponent name={'telephone'} size={20} /></span>
                            ارتباط با ما
                        </Link>
                        <Link href={'/work-samples'} className={'btn-secondary text-big lg:w-auto w-full'}>
                            نمونه کار های ما
                            <IconComponent name={'chevron-left'} size={16} />
                        </Link>
                    </div>
                </main>
                <div className="relative">
                    <span className={'text-dark absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                        <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                        <span className={'self-start'}><IconComponent name={'star'} size={14} /></span>
                        <span className={'self-end'}><IconComponent name={'star'} size={18} /></span>
                    </span>
                    <VideoPlayerComponent title="ویدیو" src="https://caspian10.cdn.asset.aparat.com/aparat-video/a9b407e4b8823409ba27de9e745cbfc054957480-360p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImMyMWNkNjU0ZTlmYWU4NWVjNWZiOWI1NWEwODkxYzBmIiwiZXhwIjoxNzAxODcyNzU4LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.ZHuYEYqDjP3BKF5aBNqCarnYofCiEz_3SmuCyTuy0y0" />
                </div>
            </div>
        </section>
    );
}
