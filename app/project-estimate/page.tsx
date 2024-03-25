// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from '@/component/page/section/project-estimate/firstSectionComponent';
import SecondSectionComponent from "@/component/page/section/project-estimate/secondSectionComponent";

// Creating and exporting project estimation page as default
export default function ProjectEstimatePage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
        </>
    );
}