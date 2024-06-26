// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/page/section/singleBlog/firstSectionComponent";
import SecondSectionComponent from "@/component/page/section/singleBlog/secondSectionComponent";
import ThirdSectionComponent from "@/component/page/section/singleBlog/thirdSectionComponent";
import FourthSectionComponent from "@/component/page/section/singleBlog/fourthSectionComponent";
import FifthSectionComponent from "@/component/page/section/singleBlog/fifthSectionComponent";
import SixthSectionComponent from "@/component/page/section/singleBlog/sixthSectionComponent";
import SeventhSectionComponent from "@/component/page/section/singleBlog/seventhSectionComponent";
import EighthSectionComponent from "@/component/page/section/singleBlog/eighthSectionComponent";
import NinethSectionComponent from "@/component/page/section/singleBlog/ninethSectionComponent";

// Defining metadata of page
export const metadata = {title: 'وبلاگ'}

// Creating and exporting blog (Single) page as default
export default function SingleBlogPage():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
            <ThirdSectionComponent />
            <FourthSectionComponent />
            <FifthSectionComponent />
            <SixthSectionComponent />
            <SeventhSectionComponent />
            <EighthSectionComponent />
            <NinethSectionComponent />
        </>
    );
}