import React, {useRef} from "react";
import {createRipple} from "../effect/Ripple";
import Icon from "../assets/Icon";

export default function Radio({onClick, selected, className}, props) {
    const selectedStyle = "text-primary-light dark:text-primary-dark"
    const unselectedStyle = "text-on-surface-variant-light dark:text-on-surface-variant-dark"
    // let Component = `${component || 'button'}`
    const button = useRef(null)
    let resTypeStyle = selected ? selectedStyle : unselectedStyle
    return (

        <Icon className={`${resTypeStyle}`} size={20}  weight={400} type={"outline"}>
            {selected ? "radio_button_checked" : "radio_button_unchecked"}
        </Icon>
    )
}
