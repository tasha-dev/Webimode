// Importing part
import {ReactNode} from "react";
import DashboardPageComponent from "@/component/dashboard/dashboardPageTemplate";
import FirstDivComponent from "@/component/page/section/dashboard/firstDivComponent";

// Creating and exporting dashboard page as default
export default function DashboardPage():ReactNode {
    // Returning JSX
    return (
        <DashboardPageComponent>
            <FirstDivComponent />
        </DashboardPageComponent>
    );
}