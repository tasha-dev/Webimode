// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    activeStep: number;
}

// Creating and exporting paragraph component which changed with active step in fifth section of home page
export default function ParagraphOnSliderComponent({activeStep}:propsType):ReactNode {
    // Conditional rendering
    if (activeStep === 1) {return <p className="text-center paragraph-small">متن ۱<br />متن ۱</p>;}
    else if (activeStep === 2) {return <p className="text-center paragraph-small">متن ۲<br />متن ۲</p>;}
    else if (activeStep === 3) {return <p className="text-center paragraph-small">متن ۳<br />متن ۳</p>;}
    else if (activeStep === 4) {return <p className="text-center paragraph-small">متن ۴<br />متن ۴</p>;}
    else if (activeStep === 5) {return <p className="text-center paragraph-small">متن ۵<br />متن ۵</p>;}
    else if (activeStep === 6) {return <p className="text-center paragraph-small">متن ۶<br />متن ۶</p>;}
    else if (activeStep === 7) {return <p className="text-center paragraph-small">متن ۷<br />متن ۷</p>;}
    else if (activeStep === 8) {return <p className="text-center paragraph-small">متن ۸<br />متن ۸</p>;}
    else if (activeStep === 9) {return <p className="text-center paragraph-small">متن ۹<br />متن ۹</p>;}
    else if (activeStep === 10) {return <p className="text-center paragraph-small">متن ۱۰<br />متن ۱۰</p>;}
    else if (activeStep === 11) {return <p className="text-center paragraph-small">متن ۱۱<br />متن ۱۱</p>;}
    else if (activeStep === 12) {return <p className="text-center paragraph-small">متن ۱۲<br />متن ۱۲</p>;}
    else if (activeStep === 13) {return <p className="text-center paragraph-small">متن ۱۳<br />متن ۱۳</p>;}
    else if (activeStep === 14) {return <p className="text-center paragraph-small">متن ۱۴<br />متن ۱۴</p>;}
    else if (activeStep === 15) {return <p className="text-center paragraph-small">متن ۱۵<br />متن ۱۵</p>;}
    else if (activeStep === 16) {return <p className="text-center paragraph-small">متن ۱۶<br />متن ۱۶</p>;}
    else if (activeStep === 17) {return <p className="text-center paragraph-small">متن ۱۷<br />متن ۱۷</p>;}
    else if (activeStep === 18) {return <p className="text-center paragraph-small">متن ۱۸<br />متن ۱۸</p>;}
    else {return <p className="text-center paragraph-small">متن ?<br />متن ?</p>;}
}