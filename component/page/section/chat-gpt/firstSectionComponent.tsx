// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import HeaderMainImage from '@/public/img/chat-gpt/img-header.png';
import DemoImage from '@/public/img/chat-gpt/img-demo.jpg';
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import LineMorphComponent from "@/chunk/animation/lineMorphComponent";
import LineImage1 from '@/public/img/chat-gpt/shapes/img-line-1.svg';
import LineImage2 from '@/public/img/chat-gpt/shapes/img-line-2.svg';
import TraiangleImage1 from '@/public/img/chat-gpt/shapes/img-trangle-them.svg';
import TraiangleImage2 from '@/public/img/chat-gpt/shapes/img-traiangle-purple.svg';

// Creating and exporting first section of chat gpt page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="bg-dark relative">
            <div>
                <Image className="absolute top-[700px] left-0 z-[1]" alt="" width={269} height={269} src={TraiangleImage1.src} />
                <Image className="absolute top-[1800px] right-0 z-[1]" alt="" width={269} height={269} src={TraiangleImage2.src} />
            </div>
            <div className="container p-[20px] z-[2] relative">
                <header className="flex items-center justify-center flex-col mb-[135px]">
                    <div className="relative w-[75%] mx-auto mb-[40px]">
                        <div>
                            <span className="text-theme absolute top-0 right-[100px]"><IconComponent name="star" size={10} /></span>
                            <span className="text-white absolute top-[20px] right-[300px]"><IconComponent name="star" size={10} /></span>
                            <span className="text-theme absolute top-[50px] right-[200px]"><IconComponent name="star" size={10} /></span>
                            <span className="text-white absolute top-[100px] right-[100px]"><IconComponent name="star" size={10} /></span>
                            <span className="text-white absolute top-[150px] right-[200px]"><IconComponent name="star" size={10} /></span>
                            <span className="text-theme absolute top-0 left-[100px]"><IconComponent name="star" size={10} /></span>
                            <span className="text-white absolute top-[20px] left-[300px]"><IconComponent name="star" size={10} /></span>
                            <span className="text-theme absolute top-[50px] left-[200px]"><IconComponent name="star" size={10} /></span>
                            <span className="text-white absolute top-[100px] left-[100px]"><IconComponent name="star" size={10} /></span>
                            <span className="text-white absolute top-[150px] left-[200px]"><IconComponent name="star" size={10} /></span>
                        </div>
                        <Image className="aspect-square w-[196px] my-[30px] mx-auto h-[196px] theme-shadow-lg rounded-[50px]" alt="لوگو چت جی پی تی" src={HeaderMainImage.src} width={196} height={196} />
                    </div>
                    <h1 className="text-[40px] text-white font-semibold relative mb-[16px] text-center">
                        <span className="relative text-theme inline-block ml-[1ch]">
                            جعبه ابزار
                            <span className={'text-theme absolute left-full bottom-full flex flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        هوش مصنوعی وبیمود
                        <span className="absolute right-full bottom-[50%] text-theme">
                            <IconComponent name="nim-circle-arrow" size={50} />
                        </span>
                    </h1>
                    <p className="paragraph text-center mb-[40px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                    <div className="flex lg:flex-row flex-col items-center justify-center gap-[24px] flex-wrap lg:w-auto w-full relative">
                        <Link className="btn-primary lg:w-auto w-full relative z-[2]" href='/chat-gpt/app'>
                            تجربه هوش مصنوعی    
                            <IconComponent name="chevron-left" size={16} />
                        </Link>
                        <Link className="btn-secondary-white lg:w-auto w-full relative z-[2]" href='#'>
                            انواع ابزار هوش مصنوعی  
                            <IconComponent name="chevron-left" size={16} />
                        </Link>
                        <Image className="absolute left-[90%] z-[1] top-[50%]" src={LineImage1} alt="" width="73" height="170" />
                    </div>
                </header>
                <main className="relative z-[2]">
                    <div className="relative">
                        <LineMorphComponent strokeColor="white" className="absolute bottom-[75%] left-[50%] -translate-x-[50%] z-[-1] w-[30%]" />
                        <Image src={DemoImage.src} alt="دمو عکس" width={900} height={600} className="w-full z-[2] relative shadow-2xl rounded-[48px] object-cover border-[3px] border-white/20" />
                        <span className="text-theme rotate-90 absolute bottom-[105%] right-0"><IconComponent name="arrow-curve" size={44} /></span>
                        <Image className="absolute left-[133px] z-[1] top-[98%]" src={LineImage2} alt="" width="285" height="211" />
                    </div>
                </main>
            </div>
        </section>
    );
}
