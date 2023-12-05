// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import LeftSideHeaderImage from '@/public/img/blog/skewedRectangle/img-skewed-rectangle-light-lr.svg';
import RightSideHeaderImage from '@/public/img/blog/skewedRectangle/img-skewed-rectangle-light-rl.svg';

// Creating and exporting third section of single blog page as default
export default function ThirdSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <header className="grid lg:grid-cols-3 grid-cols-1 items-center gap-[20px] mb-[40px]">
                    <div className="lg:col-span-2 col-span-1">
                        <Image className="w-full block" src={RightSideHeaderImage.src} alt="عکس سمت راست" width={1000} height={1000} />
                    </div>
                    <div className="col-span-1">
                        <Image className="w-full" src={LeftSideHeaderImage.src} alt="عکس سمت چپ" width={1000} height={1000} />
                    </div>
                </header>
                <main>
                    <p className="paragraph-single-blog text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است و چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .</p>
                </main>
            </div>
        </section>
    );
}