// Importing part
import {ReactNode} from "react";
import InputComponent from "@/chunk/page/project-estimate/inputComponent";
import DropdownComponent from "@/chunk/page/project-estimate/dropdownComponent";

// Creating and exporting second section of project estimate page as default
export default function SecondSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <main className={'bg-white p-[20px] rounded-[10px] grid lg:grid-cols-2 grid-cols-1 gap-[20px] shadow-2xl shadow-black/20'}>
                    <div className={'lg:col-span-2 col-span-1'}>
                        <DropdownComponent
                            id={'dropdown-1-btn'}
                            label={'یک دسته بندی برای پروژه خود انتخاب کنید :'}
                            placeHolder={'دسته بندی مورد نظر خود را انتخاب کنید'}
                            items={['item 1', 'item 2']}
                        />
                    </div>
                    <InputComponent id={'subject'} placeHolder={'عنوان پروژه شما'} label={'یک عنوان برای پروژه خود انتخاب کنید :'} type={'text'} />
                    <InputComponent id={'time'} placeHolder={'تعداد روز'} label={'زمان پیشنهادی شما برای تحویل پروژه چقدر است ؟ :'} type={'number'} />
                </main>
            </div>
        </section>
    );
}