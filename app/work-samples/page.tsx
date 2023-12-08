// Importing part
import {ReactNode} from "react";
import StatefullFirstComponent from "@/component/page/section/work-samples/statefullFirstComponent";
import ThirdSectionComponent from "@/component/page/section/work-samples/thirdSectionComponent";
import FourthSectionComponent from "@/component/page/section/work-samples/fourthSectionComponent";
import FifthSectionComponent from "@/component/page/section/work-samples/fifthSectionComponent";
import SixthSectionComponenet from "@/component/page/section/work-samples/sixthSectionComponent";
import SeventhSectionComponent from "@/component/page/section/work-samples/seventhSectionComponent";
import EighthSectionComponent from "@/component/page/section/work-samples/eighthSectionComponent";
import NinethSectionComponent from "@/component/page/section/work-samples/ninethSectionComponent";
import TenthSectionComponent from "@/component/page/section/work-samples/tenthSectionCompoent";
import EleventhSectionComponent from "@/component/page/section/work-samples/eleventhSectionComponent";

// Creating and exporting work samples page as default
export default function WorkSamplesPage():ReactNode {
    // Returning JSX
    return (
        <>
            <StatefullFirstComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
            <SixthSectionComponenet />
            <SeventhSectionComponent />
            <EighthSectionComponent />
            <NinethSectionComponent />
            <TenthSectionComponent />
            <EleventhSectionComponent />
        </>
    );
}