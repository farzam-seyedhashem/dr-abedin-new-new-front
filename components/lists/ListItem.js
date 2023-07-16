import {useRef} from "react";
import {createRipple} from "../effect/Ripple";

export default function ListItem({children, withDescription, startItem,onClick, endItem}) {
    const oneLineStyle = "py-2 items-center";
    const threeLineStyle = "py-3 items-start";
    const defStyle = withDescription ? threeLineStyle : oneLineStyle
    const button = useRef(null)

    return (
        <li ref={button} onClick={(e)=>{
            createRipple(e)
            onClick()
        }} className={`flex overflow-hidden relative pl-4 pr-6 hover:bg-on-surface-light hover:bg-opacity-[8%] ${defStyle}`}>
            {startItem && <div className={"mr-4"}>
                {startItem}
            </div>}
            <div>
            {children}
            </div>
            {endItem && <div className={"ml-4 text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                {endItem}
            </div>}
        </li>
    )
}