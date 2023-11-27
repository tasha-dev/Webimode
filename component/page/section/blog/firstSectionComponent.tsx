// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";

// Creating and exporting first section of blog page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className="relative">
            <div>
                <div />
                <div>
                    <div />
                    <IconComponent size={27} name="arrow-curve" />
                </div>
                <div />
                <div />
                <div>
                    <div />
                    <IconComponent size={27} name="arrow-curve" />
                </div>
                <div />
            </div>
            <div className="container p-[20px]">
                <header>
                    <div className="sign">مقالات وبیمود</div>
                    <h1>
                        جدیدترین و داغ ترین 
                        <span>
                            مقالات
                            <span className={'text-theme absolute right-[102%] bottom-full flex flex-col w-[30px]'}>
                                <span className={'self-center'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                                <span className={'self-start'}><IconComponent name={'star'} size={18} /></span>
                            </span>
                        </span>
                        در وبیمود    
                    </h1>
                    <p className="text-center paragraph">در مقالات وبیمود می توانید جدید ترین و بهترین مقالاتی که تا به حال ندیده اید را مشاهده کنید و از آن لذت ببرید !</p>
                </header>
                <main>
                    <form action='#'>
                        <input type="text" placeholder="اسم مقاله ، دسته بندی ، ...." name="search-query" id="search-input" />
                        <button>
                            <IconComponent size={16} name="search" />
                        </button>
                    </form>
                    <ul>
                        <li><button>همه مقالات</button></li>
                        <li><button>تکنولوژی</button></li>
                        <li><button>سلامت و بهداشت</button></li>
                        <li><button>ایده پردازی</button></li>
                        <li><button>هوش مصنوعی</button></li>
                        <li><button>جشنواره ها</button></li>
                        <li><button>طراحی و خلاقیت</button></li>
                    </ul>
                </main>
            </div>
        </section>
    );
}