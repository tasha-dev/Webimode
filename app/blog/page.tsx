// Importing part
import {ReactNode} from "react";
import StatefullFirstComponent from "@/component/page/section/blog/statefullFirstComponent";
import ThirdSectionComponent from "@/component/page/section/blog/thirdSectionComponent";
import FourthSectionComponent from "@/component/page/section/blog/fourthSectionComponent";
import FifthSectionComponent from "@/component/page/section/blog/fifthSectionComponent";
import SixthSectionComponent from "@/component/page/section/blog/sixthSectionComponent";
import SeventhSectionComponent from "@/component/page/section/blog/seventhSectionComponent";

// Creating and exporting blog page as defualt
export default function BlogPage():ReactNode {
    // Returning JSX
    return (
        <>
            <StatefullFirstComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
            <SixthSectionComponent />
            <SeventhSectionComponent />
        </>
    );
}