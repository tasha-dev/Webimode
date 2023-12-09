// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import StepComponent from "@/chunk/page/estimate/stepComponent";

// Creating and exporting first section of estimate page as defatault
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="bg-dark">
            <div className="container p-[20px]">
                <header className="mb-[48px] lg:w-[75%] w-full mx-auto">
                    <h1 className="text-white font-normal text-[36px] mb-[16px] text-center">
                        <span className="relative text-theme font-semibold inline-block ml-[1ch]">
                            قیمت پروژه ای
                            <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        که میخوای رو به راحتی پیدا کن 
                        !
                    </h1>
                    <p className="paragraph text-center">در اینجا می توانید به راحتی قیمت های انواع پروژه هایی که مد نظرتان هست با هر نوع خدماتی که می خواهید را بفهمید تا بتونید به راحتی از قیمت ها باخبر و شوید و با خیالی پروژه خود را ثبت کنید .</p>
                </header>
                <main>
                    <div className="bg-pageDark px-[56px] py-[52px] rounded-[88px] border-4 border-lightestDark flex flex-col gap-[60px]">
                        <StepComponent contentType="dropdown" number={1} subTitle="انواع سایت در زمینه های متفاوت" title="موضوع سایت خود را  وارد کنید :">
                            <p>askldjalskjdlkajskldjaslkjdalskdjaslkdjaskld</p>
                        </StepComponent>
                        <StepComponent contentType="dropdown" number={2} subTitle="انواع سایت در زمینه های متفاوت" title="موضوع سایت خود را  وارد کنید :">
                            <p>askldjalskjdlkajskldjaslkjdalskdjaslkdjaskld</p>
                        </StepComponent>
                        <StepComponent contentType="dropdown" number={3} subTitle="انواع سایت در زمینه های متفاوت" title="موضوع سایت خود را  وارد کنید :">
                            <p>askldjalskjdlkajskldjaslkjdalskdjaslkdjaskld</p>
                        </StepComponent>
                        <StepComponent contentType="dropdown" number={4} subTitle="انواع سایت در زمینه های متفاوت" title="موضوع سایت خود را  وارد کنید :">
                            <p>askldjalskjdlkajskldjaslkjdalskdjaslkdjaskld</p>
                        </StepComponent>
                        <StepComponent isLastOne contentType="dropdown" number={5} subTitle="انواع سایت در زمینه های متفاوت" title="موضوع سایت خود را  وارد کنید :">
                            <p>askldjalskjdlkajskldjaslkjdalskdjaslkdjaskld</p>
                        </StepComponent>
                    </div>
                </main>
            </div>
        </section>
    );
}