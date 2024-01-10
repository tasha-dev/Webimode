// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";

// Creating and exporting first section of single blog page as default
export default function FirstSectionComponent(): ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <header className="mb-[16px]">
                    <p className="text-[14px] font-normal text-lightGrey">
                        <Link href='#'>وبیمود</Link>
                        <span className="inline-block mx-[1ch]">/</span>
                        <Link href='#'>مقالات</Link>
                        <span className="inline-block mx-[1ch]">/</span>
                        <Link href='#'>مهاجرت تحصیلی</Link>
                        <span className="inline-block mx-[1ch]">/</span>
                        <span className="text-theme">دست مکانیکی که میتواند تمام دنیا و جهانیان را متحیر کند و جایگزین انسان شود !!!</span>
                    </p>
                </header>
                <main className="lg:grid grid-cols-2 block gap-[80px] mb-[20px]">
                    <div className="lg:mb-0 mb-[50px]">
                        <h1 className="title-single-blog">تکنولوژی هوش مصنوعی همه را شگفت زده کرد تا جهانیان متوجه آن شود</h1>
                        <p className="paragraph-single-blog">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p>
                    </div>
                    <div className="w-full flex lg:flex-col flex-col-reverse lg:gap-[62px] gap-[20px]">
                        <div className="flex lg:gap-0 gap-[24px] w-full lg:overflow-visible overflow-auto lg:pb-0 pb-[15px]">
                            <button className="blog-cta-btn lg:ml-[43px]">
                                <span className="lg:block hidden"><IconComponent name="file" size={32} /></span>
                                <span className="lg:hidden block"><IconComponent name="file" size={24} /></span>
                            </button>
                            <button className="blog-cta-btn ml-[24px]">
                                <span className="lg:block hidden"><IconComponent name="share" size={32} /></span>
                                <span className="lg:hidden block"><IconComponent name="share" size={24} /></span>
                            </button>
                            <div className="lg:flex hidden items-center justify-center ml-[24px] shrink-0">
                                <div className="h-[38px] rounded-[50px] bg-lightGrey w-[3px]" />
                            </div>
                            <div className="lg:overflow-auto w-full flex items-center">
                                <ul className="flex items-center gap-x-[20px] gap-y-[25px]">
                                    <li><Link className="blog-tag" href='#'>تکنولوژی</Link></li>
                                    <li><Link className="blog-tag" href='#'>طراحی و خلاقیت</Link></li>
                                    <li><Link className="blog-tag" href='#'>توسعه وب</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="flex items-center lg:justify-center justify-end">
                    <span className="text-dark -rotate-45"><IconComponent name="arrow-curve" size={50} /></span>
                </div>
            </div>
        </section>
    );
}