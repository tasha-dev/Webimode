// Importing part
import {ReactNode} from "react";
import DashboardNavComponent from '@/component/dashboard/dashboardNavComponent';

// Defining type of props
interface propsTye {
    children: ReactNode;
}

// Creating and exporting template of dashboard pages as default
export default function DashboardPageComponent({children}:propsTye):ReactNode {
    // Returning JSX
    return (
        <section className="dashboard">
            <div className="container p-[20px] grid lg:grid-cols-4 gap-[20px] items-start">
                <DashboardNavComponent />
                <div className="lg:col-span-3 col-span-1 w-full overflow-hidden">
                    {children}
                </div>
            </div>        
        </section>
    );
}