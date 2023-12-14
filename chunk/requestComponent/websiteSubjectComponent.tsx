// Importing part
import {EventHandler, ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining props type
interface propsType {
    isSelected: boolean;
    title: string;
    icon: 'house-buliding'|'shop'|'file'|'person'|'wp'|'browser'|'shield-check'|'ban-bug'|'cloud-upload'|'addsign' | '';
    onClick: EventHandler<any>;
    hasSwitch?: boolean;
}

// Creating and exporting website subject component as default
export default function WebsiteSubjectComponent({icon, isSelected, title, onClick, hasSwitch}:propsType):ReactNode {
    // Returning JSX
    return (
        <button onClick={onClick} data-no-icon={(icon === '')} data-selected={isSelected} className="flex items-center transition-all duration-500 justify-between gap-[20px] border border-theme data-[no-icon='false']:px-[12px] data-[no-icon='false']:py-[8px] data-[no-icon='true']:px-[18px] data-[no-icon='true']:py-[18px] data-[selected='false']:bg-transparent data-[selected='true']:bg-theme rounded-[16px]">
            <div data-no-icon={(icon === '')} className="flex items-center gap-[12px] data-[no-icon:'false']:w-[75%] data-[no-icon:'true']:w-full">
                {
                    (!hasSwitch)
                        ? (
                            <div data-selected={isSelected} className="transition-all shrink-0 duration-500 rounded-[8px] w-[24px] h-[24px] text-theme flex items-center justify-center border data-[selected='true']:border-white data-[selected='false']:border-theme data-[selected='true']:bg-white data-[selected='false']:bg-transparent">
                                {
                                    (isSelected)
                                        ? <IconComponent name="check-circle" size={12} />
                                        : false
                                }
                            </div>  
                        ) : false
                }
                <span data-selected={isSelected} className="text-[16px] transition-all duration-500 font-normal block truncate data-[selected='true']:text-white data-[selected='false']:text-lightGrey">
                    {title}
                </span>
            </div>
            {
                (icon !== '')
                    ? (
                        <div data-selected={isSelected} className="w-[41px] h-[41px] transition-all duration-500 shrink-0 flex items-center justify-center rounded-[8px] data-[selected='true']:bg-white data-[selected='true']:text-theme shadow-custom-outer-sellected data-[selected='false']:bg-LighterDarkerTheme data-[selected='false']:text-lightGrey">
                            <IconComponent name={icon} size={24} />
                        </div>
                    ) : false
            }
            {
                (hasSwitch)
                    ? (
                        <div className="flex shrink-0 p-[4px] w-[64px] h-[32px] rounded-[10px] border border-white items-center relative">
                            <div data-selected={isSelected} className="absolute top-[50%] -translate-y-[50%] transition-all duration-500 aspect-square h-[80%] bg-white data-[selected='false']:left-[2px] data-[selected='true']:left-[57%] ease-in-out rounded-[5px]" />
                        </div>
                    ) : false
            }
        </button>
    );
}