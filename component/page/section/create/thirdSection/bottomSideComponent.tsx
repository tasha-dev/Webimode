// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import WebsiteSubjectComponent from "@/chunk/page/create/thirdSection/websiteSubjectComponent";

// Creating and exporting bottom side of third section in create page as default
export default function BottomSideComponent():ReactNode {
    // Defining states of component
    const [activeSubject, setActiveSubject]:[number, Dispatch<number>] = useState(1);

    // Returning JSX
    return (
        <div className="bg-[#227C6A]">
            <div className="container px-[20px] lg:py-[48px] py-[56px]">
                <div>
                    <h3 className="text-center lg:text-[32px] text-[20px] font-normal mb-[40px] text-white">موضوع سایت خود را انتخاب کنید</h3>
                    <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-[20px] gap-[32px] mb-[56px]">
                        <WebsiteSubjectComponent onClick={() => setActiveSubject(1)} icon="house-buliding" isSelected={(activeSubject === 1)} title="طراحی سایت شرکتی" />
                        <WebsiteSubjectComponent onClick={() => setActiveSubject(2)} icon="shop" isSelected={(activeSubject === 2)} title="طراحی سایت فروشگاهی" />
                        <WebsiteSubjectComponent onClick={() => setActiveSubject(3)} icon="file" isSelected={(activeSubject === 3)} title="طراحی سایت خبری" />
                        <WebsiteSubjectComponent onClick={() => setActiveSubject(4)} icon="person" isSelected={(activeSubject === 4)} title="طراحی سایت شخصی" />
                        <WebsiteSubjectComponent onClick={() => setActiveSubject(5)} icon="wp" isSelected={(activeSubject === 5)} title="نصب افزونه و پلاگین" />
                        <WebsiteSubjectComponent onClick={() => setActiveSubject(6)} icon="browser" isSelected={(activeSubject === 6)} title="طراحی قالب سایت" />
                        <WebsiteSubjectComponent onClick={() => setActiveSubject(7)} icon="shield-check" isSelected={(activeSubject === 7)} title="امنیت و عملکرد" />
                        <WebsiteSubjectComponent onClick={() => setActiveSubject(8)} icon="ban-bug" isSelected={(activeSubject === 8)} title="رفع باگ" />
                        <WebsiteSubjectComponent onClick={() => setActiveSubject(9)} icon="cloud-upload" isSelected={(activeSubject === 9)} title="بکاپ گیری و انتقال اطلاعات" />
                        <WebsiteSubjectComponent onClick={() => setActiveSubject(10)} icon="addsign" isSelected={(activeSubject === 10)} title="خرید راه اندازی قالب سایت" />
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-[24px]">
                        <button className="btn-secondary-white">
                            <IconComponent name="chevron-right" size={16} />
                            مرحله قبل
                        </button>
                        <button className="btn-primary">
                            مرحله بعد
                            <IconComponent name="chevron-left" size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}