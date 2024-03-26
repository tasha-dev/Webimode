// Importing part
import {ReactNode} from "react";
import LabelComponent from "@/chunk/page/project-estimate/labelComponent";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    value: string;
    isTextArea?: boolean;
    label: string;
    placeHolder?: string;
    isDay?: boolean;
}

// Creating and exporting content component as default
export default function ContentComponent({isTextArea = false, value = '', placeHolder, label, isDay = false}:propsType):ReactNode {
    // Conditional rendering
    if (!isTextArea) {
        return (
            <div>
                <LabelComponent forProp={''} isActive={false}>{label}</LabelComponent>
                <div className={'lg:pr-[50px]'}>
                    <div className={'w-full border bg-white rounded-[10px] border-lightGrey p-[10px] flex items-center justify-between gap-[20px]'}>
                        <p className={'w-full block truncate'}>
                            <span className={'text-lightGrey'}>{placeHolder}</span>
                            {
                                (isDay)
                                    ? (value !== '0' && value !== "")
                                        ? <span className={'text-theme'}>({value} روز)</span>
                                        : false
                                    : (value !== '')
                                        ? <span className={'text-theme'}>({value})</span>
                                        : false

                            }
                        </p>
                        <span data-valid={(isDay) ? (value !== "0" && value !== "") : (value !== '')} className={'shrink-0 data-[valid="false"]:text-red-600 data-[valid="true"]:text-theme'}>
                            <IconComponent name={
                                (isDay)
                                    ? (value === "0")
                                        ? 'circle-x'
                                        : 'check-circle'
                                    : (value === '')
                                        ? 'circle-x'
                                        : 'check-circle'
                            } size={20} />
                        </span>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <LabelComponent forProp={''} isActive={false}>{label}</LabelComponent>
                <div className={'lg:pr-[50px]'}>
                    <div className={'w-full border bg-white rounded-[10px] border-lightGrey p-[10px] h-[150px] overflow-auto'}>
                        <p>{value}</p>
                    </div>
                </div>
            </div>
        );
    }
}
