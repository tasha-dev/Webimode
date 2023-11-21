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
                <header>
                    <div className="sign">آمار و ارغام</div>
                    <h4>
                        تیم وبیمود 
                        <span>بهترین هارا</span>
                        به شما ارائه می هد   
                    </h4>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنا نلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ .</p>
                    <div>
                        <Link href='/contact-us' className="primary-btn">
                            درخواست همکاری  
                            <IconComponent name="chevron-left" size={16} />
                        </Link>
                        <Link href='/work-samples' className="secondary-btn">
                            نمونه کار های ما    
                            <IconComponent name="chevron-left" size={16} />
                        </Link>
                    </div>
                </header>
                <main>
                    <FeatureComponent children="asd" percentage={10} theme="green" title="asd" />
                </main>
            </div>
        </section>
    );
}