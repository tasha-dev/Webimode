// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from '@/component/page/section/project-estimate/firstSectionComponent';

// Creating and exporting project estimation page as default
export default function ProjectEstimatePage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
        </>
    );
}