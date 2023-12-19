// Importing part
import {ReactNode} from "react";
import DashboardPageComponent from "@/component/dashboard/dashboardPageTemplate";

// Creating and exporting tickets dashboard page as default
export default function DashboardTicketPage():ReactNode {
    // Returning JSX
    return (
        <DashboardPageComponent>
            <div className="w-full lg:h-[990px] h-[500px] rounded-[32px] border border-dashed border-lightGrey flex items-center justify-center p-[20px]">
                <span className="text-[28px] block font-bold text-dark text-center">لطفا برای شروع یک تیکت را انتخاب کنید.</span>
            </div>
        </DashboardPageComponent>
    );
}