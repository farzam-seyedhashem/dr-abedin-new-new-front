import React, {useRef} from "react";
import {createRipple} from "../effect/Ripple";
import Icon from "../assets/Icon";

export default function Button(props) {
    const {component, type,onClick, icon, children, className,...other} = props
    const filledButtonStyle = "bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark"
    const filledTonalButtonStyle = "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark"
    const outlineButtonStyle = " border border-outline-light dark:border-outline-dark text-primary-light dark:text-primary-dark hover:bg-primary-light dark:hover:bg-primary-dark dark:hover:bg-opacity-[8%] hover:bg-opacity-[8%]"
    const textButtonStyle = "text-primary-light dark:text-primary-dark hover:bg-primary-light dark:hover:bg-primary-dark dark:hover:bg-opacity-[8%] hover:bg-opacity-[8%]"
    let Component = `${component || 'button'}`
    // const button = useRef(null)
    let resTypeStyle = null
    switch (type) {
        case "filled":
            resTypeStyle = filledButtonStyle
            break;
        case "tonal":
            resTypeStyle = filledTonalButtonStyle
            break;
        case "outline":
            resTypeStyle = outlineButtonStyle
            break;
        default:
            resTypeStyle = textButtonStyle
    }
    return (


        <Component onClick={(e) => {
            // createRipple(e)
            onClick&&onClick()
        }} {...other} className={`${icon ? "pr-4 space-x-2 pl-6" : "px-6"} w-fit transition-all duration-300 outline-none flex items-center h-10 rounded-full text-label-large font-medium ${className} ${resTypeStyle}`}>
            {icon&& <Icon className={"ml-2"} size={18} grade={0} weight={500} type={"outline"}>
                {icon}
            </Icon>}
            {children}
        </Component>


    )
}
