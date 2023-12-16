// Importing part
import {ReactNode} from "react";
import DashboardNavComponent from '@/component/dashboard/dashboardNavComponent';

// Creating and exporting dashboard page as default
export default function DashboardPage():ReactNode {
    // Returning JSX
    return (
        <section className="dashboard">
            <div className="container p-[20px] grid lg:grid-cols-4 gap-[20px] items-start">
                <DashboardNavComponent />
                <div className="lg:col-span-3 h-[5000px]">
                    aklsjdklasjkldjalksjdl
                </div>
            </div>        
        </section>
    );
}