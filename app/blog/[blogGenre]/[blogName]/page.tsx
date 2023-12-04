// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/singleBlog/firstSectionComponent";

// Creating and exporting blog (Single) page as default
export default function SingleBlogPage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
        </>
    );
}