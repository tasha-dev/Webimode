// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/create/firstSectionComponent";
import SecondSectionComponent from "@/component/page/section/create/secondSectionComponent";
import RequestComponent from "@/component/requestComponent/requestComponent";
import FourthSectionComponent from "@/component/page/section/create/fourthSectionComponent";
import FifthSectionComponent from "@/component/page/section/create/fifthSectionComponent";
import SixthSectionComponenet from "@/component/page/section/create/sixthSectionComponent";
import SeventhSectionComponent from "@/component/page/section/create/seventhSectionComponent";
import EstimateComponent from "@/component/estimateComponent";
import EightSectionComponent from "@/component/page/section/create/eighthSectionComponent";
import NinethSectionComponent from "@/component/page/section/create/ninethSectionComponent";
import TenthSectionComponent from "@/component/page/section/create/tenthSectionComponent";

// Defining metadata of page
export const metadata = {title: 'پروژه جدید'}

// Creating and exporting create page as default
export default function CreateBlogPage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
            <RequestComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
            <SixthSectionComponenet />
            <SeventhSectionComponent />
            <EstimateComponent />
            <EightSectionComponent />
            <NinethSectionComponent />
            <TenthSectionComponent />
        </>
    );
}