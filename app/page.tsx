// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/home/firstSectionComponent";
import MissionComponent from "@/component/missionComponent";
import SecondSectionComponent from "@/component/page/section/home/secondSectionComponent";

// Creating and exporting Home Page as default
export default function HomePage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <MissionComponent />
            <SecondSectionComponent />
        </>
    );
}