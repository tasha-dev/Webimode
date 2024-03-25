// Importing part
import {ReactNode} from "react";
import InputComponent from "@/chunk/page/project-estimate/inputComponent";
import DropdownComponent from "@/chunk/page/project-estimate/dropdownComponent";
import LabelComponent from "@/chunk/page/project-estimate/labelComponent";

// Creating and exporting second section of project estimate page as default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <main
                    className={'bg-white p-[20px] rounded-[10px] grid lg:grid-cols-2 grid-cols-1 gap-[20px] shadow-2xl shadow-black/20'}>
                    <div className={'lg:col-span-2 col-span-1'}>
                        <DropdownComponent
                            id={'dropdown-1-btn'}
                            label={'یک دسته بندی برای پروژه خود انتخاب کنید :'}
                            placeHolder={'دسته بندی مورد نظر خود را انتخاب کنید'}
                            items={['item 1', 'item 2']}
                        />
                    </div>
                    <InputComponent id={'subject'} placeHolder={'عنوان پروژه شما'} label={'یک عنوان برای پروژه خود انتخاب کنید :'} type={'text'}/>
                    <InputComponent id={'time'} placeHolder={'تعداد روز'} label={'زمان پیشنهادی شما برای تحویل پروژه چقدر است ؟ :'} type={'number'}/>
                    <div className={'lg:col-span-2 col-span-1'}>
                        <InputComponent id={'description'} placeHolder={'توضیحات پروژه خود را برای ما بنویسید ....'} label={'توضیحات پروژه :'} istextArea/>
                    </div>
                    <div className={'lg:col-span-2 col-span-1 grid lg:grid-cols-3 items-end grid-cols-1 gap-[20px]'}>
                        <InputComponent id={'name'} placeHolder={'نام و نام خانوادگی شما * ...'} label={'اطالاعات خود را وارد کنید :'}/>
                        <InputComponent id={'tel'} type={'tel'} placeHolder={'شماره تماس شما * ....'}/>
                        <InputComponent id={'email'} type={'email'} placeHolder={'ایمیل شما * ....'}/>
                    </div>
                </main>
            </div>
        </section>
    );
}