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
                <main className="grid grid-cols-2 gap-[80px]">
                    <div>
                        <h1 className="mb-[16px] font-normal text-[24px] text-dark">تکنولوژی هوش مصنوعی همه را شگفت زده کرد تا جهانیان متوجه آن شود</h1>
                        <p className="text-[15px] font-normal text-lightGrey leading-[28px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p>
                    </div>
                    <div>
                        <div className="flex items-center mb-[62px]">
                            <button className="blog-cta-btn">
                                <IconComponent name="file" size={32} />
                            </button>
                            <button className="blog-cta-btn">
                                <IconComponent name="share" size={32} />
                            </button>
                            <div className="shrink-0 mx-[24px] h-[38px] rounded-[50px] bg-lightGrey w-[3px]" />
                            <div>
                                <ul className="flex flex-wrap gap-[20px]">
                                    <li><Link className="px-[12px] py-[6px] transition-all duration-500 bg-white border border-lightGrey text-lightGrey hover:bg-lighterGrey hover:text-lightGrey rounded-[8px]" href='#'>تکنولوژی</Link></li>
                                    <li><Link className="px-[12px] py-[6px] transition-all duration-500 bg-white border border-lightGrey text-lightGrey hover:bg-lighterGrey hover:text-lightGrey rounded-[8px]" href='#'>طراحی و خلاقیت</Link></li>
                                    <li><Link className="px-[12px] py-[6px] transition-all duration-500 bg-white border border-lightGrey text-lightGrey hover:bg-lighterGrey hover:text-lightGrey rounded-[8px]" href='#'>توسعه وب</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Image width={1000} height={1000} alt="عکس پروفایل نویسنده بلاگ" src={EhsanImage.src} />
                                <div>
                                    <span>احسان امانیان</span>
                                    <span>نویسنده وبیمود</span>
                                </div>
                                <div>
                                    <span>دیجیتال</span>
                                    <div />
                                    <IconComponent name="clock" size={12} />
                                    <span>{new Date().toLocaleDateString('fa-ir')}</span>
                                </div>
                            </div>
                            <div />
                            <div>
                                <IconComponent name="circle-clock" size={12} />
                                <div>
                                    <span>مدت زمان برای خوندن :</span>
                                    <span>30 دقیقه</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}