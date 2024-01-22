// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    activeStep: number;
}

// Creating and exporting paragraph component which changed with active step in fifth section of home page
export default function ParagraphOnSliderComponent({activeStep}:propsType):ReactNode {
    // Conditional rendering
    if (activeStep === 1) {return <p className="text-center paragraph-small block truncate w-[75%]">گر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما</p>;}
    else if (activeStep === 2) {return <p className="text-center paragraph-small block truncate w-[75%]"> (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت</p>;}
    else if (activeStep === 3) {return <p className="text-center paragraph-small block truncate w-[75%]">و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.</p>;}
    else if (activeStep === 4) {return <p className="text-center paragraph-small block truncate w-[75%]">طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست.</p>;}
    else if (activeStep === 5) {return <p className="text-center paragraph-small block truncate w-[75%]"> در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود</p>;}
    else if (activeStep === 6) {return <p className="text-center paragraph-small block truncate w-[75%]">و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند.</p>;}
    else if (activeStep === 7) {return <p className="text-center paragraph-small block truncate w-[75%]">از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان معمولا از لورم ایپسوم استفاده میکنند</p>;}
    else if (activeStep === 8) {return <p className="text-center paragraph-small block truncate w-[75%]">تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته شده است.</p>;}
    else if (activeStep === 9) {return <p className="text-center paragraph-small block truncate w-[75%]">نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران </p>;}
    else if (activeStep === 10) {return <p className="text-center paragraph-small block truncate w-[75%]">بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می‌برند که متن لورم را از قسمتهای مختلف سایت حذف کنند و یا با متن دیگری جایگزین کنند.</p>;}
    else if (activeStep === 11) {return <p className="text-center paragraph-small block truncate w-[75%]">به همین دلیل اغلب اوقات ما با وبسایتهایی مواجه می‌شویم که در گوشه و کنار صفحات آنها متن لورم ایپسوم هنوز وجود دارد و</p>;}
    else if (activeStep === 12) {return <p className="text-center paragraph-small block truncate w-[75%]">حذف نشده است که این نشان دهنده بی توجهی طراحان است.</p>;}
    else {return <p className="text-center paragraph-small block truncate w-[75%]">حذف نشده است که این نشان دهنده بی توجهی طراحان است.</p>;}
}