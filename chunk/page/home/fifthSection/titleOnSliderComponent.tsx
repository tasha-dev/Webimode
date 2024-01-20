// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    activeStep: number;
}

// Creating and exporting title component which changed with active step in fifth section of home page
export default function TitleOnSliderComponent({activeStep}:propsType):ReactNode {
    // Conditional rendering
    if (activeStep === 1) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">شیوه قرار دادن لورم ایپسوم به صورت یک محتوای کامل    ۱</h6>;}
    else if (activeStep === 2) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۲</h6>;}
    else if (activeStep === 3) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۳</h6>;}
    else if (activeStep === 4) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۴</h6>;}
    else if (activeStep === 5) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۵</h6>;}
    else if (activeStep === 6) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۶</h6>;}
    else if (activeStep === 7) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۷</h6>;}
    else if (activeStep === 8) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۸</h6>;}
    else if (activeStep === 9) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۹</h6>;}
    else if (activeStep === 10) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۱۰</h6>;}
    else if (activeStep === 11) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۱۱</h6>;}
    else if (activeStep === 12) {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ۱۲</h6>;}
    else {return <h6 className="text-center block truncate w-[50%] mb-[4px] text-white text-[16px] font-bold">متن ?</h6>;}
}