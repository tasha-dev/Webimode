// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import DashboardNavComponent from '@/component/dashboard/dashboardNavComponent';
import {usePathname} from "next/navigation";

// Defining type of props
interface propsTye {
    children: ReactNode;
}

// Creating and exporting template of dashboard pages as default
export default function DashboardPageComponent({children}:propsTye):ReactNode {
    // Getting pathname of current url
    const pathname:string = usePathname();

    // Returning JSX
    return (
        <section className="dashboard">
            <div data-is-ticket-page={(pathname.startsWith('/dashboard/tickets'))} className="container p-[20px] grid data-[is-ticket-page='false']:lg:grid-cols-4 data-[is-ticket-page='true']:lg:grid-cols-5 gap-[20px] items-start">
                <DashboardNavComponent />
                <div className="lg:col-span-3 col-span-1 w-full overflow-hidden">
                    {children}
                </div>
            </div>        
        </section>
    );
}