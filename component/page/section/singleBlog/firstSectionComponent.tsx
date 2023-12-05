// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import EhsanImage from '@/public/img/blog/img-ehsan.jpg';
import Image from 'next/image';

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
                <main className="grid grid-cols-2 gap-[80px] mb-[20px]">
                    <div>
                        <h1 className="mb-[16px] font-normal text-[24px] text-dark">تکنولوژی هوش مصنوعی همه را شگفت زده کرد تا جهانیان متوجه آن شود</h1>
                        <p className="text-[15px] font-normal text-lightGrey leading-[28px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p>
                    </div>
                    <div>
                        <div className="flex mb-[62px]">
                            <button className="blog-cta-btn ml-[43px]">
                                <IconComponent name="file" size={32} />
                            </button>
                            <button className="blog-cta-btn ml-[24px]">
                                <IconComponent name="share" size={32} />
                            </button>
                            <div className="flex items-center justify-center ml-[24px] shrink-0">
                                <div className="h-[38px] rounded-[50px] bg-lightGrey w-[3px]" />
                            </div>
                            <div className="overflow-auto w-full flex items-center">
                                <ul className="flex items-center gap-[20px]">
                                    <li><Link className="px-[12px] py-[6px] whitespace-nowrap transition-all duration-500 bg-white border border-lightGrey text-lightGrey hover:bg-lighterGrey hover:text-lightGrey rounded-[8px]" href='#'>تکنولوژی</Link></li>
                                    <li><Link className="px-[12px] py-[6px] whitespace-nowrap transition-all duration-500 bg-white border border-lightGrey text-lightGrey hover:bg-lighterGrey hover:text-lightGrey rounded-[8px]" href='#'>طراحی و خلاقیت</Link></li>
                                    <li><Link className="px-[12px] py-[6px] whitespace-nowrap transition-all duration-500 bg-white border border-lightGrey text-lightGrey hover:bg-lighterGrey hover:text-lightGrey rounded-[8px]" href='#'>توسعه وب</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-[18px]">
                            <div className="flex shadow-custom bg-theme rounded-[16px] relative shrink-0">
                                <div className="absolute top-0 right-0 translate-x-[50%] -translate-y-[50%]">
                                    <Image className="w-[68px] h-[68px] rounded-[16px] shadow-lg " width={1000} height={1000} alt="عکس پروفایل نویسنده بلاگ" src={EhsanImage.src} />
                                    <div className="absolute top-0 left-0 w-full h-full rounded-[16px] scale-[1.25] border border-theme" />
                                </div>
                                <div className="ml-[33px] mr-[68px] py-[8px]">
                                    <span className="block text-[16px] truncate font-normal text-white mb-[2px]">احسان امانیان</span>
                                    <span className="block text-[10px] truncate font-normal text-white">نویسنده وبیمود</span>
                                </div>
                                <div className="px-[16px] py-[5px] bg-dark shadow-custom gap-[8px] rounded-tr-[16px] rounded-bl-[16px] self-end flex items-center">
                                    <span className="block text-white text-[10px] font-normal">دیجیتال</span>
                                    <div className="w-[1px] h-[10px] bg-white rounded-[50px]" />
                                    <div className="flex items-center gap-[8px] text-white">
                                        <IconComponent name="clock" size={12} />
                                        <span className="text-[10px] font-normal block content-center">{new Date().toLocaleDateString('fa-ir')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="h-[38px] rounded-[50px] bg-lightGrey w-[3px] shrink-0" />
                            </div>
                            <div className="overflow-auto w-full flex items-center">
                                <div className="flex items-center w-full">
                                    <span className="shrink-0 text-dark block ml-[1ch]"><IconComponent name="circle-clock" size={12} /></span>
                                    <h6 className="whitespace-nowrap">
                                        <span className="text-dark text-[10px] font-normal ml-[1ch]">مدت زمان برای خوندن :</span>
                                        <span className="text-theme text-[10px] font-normal">30 دقیقه</span>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="flex items-center justify-center">
                    <span className="text-dark -rotate-45"><IconComponent name="arrow-curve" size={50} /></span>
                </div>
            </div>
        </section>
    );
}