'use client';

// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    data: Array<number>;
    title: string;
    link: string;
    type: 'wallet' | 'project-counts';
}

// Creaating and exporting pie chart component as default
export default function PieChartComponent({data, link, title, type}:propsType):ReactNode {
    // Conditional rendering
    if (type === 'wallet') {
        return (
            <span>{title}</span>
        );
    } else {
        return (
            <span>{title}</span>
        );
    }
}