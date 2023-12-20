// Importing part
import {ReactNode} from "react";
import DashboardPage from "@/component/dashboard/dashboardPageTemplate";
import FirstDivComponent from "@/component/page/section/dashboard-projects/firstDivComponent";
import SliderComponent from "@/chunk/page/dashboard-projects/sliderComponent";

// Creatingn and exporting projects page in dasboard as default
export default function DashboardProjectsPage():ReactNode {
    // Returning JSX
    return (
        <DashboardPage>
            <div className="flex flex-col gap-[20px] w-full overflow-hidden">
                <FirstDivComponent />
                <SliderComponent title="done-projects" />
                <SliderComponent title="in-progress-project" />
            </div>
        </DashboardPage>
    );
}