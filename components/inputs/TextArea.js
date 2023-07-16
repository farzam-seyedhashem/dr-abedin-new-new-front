import React, {useState} from "react";

export default function TextArea({label,rows,className,defaultValue}) {
    const [value, setValue] = useState(defaultValue||"")
    const FocusLabelStyle = "group-focus-within:px-[4px] group-focus-within:left-[12px] group-focus-within:text-primary-light dark:text-primary-dark group-focus-within:-top-[2px] group-focus-within:-translate-y-1/2 group-focus-within:text-primary-light dark:text-primary-dark group-focus-within:leading-[.5] group-focus-within:text-body-small "
    const FocusFieldsetStyle = "group-focus-within:border-primary-light"
    const ValueLabelStyle = "px-[4px] left-[12px] text-primary-light dark:text-primary-dark top-[-5px] -translate-y-1/2 text-primary-light dark:text-primary-dark leading-[.5] text-body-small"
    const ValueFieldsetStyle = "border-primary-light"
    const LabelStyle = "text-body-large text-on-surface-variant-light dark:text-on-surface-variant-dark top-1/2 -mt-[3px] -translate-y-1/2 left-[16px]"
    const FieldsetStyle = "border-outline-light dark:border-outline-dark"
    const rowsHeight = rows*32
    return (
        <div className={`relative cursor-text group h-[${rowsHeight}px] w-full group ${className}`}>

            <fieldset aria-hidden="true" className={`${value!==""?ValueFieldsetStyle:FieldsetStyle+" "+FocusFieldsetStyle} border rounded-[4px] h-[${rowsHeight}px] top-0 left-0 w-full absolute `}>
                <legend className="text-xs  relative h-[11px] invisible float-unset p-0 overflow-hidden ml-[12px] max-w-full w-fit leading-[16px] float-[unset] transition-[max-width_100ms_cubic-bezier(0.0,_0,_0.2,_1)_50ms]">
                    <span className={`${value!==""?"block":"group-focus-within:block hidden"} opacity-0 px-[4px] inline-block w-fit`}>{label}</span>
                </legend>
                <textarea rows={4} defaultValue={value} maxLength={450} onChange={(e)=>setValue(e.target.value)} aria-invalid={"true"} id={label} className={"h-[calc(100%_-_1px)] focus:ring-0 border-0  bg-transparent text-on-surface-light dark:text-on-surface-dark outline-none px-[16px] w-full caret-primary-light "}></textarea>
                <label htmlFor={label} className={`${value!==""?ValueLabelStyle:LabelStyle+" "+FocusLabelStyle} z-10 cursor-text inline-block absolute transform transition-all top-[24px] duration-300 ease-in-out tracking-[.5px]`}>
                    {label}
                </label>
            </fieldset>
        </div>
    )
}