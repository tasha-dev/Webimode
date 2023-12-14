// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import TopSideComponent from "@/component/requestComponent/topSideComponent";
import BottomSideComponent from "@/component/requestComponent/bottomSideComponent";

// Creating and exporting request component as default
export default function RequestComponent():ReactNode {
    // Defining states of component
    const [activeStep, setActiveStep]:[number, Dispatch<any>] = useState(1);

    // Returning JSX
    return (
        <section>
            <main>
                <TopSideComponent activeStep={activeStep} />
                <BottomSideComponent 
                    activeStep={activeStep}
                    nextStepFunction={() => (activeStep < 8) ? setActiveStep((prevState:number) => prevState + 1) : false}
                    prevStepFunction={() => (activeStep > 1) ? setActiveStep((prevState:number) => prevState - 1) : false}
                />
            </main>
        </section>
    );
}