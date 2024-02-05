// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import InputComponent from "@/chunk/footer/inputComponent";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form";

// Defining type of form
const formSchema = z.object({
    email: z.string().email('لطفا ایمیل را به درستی وارد کنید.'),
    name: z.string().min(2, 'نام کمتر از 2 کارکتر میباشد.').max(100, 'نام بیشتر از 100 کارکتر میباشد.'),
    text: z.string().min(10, 'نام کمتر از 10 کارکتر میباشد.').max(200, 'نام بیشتر از 200 کارکتر میباشد.'),
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting contact component of footer as default
export default function ContactComponent():ReactNode {
    // Defining useForm hook to use
    const {
        register,
        handleSubmit,
        setError,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm<formType>({
        resolver: zodResolver(formSchema)
    });

    // Handling submit event of form
    const submitEventHandler:SubmitHandler<formType> = (data) => {
        setError("root", {
            message: 'اررور کاستوم'
        })
    }

    // Returning JSX
    return (
        <div className="lg:absolute relative lg:bottom-[80%] lg:left-[20px] lg:w-[35%] w-full">
            <span className="lg:block hidden absolute bottom-full left-full text-dark"><IconComponent name="splash-lines" size={32} /></span>
            <form
                onClick={() => console.log(errors)}
                onSubmit={handleSubmit(submitEventHandler)}
                action="#"
                className="shadow-2xl transition-all duration-500 lg:border-2 border-lightTheme bg-gradient-to-b from-darkerTheme to-darkestTheme lg:p-[32px] p-[16px] lg:rounded-[56px] flex flex-col gap-[32px]"
            >
                <InputComponent register={register} icon="person" name={"name"} errorText={errors.name?.message} placeHolder="نام ...."/>
                <InputComponent register={register} icon="mail" name={"email"} errorText={errors.email?.message} placeHolder="ایمیل ...."/>
                <InputComponent register={register} icon="file-write" name={"text"} errorText={errors.text?.message} placeHolder="متن ...." isTextArea />
                {
                    (errors.root?.message)
                        ? (
                            <div className={'p-[16px] bg-red-950 border-[1.5px] border-red-600 rounded-[13px] mt-[16px]'}>
                                <p className={'text-red-600 font-normal text-[15px]'}>{errors.root?.message}</p>
                            </div>
                        ) : false
                }
                <button className="btn-primary w-full" disabled={isSubmitting}>
                    ثبت درخواست
                    <IconComponent name="chevron-left" size={16}/>
                </button>
                <p className="text-white lg:text-[16px] text-[13px] font-normal flex items-start gap-[10px]">
                    <span className="shrnik-0"><IconComponent name="info" size={24}/></span>
                    بین 24 تا 48 ساعت آینده تیم وبیمود با شما ارتباط خواهد گرفت
                </p>
            </form>
            <div className="absolute left-[30px] bottom-0 translate-y-[50%] lg:w-[80px] w-[64px] lg:h-[80px] h-[64px] aspect-square p-[5px] flex items-center justify-center bg-lightTheme text-white rounded-full">
                <svg className="w-full h-full " viewBox="0 0 68 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="34" cy="34.8359" r="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="9 9"/>
                    <path d="M44.8081 47.7554C45.3598 47.7812 45.8279 47.3549 45.8537 46.8032L46.2742 37.8131C46.3 37.2614 45.8737 36.7932 45.322 36.7674C44.7703 36.7416 44.3022 37.1679 44.2764 37.7196L43.9026 45.7109L35.9114 45.3372C35.3597 45.3114 34.8915 45.7377 34.8657 46.2894C34.8399 46.8411 35.2663 47.3092 35.8179 47.335L44.8081 47.7554ZM22.4052 23.5893L44.1155 47.4298L45.5942 46.0832L23.8839 22.2427L22.4052 23.5893Z" fill="currentColor"/>
                </svg>
            </div>
        </div>
    );
}