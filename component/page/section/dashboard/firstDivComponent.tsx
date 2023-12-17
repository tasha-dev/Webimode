// Importing part
import {ReactNode} from "react";
import PieChartComponent from "@/chunk/page/dashboard/pieChartComponent";

// Creating and exporting first div component of dashboard pages as default
export default function FirstDivComponent():ReactNode {
    // Returning JSX
    return (
        <div className="grid lg:grid-cols-2 gap-[32px]">
            <PieChartComponent data={[31, 69]} link="/dashboard/payments" title="کیف پول شما" type="wallet" />
            <PieChartComponent data={[10, 15, 20, 25, 14]} link="/dashboard/projects" title="مدیریت پروژه ها" type="project-counts" />
        </div>
    );
}