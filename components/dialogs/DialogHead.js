import React from "react";
import Icon from "../assets/Icon";
import Button from "../buttons/Button";

export default function DialogHead({actionClick,actionText,title, description, icon, isFull,onClose}) {
    return (
        <div className={`${isFull ? "h-[56px] sticky top-0 bg-surface-light dark:bg-surface-dark flex items-center px-6" : ""}`}>
            {!isFull ? <svg className={"text-secondary-light dark:text-secondary-dark mx-auto mb-4"}
                            xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                            fill={"currentColor"}>
                <path
                    d="M10.95 21.175V15h2.2v2h8v2.175h-8v2Zm-8.1-2V17h6.2v2.175Zm4-4.075v-2h-4v-2.2h4v-2h2.2v6.2Zm4.1-2v-2.2h10.2v2.2Zm4-4.1V2.825h2.2v2h4V7h-4v2ZM2.85 7V4.825h10.2V7Z"/>
            </svg> : <Icon onClick={onClose} size={24} className={"mr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"} type={"outline"}>
                arrow_back
            </Icon>}
            <h2 className={`${isFull ? "text-title-large" : "text-headline-medium mb-4 text-center"} flex-grow text-on-surface-light dark:text-on-surface-dark `}>
                {title}
            </h2>
            {actionText&&<Button onClick={actionClick}>{actionText}</Button>}
        </div>
    )
}
