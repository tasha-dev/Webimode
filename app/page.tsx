// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/home/firstSectionComponent";
import MissionComponent from "@/component/missionComponent";
import SecondSectionComponent from "@/component/page/section/home/secondSectionComponent";
import ThirdSectionComponent from "@/component/page/section/home/thirdSectionComponent";
import FourthSectionComponent from "@/component/page/section/home/fourthSectionComponent";
import FifthSectionComponent from "@/component/page/section/home/fifthSectionComponent";
import SixthSectionComponent from "@/component/page/section/home/sixthSectionComponent";
import SeventhSectionComponent from "@/component/page/section/home/seventhSectionComponent";

// Creating and exporting Home Page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <MissionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
            <SixthSectionComponent />
            <SeventhSectionComponent />
        </>
    );
}
