// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState, useEffect, Dispatch, MutableRefObject, useRef} from "react";
import IconComponent from "@/chunk/iconComponent";
import StepComponent from "@/chunk/page/home/secondSection/stepComponent";
import doElsCollide from "@/utils/doElsCollide";
import SkipButtonComponent from "@/chunk/skipButtonComponent";
import Confetti from 'react-dom-confetti';

// Creating and exporting second section of home page as default
export default function SecondSectionComponent():ReactNode {
    // Defining states of component
    const [activeStep, setActiveStep]:[number, Dispatch<any>] = useState(1);
    const [innerWidthUser, setInnerWidthUser]:[number, Dispatch<number>] = useState(0);

    // Defining refrences
    const firstLineHelper:MutableRefObject<any> = useRef();
    const secondLineHelper:MutableRefObject<any> = useRef();
    const thirdLineHelper:MutableRefObject<any> = useRef();
    const fourthLineHelper:MutableRefObject<any> = useRef();
    const fifthLineHelper:MutableRefObject<any> = useRef();
    const mainStickyPart:MutableRefObject<any> = useRef();

    // Using useEffect hook to set innerWidth of page to state when page loads and resizez and removing event listeners when component gets umounted.
    useEffect(() => {
        addEventListener('resize', () => setInnerWidthUser(window.innerWidth));
        addEventListener('load', () => setInnerWidthUser(window.innerWidth));

        return () => {
            removeEventListener('resize', () => setInnerWidthUser(window.innerWidth));
            removeEventListener('load', () => setInnerWidthUser(window.innerWidth));
        }
    }, []);

    // Using useEffect for making active step to stop at 5 when it gets more and equal to 5.
    useEffect(() => {if (activeStep >= 5 && innerWidthUser < 1024) {setActiveStep(5)}}, [activeStep])

    // Using useEffect hook to ...
    useEffect(() => {
        // Defining a function to handle animation on scroll of the element
        function handleAnimate(): void {
            if (doElsCollide(firstLineHelper.current, mainStickyPart.current)) {
                setActiveStep(1);
            } else if (doElsCollide(secondLineHelper.current, mainStickyPart.current)) {
                setActiveStep(2);
            } else if (doElsCollide(thirdLineHelper.current, mainStickyPart.current)) {
                setActiveStep(3);
            } else if (doElsCollide(fourthLineHelper.current, mainStickyPart.current)) {
                setActiveStep(4);
            } else if (doElsCollide(fifthLineHelper.current, mainStickyPart.current)) {
                setActiveStep(5);
            }
        }

        // If user is in desktop mq, then add scroll event to window which calls 'handleAnimate' function and removing it when component gets unmounted
        // Otherwise add 1 to activeStep state every 1000 and remove it when component get unmounted
        if (innerWidthUser > 1024) {
            addEventListener('scroll', handleAnimate);
            return () => removeEventListener('scroll', handleAnimate);
        } else {
            const interval = setInterval(() => {setActiveStep((prevStep:number) => prevStep + 1)}, 1000);
            return () => clearInterval(interval);
        }
    }, [innerWidthUser])

    // Returning JSX
    return (
        <section className={'lg:mt-[128px] mt-[50px]'}>
            <div className="container p-[20px]">
                <header className={'flex items-center justify-center flex-col mx-auto lg:mb-[40px] mb-[32px]'}>
                    <div className={'sign'}>تیم وبیمود</div>
                    <h4 className={'relative lg:text-[48px] text-[20px] font-bold mb-[8px] text-center'}>
                        <span className={'inline-block ml-[1ch] text-dark'}>مراحل خدمات</span>
                        <span className={'inline-block text-theme'}>وبیمود</span>
                        <span className={'text-theme absolute right-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                            <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h4>
                    <p className={'paragraph text-center'}>
                        تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین
                        <br className="lg:block hidden" />
                        مرحله آن پشتیبان شماست .
                    </p>
                </header>
                <div className="lg:h-[2000px] relative">
                    <div className="absolute top-0 left-0 w-full lg:block hidden">
                        <div ref={firstLineHelper} className="w-full left-0 h-[calc(2000px/5)]"/>
                        <div ref={secondLineHelper} className="w-full left-0 h-[calc(2000px/5)]"/>
                        <div ref={thirdLineHelper} className="w-full left-0 h-[calc(2000px/5)]"/>
                        <div ref={fourthLineHelper} className="w-full left-0 h-[calc(2000px/5)]"/>
                        <div ref={fifthLineHelper} className="w-full left-0 h-[calc(2000px/5)]"/>
                    </div>
                    <div className="lg:sticky lg:top-[50%] top-0 lg:mt-[232px] mt-0" ref={mainStickyPart}>
                        <main dir="ltr" className="grid lg:grid-cols-6 lg:gap-0 gap-[16px] grid-cols-1 relative">
                            <div data-active={(activeStep >= 1)} className="step-icon-component lg:flex hidden left-0 top-[50%] -translate-y-[50%] absolute"><IconComponent name="right-arrow" size={24} /></div>
                            <StepComponent position="bottom" count="۱" isActive={(activeStep >= 1)} icon='brief-case' title='درخواست و ثبت سفارش'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                            <StepComponent position="top" count="۲" isActive={(activeStep >= 2)} icon='money-check-edit' title='بررسی و اعلام هزینه'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                            <StepComponent position="bottom" count="۳" isActive={(activeStep >= 3)} icon='design' title='طراحی اولیه'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                            <StepComponent position="top" count="۴" isActive={(activeStep >= 4)} icon='replace' title='پیاده سازی و تحویل'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                            <StepComponent position="bottom" count="۵" isActive={(activeStep >= 5)} icon='vote-yes' title='تغییر و تکمیل طراحی'>تیم وبیمود افتخار این را دارد که از اولین مرحله ثبت سفارش تا آخرین مرحله آن پشتیبان شماست .</StepComponent>
                            <div className="lg:flex hidden w-[200px] h-[200px] aspect-square absolute right-0 top-[50%] -translate-y-[50%] z-[-1] translate-x-[35%] items-center justify-center">
                                <Confetti active={(activeStep >= 5)} config={{
                                    angle: 90,
                                    spread: 360,
                                    startVelocity: 40,
                                    elementCount: 150,
                                    dragFriction: 0.12,
                                    duration: 3000,
                                    stagger: 3,
                                    width: '10px',
                                    height: '10px',
                                    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
                                }} />
                            </div>
                            <div data-active={(activeStep === 5)} className="h-[2px] step-component" />
                            <div data-active={(activeStep === 5)} className="step-icon-component lg:flex hidden absolute right-0 top-[50%] -translate-y-[50%]"><IconComponent name="party-horn" size={24} /></div>
                        </main>
                        <SkipButtonComponent id="#third-section" />
                    </div>
                </div>
            </div>
        </section>
    );
}
