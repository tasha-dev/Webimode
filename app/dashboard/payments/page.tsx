// Importing part
import {ReactNode} from "react";
import DashboardPageComponent from "@/component/dashboard/dashboardPageTemplate";
import WalletComponent from '@/component/page/section/dashboard-payment/walletComponent';
import PaymentSliderComponent from '@/chunk/page/dashboard-payments/paymentComponent';

// Defining metadata of page
export const metadata = {title: 'پرداخت ها'}

// Creating and exporting dashboard payments page as default
export default function DashboardPaymentsComponent():ReactNode {
    // Returning JSX
    return (
        <DashboardPageComponent>
            <WalletComponent 
                cashOut={{percent: 31, price: 18000000}} 
                diposit={{percent: 69, price: 3740000}} 
                totalCash={15360000} 
            />
            <div className="lg:my-[36px] my-[20px]">
                <PaymentSliderComponent date={new Date()} paymentType="cash-out" /> 
            </div>
            <PaymentSliderComponent date={new Date()} paymentType="deposit" /> 
        </DashboardPageComponent>
    );
}