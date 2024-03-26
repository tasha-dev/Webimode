// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/estimate/firstSectionComponent";
import SecondSectionComponent from "@/component/page/section/estimate/secondSectionComponent";

// Defining metadata of page
export const metadata = {title: 'هزینه'}

// Creating and exporting estimate page as default
export default function EstimatePage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
        </>
    );
}