// Importing part
import {ReactNode} from "react";
import StatefullFirstComponent from "@/component/page/section/work-samples/statefullFirstComponent";
import ThirdSectionComponent from "@/component/page/section/work-samples/thirdSectionComponent";
import FourthSectionComponent from "@/component/page/section/work-samples/fourthSectionComponent";

// Creating and exporting work samples page as default
export default function WorkSamplesPage():ReactNode {
    // Returning JSX
    return (
        <>
            <StatefullFirstComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
        </>
    );
}