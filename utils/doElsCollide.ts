// Creating and exporting a function which checks if a element collides another element
export default function doElsCollide(el1:any, el2:any):boolean {
    // Variables
    const el1OffsetBottom:number = el1.offsetTop + el1.offsetHeight;
    const el1OffsetRight:number = el1.offsetLeft + el1.offsetWidth;
    const el2OffsetBottom:number = el2.offsetTop + el2.offsetHeight;
    const el2OffsetRight:number = el2.offsetLeft + el2.offsetWidth;

    // checking if elements collide an returning boolean
    return !((el1OffsetBottom < el2.offsetTop) ||
             (el1.offsetTop > el2OffsetBottom) ||
             (el1OffsetRight < el2.offsetLeft) ||
             (el1.offsetLeft > el2OffsetRight))
};