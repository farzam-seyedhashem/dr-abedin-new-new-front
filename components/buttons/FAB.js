import {createRipple} from "../effect/Ripple";
import Icon from "../assets/Icon";
import {useRef} from "react";

export default function FAB({isExtera,component,withOutShadow,className,icon,onClick,children}){
    const exFab = "bg-primary-container-light dark:bg-primary-container-dark  z-999 fixed text-on-primary-container-light dark:text-on-primary-container-dark bottom-4 right-4 rounded-2xl px-4 min-w-[80px] flex items-center justify-center h-[56px]"
    const normalFab = "bg-primary-container-light dark:bg-primary-container-dark z-999 fixed  text-on-primary-container-light dark:text-on-primary-container-dark bottom-4 right-4 rounded-2xl px-4 w-[56px] flex items-center justify-center h-[56px]"
    let Component = `${component || 'button'}`
    const shadow = !withOutShadow
    const button = useRef(null)
    let resTypeStyle = isExtera?exFab:normalFab
    return (
        <Component onClick={(e) => {
            createRipple(e)
            onClick&&onClick()
        }} ref={button} className={`${shadow?"shadow-[0_1px_3px_0px_rgba(0,0,0,.30)]":""} ${resTypeStyle} ${className} `}>
            {shadow&&<div
                className={` shadow-[0_4px_8px_0px_rgba(0,0,0,.15)] absolute rounded-2xl font-medium text-label-large inset-0 `}/>}
            {icon&& <Icon size={24} grade={0} weight={500} type={"outline"}>
                {icon}
            </Icon>}
            <span className={`${isExtera?"ml-2":""}`}>
            {children}
            </span>
        </Component>
    )
}