// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode, useState} from "react";
import InputComponent from "@/chunk/page/project-estimate/inputComponent";
import DropdownComponent from "@/chunk/page/project-estimate/dropdownComponent";
import IconComponent from "@/chunk/iconComponent";
import ContentComponent from "@/chunk/page/project-estimate/contentComponent";

// Creating and exporting second section of project estimate page as default
export default function SecondSectionComponent():ReactNode {
    // Defining states of component
    const [group, setGroup] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [time, setTime] = useState<string>('0');
    const [description, setDescription] = useState<string>('');

    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <form action={'#'} className={'bg-white p-[20px] rounded-[10px] shadow-2xl shadow-black/20'}>
                    <div className={'grid lg:grid-cols-2 grid-cols-1 gap-[20px]'}>
                        <div className={'lg:col-span-2 col-span-1'}>
                            <DropdownComponent
                                onChange={(event) => setGroup(event.target.value)}
                                inputHasMarginRight
                                id={'dropdown'}
                                label={'یک دسته بندی برای پروژه خود انتخاب کنید :'}
                                items={['item 1', 'item 2']}
                            />
                        </div>
                        <InputComponent onChange={(event) => setSubject(event.target.value)} inputHasMarginRight id={'subject'} placeHolder={'عنوان پروژه شما'} label={'یک عنوان برای پروژه خود انتخاب کنید :'} type={'text'}/>
                        <InputComponent onChange={(event) => setTime(event.target.value)} id={'time'} placeHolder={'تعداد روز'} label={'زمان پیشنهادی شما برای تحویل پروژه چقدر است ؟ :'} type={'number'}/>
                        <div className={'lg:col-span-2 col-span-1'}>
                            <InputComponent onChange={(event) => setDescription(event.target.value)} inputHasMarginRight id={'description'} placeHolder={'توضیحات پروژه خود را برای ما بنویسید ....'} label={'توضیحات پروژه :'} istextArea/>
                        </div>
                        <div
                            className={'lg:col-span-2 col-span-1 grid lg:grid-cols-3 items-end grid-cols-1 gap-[20px]'}>
                            <InputComponent inputHasMarginRight id={'name'} placeHolder={'نام و نام خانوادگی شما * ...'} label={'اطالاعات خود را وارد کنید :'}/>
                            <InputComponent id={'tel'} type={'tel'} placeHolder={'شماره تماس شما * ....'}/>
                            <InputComponent id={'email'} type={'email'} placeHolder={'ایمیل شما * ....'}/>
                        </div>
                    </div>
                    <div className={'p-[10px] rounded-[10px] bg-dark flex items-center justify-start gap-[10px] flex-wrap my-[20px]'}>
                        <span className={'text-white'}>
                            <IconComponent name={'list-check'} size={16} />
                        </span>
                        <span className={'text-white font-normal text-[20px]'}>موارد انتخاب شده</span>
                    </div>
                    <div className={'lg:col-span-2 grid lg:grid-cols-3 gap-[20px] mb-[20px]'}>
                        <ContentComponent value={group} label={'دسته بندی پروژه :'} placeHolder={'دسته بندی پروژه شما'} />
                        <ContentComponent value={subject} label={'عنوان پروژه شما :'} placeHolder={'نام پروژه شما'} />
                        <ContentComponent isDay value={time} label={'زمان پیشنهادی شما :'} placeHolder={'زمان مورد نیاز تحویل پروژه '} />
                    </div>
                    <ContentComponent value={description} label={'توضیحات پروژه :'} isTextArea />
                    <button className={'btn-primary w-full mt-[20px]'}>
                        ارسال درخواست
                        <IconComponent name={'chevron-left'} size={20} />
                    </button>
                </form>
            </div>
        </section>
    );
}