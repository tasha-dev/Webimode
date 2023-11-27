// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/blog/firstSectionComponent";

// Creating and exporting blog page as defualt
export default function BlogPage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
        </>
    );
}