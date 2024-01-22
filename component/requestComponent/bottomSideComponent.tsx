// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, EventHandler, ReactNode, useState} from "react";
import IconComponent from "@/chunk/iconComponent";
import StepComponent from '@/component/requestComponent/stepComponent';

// Defining type of props
interface propsType {
    activeStep: number;
    nextStepFunction: EventHandler<any>;
    prevStepFunction: EventHandler<any>;
}

// Creating and exporting bottom side of third section in create page as default
export default function BottomSideComponent({activeStep, nextStepFunction, prevStepFunction}:propsType):ReactNode {
    // Defining states of component
    const [activeSubject, setActiveSubject]:[string, Dispatch<string>] = useState('طراحی سایت شرکتی');
    const [activeType, setActiveType]:[string, Dispatch<string>] = useState('طراحی سایت آماده');
    const [activePageCount, setActivePageCount]:[string, Dispatch<any>] = useState('1');
    const [activeDate, setActiveDate]:[number, Dispatch<number>] = useState(5);
    const [activeEstimatedMoney, setActiveEstimatedMoney]:[string, Dispatch<any>] = useState('100 and 700');
    const [textAreaDetails, setTextAreaDetails]:[string, Dispatch<any>] = useState('');
    const [relatedWebsites, setRelatedWebsites]:[Array<string>, Dispatch<any>] = useState(['www.webimode.com']);
    const [activeAditional, setActiveAditional]:[Array<string>, Dispatch<any>] = useState(['cms']);

    // Returning JSX
    return (
        <div className="bg-[#227C6A]">
            <div className="container px-[20px] lg:py-[48px] py-[56px]">
                <StepComponent 
                    step={activeStep} 
                    activeSubject={activeSubject} 
                    activeType={activeType} 
                    activePageCount={activePageCount}
                    activeDate={activeDate}
                    activeEstimatedMoney={activeEstimatedMoney}
                    relatedWebsites={relatedWebsites}
                    activeAditional={activeAditional}
                    setActiveType={(payload:string) => setActiveType(payload)}
                    setActiveSubject={(payload:string) => setActiveSubject(payload)} 
                    setActivePageCount={(payload:string) => setActivePageCount(payload)} 
                    setActiveDate={(payload:number) => setActiveDate(payload)} 
                    setActiveEstimatedMoney={(payload:string) => setActiveEstimatedMoney(payload)} 
                    setTextAreaDetails={(payload:string) => setTextAreaDetails(payload)} 
                    setRelatedWebsites={(payload:string) => setRelatedWebsites(payload)} 
                    setActiveAditional={(payload:string) => setActiveAditional(payload)}
                />
                <div className="flex lg:flex-row flex-col items-center justify-center gap-[24px]">
                    <button 
                        onClick={prevStepFunction} 
                        className="btn-secondary-white lg:w-auto w-full"
                    >
                        <IconComponent name="chevron-right" size={16} />
                        مرحله قبل
                    </button>
                    <button 
                        onClick={(event) => {
                            nextStepFunction(event);

                            (activeStep !== 8)
                                ? false
                                : console.log({
                                    subject: activeSubject,
                                    type: activeType,
                                    pagesCount: activePageCount,
                                    requiredDate: activeDate,
                                    estimatedBudget: activeEstimatedMoney,
                                    additionalDetails: textAreaDetails,
                                    relatedWebsites: relatedWebsites,
                                    additinalFeatures: activeAditional
                                });
                        }} 
                        className="btn-primary lg:w-auto w-full"
                    >
                        {
                            (activeStep !== 8)
                                ? 'مرحله بعد'
                                : 'ثبت درخواست'
                        }
                        <IconComponent name="chevron-left" size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}