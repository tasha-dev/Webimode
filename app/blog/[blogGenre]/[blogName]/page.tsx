// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/singleBlog/firstSectionComponent";
import SecondSectionComponent from "@/component/page/section/singleBlog/secondSectionComponent";
import ThirdSectionComponent from "@/component/page/section/singleBlog/thirdSectionComponent";
import FourthSectionComponent from "@/component/page/section/singleBlog/fourthSectionComponent";

// Creating and exporting blog (Single) page as default
export default function SingleBlogPage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
        </>
    );
}