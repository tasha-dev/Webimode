// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/create/firstSectionComponent";
import SecondSectionComponent from "@/component/page/section/create/secondSectionComponent";
import ThirdSectionComponent from "@/component/page/section/create/thirdSection/thirdSectionComponent";
import FourthSectionComponent from "@/component/page/section/create/fourthSectionComponent";
import FifthSectionComponent from "@/component/page/section/create/fifthSectionComponent";
import SixthSectionComponenet from "@/component/page/section/create/sixthSectionComponent";

// Creating and exporting create page as default
export default function CreateBlogPage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
            <SixthSectionComponenet />
        </>
    );
}