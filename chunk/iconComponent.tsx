// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    name: 'chevron-down'|'chevron-left'|'list'|'list-right'|'shaking-hands'|'telephone'|'star'|'right-arrow'|'party-horn'|'brief-case'|'money-check-edit'|'design'|'replace'|'vote-yes'|'window'|'poll'|'pencil-paintbrush'|'mobile'|'slack'|'lang'|'ai'|'chevron-right';
    size: number;
}

// Creating and exporting icon component as default
export default function IconComponent({size, name}:propsType):ReactNode {
    // Conditional rendering
    if (name === 'chevron-down') {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <path d="M0.540583 3.9846C0.540139 4.06137 0.554854 4.13748 0.583882 4.20855C0.612912 4.27962 0.655685 4.34426 0.70975 4.39877L5.47558 9.1646C5.74652 9.43622 6.06837 9.65172 6.42272 9.79876C6.77707 9.9458 7.15694 10.0215 7.54058 10.0215C7.92422 10.0215 8.3041 9.9458 8.65844 9.79876C9.01279 9.65172 9.33465 9.43622 9.60558 9.1646L14.3714 4.39877C14.4258 4.34438 14.4689 4.27981 14.4984 4.20875C14.5278 4.13769 14.543 4.06152 14.543 3.9846C14.543 3.90769 14.5278 3.83152 14.4984 3.76046C14.4689 3.6894 14.4258 3.62483 14.3714 3.57044C14.317 3.51605 14.2525 3.4729 14.1814 3.44347C14.1103 3.41403 14.0342 3.39888 13.9572 3.39888C13.8803 3.39888 13.8042 3.41403 13.7331 3.44347C13.662 3.4729 13.5975 3.51605 13.5431 3.57044L8.77725 8.33627C8.44912 8.66399 8.00433 8.84806 7.54058 8.84806C7.07683 8.84806 6.63204 8.66399 6.30392 8.33627L1.53808 3.57044C1.48385 3.51576 1.41934 3.47237 1.34825 3.44275C1.27717 3.41314 1.20092 3.39789 1.12392 3.39789C1.04691 3.39789 0.970664 3.41314 0.899579 3.44275C0.828495 3.47237 0.763978 3.51576 0.70975 3.57044C0.655686 3.62494 0.612912 3.68959 0.583882 3.76066C0.554854 3.83173 0.540139 3.90783 0.540583 3.9846Z" fill={'currentColor'} />
            </svg>
        );
    } else if (name === 'chevron-left') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4462 15.9998C11.3584 16.0003 11.2715 15.9835 11.1902 15.9503C11.109 15.9171 11.0351 15.8683 10.9728 15.8065L5.52617 10.3598C5.21575 10.0502 4.96946 9.68232 4.80142 9.27736C4.63337 8.87239 4.54687 8.43825 4.54688 7.9998C4.54688 7.56135 4.63337 7.12721 4.80142 6.72224C4.96946 6.31727 5.21575 5.94944 5.52617 5.6398L10.9728 0.193131C11.035 0.130972 11.1088 0.0816652 11.19 0.0480249C11.2712 0.0143847 11.3583 -0.00292969 11.4462 -0.00292969C11.5341 -0.00292969 11.6211 0.0143847 11.7023 0.0480249C11.7835 0.0816652 11.8573 0.130972 11.9195 0.193131C11.9817 0.25529 12.031 0.329084 12.0646 0.410299C12.0982 0.491513 12.1156 0.578559 12.1156 0.666465C12.1156 0.754371 12.0982 0.841416 12.0646 0.922631C12.031 1.00385 11.9817 1.07764 11.9195 1.1398L6.47283 6.58646C6.0983 6.96147 5.88793 7.4698 5.88793 7.9998C5.88793 8.5298 6.0983 9.03813 6.47283 9.41313L11.9195 14.8598C11.982 14.9218 12.0316 14.9955 12.0654 15.0767C12.0993 15.158 12.1167 15.2451 12.1167 15.3331C12.1167 15.4211 12.0993 15.5083 12.0654 15.5895C12.0316 15.6708 11.982 15.7445 11.9195 15.8065C11.8572 15.8683 11.7833 15.9171 11.7021 15.9503C11.6209 15.9835 11.5339 16.0003 11.4462 15.9998Z" fill={'currentColor'} />
            </svg>
        );
    } else if (name === 'list') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
                <path d="M28 3.49967C28 4.14134 27.475 4.66634 26.8333 4.66634H1.16667C0.525 4.66634 0 4.14134 0 3.49967C0 2.85801 0.525 2.33301 1.16667 2.33301H26.8333C27.475 2.33301 28 2.85801 28 3.49967ZM8.16667 23.333H1.16667C0.525 23.333 0 23.858 0 24.4997C0 25.1413 0.525 25.6663 1.16667 25.6663H8.16667C8.80833 25.6663 9.33333 25.1413 9.33333 24.4997C9.33333 23.858 8.80833 23.333 8.16667 23.333ZM17.5 12.833H1.16667C0.525 12.833 0 13.358 0 13.9997C0 14.6413 0.525 15.1663 1.16667 15.1663H17.5C18.1417 15.1663 18.6667 14.6413 18.6667 13.9997C18.6667 13.358 18.1417 12.833 17.5 12.833Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'list-right') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.50033C0 2.95866 0.375 3.33366 0.833334 3.33366H19.1667C19.625 3.33366 20 2.95866 20 2.50033C20 2.04199 19.625 1.66699 19.1667 1.66699H0.833334C0.375 1.66699 0 2.04199 0 2.50033ZM14.1667 16.667H19.1667C19.625 16.667 20 17.042 20 17.5003C20 17.9587 19.625 18.3337 19.1667 18.3337H14.1667C13.7083 18.3337 13.3333 17.9587 13.3333 17.5003C13.3333 17.042 13.7083 16.667 14.1667 16.667ZM7.5 9.16699H19.1667C19.625 9.16699 20 9.54199 20 10.0003C20 10.4587 19.625 10.8337 19.1667 10.8337H7.5C7.04167 10.8337 6.66667 10.4587 6.66667 10.0003C6.66667 9.54199 7.04167 9.16699 7.5 9.16699Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'shaking-hands') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0467 9.34295L16.7458 14.9413L12.0008 18.5004C10.8158 19.3896 9.18583 19.3896 8.00083 18.5004L2.89 14.6671C2.4575 14.3429 1.93083 14.1671 1.39 14.1671H0.834167C0.373333 14.1671 0 13.7938 0 13.3338V4.11461C0 3.69128 0.315833 3.33878 0.736667 3.29128C1.8675 3.16545 2.88583 2.71128 3.9275 2.10461C5.42583 1.33378 7.39167 1.60878 8.6075 2.74795L9.12167 3.24211L5.7825 6.50128C4.88833 7.39461 4.74583 8.80711 5.45083 9.78295C5.88417 10.3854 6.66833 10.8321 7.4875 10.8321C8.14833 10.8321 8.7825 10.5721 9.24083 10.1129L10.0467 9.34211V9.34295ZM16.6283 2.10461C15.22 1.40045 13.4633 1.58378 12.205 2.56128L6.9525 7.68795C6.64333 7.99795 6.57333 8.49378 6.80167 8.81045C6.95167 9.01878 7.16917 9.14378 7.4175 9.16461C7.66333 9.18545 7.90167 9.09628 8.07417 8.92295L11.0892 6.06545C11.88 5.31461 13.0258 6.51295 12.2417 7.26961L11.2575 8.18378L18.4183 14.1679H19.1658C19.6258 14.1679 19.9992 13.7946 19.9992 13.3346V4.08628C19.9992 3.67795 19.7008 3.34045 19.2983 3.26795C17.8867 3.01295 16.6275 2.10545 16.6275 2.10545L16.6283 2.10461Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'telephone') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 0.999644C11 0.734427 10.8947 0.480073 10.7071 0.292537C10.5196 0.105001 10.2652 -0.000356157 10 -0.000356157C7.34874 0.00255544 4.8069 1.05706 2.93216 2.93179C1.05743 4.80653 0.00292778 7.34837 1.52588e-05 9.99965C1.52588e-05 10.2649 0.105371 10.5192 0.292908 10.7068C0.480444 10.8943 0.734798 10.9996 1.00002 10.9996C1.26523 10.9996 1.51959 10.8943 1.70712 10.7068C1.89466 10.5192 2.00002 10.2649 2.00002 9.99965C2.0024 7.87864 2.84602 5.8452 4.34579 4.34542C5.84557 2.84565 7.87901 2.00203 10 1.99964C10.2652 1.99964 10.5196 1.89429 10.7071 1.70675C10.8947 1.51921 11 1.26486 11 0.999644ZM10 5.99964C8.93915 5.99964 7.92173 6.42107 7.17159 7.17122C6.42144 7.92136 6.00002 8.93878 6.00002 9.99965C6.00002 10.2649 5.89466 10.5192 5.70712 10.7068C5.51959 10.8943 5.26523 10.9996 5.00002 10.9996C4.7348 10.9996 4.48044 10.8943 4.29291 10.7068C4.10537 10.5192 4.00002 10.2649 4.00002 9.99965C4.0016 8.40883 4.63425 6.88363 5.75913 5.75876C6.884 4.63388 8.4092 4.00123 10 3.99964C10.2652 3.99964 10.5196 4.105 10.7071 4.29254C10.8947 4.48007 11 4.73443 11 4.99964C11 5.26486 10.8947 5.51921 10.7071 5.70675C10.5196 5.89429 10.2652 5.99964 10 5.99964ZM0.907015 16.7386C0.327503 17.3198 0.00207329 18.107 0.00207329 18.9276C0.00207329 19.7483 0.327503 20.5355 0.907015 21.1166L1.81701 22.1656C10.007 30.0066 29.937 10.0816 22.217 1.86564L21.067 0.865644C20.4852 0.302321 19.7051 -0.00930708 18.8953 -0.00182132C18.0855 0.00566445 17.3113 0.331662 16.74 0.905644C16.709 0.936644 14.856 3.34364 14.856 3.34364C14.3062 3.92127 14.0001 4.68857 14.0014 5.48605C14.0027 6.28352 14.3113 7.04982 14.863 7.62564L16.021 9.08165C15.3802 10.6388 14.438 12.0539 13.2485 13.2457C12.0591 14.4376 10.6458 15.3827 9.09001 16.0266L7.62502 14.8616C7.04911 14.3104 6.28295 14.0021 5.48572 14.001C4.68848 13.9999 3.92146 14.306 3.34402 14.8556C3.34402 14.8556 0.938015 16.7076 0.907015 16.7386ZM2.28302 18.1926C2.28302 18.1926 4.67602 16.3516 4.70702 16.3206C4.91303 16.1164 5.1914 16.0018 5.48152 16.0018C5.77163 16.0018 6.05 16.1164 6.25602 16.3206C6.28302 16.3486 8.30001 17.9556 8.30001 17.9556C8.43594 18.0638 8.5977 18.1348 8.76937 18.1614C8.94104 18.1881 9.11669 18.1695 9.27901 18.1076C11.2946 17.3572 13.1253 16.1824 14.6472 14.6627C16.1691 13.1431 17.3466 11.3141 18.1 9.29965C18.1668 9.1351 18.1886 8.95573 18.1631 8.77998C18.1376 8.60423 18.0658 8.43844 17.955 8.29965C17.955 8.29965 16.348 6.28164 16.321 6.25564C16.1167 6.04963 16.0021 5.77126 16.0021 5.48114C16.0021 5.19103 16.1167 4.91266 16.321 4.70664C16.352 4.67664 18.193 2.28164 18.193 2.28164C18.4021 2.09415 18.675 1.99374 18.9558 2.00099C19.2365 2.00824 19.5039 2.12261 19.703 2.32064L20.853 3.32064C26.495 10.1046 9.22401 26.4176 3.27901 20.7996L2.36802 19.7496C2.15454 19.5519 2.02631 19.2789 2.01045 18.9883C1.99459 18.6978 2.09233 18.4125 2.28302 18.1926Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'star') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.3484 0.617706C7.19537 0.346384 6.80463 0.346385 6.6516 0.617707L4.53041 4.37851C4.49457 4.44205 4.44205 4.49457 4.37851 4.53041L0.617706 6.6516C0.346384 6.80463 0.346385 7.19537 0.617707 7.3484L4.37851 9.46959C4.44205 9.50543 4.49457 9.55795 4.53041 9.62149L6.6516 13.3823C6.80463 13.6536 7.19537 13.6536 7.3484 13.3823L9.46959 9.62149C9.50543 9.55795 9.55795 9.50543 9.62149 9.46959L13.3823 7.3484C13.6536 7.19537 13.6536 6.80463 13.3823 6.6516L9.62149 4.53041C9.55795 4.49457 9.50543 4.44205 9.46959 4.37851L7.3484 0.617706Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'right-arrow') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.992188 6.42383C0.439903 6.42383 -0.0078125 6.87154 -0.0078125 7.42383C-0.0078125 7.97611 0.439903 8.42383 0.992188 8.42383V6.42383ZM23.7149 8.13093C24.1054 7.74041 24.1054 7.10725 23.7149 6.71672L17.351 0.35276C16.9604 -0.0377641 16.3273 -0.0377641 15.9367 0.35276C15.5462 0.743285 15.5462 1.37645 15.9367 1.76697L21.5936 7.42383L15.9367 13.0807C15.5462 13.4712 15.5462 14.1044 15.9367 14.4949C16.3273 14.8854 16.9604 14.8854 17.351 14.4949L23.7149 8.13093ZM0.992188 8.42383H23.0078V6.42383H0.992188V8.42383Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'party-horn') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5022 20.4558L3.50424 24.2438C3.22024 24.3628 2.92324 24.4218 2.62924 24.4218C2.04724 24.4218 1.47624 24.1928 1.04524 23.7628C0.397244 23.1148 0.208244 22.1498 0.564244 21.3048L4.35224 12.3058L12.5022 20.4558ZM16.5922 14.6958L10.1132 8.2168C9.47624 7.5788 8.56624 7.3028 7.68324 7.4758C6.79924 7.6498 6.06224 8.2478 5.71224 9.0798L5.19124 10.3178L14.4932 19.6198L15.7312 19.0988C16.5622 18.7488 17.1612 18.0118 17.3342 17.1278C17.5072 16.2428 17.2302 15.3338 16.5932 14.6968L16.5922 14.6958ZM16.1802 8.0288C16.9102 7.0668 17.3142 6.04481 17.3822 4.9878C17.5542 2.2908 15.5872 0.705805 15.5042 0.638805C15.0742 0.300805 14.4532 0.371805 14.1082 0.800805C13.7642 1.2288 13.8332 1.8568 14.2582 2.2038C14.3082 2.2448 15.4902 3.2288 15.3862 4.8598C15.3442 5.5168 15.0752 6.1758 14.5882 6.8188C14.2542 7.2588 14.3402 7.8858 14.7802 8.2198C14.9612 8.3568 15.1732 8.4228 15.3842 8.4228C15.6862 8.4228 15.9852 8.2858 16.1812 8.0268L16.1802 8.0288ZM23.9602 14.2418C24.4122 13.9238 24.5202 13.2998 24.2012 12.8478C23.8282 12.3188 22.8152 11.4238 21.3842 11.4238C20.6082 11.4238 19.8792 11.6638 19.2762 12.1188C18.8352 12.4508 18.7482 13.0788 19.0802 13.5188C19.4132 13.9588 20.0392 14.0478 20.4812 13.7138C20.7372 13.5208 21.0412 13.4228 21.3842 13.4228C22.1132 13.4228 22.5442 13.9708 22.5742 14.0098C22.7692 14.2798 23.0742 14.4228 23.3852 14.4228C23.5842 14.4228 23.7852 14.3628 23.9602 14.2398V14.2418ZM21.3842 1.9248C21.3842 2.7528 22.0562 3.4248 22.8842 3.4248C23.7122 3.4248 24.3842 2.7528 24.3842 1.9248C24.3842 1.0968 23.7122 0.424805 22.8842 0.424805C22.0562 0.424805 21.3842 1.0968 21.3842 1.9248ZM19.3842 6.9248C19.3842 7.7528 20.0562 8.4248 20.8842 8.4248C21.7122 8.4248 22.3842 7.7528 22.3842 6.9248C22.3842 6.0968 21.7122 5.4248 20.8842 5.4248C20.0562 5.4248 19.3842 6.0968 19.3842 6.9248ZM8.38424 2.9238C8.38424 3.7518 9.05624 4.4238 9.88424 4.4238C10.7122 4.4238 11.3842 3.7518 11.3842 2.9238C11.3842 2.0958 10.7122 1.4238 9.88424 1.4238C9.05624 1.4238 8.38424 2.0958 8.38424 2.9238ZM20.3842 18.9238C20.3842 19.7518 21.0562 20.4238 21.8842 20.4238C22.7122 20.4238 23.3842 19.7518 23.3842 18.9238C23.3842 18.0958 22.7122 17.4238 21.8842 17.4238C21.0562 17.4238 20.3842 18.0958 20.3842 18.9238ZM1.38424 3.9238C1.38424 4.7518 2.05624 5.4238 2.88424 5.4238C3.71224 5.4238 4.38424 4.7518 4.38424 3.9238C4.38424 3.0958 3.71224 2.4238 2.88424 2.4238C2.05624 2.4238 1.38424 3.0958 1.38424 3.9238ZM15.3842 22.9238C15.3842 23.7518 16.0562 24.4238 16.8842 24.4238C17.7122 24.4238 18.3842 23.7518 18.3842 22.9238C18.3842 22.0958 17.7122 21.4238 16.8842 21.4238C16.0562 21.4238 15.3842 22.0958 15.3842 22.9238Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'brief-case') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0299 3.09049H12.2966C12.1419 2.3381 11.7325 1.66206 11.1374 1.17631C10.5424 0.690555 9.79809 0.424798 9.02995 0.423828L7.69661 0.423828C6.92848 0.424798 6.18416 0.690555 5.58911 1.17631C4.99407 1.66206 4.58468 2.3381 4.42995 3.09049H3.69661C2.81288 3.09155 1.96565 3.44308 1.34076 4.06797C0.715869 4.69287 0.36434 5.5401 0.363281 6.42383L0.363281 8.42383H16.3633V6.42383C16.3622 5.5401 16.0107 4.69287 15.3858 4.06797C14.7609 3.44308 13.9137 3.09155 13.0299 3.09049ZM5.81928 3.09049C5.95667 2.70189 6.21077 2.36522 6.54682 2.12655C6.88286 1.88788 7.28444 1.75887 7.69661 1.75716H9.02995C9.44212 1.75887 9.8437 1.88788 10.1797 2.12655C10.5158 2.36522 10.7699 2.70189 10.9073 3.09049H5.81928Z" fill="#49B486"/>
                <path d="M9.02995 10.4235C9.02995 10.6003 8.95971 10.7699 8.83469 10.8949C8.70966 11.0199 8.54009 11.0902 8.36328 11.0902C8.18647 11.0902 8.0169 11.0199 7.89188 10.8949C7.76685 10.7699 7.69661 10.6003 7.69661 10.4235V9.75684H0.363281V13.0902C0.36434 13.9739 0.715869 14.8211 1.34076 15.446C1.96565 16.0709 2.81288 16.4224 3.69661 16.4235H13.0299C13.9137 16.4224 14.7609 16.0709 15.3858 15.446C16.0107 14.8211 16.3622 13.9739 16.3633 13.0902V9.75684H9.02995V10.4235Z" fill="#49B486"/>
            </svg>
        );
    } else if (name === 'money-check-edit') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.07323 13.4102C8.53123 13.9522 8.22656 14.6868 8.22656 15.4535V16.4235H9.19656C9.96323 16.4235 10.6979 16.1188 11.2399 15.5768L15.7779 11.0388C16.3759 10.4408 16.3759 9.47017 15.7779 8.87217C15.1799 8.27417 14.2092 8.27417 13.6112 8.87217L9.07323 13.4102ZM8.13056 12.4675L11.5086 9.09017H10.2272C9.35523 9.08617 9.3559 7.76017 10.2272 7.75684H12.8792C13.7919 6.96484 15.2212 6.8715 16.2272 7.5395V5.09017C16.2272 3.25217 14.7319 1.75684 12.8939 1.75684H3.5599C1.7219 1.75684 0.226562 3.25217 0.226562 5.09017V11.7568C0.226562 13.5948 1.7219 15.0902 3.5599 15.0902H6.91123C6.99523 14.0995 7.41923 13.1788 8.13056 12.4675ZM10.2272 5.09017H12.8939C13.7659 5.09417 13.7652 6.42017 12.8939 6.4235H10.2272C9.35523 6.4195 9.3559 5.0935 10.2272 5.09017ZM4.89323 13.0902C4.52456 13.0902 4.22656 12.7915 4.22656 12.4235V11.7568H4.0479C3.33656 11.7568 2.67256 11.3742 2.3159 10.7575C2.13123 10.4388 2.24056 10.0315 2.55856 9.84684C2.87856 9.6615 3.2859 9.7715 3.46923 10.0902C3.58856 10.2955 3.8099 10.4235 4.04723 10.4235H5.55923C6.2239 10.4668 6.52056 9.39017 5.79656 9.25017L3.76923 8.91217C1.43456 8.4795 1.93723 5.07684 4.2259 5.09017V4.4235C4.2299 3.5515 5.5559 3.55217 5.55923 4.4235V5.09017H5.7379C6.44923 5.09017 7.11323 5.4735 7.4699 6.09017C7.65456 6.40884 7.54523 6.81617 7.22723 7.00084C6.90656 7.18484 6.4999 7.07617 6.31656 6.7575C6.19723 6.5515 5.9759 6.42417 5.73856 6.42417H4.22656C3.5619 6.38084 3.26523 7.4575 3.98923 7.5975L6.01656 7.9355C8.35123 8.36817 7.84856 11.7708 5.5599 11.7575V12.4242C5.5599 12.7922 5.2619 13.0902 4.89323 13.0902Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'design') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0904 11.0903V8.42352C14.0902 7.52783 13.889 6.64359 13.5018 5.83593C13.1146 5.02826 12.5512 4.31773 11.853 3.75667H13.6084C13.7561 4.00842 13.9827 4.20445 14.2531 4.31441C14.5235 4.42437 14.8226 4.44214 15.1042 4.36495C15.3857 4.28776 15.6339 4.11993 15.8104 3.88743C15.9869 3.65493 16.0819 3.37074 16.0805 3.07884C16.0792 2.78693 15.9817 2.5036 15.8031 2.27271C15.6245 2.04181 15.3748 1.87622 15.0926 1.80156C14.8104 1.72691 14.5115 1.74737 14.2421 1.85976C13.9727 1.97215 13.7478 2.17021 13.6024 2.42328H10.6623C10.5167 1.85154 10.1849 1.34458 9.71908 0.982487C9.25329 0.6204 8.68013 0.423828 8.09016 0.423828C7.50018 0.423828 6.92703 0.6204 6.46124 0.982487C5.99545 1.34458 5.66358 1.85154 5.51806 2.42328H2.57194C2.42419 2.17153 2.19758 1.9755 1.92718 1.86554C1.65677 1.75558 1.35767 1.73781 1.07615 1.815C0.794634 1.89219 0.546413 2.06002 0.369908 2.29252C0.193403 2.52502 0.0984591 2.80921 0.0997727 3.10111C0.101086 3.39302 0.198584 3.67635 0.377174 3.90724C0.555764 4.13814 0.805486 4.30373 1.08769 4.37839C1.36988 4.45304 1.66882 4.43258 1.93822 4.32019C2.20762 4.2078 2.43246 4.00974 2.57794 3.75667H4.32734C3.62915 4.31773 3.0657 5.02826 2.67849 5.83593C2.29127 6.64359 2.09014 7.52783 2.08992 8.42352V11.0903C1.55947 11.0903 1.05074 11.301 0.675653 11.6761C0.300566 12.0512 0.0898438 12.5599 0.0898438 13.0904L0.0898438 14.4237C0.0898438 14.9542 0.300566 15.4629 0.675653 15.838C1.05074 16.2131 1.55947 16.4238 2.08992 16.4238H3.42331C3.95376 16.4238 4.46249 16.2131 4.83758 15.838C5.21266 15.4629 5.42339 14.9542 5.42339 14.4237V13.0904C5.42339 12.5599 5.21266 12.0512 4.83758 11.6761C4.46249 11.301 3.95376 11.0903 3.42331 11.0903V8.42352C3.42439 7.60262 3.64199 6.79654 4.05414 6.0866C4.46628 5.37667 5.0584 4.78801 5.77073 4.38002C5.99803 4.79669 6.33337 5.14443 6.74152 5.3867C7.14966 5.62897 7.61552 5.75683 8.09016 5.75683C8.56479 5.75683 9.03065 5.62897 9.4388 5.3867C9.84694 5.14443 10.1823 4.79669 10.4096 4.38002C11.1219 4.78801 11.714 5.37667 12.1262 6.0866C12.5383 6.79654 12.7559 7.60262 12.757 8.42352V11.0903C12.2266 11.0903 11.7178 11.301 11.3427 11.6761C10.9676 12.0512 10.7569 12.5599 10.7569 13.0904V14.4237C10.7569 14.9542 10.9676 15.4629 11.3427 15.838C11.7178 16.2131 12.2266 16.4238 12.757 16.4238H14.0904C14.6208 16.4238 15.1296 16.2131 15.5047 15.838C15.8797 15.4629 16.0905 14.9542 16.0905 14.4237V13.0904C16.0905 12.5599 15.8797 12.0512 15.5047 11.6761C15.1296 11.301 14.6208 11.0903 14.0904 11.0903Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'replace') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.61979 0.42383H3.61979C2.14646 0.42383 0.953125 1.61716 0.953125 3.0905V5.0905C0.953125 6.56383 2.14646 7.75716 3.61979 7.75716H5.61979C7.09313 7.75716 8.28646 6.56383 8.28646 5.0905V3.0905C8.28646 1.61716 7.09313 0.42383 5.61979 0.42383ZM14.2865 9.0905H12.2865C10.8131 9.0905 9.61979 10.2838 9.61979 11.7572V13.7572C9.61979 15.2305 10.8131 16.4238 12.2865 16.4238H14.2865C15.7598 16.4238 16.9531 15.2305 16.9531 13.7572V11.7572C16.9531 10.2838 15.7598 9.0905 14.2865 9.0905ZM9.61979 3.75716C9.61979 3.0505 9.91313 2.3905 10.4531 1.90383L11.8331 0.60383C12.0998 0.350497 12.5198 0.36383 12.7731 0.630497C13.0265 0.897163 13.0131 1.32383 12.7465 1.5705L11.3598 2.8705C11.2865 2.93716 11.2265 3.0105 11.1731 3.08383H13.6198C15.0931 3.08383 16.2865 4.27716 16.2865 5.7505V7.08383C16.2865 7.4505 15.9865 7.7505 15.6198 7.7505C15.2531 7.7505 14.9531 7.4505 14.9531 7.08383V5.7505C14.9531 5.01716 14.3531 4.41716 13.6198 4.41716H11.1731C11.2265 4.4905 11.2865 4.55716 11.3531 4.62383L12.7465 5.9305C13.0131 6.18383 13.0265 6.60383 12.7731 6.8705C12.6398 7.0105 12.4665 7.07716 12.2865 7.07716C12.1198 7.07716 11.9598 7.01716 11.8265 6.89716L10.4398 5.59716C9.91313 5.1105 9.61312 4.4505 9.61312 3.7505L9.61979 3.75716ZM8.28646 13.0905C8.28646 13.7972 7.99313 14.4505 7.45312 14.9438L6.07312 16.2438C5.94646 16.3638 5.77979 16.4238 5.61312 16.4238C5.43313 16.4238 5.25979 16.3505 5.12646 16.2172C4.87313 15.9505 4.88646 15.5238 5.15313 15.2772L6.53979 13.9772C6.61313 13.9105 6.67313 13.8372 6.72646 13.7638H4.27979C2.80646 13.7638 1.61313 12.5705 1.61313 11.0972V9.76383C1.61313 9.39716 1.91313 9.09716 2.27979 9.09716C2.64646 9.09716 2.94646 9.39716 2.94646 9.76383V11.0972C2.94646 11.8305 3.54646 12.4305 4.27979 12.4305H6.72646C6.67313 12.3572 6.61313 12.2905 6.54646 12.2238L5.15313 10.9172C4.88646 10.6638 4.87313 10.2438 5.12646 9.97716C5.37979 9.7105 5.79979 9.69716 6.06646 9.9505L7.45312 11.2505C7.97979 11.7372 8.27979 12.3972 8.27979 13.0972L8.28646 13.0905Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'vote-yes') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5022 20.4558L3.50424 24.2438C3.22024 24.3628 2.92324 24.4218 2.62924 24.4218C2.04724 24.4218 1.47624 24.1928 1.04524 23.7628C0.397244 23.1148 0.208244 22.1498 0.564244 21.3048L4.35224 12.3058L12.5022 20.4558ZM16.5922 14.6958L10.1132 8.2168C9.47624 7.5788 8.56624 7.3028 7.68324 7.4758C6.79924 7.6498 6.06224 8.2478 5.71224 9.0798L5.19124 10.3178L14.4932 19.6198L15.7312 19.0988C16.5622 18.7488 17.1612 18.0118 17.3342 17.1278C17.5072 16.2428 17.2302 15.3338 16.5932 14.6968L16.5922 14.6958ZM16.1802 8.0288C16.9102 7.0668 17.3142 6.04481 17.3822 4.9878C17.5542 2.2908 15.5872 0.705805 15.5042 0.638805C15.0742 0.300805 14.4532 0.371805 14.1082 0.800805C13.7642 1.2288 13.8332 1.8568 14.2582 2.2038C14.3082 2.2448 15.4902 3.2288 15.3862 4.8598C15.3442 5.5168 15.0752 6.1758 14.5882 6.8188C14.2542 7.2588 14.3402 7.8858 14.7802 8.2198C14.9612 8.3568 15.1732 8.4228 15.3842 8.4228C15.6862 8.4228 15.9852 8.2858 16.1812 8.0268L16.1802 8.0288ZM23.9602 14.2418C24.4122 13.9238 24.5202 13.2998 24.2012 12.8478C23.8282 12.3188 22.8152 11.4238 21.3842 11.4238C20.6082 11.4238 19.8792 11.6638 19.2762 12.1188C18.8352 12.4508 18.7482 13.0788 19.0802 13.5188C19.4132 13.9588 20.0392 14.0478 20.4812 13.7138C20.7372 13.5208 21.0412 13.4228 21.3842 13.4228C22.1132 13.4228 22.5442 13.9708 22.5742 14.0098C22.7692 14.2798 23.0742 14.4228 23.3852 14.4228C23.5842 14.4228 23.7852 14.3628 23.9602 14.2398V14.2418ZM21.3842 1.9248C21.3842 2.7528 22.0562 3.4248 22.8842 3.4248C23.7122 3.4248 24.3842 2.7528 24.3842 1.9248C24.3842 1.0968 23.7122 0.424805 22.8842 0.424805C22.0562 0.424805 21.3842 1.0968 21.3842 1.9248ZM19.3842 6.9248C19.3842 7.7528 20.0562 8.4248 20.8842 8.4248C21.7122 8.4248 22.3842 7.7528 22.3842 6.9248C22.3842 6.0968 21.7122 5.4248 20.8842 5.4248C20.0562 5.4248 19.3842 6.0968 19.3842 6.9248ZM8.38424 2.9238C8.38424 3.7518 9.05624 4.4238 9.88424 4.4238C10.7122 4.4238 11.3842 3.7518 11.3842 2.9238C11.3842 2.0958 10.7122 1.4238 9.88424 1.4238C9.05624 1.4238 8.38424 2.0958 8.38424 2.9238ZM20.3842 18.9238C20.3842 19.7518 21.0562 20.4238 21.8842 20.4238C22.7122 20.4238 23.3842 19.7518 23.3842 18.9238C23.3842 18.0958 22.7122 17.4238 21.8842 17.4238C21.0562 17.4238 20.3842 18.0958 20.3842 18.9238ZM1.38424 3.9238C1.38424 4.7518 2.05624 5.4238 2.88424 5.4238C3.71224 5.4238 4.38424 4.7518 4.38424 3.9238C4.38424 3.0958 3.71224 2.4238 2.88424 2.4238C2.05624 2.4238 1.38424 3.0958 1.38424 3.9238ZM15.3842 22.9238C15.3842 23.7518 16.0562 24.4238 16.8842 24.4238C17.7122 24.4238 18.3842 23.7518 18.3842 22.9238C18.3842 22.0958 17.7122 21.4238 16.8842 21.4238C16.0562 21.4238 15.3842 22.0958 15.3842 22.9238Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'window') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 11.6292V8.96257C32 5.28257 29.0133 2.2959 25.3333 2.2959H6.66667C2.98667 2.2959 0 5.28257 0 8.96257V11.6292H32ZM26 4.96257C27.1067 4.96257 28 5.8559 28 6.96257C28 8.06923 27.1067 8.96257 26 8.96257C24.8933 8.96257 24 8.06923 24 6.96257C24 5.8559 24.8933 4.96257 26 4.96257ZM20.6667 4.96257C21.7733 4.96257 22.6667 5.8559 22.6667 6.96257C22.6667 8.06923 21.7733 8.96257 20.6667 8.96257C19.56 8.96257 18.6667 8.06923 18.6667 6.96257C18.6667 5.8559 19.56 4.96257 20.6667 4.96257ZM15.3333 4.96257C16.44 4.96257 17.3333 5.8559 17.3333 6.96257C17.3333 8.06923 16.44 8.96257 15.3333 8.96257C14.2267 8.96257 13.3333 8.06923 13.3333 6.96257C13.3333 5.8559 14.2267 4.96257 15.3333 4.96257ZM32 14.2959V24.9626C32 28.6426 29.0133 31.6292 25.3333 31.6292H6.66667C2.98667 31.6292 0 28.6426 0 24.9626V14.2959H32Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'poll') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.3333 0.501953H6.66667C2.98667 0.501953 0 3.48862 0 7.16862V25.8353C0 29.5153 2.98667 32.502 6.66667 32.502H25.3333C29.0133 32.502 32 29.5153 32 25.8353V7.16862C32 3.48862 29.0133 0.501953 25.3333 0.501953ZM8 7.16862H16C16.7333 7.16862 17.3333 7.76862 17.3333 8.50195C17.3333 9.23529 16.7333 9.83529 16 9.83529H8C7.26667 9.83529 6.66667 9.23529 6.66667 8.50195C6.66667 7.76862 7.26667 7.16862 8 7.16862ZM8 12.502H20C20.7333 12.502 21.3333 13.102 21.3333 13.8353C21.3333 14.5686 20.7333 15.1686 20 15.1686H8C7.26667 15.1686 6.66667 14.5686 6.66667 13.8353C6.66667 13.102 7.26667 12.502 8 12.502ZM12 25.8353H8C7.26667 25.8353 6.66667 25.2353 6.66667 24.502C6.66667 23.7686 7.26667 23.1686 8 23.1686H12C12.7333 23.1686 13.3333 23.7686 13.3333 24.502C13.3333 25.2353 12.7333 25.8353 12 25.8353ZM24 20.502H8C7.26667 20.502 6.66667 19.902 6.66667 19.1686C6.66667 18.4353 7.26667 17.8353 8 17.8353H24C24.7333 17.8353 25.3333 18.4353 25.3333 19.1686C25.3333 19.902 24.7333 20.502 24 20.502Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'pencil-paintbrush') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.4173 13.03L4.94667 32.502H3.97364e-08V27.5553L19.472 8.08462L24.4187 13.0313L24.4173 13.03ZM30.976 1.52595C29.6107 0.16062 27.396 0.16062 26.0293 1.52595L21.3573 6.19795L26.304 11.1446L30.976 6.47262C32.3413 5.10729 32.3413 2.89262 30.976 1.52595ZM8.88933 14.8953L13.836 9.94862L5.97067 1.52595C4.60533 0.16062 2.39067 0.16062 1.024 1.52595C-0.341333 2.89262 -0.341333 5.10729 1.024 6.47262L8.88933 14.8953ZM31.5253 30.626C30.5693 26.8446 28.1667 20.5033 22.8053 20.5033C19.788 20.5033 17.3333 23.1953 17.3333 26.5033C17.3333 29.8833 20.6813 32.5033 23.5613 32.5033H32L31.5253 30.626Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'mobile') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5013 0.0410156H10.5013C7.2848 0.0410156 4.66797 2.65785 4.66797 5.87435V22.2077C4.66797 25.4242 7.2848 28.041 10.5013 28.041H17.5013C20.7178 28.041 23.3346 25.4242 23.3346 22.2077V5.87435C23.3346 2.65785 20.7178 0.0410156 17.5013 0.0410156ZM15.168 24.541H12.8346C12.1906 24.541 11.668 24.0183 11.668 23.3743C11.668 22.7303 12.1906 22.2077 12.8346 22.2077H15.168C15.812 22.2077 16.3346 22.7303 16.3346 23.3743C16.3346 24.0183 15.812 24.541 15.168 24.541Z" fill="currentColor"/>                
            </svg>
        );
    }  else if (name === 'slack') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.42188 20.2518C8.42188 18.3918 9.92988 16.8838 11.7899 16.8838C13.6499 16.8838 15.1579 18.3918 15.1579 20.2518V28.6731C15.1579 30.5331 13.6499 32.0411 11.7899 32.0411C9.92988 32.0411 8.42188 30.5331 8.42188 28.6731V20.2518Z" fill="currentColor"/>
                <path d="M11.7899 6.77835C9.92988 6.77835 8.42188 5.27035 8.42188 3.41035C8.42188 1.54902 9.92988 0.0410156 11.7899 0.0410156C13.6499 0.0410156 15.1579 1.54902 15.1579 3.40902V6.77702L11.7899 6.77835Z" fill="currentColor"/>
                <path d="M11.7893 8.46191C13.6493 8.46191 15.1573 9.96991 15.1573 11.8299C15.1573 13.6899 13.6493 15.1979 11.7893 15.1979H3.368C1.508 15.1979 0 13.6899 0 11.8299C0 9.96991 1.508 8.46191 3.368 8.46191H11.7893Z" fill="currentColor"/>
                <path d="M25.2656 11.8299C25.2656 9.96991 26.7736 8.46191 28.6336 8.46191C30.495 8.46191 32.003 9.96991 32.003 11.8299C32.003 13.6899 30.495 15.1979 28.635 15.1979H25.267L25.2656 11.8299Z" fill="currentColor"/>
                <path d="M23.5798 11.8303C23.5798 13.6903 22.0718 15.1983 20.2118 15.1983C18.3518 15.1983 16.8438 13.6903 16.8438 11.8303V3.40902C16.8437 1.54902 18.3518 0.0410156 20.2118 0.0410156C22.0718 0.0410156 23.5798 1.54902 23.5798 3.40902V11.8303Z" fill="currentColor"/>
                <path d="M20.2118 25.3037C22.0718 25.3037 23.5798 26.8117 23.5798 28.6717C23.5798 30.5317 22.0718 32.0397 20.2118 32.0397C18.3518 32.0397 16.8438 30.5317 16.8438 28.6717V25.3037H20.2118Z" fill="currentColor"/>
                <path d="M20.2118 23.6198C18.3518 23.6198 16.8438 22.1118 16.8438 20.2518C16.8438 18.3918 18.3518 16.8838 20.2118 16.8838H28.6331C30.4931 16.8838 32.0011 18.3918 32.0011 20.2518C32.0011 22.1118 30.4931 23.6198 28.6331 23.6198H20.2118Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'lang') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.8351 13.1133C7.78444 13.1133 7.74044 13.1479 7.72977 13.1973L6.64844 17.7799H8.9911L7.94177 13.1973C7.92977 13.1479 7.88577 13.1133 7.8351 13.1133Z" fill="currentColor"/>
                <path d="M25.332 5.91309H17.332V27.2464H25.332C29.008 27.2464 31.9987 24.2558 31.9987 20.5798V12.5798C31.9987 8.90375 29.008 5.91309 25.332 5.91309ZM29.332 13.4291C29.332 13.8824 28.964 14.2504 28.5107 14.2504H28.0894C27.928 15.9504 27.2667 17.8918 25.9467 19.4051C26.6694 19.8438 27.536 20.1571 28.592 20.2571C29.012 20.2971 29.332 20.6518 29.332 21.0744V21.1024C29.332 21.5904 28.9107 21.9664 28.4254 21.9198C26.9094 21.7744 25.68 21.2678 24.6814 20.5571C23.6774 21.2744 22.4334 21.7771 20.9054 21.9198C20.42 21.9651 20 21.5891 20 21.1024V21.0744C20 20.6464 20.3307 20.2958 20.7574 20.2558C21.808 20.1558 22.6747 19.8464 23.3934 19.4091C22.952 18.9038 22.584 18.3504 22.2827 17.7731C21.9987 17.2291 22.4014 16.5784 23.016 16.5784H23.0294C23.3307 16.5784 23.612 16.7411 23.7507 17.0091C23.9974 17.4784 24.3054 17.9304 24.6747 18.3451C25.7654 17.1184 26.264 15.5344 26.412 14.2504H20.824C20.3707 14.2504 20.0027 13.8824 20.0027 13.4291V13.4011C20.0027 12.9478 20.3707 12.5798 20.824 12.5798H23.8334V12.0678C23.8334 11.6144 24.2014 11.2464 24.6547 11.2464H24.6827C25.136 11.2464 25.504 11.6144 25.504 12.0678V12.5798H28.5134C28.9667 12.5798 29.3347 12.9478 29.3347 13.4011V13.4291H29.332Z" fill="currentColor"/>
                <path d="M14.6667 5.91309H6.66667C2.984 5.91309 0 8.89842 0 12.5798V20.5798C0 24.2624 2.984 27.2464 6.66667 27.2464H14.6667V5.91309ZM10.68 21.9131C10.2453 21.9131 9.868 21.6131 9.77067 21.1891L9.41733 19.6464H6.20533L5.84 21.1944C5.74 21.6158 5.36533 21.9131 4.932 21.9131C4.33067 21.9131 3.88667 21.3518 4.024 20.7664L5.908 12.7758C6.176 11.6211 7.424 10.9011 8.64933 11.4144C9.23467 11.6598 9.628 12.2224 9.772 12.8411L11.5893 20.7718C11.7227 21.3558 11.28 21.9131 10.68 21.9131Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'ai') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26 12.5804C25.3867 12.5804 24.8347 12.2071 24.6067 11.6364L23.4693 9.08843L20.9173 7.89243C20.352 7.65377 19.988 7.09643 20 6.4831C20.012 5.86977 20.396 5.32577 20.9693 5.10843L23.5667 4.12443L24.6067 1.5231C24.8347 0.953768 25.3853 0.579102 26 0.579102C26.6147 0.579102 27.1653 0.952435 27.3933 1.5231L28.44 4.14043L31.0573 5.1871C31.6267 5.4151 32.0013 5.96577 32.0013 6.58043C32.0013 7.1951 31.628 7.74577 31.0573 7.97377L28.44 9.02043L27.3933 11.6378C27.1653 12.2071 26.6147 12.5818 26 12.5818V12.5804ZM30.216 14.5444C28.5867 15.2178 26.7253 15.4444 24.7813 15.0618C21.1547 14.3471 18.2333 11.4258 17.5187 7.7991C17.136 5.8551 17.3613 3.99377 18.036 2.36443C18.388 1.51243 17.764 0.580435 16.8427 0.580435H6.66667C2.98533 0.580435 0 3.56577 0 7.2471V25.9138C0 29.5951 2.98533 32.5804 6.66667 32.5804H25.3333C29.0147 32.5804 32 29.5951 32 25.9138V15.7378C32 14.8164 31.068 14.1924 30.216 14.5444ZM18.264 25.9138C17.6733 25.9138 17.156 25.5218 16.9947 24.9538L16.1373 21.9138H9.196L8.33867 24.9538C8.17867 25.5218 7.66 25.9138 7.06933 25.9138C6.19733 25.9138 5.56533 25.0818 5.79867 24.2418L9.92 9.4311C10.108 8.62043 10.6413 7.93777 11.384 7.55777C12.1413 7.16843 13.0107 7.14443 13.836 7.4911C14.6187 7.8191 15.2187 8.58043 15.4413 9.53777L19.536 24.2431C19.7693 25.0831 19.1387 25.9151 18.2653 25.9151L18.264 25.9138ZM25.3333 24.5804C25.3333 25.3164 24.736 25.9138 24 25.9138C23.264 25.9138 22.6667 25.3164 22.6667 24.5804V18.0311C22.6667 17.2951 23.264 16.6978 24 16.6978C24.736 16.6978 25.3333 17.2951 25.3333 18.0311V24.5804ZM12.52 10.1338L9.948 19.2471H15.384L12.812 10.1338C12.7733 9.98177 12.5573 9.98177 12.52 10.1338Z" fill="currentColor"/>
            </svg>
        );
    } else if (name === 'chevron-right') {
        return (
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.55383 0.585164C4.64157 0.584656 4.72854 0.601472 4.80977 0.634649C4.89099 0.667825 4.96487 0.71671 5.02717 0.778497L10.4738 6.22516C10.7843 6.5348 11.0305 6.90264 11.1986 7.30761C11.3666 7.71257 11.4531 8.14671 11.4531 8.58516C11.4531 9.02361 11.3666 9.45775 11.1986 9.86272C11.0305 10.2677 10.7843 10.6355 10.4738 10.9452L5.02717 16.3918C4.96501 16.454 4.89121 16.5033 4.81 16.5369C4.72878 16.5706 4.64174 16.5879 4.55383 16.5879C4.46593 16.5879 4.37888 16.5706 4.29767 16.5369C4.21645 16.5033 4.14266 16.454 4.0805 16.3918C4.01834 16.3297 3.96903 16.2559 3.93539 16.1747C3.90175 16.0934 3.88444 16.0064 3.88444 15.9185C3.88444 15.8306 3.90175 15.7435 3.93539 15.6623C3.96903 15.5811 4.01834 15.5073 4.0805 15.4452L9.52717 9.9985C9.9017 9.6235 10.1121 9.11516 10.1121 8.58516C10.1121 8.05516 9.9017 7.54683 9.52717 7.17183L4.0805 1.72516C4.01801 1.66319 3.96842 1.58945 3.93457 1.50821C3.90072 1.42697 3.8833 1.33984 3.8833 1.25183C3.8833 1.16382 3.90072 1.07668 3.93457 0.995446C3.96842 0.914206 4.01801 0.840473 4.0805 0.778497C4.14279 0.71671 4.21667 0.667825 4.29789 0.634649C4.37912 0.601473 4.46609 0.584656 4.55383 0.585164Z" fill="currentColor"/>
            </svg>
        );
    } 
}
