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
            <header className="container p-[20px]">
                <p>
                    <span>وبیمود</span>
                    /
                    <span>مقالات</span>
                    /
                    <span>مهاجرت تحصیلی</span>
                    /
                    <span>دست مکانیکی که میتواند تمام دنیا و جهانیان را متحیر کند و جایگزین انسان شود !!!</span>
                </p>
            </header>
            <main>
                <div>
                    <h1>تکنولوژی هوش مصنوعی همه را شگفت زده کرد تا جهانیان متوجه آن شود</h1>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p>
                </div>
                <div>
                    <div>
                        <button><IconComponent name="file" size={32} /></button>
                        <button><IconComponent name="share" size={32} /></button>
                        <div />
                        <div>
                            <ul>
                                <li><Link href='#'>تکنولوژی</Link></li>
                                <li><Link href='#'>طراحی و خلاقیت</Link></li>
                                <li><Link href='#'>توسعه وب</Link></li>
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
        </section>
    );
}