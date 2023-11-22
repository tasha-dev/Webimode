// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import InputComponent from "@/chunk/footer/inputComponent";

// Creating and exporting contact component of footer as default
export default function ContactComponent():ReactNode {
    // Returning JSX
    return (
        <div>
            <IconComponent name="splash-lines" size={32} />
            <form action="#">
                <InputComponent icon="person" inputType="text" name="name-input-footer" placeHolder="نام ...." required />
                <InputComponent icon="mail" inputType="mail" name="email-input-footer" placeHolder="ایمیل ...." required />
                <InputComponent icon="file-write" inputType="text" name="text-input-footer" placeHolder="ایمیل ...." required isTextArea />
                <button className="btn-primary">
                    ثبت درخواست
                    <IconComponent name="chevron-left" size={16} />
                </button>
                <p>
                    <IconComponent name="info" size={24} />
                    بین 24 تا 48 ساعت آینده تیم وبیمود با شما ارتباط خواهد گرفت
                </p>
            </form>
            <div>
                <svg width="68" height="69" viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="34" cy="34.8359" r="33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="9 9"/>
                    <path d="M44.8081 47.7554C45.3598 47.7812 45.8279 47.3549 45.8537 46.8032L46.2742 37.8131C46.3 37.2614 45.8737 36.7932 45.322 36.7674C44.7703 36.7416 44.3022 37.1679 44.2764 37.7196L43.9026 45.7109L35.9114 45.3372C35.3597 45.3114 34.8915 45.7377 34.8657 46.2894C34.8399 46.8411 35.2663 47.3092 35.8179 47.335L44.8081 47.7554ZM22.4052 23.5893L44.1155 47.4298L45.5942 46.0832L23.8839 22.2427L22.4052 23.5893Z" fill="currentColor"/>
                </svg>
            </div>
        </div>
    );
}