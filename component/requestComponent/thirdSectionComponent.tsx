// Importing part
import {ReactNode} from "react";
import TopSideComponent from "@/component/requestComponent/topSideComponent";
import BottomSideComponent from "@/component/requestComponent/bottomSideComponent";

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