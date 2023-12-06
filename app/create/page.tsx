// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/create/firstSectionComponent";

// Creating and exporting create page as default
export default function CreateBlogPage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
        </>
    );
}