// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/estimate/firstSectionComponent";

// Creating and exporting estimate page as default
export default function EstimatePage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
        </>
    );
}