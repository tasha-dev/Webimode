// Importing part
import {ReactNode} from "react";
import ImageRectDarkLR from '@/public/img/blog/skewedRectangle/img-skewed-rectangle.svg';
import ImageRectDarkRL from '@/public/img/blog/skewedRectangle/img-skewed-rectangle-rl.svg';
import ImageRectDarkLRSmall from '@/public/img/blog/skewedRectangle/img-skewed-rectangle-dark-lr.svg';
import ImageRectDarkRLSmall from '@/public/img/blog/skewedRectangle/img-skewed-rectangle-dark-rl.svg';
import Image from "next/image";
import ReactagnlePulseComponent from '@/chunk/animation/rectanglePulseComponent';

// Creating and exporting nineth section of create page as default
export default function NinethSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="my-[56px]">
            <div className="container p-[20px]">
                <div className="mb-[80px]">
                    <div className="mb-[100px] relative">
                        <h3 className="semibold-blog-title text-center">متن آزمایشی و توضیحات در اینجاست</h3>
                        <p className="paragraph-single-blog text-center">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد</p>
                    </div>
                    <div className="relative">
                        <Image className="w-full object-cover" width={1000} height={1000} src={ImageRectDarkLR.src} alt="تایتل بلاگ" />
                        <ReactagnlePulseComponent />
                    </div>
                </div>
                <div className="mb-[56px]">
                    <div className="grid grid-cols-2 gap-[20px] mb-[56px]">
                        <Image className="object-cover" src={ImageRectDarkRLSmall.src} alt="عکس" width={1000} height={1000} />
                        <Image className="object-cover" src={ImageRectDarkLRSmall.src} alt="عکس" width={1000} height={1000} />
                    </div>
                    <p className="paragraph-single-blog text-center">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد</p>
                </div>
                <div className="mb-[56px]">
                    <div className="relative">
                        <Image className="w-full object-cover" width={1000} height={1000} src={ImageRectDarkLR.src} alt="تایتل بلاگ" />
                        <ReactagnlePulseComponent />
                    </div>
                    <p className="paragraph-single-blog text-center mt-[56px]">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد</p>
                </div>
                <div className="mb-[56px]">
                    <h3 className="semibold-blog-title">متن آزمایشی و توضیحات در اینجاست</h3>
                    <p className="paragraph-single-blog mb-[56px]">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد</p>
                    <Image className="w-full object-cover" width={1000} height={1000} src={ImageRectDarkRL.src} alt="تایتل بلاگ" />
                </div>
                <div>
                    <h3 className="semibold-blog-title text-center">متن آزمایشی و توضیحات در اینجاست</h3>
                    <p className="paragraph-single-blog text-center">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد</p>
                </div>
                <div className="lg:w-[75%] w-full mx-auto h-[2px] bg-gradient-to-r from-white to-white via-lightGrey mt-[56px]" />
            </div>
        </section>
    );
}