import {useState} from "react";
import Icon from "../assets/Icon";

export default function Checkbox({value,checkboxKey,label,onClick}) {
    const [isSelected, setIsSelected] = useState(value || false)
    return (
        <div  onClick={() => {
            onClick(checkboxKey,!isSelected)
            setIsSelected(!isSelected)
        }} className={"flex items-center"}>
            <button
                    className={"hover:bg-primary-light  dark:hover:bg-primary-dark hover:bg-opacity-[8%] dark:hover:bg-opacity-[8%] rounded-full h-10 w-10 flex items-center justify-center "}>
                <div
                    className={` rounded-[2px] h-[18px] w-[18px] flex items-center justify-center ${isSelected ? "bg-primary-light dark:bg-primary-dark" : "border border-outline-light dark:border-outline-dark"}`}>
                    {isSelected && <Icon className={`text-on-primary-light dark:text-on-primary-dark`} size={18}
                                         type={"fill"}>check</Icon>}
                </div>


            </button>
            {label&&<label className={"ml-2 text-on-surface-light dark:text-on-surface-dark"}>
                {label}
            </label>}
        </div>

    )
}