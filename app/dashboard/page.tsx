// Importing part
import {ReactNode} from "react";
import DashboardPageComponent from "@/component/dashboard/dashboardPageTemplate";
import PieChartComponent from '@/chunk/page/dashboard/pieChartComponent';

// Creating and exporting dashboard page as default
export default function DashboardPage():ReactNode {
    // Returning JSX
    return (
        <DashboardPageComponent>
            <div>
                <PieChartComponent data={[31, 69]} link="/dashboard/payments" title="کیف پول شما" type="wallet" />
                <PieChartComponent data={[10, 15, 20, 25, 14]} link="/dashboard/projects" title="مدیریت پروژه ها" type="project-counts" />
            </div>
        </DashboardPageComponent>
    );
}