// Importing part
import IconComponent from "@/chunk/iconComponent";
import FeatureComponent from "@/chunk/page/home/ninethSection/featureComponent";
import Link from "next/link";
import {ReactNode} from "react";

// Creating and exporting nineth section of home page as default
export default function NinethSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="mt-[256px]">
            <div className="container p-[20px]">
                <header className="mb-[64px] flex flex-col items-center justify-center">
                    <div className="sign">آمار و ارغام</div>
                    <h4 className="text-[48px] font-normal text-dark text-center mb-[12px]">
                        تیم وبیمود 
                        <span className="text-theme font-semibold mx-[1ch]">بهترین هارا</span>
                        به شما ارائه می هد   
                    </h4>
                    <p className="text-lightGrey font-normal text-[20px] leading-[36px] text-center mb-[30px]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنا نلورم
                        <br />
                        ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .
                        </p>
                    <div className="flex gap-[24px] flex-wrap">
                        <Link href='/contact-us' className="btn-primary">
                            درخواست همکاری  
                            <IconComponent name="chevron-left" size={16} />
                        </Link>
                        <Link href='/work-samples' className="btn-secondary">
                            نمونه کار های ما    
                            <IconComponent name="chevron-left" size={16} />
                        </Link>
                    </div>
                </header>
                <main className="grid grid-cols-3 gap-[64px] mx-[calc(163px-20px)]">
                    <FeatureComponent percentage={56} theme="green" title="سئو بهینه تر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent>
                    <FeatureComponent percentage={79} theme="blue" title="سرعت بیشتر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent>
                    <FeatureComponent percentage={86} theme="orange" title="امنیت بالاتر">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</FeatureComponent>
                </main>
            </div>
        </section>
    );
}