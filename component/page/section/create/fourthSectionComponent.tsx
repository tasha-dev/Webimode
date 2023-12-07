// Importing part
import IconComponent from "@/chunk/iconComponent";
import MoveComponent from "@/chunk/page/create/fourthSection/moveComponent";
import {ReactNode} from "react";

// Creating and exporting fourth section of create page as default
export default function FourthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <div className="container p-[20px]">
                <header>
                    <div className="sign">مراح سفارش سایت</div>
                    <h3>
                        سفارش سایت با 
                        <span>سه حرکت</span>
                        <span className={'text-theme absolute left-full bottom-full lg:flex hidden flex-col w-[30px]'}>
                            <span className={'self-end'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-start'}><IconComponent name={'star'} size={14} /></span>
                            <span className={'self-end'}><IconComponent name={'star'} size={18} /></span>
                        </span>
                    </h3>
                </header>
                <main>
                    <div>
                        <svg width="411" height="61" viewBox="0 0 411 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24523 56.2698C0.603287 56.0158 0.288769 55.2895 0.542735 54.6476L4.68135 44.1865C4.93532 43.5445 5.6616 43.23 6.30354 43.484C6.94549 43.738 7.26 44.4642 7.00604 45.1062L3.32727 54.4049L12.626 58.0837C13.268 58.3377 13.5825 59.0639 13.3285 59.7059C13.0745 60.3478 12.3483 60.6623 11.7063 60.4084L1.24523 56.2698ZM6.66133 51.6683C7.29932 51.4045 8.03031 51.7079 8.29405 52.3459C8.55778 52.9839 8.25439 53.7149 7.61639 53.9787L6.66133 51.6683ZM18.508 49.5793C17.866 49.8332 17.1397 49.5186 16.8859 48.8766C16.632 48.2346 16.9466 47.5084 17.5886 47.2545L18.508 49.5793ZM28.57 42.9938C29.2152 42.7482 29.9373 43.0721 30.183 43.7172C30.4286 44.3624 30.1047 45.0846 29.4596 45.3302L28.57 42.9938ZM40.503 41.2027C39.8549 41.4404 39.1368 41.1078 38.899 40.4596C38.6612 39.8115 38.9939 39.0934 39.642 38.8556L40.503 41.2027ZM50.7775 34.8476C51.4285 34.6178 52.1425 34.9592 52.3723 35.6102C52.6022 36.2612 52.2607 36.9752 51.6098 37.205L50.7775 34.8476ZM62.7097 33.3636C62.056 33.5853 61.3462 33.235 61.1246 32.5812C60.9029 31.9274 61.2532 31.2177 61.907 30.996L62.7097 33.3636ZM73.1413 27.2682C73.798 27.0551 74.503 27.4147 74.7161 28.0714C74.9292 28.728 74.5696 29.4331 73.9129 29.6461L73.1413 27.2682ZM85.118 26.0949C84.4584 26.2989 83.7584 25.9295 83.5545 25.27C83.3505 24.6105 83.7198 23.9105 84.3794 23.7065L85.118 26.0949ZM95.6995 20.2971C96.362 20.103 97.0564 20.4827 97.2505 21.1452C97.4445 21.8077 97.0648 22.5021 96.4023 22.6962L95.6995 20.2971ZM107.724 19.4773C107.059 19.6606 106.37 19.2697 106.187 18.6041C106.004 17.9385 106.395 17.2504 107.06 17.067L107.724 19.4773ZM118.477 14.0295C119.145 13.858 119.826 14.2611 119.998 14.9298C120.169 15.5985 119.766 16.2797 119.098 16.4511L118.477 14.0295ZM130.527 13.6383C129.855 13.7966 129.182 13.3801 129.023 12.7081C128.865 12.0361 129.282 11.3631 129.954 11.2049L130.527 13.6383ZM141.49 8.62046C142.165 8.47718 142.829 8.90849 142.972 9.58381C143.115 10.2591 142.684 10.9227 142.009 11.066L141.49 8.62046ZM153.545 8.76673C152.866 8.89291 152.214 8.44499 152.088 7.76626C151.962 7.08754 152.409 6.43503 153.088 6.30885L153.545 8.76673ZM164.738 4.31378C165.42 4.20742 166.059 4.67416 166.165 5.35627C166.272 6.03838 165.805 6.67757 165.123 6.78393L164.738 4.31378ZM176.773 5.16543C176.088 5.24836 175.465 4.76001 175.382 4.07465C175.299 3.3893 175.787 2.76647 176.473 2.68353L176.773 5.16543ZM188.252 1.4944C188.941 1.43957 189.543 1.953 189.598 2.64117C189.652 3.32935 189.139 3.93167 188.451 3.9865L188.252 1.4944ZM200.163 3.33745C199.473 3.35776 198.898 2.81482 198.877 2.12477C198.857 1.43471 199.4 0.858845 200.09 0.838535L200.163 3.33745ZM211.91 0.838535C212.6 0.858845 213.143 1.43471 213.123 2.12477C213.103 2.81483 212.527 3.35776 211.837 3.33746L211.91 0.838535ZM223.549 3.9865C222.861 3.93167 222.348 3.32935 222.402 2.64118C222.457 1.953 223.06 1.43957 223.748 1.4944L223.549 3.9865ZM235.527 2.68354C236.213 2.76648 236.701 3.3893 236.618 4.07465C236.535 4.76001 235.912 5.24837 235.227 5.16543L235.527 2.68354ZM246.877 6.78393C246.195 6.67757 245.728 6.03839 245.835 5.35627C245.941 4.67416 246.58 4.20742 247.262 4.31378L246.877 6.78393ZM258.912 6.30885C259.591 6.43503 260.038 7.08754 259.912 7.76627C259.786 8.44499 259.134 8.89292 258.455 8.76674L258.912 6.30885ZM269.991 11.066C269.316 10.9227 268.885 10.2591 269.028 9.58381C269.171 8.90849 269.835 8.47718 270.51 8.62046L269.991 11.066ZM282.046 11.2049C282.718 11.3631 283.135 12.0361 282.977 12.7081C282.818 13.3801 282.145 13.7966 281.473 13.6383L282.046 11.2049ZM292.902 16.4511C292.234 16.2797 291.831 15.5985 292.002 14.9298C292.174 14.2611 292.855 13.858 293.523 14.0295L292.902 16.4511ZM304.94 17.067C305.605 17.2504 305.996 17.9385 305.813 18.6041C305.63 19.2697 304.941 19.6606 304.276 19.4773L304.94 17.067ZM315.598 22.6962C314.935 22.5021 314.555 21.8077 314.75 21.1452C314.944 20.4827 315.638 20.103 316.301 20.2971L315.598 22.6962ZM327.621 23.7065C328.28 23.9104 328.649 24.6104 328.445 25.27C328.242 25.9295 327.542 26.2989 326.882 26.0949L327.621 23.7065ZM338.087 29.6461C337.43 29.4331 337.071 28.728 337.284 28.0714C337.497 27.4147 338.202 27.0551 338.859 27.2682L338.087 29.6461ZM350.093 30.996C350.747 31.2177 351.097 31.9274 350.875 32.5812C350.654 33.235 349.944 33.5853 349.29 33.3636L350.093 30.996ZM360.39 37.205C359.739 36.9752 359.398 36.2612 359.628 35.6102C359.857 34.9592 360.572 34.6178 361.222 34.8476L360.39 37.205ZM372.358 38.8556C373.006 39.0934 373.339 39.8115 373.101 40.4596C372.863 41.1078 372.145 41.4404 371.497 41.2027L372.358 38.8556ZM382.54 45.3302C381.895 45.0846 381.571 44.3624 381.817 43.7172C382.063 43.0721 382.785 42.7482 383.43 42.9938L382.54 45.3302ZM394.411 47.2545C395.053 47.5084 395.368 48.2346 395.114 48.8766C394.86 49.5186 394.134 49.8332 393.492 49.5793L394.411 47.2545ZM404.384 53.9787C403.746 53.7149 403.442 52.9839 403.706 52.3459C403.97 51.7079 404.701 51.4045 405.339 51.6683L404.384 53.9787ZM1.70508 55.1074C1.20834 53.9604 1.20836 53.9604 1.20839 53.9603C1.20841 53.9603 1.20845 53.9603 1.20849 53.9603C1.20858 53.9603 1.20869 53.9602 1.20883 53.9601C1.2091 53.96 1.2095 53.9599 1.21001 53.9596C1.21104 53.9592 1.21253 53.9585 1.21449 53.9577C1.21841 53.956 1.22419 53.9535 1.23183 53.9502C1.2471 53.9436 1.26979 53.9338 1.29982 53.9209C1.35987 53.895 1.44928 53.8566 1.56741 53.806C1.80367 53.7047 2.15484 53.5548 2.61592 53.3595C3.53807 52.9688 4.89987 52.3964 6.66133 51.6683L7.61639 53.9787C5.86199 54.7039 4.5069 55.2735 3.59113 55.6614C3.13324 55.8554 2.78519 56.004 2.55197 56.1039C2.43536 56.1539 2.34746 56.1917 2.28889 56.2169C2.25961 56.2295 2.23766 56.239 2.22312 56.2453C2.21585 56.2484 2.21044 56.2508 2.20688 56.2523C2.2051 56.2531 2.20379 56.2536 2.20295 56.254C2.20253 56.2542 2.20222 56.2543 2.20203 56.2544C2.20194 56.2544 2.20187 56.2545 2.20184 56.2545C2.20182 56.2545 2.20182 56.2545 2.20181 56.2545C2.20181 56.2545 2.20182 56.2545 1.70508 55.1074ZM17.5886 47.2545C20.8437 45.9672 24.5229 44.5347 28.57 42.9938L29.4596 45.3302C25.4231 46.8671 21.7538 48.2956 18.508 49.5793L17.5886 47.2545ZM39.642 38.8556C43.1758 37.5593 46.896 36.2179 50.7775 34.8476L51.6098 37.205C47.7383 38.5717 44.0277 39.9097 40.503 41.2027L39.642 38.8556ZM61.907 30.996C65.5511 29.7605 69.3014 28.5142 73.1413 27.2682L73.9129 29.6461C70.084 30.8886 66.344 32.1314 62.7097 33.3636L61.907 30.996ZM84.3794 23.7065C88.0937 22.5579 91.8716 21.4185 95.6995 20.2971L96.4023 22.6962C92.587 23.814 88.8211 24.9498 85.118 26.0949L84.3794 23.7065ZM107.06 17.067C110.835 16.0271 114.645 15.012 118.477 14.0295L119.098 16.4511C115.281 17.4298 111.486 18.4411 107.724 19.4773L107.06 17.067ZM129.954 11.2049C133.793 10.3009 137.642 9.4368 141.49 8.62046L142.009 11.066C138.18 11.8783 134.349 12.7383 130.527 13.6383L129.954 11.2049ZM153.088 6.30885C156.99 5.58355 160.877 4.91578 164.738 4.31378L165.123 6.78393C161.288 7.38194 157.424 8.04557 153.545 8.76673L153.088 6.30885ZM176.473 2.68353C180.447 2.20262 184.378 1.80305 188.252 1.4944L188.451 3.9865C184.613 4.29223 180.716 4.68827 176.773 5.16543L176.473 2.68353ZM200.09 0.838535C202.081 0.779938 204.052 0.749905 206 0.749905V3.2499C204.077 3.2499 202.131 3.27954 200.163 3.33745L200.09 0.838535ZM206 0.749905C207.948 0.749905 209.919 0.779938 211.91 0.838535L211.837 3.33746C209.869 3.27954 207.923 3.2499 206 3.2499V0.749905ZM223.748 1.4944C227.622 1.80305 231.553 2.20262 235.527 2.68354L235.227 5.16543C231.284 4.68828 227.387 4.29224 223.549 3.9865L223.748 1.4944ZM247.262 4.31378C251.123 4.91579 255.011 5.58356 258.912 6.30885L258.455 8.76674C254.576 8.04557 250.712 7.38195 246.877 6.78393L247.262 4.31378ZM270.51 8.62046C274.358 9.4368 278.207 10.3009 282.046 11.2049L281.473 13.6383C277.651 12.7383 273.82 11.8783 269.991 11.066L270.51 8.62046ZM293.523 14.0295C297.355 15.012 301.165 16.0271 304.94 17.067L304.276 19.4773C300.514 18.4411 296.719 17.4298 292.902 16.4511L293.523 14.0295ZM316.301 20.2971C320.128 21.4185 323.906 22.5579 327.621 23.7065L326.882 26.0949C323.179 24.9498 319.413 23.8139 315.598 22.6962L316.301 20.2971ZM338.859 27.2682C342.699 28.5142 346.449 29.7605 350.093 30.996L349.29 33.3636C345.656 32.1314 341.916 30.8886 338.087 29.6461L338.859 27.2682ZM361.222 34.8476C365.104 36.2179 368.824 37.5593 372.358 38.8556L371.497 41.2027C367.972 39.9097 364.262 38.5717 360.39 37.205L361.222 34.8476ZM383.43 42.9938C387.477 44.5348 391.156 45.9672 394.411 47.2545L393.492 49.5793C390.246 48.2956 386.577 46.8671 382.54 45.3302L383.43 42.9938ZM405.339 51.6683C407.1 52.3964 408.462 52.9688 409.384 53.3595C409.845 53.5548 410.196 53.7047 410.433 53.806C410.551 53.8566 410.64 53.895 410.7 53.9209C410.73 53.9338 410.753 53.9436 410.768 53.9502C410.776 53.9535 410.782 53.956 410.785 53.9577C410.787 53.9585 410.789 53.9592 410.79 53.9596C410.79 53.9599 410.791 53.96 410.791 53.9601C410.791 53.9602 410.791 53.9603 410.792 53.9603C410.792 53.9603 410.792 53.9603 410.792 53.9603C410.792 53.9604 410.792 53.9604 410.295 55.1074C409.798 56.2545 409.798 56.2545 409.798 56.2545C409.798 56.2545 409.798 56.2545 409.798 56.2545C409.798 56.2545 409.798 56.2544 409.798 56.2544C409.798 56.2543 409.797 56.2542 409.797 56.254C409.796 56.2536 409.795 56.2531 409.793 56.2523C409.79 56.2508 409.784 56.2484 409.777 56.2453C409.762 56.239 409.74 56.2295 409.711 56.2169C409.653 56.1917 409.565 56.1539 409.448 56.1039C409.215 56.004 408.867 55.8554 408.409 55.6614C407.493 55.2735 406.138 54.7039 404.384 53.9787L405.339 51.6683Z" fill="#BBBBBB"/></svg>
                    </div>
                    <div>
                        <div>
                            <MoveComponent icon="file-write" index={1} title="ثبت سفارش طراحی سایت" isActive={false}>ثبت سفارش طراحی سایت (سایت شرکتی، فروشگاهی، سایت شخصی و ...) هر چیزی نیاز دارید تو چند جمله بنویسید</MoveComponent>
                            <MoveComponent icon="file-search" index={1} title="2. بررسی و پیشنهادات قیمتی و زمانی" isActive={false}>ثبت سفارش طراحی سایت (سایت شرکتی، فروشگاهی، سایت شخصی و ...) هر چیزی نیاز دارید تو چند جمله بنویسید</MoveComponent>
                            <MoveComponent icon="party-horn" index={1} title="3. استخدام طراح با پرداخت امن" isActive={false}>ثبت سفارش طراحی سایت (سایت شرکتی، فروشگاهی، سایت شخصی و ...) هر چیزی نیاز دارید تو چند جمله بنویسید</MoveComponent>
                        </div>
                    </div>
                    <div>
                        <svg width="411" height="61" viewBox="0 0 411 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.44445 4.94508C0.802506 5.19905 0.487988 5.92532 0.741954 6.56727L4.88057 17.0284C5.13454 17.6703 5.86082 17.9848 6.50276 17.7309C7.14471 17.4769 7.45922 16.7506 7.20526 16.1087L3.52649 6.80992L12.8252 3.13115C13.4672 2.87718 13.7817 2.1509 13.5277 1.50896C13.2738 0.867013 12.5475 0.552495 11.9055 0.806461L1.44445 4.94508ZM6.86054 9.54657C7.49854 9.81031 8.22953 9.50691 8.49327 8.86892C8.757 8.23092 8.45361 7.49993 7.81561 7.23619L6.86054 9.54657ZM18.7072 11.6355C18.0652 11.3817 17.339 11.6963 17.0851 12.3382C16.8312 12.9802 17.1458 13.7065 17.7878 13.9603L18.7072 11.6355ZM28.7692 18.221C29.4144 18.4667 30.1365 18.1428 30.3822 17.4976C30.6278 16.8524 30.304 16.1303 29.6588 15.8846L28.7692 18.221ZM40.7022 20.0122C40.0541 19.7744 39.336 20.1071 39.0982 20.7552C38.8605 21.4033 39.1931 22.1215 39.8413 22.3592L40.7022 20.0122ZM50.9767 26.3673C51.6277 26.5971 52.3417 26.2556 52.5716 25.6047C52.8014 24.9537 52.46 24.2397 51.809 24.0098L50.9767 26.3673ZM62.909 27.8512C62.2552 27.6296 61.5455 27.9799 61.3238 28.6337C61.1021 29.2875 61.4524 29.9972 62.1062 30.2188L62.909 27.8512ZM73.3405 33.9466C73.9972 34.1597 74.7022 33.8001 74.9153 33.1435C75.1284 32.4868 74.7688 31.7818 74.1122 31.5687L73.3405 33.9466ZM85.3172 35.1199C84.6577 34.916 83.9577 35.2853 83.7537 35.9449C83.5497 36.6044 83.9191 37.3044 84.5786 37.5083L85.3172 35.1199ZM95.8987 40.9178C96.5612 41.1119 97.2556 40.7321 97.4497 40.0696C97.6438 39.4071 97.264 38.7127 96.6015 38.5186L95.8987 40.9178ZM107.923 41.7376C107.258 41.5542 106.57 41.9452 106.386 42.6107C106.203 43.2763 106.594 43.9645 107.259 44.1478L107.923 41.7376ZM118.676 47.1854C119.345 47.3568 120.026 46.9537 120.197 46.285C120.369 45.6163 119.965 44.9352 119.297 44.7637L118.676 47.1854ZM130.726 47.5765C130.054 47.4183 129.381 47.8348 129.223 48.5067C129.064 49.1787 129.481 49.8517 130.153 50.01L130.726 47.5765ZM141.689 52.5944C142.364 52.7377 143.028 52.3064 143.171 51.631C143.314 50.9557 142.883 50.2921 142.208 50.1488L141.689 52.5944ZM153.744 52.4481C153.066 52.3219 152.413 52.7699 152.287 53.4486C152.161 54.1273 152.609 54.7798 153.287 54.906L153.744 52.4481ZM164.937 56.9011C165.619 57.0074 166.258 56.5407 166.364 55.8586C166.471 55.1765 166.004 54.5373 165.322 54.4309L164.937 56.9011ZM176.972 56.0494C176.287 55.9665 175.664 56.4548 175.581 57.1402C175.498 57.8255 175.987 58.4484 176.672 58.5313L176.972 56.0494ZM188.452 59.7204C189.14 59.7753 189.742 59.2618 189.797 58.5737C189.852 57.8855 189.338 57.2832 188.65 57.2283L188.452 59.7204ZM200.363 57.8774C199.673 57.8571 199.097 58.4 199.076 59.0901C199.056 59.7801 199.599 60.356 200.289 60.3763L200.363 57.8774ZM212.109 60.3763C212.799 60.356 213.342 59.7801 213.322 59.0901C213.302 58.4 212.726 57.8571 212.036 57.8774L212.109 60.3763ZM223.748 57.2283C223.06 57.2832 222.547 57.8855 222.602 58.5737C222.656 59.2618 223.259 59.7753 223.947 59.7204L223.748 57.2283ZM235.727 58.5313C236.412 58.4484 236.9 57.8255 236.817 57.1402C236.734 56.4548 236.112 55.9665 235.426 56.0494L235.727 58.5313ZM247.076 54.4309C246.394 54.5373 245.928 55.1765 246.034 55.8586C246.14 56.5407 246.78 57.0074 247.462 56.9011L247.076 54.4309ZM259.111 54.906C259.79 54.7798 260.238 54.1273 260.112 53.4486C259.985 52.7699 259.333 52.3219 258.654 52.4481L259.111 54.906ZM270.191 50.1488C269.515 50.2921 269.084 50.9557 269.227 51.631C269.371 52.3064 270.034 52.7377 270.709 52.5944L270.191 50.1488ZM282.246 50.01C282.918 49.8517 283.334 49.1787 283.176 48.5067C283.018 47.8348 282.345 47.4183 281.673 47.5765L282.246 50.01ZM293.102 44.7637C292.433 44.9352 292.03 45.6163 292.201 46.285C292.373 46.9537 293.054 47.3568 293.723 47.1854L293.102 44.7637ZM305.139 44.1478C305.805 43.9645 306.196 43.2763 306.012 42.6107C305.829 41.9452 305.141 41.5542 304.475 41.7376L305.139 44.1478ZM315.797 38.5186C315.134 38.7127 314.755 39.4071 314.949 40.0696C315.143 40.7321 315.837 41.1119 316.5 40.9178L315.797 38.5186ZM327.82 37.5084C328.479 37.3044 328.849 36.6044 328.645 35.9449C328.441 35.2853 327.741 34.916 327.081 35.1199L327.82 37.5084ZM338.286 31.5687C337.63 31.7818 337.27 32.4868 337.483 33.1435C337.696 33.8001 338.401 34.1597 339.058 33.9466L338.286 31.5687ZM350.292 30.2188C350.946 29.9972 351.296 29.2875 351.075 28.6337C350.853 27.9799 350.143 27.6296 349.489 27.8512L350.292 30.2188ZM360.589 24.0098C359.938 24.2397 359.597 24.9537 359.827 25.6047C360.057 26.2556 360.771 26.5971 361.422 26.3673L360.589 24.0098ZM372.557 22.3592C373.205 22.1215 373.538 21.4033 373.3 20.7552C373.062 20.1071 372.344 19.7744 371.696 20.0122L372.557 22.3592ZM382.74 15.8846C382.094 16.1303 381.771 16.8524 382.016 17.4976C382.262 18.1428 382.984 18.4667 383.629 18.221L382.74 15.8846ZM394.611 13.9603C395.253 13.7064 395.567 12.9802 395.313 12.3382C395.059 11.6963 394.333 11.3817 393.691 11.6355L394.611 13.9603ZM404.583 7.23619C403.945 7.49992 403.641 8.23092 403.905 8.86891C404.169 9.5069 404.9 9.8103 405.538 9.54656L404.583 7.23619ZM1.9043 6.10742C1.40756 7.25448 1.40758 7.25449 1.40761 7.25451C1.40763 7.25452 1.40767 7.25453 1.40771 7.25455C1.40779 7.25459 1.4079 7.25463 1.40804 7.25469C1.40832 7.25481 1.40872 7.25499 1.40923 7.25521C1.41026 7.25565 1.41175 7.2563 1.41371 7.25715C1.41763 7.25884 1.42341 7.26134 1.43105 7.26464C1.44632 7.27124 1.46901 7.28103 1.49904 7.29396C1.55909 7.31983 1.64849 7.35828 1.76663 7.40889C2.00289 7.51011 2.35406 7.66002 2.81513 7.85535C3.73729 8.24602 5.09909 8.81842 6.86054 9.54657L7.81561 7.23619C6.06121 6.51095 4.70612 5.94137 3.79035 5.55341C3.33246 5.35942 2.98441 5.21085 2.75119 5.11093C2.63458 5.06096 2.54668 5.02317 2.48811 4.99794C2.45883 4.98532 2.43688 4.97585 2.42234 4.96957C2.41507 4.96643 2.40965 4.96409 2.4061 4.96255C2.40432 4.96178 2.40301 4.96122 2.40217 4.96085C2.40175 4.96067 2.40144 4.96054 2.40125 4.96045C2.40116 4.96041 2.40109 4.96038 2.40106 4.96037C2.40104 4.96036 2.40103 4.96036 2.40102 4.96036C2.40103 4.96036 2.40104 4.96036 1.9043 6.10742ZM17.7878 13.9603C21.0429 15.2477 24.7221 16.6801 28.7692 18.221L29.6588 15.8846C25.6223 14.3477 21.953 12.9192 18.7072 11.6355L17.7878 13.9603ZM39.8413 22.3592C43.375 23.6555 47.0952 24.9969 50.9767 26.3673L51.809 24.0098C47.9375 22.6431 44.227 21.3051 40.7022 20.0122L39.8413 22.3592ZM62.1062 30.2188C65.7503 31.4544 69.5007 32.7006 73.3405 33.9466L74.1122 31.5687C70.2832 30.3262 66.5432 29.0834 62.909 27.8512L62.1062 30.2188ZM84.5786 37.5083C88.293 38.657 92.0708 39.7964 95.8987 40.9178L96.6015 38.5186C92.7862 37.4009 89.0203 36.2651 85.3172 35.1199L84.5786 37.5083ZM107.259 44.1478C111.035 45.1877 114.844 46.2029 118.676 47.1854L119.297 44.7637C115.48 43.7851 111.685 42.7738 107.923 41.7376L107.259 44.1478ZM130.153 50.01C133.992 50.914 137.841 51.778 141.689 52.5944L142.208 50.1488C138.379 49.3365 134.548 48.4766 130.726 47.5765L130.153 50.01ZM153.287 54.906C157.189 55.6313 161.076 56.2991 164.937 56.9011L165.322 54.4309C161.487 53.8329 157.623 53.1693 153.744 52.4481L153.287 54.906ZM176.672 58.5313C180.646 59.0122 184.577 59.4118 188.452 59.7204L188.65 57.2283C184.813 56.9226 180.915 56.5266 176.972 56.0494L176.672 58.5313ZM200.289 60.3763C202.28 60.4349 204.251 60.4649 206.199 60.4649V57.9649C204.277 57.9649 202.33 57.9353 200.363 57.8774L200.289 60.3763ZM206.199 60.4649C208.148 60.4649 210.118 60.4349 212.109 60.3763L212.036 57.8774C210.068 57.9353 208.122 57.9649 206.199 57.9649V60.4649ZM223.947 59.7204C227.821 59.4118 231.752 59.0122 235.727 58.5313L235.426 56.0494C231.483 56.5266 227.586 56.9226 223.748 57.2283L223.947 59.7204ZM247.462 56.9011C251.322 56.2991 255.21 55.6313 259.111 54.906L258.654 52.4481C254.775 53.1693 250.912 53.8329 247.076 54.4309L247.462 56.9011ZM270.709 52.5944C274.557 51.778 278.406 50.914 282.246 50.01L281.673 47.5765C277.85 48.4766 274.019 49.3365 270.191 50.1488L270.709 52.5944ZM293.723 47.1854C297.554 46.2029 301.364 45.1877 305.139 44.1478L304.475 41.7376C300.713 42.7738 296.918 43.7851 293.102 44.7637L293.723 47.1854ZM316.5 40.9178C320.328 39.7964 324.105 38.657 327.82 37.5084L327.081 35.1199C323.378 36.2651 319.612 37.4009 315.797 38.5186L316.5 40.9178ZM339.058 33.9466C342.898 32.7006 346.648 31.4544 350.292 30.2188L349.489 27.8512C345.855 29.0834 342.115 30.3262 338.286 31.5687L339.058 33.9466ZM361.422 26.3673C365.303 24.9969 369.023 23.6555 372.557 22.3592L371.696 20.0122C368.171 21.3051 364.461 22.6431 360.589 24.0098L361.422 26.3673ZM383.629 18.221C387.676 16.6801 391.356 15.2477 394.611 13.9603L393.691 11.6355C390.445 12.9192 386.776 14.3477 382.74 15.8846L383.629 18.221ZM405.538 9.54656C407.299 8.81841 408.661 8.24602 409.583 7.85535C410.044 7.66002 410.396 7.51011 410.632 7.40889C410.75 7.35827 410.839 7.31983 410.899 7.29396C410.929 7.28103 410.952 7.27124 410.967 7.26464C410.975 7.26134 410.981 7.25884 410.985 7.25715C410.987 7.2563 410.988 7.25565 410.989 7.25521C410.99 7.25499 410.99 7.25481 410.99 7.25469C410.991 7.25463 410.991 7.25459 410.991 7.25455C410.991 7.25453 410.991 7.25452 410.991 7.25451C410.991 7.25449 410.991 7.25448 410.494 6.10742C409.997 4.96036 409.997 4.96036 409.997 4.96036C409.997 4.96036 409.997 4.96036 409.997 4.96037C409.997 4.96038 409.997 4.96041 409.997 4.96045C409.997 4.96054 409.997 4.96067 409.996 4.96085C409.995 4.96122 409.994 4.96178 409.992 4.96255C409.989 4.96409 409.983 4.96643 409.976 4.96957C409.962 4.97585 409.94 4.98532 409.91 4.99794C409.852 5.02317 409.764 5.06096 409.647 5.11093C409.414 5.21085 409.066 5.35942 408.608 5.5534C407.692 5.94137 406.337 6.51095 404.583 7.23619L405.538 9.54656Z" fill="url(#paint0_linear_2010_8836)"/>
                            <defs>
                                <linearGradient id="paint0_linear_2010_8836" x1="410.494" y1="6.1074" x2="1.9043" y2="6.10742" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#49B486"/>
                                    <stop offset="1" stopColor="#BBBBBB"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </main>
            </div>
        </section>
    );
}