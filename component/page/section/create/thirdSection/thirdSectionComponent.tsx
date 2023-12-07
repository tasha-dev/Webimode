// Importing part
import {ReactNode} from "react";
import TopSideComponent from "@/component/page/section/create/thirdSection/topSideComponent";
import BottomSideComponent from "@/component/page/section/create/thirdSection/bottomSideComponent";

// Creating and exporting third section of create page as default
export default function ThirdSectionComponent():ReactNode {
    // Defining states of component
    // Returning JSX
    return (
        <section>
            <main>
                <TopSideComponent />
                <BottomSideComponent />
            </main>
        </section>
    );
}