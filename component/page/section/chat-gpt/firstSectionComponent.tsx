// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import HeaderMainImage from '@/public/img/chat-gpt/img-header.png';
import DemoImage from '@/public/img/chat-gpt/img-demo.jpg';
import IconComponent from "@/chunk/iconComponent";
import Link from "next/link";
import LineMorphComponent from "@/chunk/animation/lineMorphComponent";
import LineImage1 from '@/public/img/chat-gpt/shapes/img-line-1.svg';
import LineImage1Mq from '@/public/img/chat-gpt/shapes/img-line-1-mq.svg';
import LineImage2 from '@/public/img/chat-gpt/shapes/img-line-2.svg';
import TraiangleImage1 from '@/public/img/chat-gpt/shapes/img-trangle-them.svg';
import TraiangleImage2 from '@/public/img/chat-gpt/shapes/img-traiangle-purple.svg';
import HeaderStarsImage from '@/public/img/chat-gpt/firstSection/img-header-star.svg';
import HeaderStarsImageMQ from '@/public/img/chat-gpt/firstSection/img-header-star-mq.svg';

// Creating and exporting first section of chat gpt page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="bg-dark relative">
            <div className="lg:block hidden">
                <Image className="absolute top-[700px] left-0 z-[1]" alt="" width={269} height={269} src={TraiangleImage1.src} />
                <Image className="absolute top-[1800px] right-0 z-[1]" alt="" width={269} height={269} src={TraiangleImage2.src} />
            </div>
            <div className="container p-[20px] z-[2] relative">
                <header className="flex items-center justify-center flex-col mb-[135px]">
                    <div className="relative lg:w-[75%] w-full mx-auto lg:mb-[40px] mb-[50px]">
                        <Image className="absolute top-0 left-0 pointer-events-none h-full w-full z-[1] lg:block hidden" alt="" width={1400} height={1400} src={HeaderStarsImage.src} />
                        <Image className="absolute top-0 left-0 pointer-events-none h-full w-full z-[1] lg:hidden block" alt="" width={200} height={200} src={HeaderStarsImageMQ.src} />
                        <Image className="aspect-square w-[196px] my-[30px] mx-auto theme-shadow-lg lg:rounded-[50px] rounded-[48px]" alt="لوگو چت جی پی تی" src={HeaderMainImage.src} width={196} height={196} />
                    </div>
                    <h1 className="lg:text-[40px] text-[20px] text-white font-semibold relative lg:mb-[16px] mb-[12px] text-center">
                        <span className="relative text-theme inline-block ml-[1ch]">
                            جعبه ابزار
                            <span className={'text-theme absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        هوش مصنوعی وبیمود
                        <span className="absolute lg:block hidden right-full bottom-[50%] text-theme">
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
                        <Image className="absolute left-[90%] z-[1] top-[50%] lg:block hidden" src={LineImage1.src} alt="" width="73" height="170" />
                        <Image className="absolute right-[-5%] z-[1] top-[20%] lg:hidden block" src={LineImage1Mq.src} alt="" width="120" height="254" />
                    </div>
                </header>
                <main className="relative z-[2]">
                    <div className="relative">
                        <LineMorphComponent strokeColor="white" className="absolute lg:bottom-[75%] bottom-[15%] left-[50%] -translate-x-[50%] z-[-1] lg:w-[30%] w-[90%]" />
                        <Image src={DemoImage.src} alt="دمو عکس" width={900} height={600} className="w-full z-[2] relative shadow-2xl rounded-[48px] object-cover border-[3px] border-white/20" />
                        <span className="text-theme rotate-90 absolute bottom-[105%] right-0 lg:block hidden"><IconComponent name="arrow-curve" size={44} /></span>
                        <Image className="absolute left-[133px] z-[1] top-[98%] lg:block hidden" src={LineImage2} alt="" width="285" height="211" />
                    </div>
                </main>
            </div>
        </section>
    );
}
