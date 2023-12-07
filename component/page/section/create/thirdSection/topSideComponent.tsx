// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import StepComponent from "@/chunk/page/create/thirdSection/stepComponet";

// Creating and exportiong top side component of third section in create page as default
export default function TopSideComponent():ReactNode {
    // Returning JSX
    return (
        <div className="bg-darkerTheme mb-[24px] relative">
            <div className="py-[48px]">
                <div className="px-[20px] flex items-center flex-col justify-center container">
                    <div className="sign-white">سفارش سایت</div>
                    <h3 className="lg:text-[36px] text-[20px] font-normal text-white text-center lg:mb-[16px] mb-[12px]">
                        در
                        <span className="relative inline-block mx-[1ch] text-theme font-semibold">
                            کوتاه ترین زمان
                            <span className={'text-theme absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        <br className="lg:hidden block" />
                        ممکن سایت خود را سفارش دهید
                    </h3>
                    <p className="paragraph-single-blog lg:mb-[68px] text-center">در اینجا می توانید در کوئتاه ترین زمان ممکن سایت رویا هاتون رو با تمام جزییات به راحتی و سریع سفارش دهید .</p>
                </div>
                <div className="relative">
                    <div className="absolute lg:hidden block top-[calc(70%)] left-0 -translate-y-[50%] h-[1px] w-full bg-lightTheme" />
                    <div className="w-full lg:block flex relative lg:overflow-visible overflow-auto no-scroll lg:pt-0 pt-[68px]">
                        <div className="relative lg:mb-[76px]">
                            <div className="absolute lg:block hidden top-[50%] left-0 -translate-y-[50%] h-[1px] w-full bg-lightTheme" />
                            <div className="lg:grid flex items-center grid-cols-4 w-full container px-[50px] gap-[47px]">
                                <StepComponent icon="rounded-star" index={1} link="#" progress="done" title="موضوع سایت" />
                                <StepComponent icon="browser" index={2} link="#" progress="waiting" title="نوع سایت" />
                                <StepComponent icon="file" index={3} link="#" progress="in-progress" title="تعدا صفحات سایت" />
                                <StepComponent icon="calender-clock" index={4} link="#" progress="waiting" title="مدت زمان طراحی" />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute lg:block hidden top-[50%] left-0 -translate-y-[50%] h-[1px] w-full bg-lightTheme" />
                            <div className="lg:grid flex items-center grid-cols-4 w-full container px-[50px] gap-[47px]">
                                <StepComponent icon="dollor-circle" index={5} link="#" progress="waiting" title="بودجه تخمینی" />
                                <StepComponent icon="poll" index={6} link="#" progress="waiting" title="توضیحات تکمیلی" />
                                <StepComponent icon="globe" index={7} link="#" progress="waiting" title="سایت های مشابه" />
                                <StepComponent icon="list" index={8} link="#" progress="waiting" title="گزینه تکمیلی" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[70%] container lg:px-[130px]">
                <div className="w-full grid lg:grid-cols-9 grid-cols-5">
                    <div className="flex items-center justify-center"><div className="notebook-divider" /></div>
                    <div className="flex items-center justify-center"><div className="notebook-divider" /></div>
                    <div className="flex items-center justify-center"><div className="notebook-divider" /></div>
                    <div className="flex items-center justify-center"><div className="notebook-divider" /></div>
                    <div className="flex items-center justify-center"><div className="notebook-divider" /></div>
                    <div className="lg:flex hidden items-center justify-center"><div className="notebook-divider" /></div>
                    <div className="lg:flex hidden items-center justify-center"><div className="notebook-divider" /></div>
                    <div className="lg:flex hidden items-center justify-center"><div className="notebook-divider" /></div>
                    <div className="lg:flex hidden items-center justify-center"><div className="notebook-divider" /></div>
                </div>
            </div>
        </div>
    );
}