// Importing part
import {ReactNode} from "react";
import FeaturesComponent from "@/chunk/page/create/secondSection/featuresComponent";

// Creating and exporting second section of create page as default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="lg:mt-[calc(208px-20px)] mt-[40px] lg:mb-[225px] mb-[40px]">
            <div className="container p-[20px]">
                <main className="grid lg:grid-cols-4 grid-cols-1 gap-[20px]">
                    <FeaturesComponent isActive title="ثبت رایگان پروژه" icon="rounded-star" link="#">به رایگان و در چند کلیک پروژه خود را ثبت و از متخصصین مختلف پیشنهاد قیمت و زمان طراحی سایت مورد نظرتان را دریافت نمایید.</FeaturesComponent>
                    <FeaturesComponent title="پشتیبانی لحظه ای و مستمر" icon="headphone" link="#">به رایگان و در چند کلیک پروژه خود را ثبت و از متخصصین مختلف پیشنهاد قیمت و زمان طراحی سایت مورد نظرتان را دریافت نمایید.</FeaturesComponent>
                    <FeaturesComponent title="بازگشت 2% برای هر پروژه" icon="percentage" link="#">به رایگان و در چند کلیک پروژه خود را ثبت و از متخصصین مختلف پیشنهاد قیمت و زمان طراحی سایت مورد نظرتان را دریافت نمایید.</FeaturesComponent>
                    <FeaturesComponent title="گارانتی حسن انجام کار" icon="shield-check" link="#">به رایگان و در چند کلیک پروژه خود را ثبت و از متخصصین مختلف پیشنهاد قیمت و زمان طراحی سایت مورد نظرتان را دریافت نمایید.</FeaturesComponent>
                </main>
            </div>
        </section>
    );
}