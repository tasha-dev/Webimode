// Forcing nextJS to render this component as clinet side component
'use client';

// Importing part
import {Dispatch, ReactNode, useEffect, useState}  from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    activeStep: number;
    setActiveStep: Dispatch<any>;
}

// Creating and exporting slider component as default
export default function SliderComponent({activeStep, setActiveStep}:propsType):ReactNode {
    return (
        <span>askjdlasjdk</span>
    );
}