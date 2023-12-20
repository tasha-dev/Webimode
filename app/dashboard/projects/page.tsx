// Importing part
import {ReactNode} from "react";
import DashboardPage from "@/component/dashboard/dashboardPageTemplate";
import FirstDivComponent from "@/component/page/section/dashboard-projects/firstDivComponent";

// Creatingn and exporting projects page in dasboard as default
export default function DashboardProjectsPage():ReactNode {
    // Returning JSX
    return (
        <DashboardPage>
            <FirstDivComponent />
        </DashboardPage>
    );
}