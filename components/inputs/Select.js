import React, {useState} from "react";

export default function Select({label,onChange,defaultValue,children}) {
    const [value, setValue] = useState(defaultValue?defaultValue:"")
    const FocusLabelStyle = "group-focus-within:px-1 group-focus-within:left-3 group-focus-within:text-primary-light dark:text-primary-dark group-focus-within:-top-[2px] group-focus-within:-translate-y-1/2 group-focus-within:text-primary-light dark:text-primary-dark group-focus-within:text-xs group-focus-within:leading-[16px]"
    const FocusFieldsetStyle = "group-focus-within:border-primary-light"
    const ValueLabelStyle = "px-1 left-3 text-primary-light dark:text-primary-dark -top-[5px] -translate-y-1/2 text-primary-light dark:text-primary-dark text-xs leading-[16px]"
    const ValueFieldsetStyle = "border-primary-light"
    const LabelStyle = "leading-[24px] text-on-surface-variant-light dark:text-on-surface-variant-dark top-1/2 -mt-[3px] -translate-y-1/2 left-4"
    const FieldsetStyle = "border-outline-light dark:border-outline-dark"
    return (
        <div className={"relative cursor-text group h-[56px] w-full group"}>
            <fieldset aria-hidden="true" className={`${value!==""?ValueFieldsetStyle:FieldsetStyle+" "+FocusFieldsetStyle} border rounded-[4px] h-[56px] top-0 left-0 w-full absolute `}>
                <legend className="text-xs  relative h-[11px] invisible float-unset p-0 overflow-hidden ml-3 max-w-full w-fit leading-[16px] float-[unset] transition-[max-width_100ms_cubic-bezier(0.0,_0,_0.2,_1)_50ms]">
                    <span className={`${value!==""?"block":"group-focus-within:block hidden"} opacity-0 px-1 inline-block w-fit`}>{label}</span>
                </legend>
                <select defaultValue={value} onChange={(e)=>{
                    setValue(e.target.value)
                    onChange(e)
                }} aria-invalid={"true"} id={label} className={"h-[calc(100%_-_1px)] focus:ring-0 border-0 bg-transparent text-on-surface-light dark:text-on-surface-dark  px-4 w-full caret-primary-light "}>
                    {children}
                </select>
                <label htmlFor={label} className={`${value!==""?ValueLabelStyle:LabelStyle+" "+FocusLabelStyle} z-10 cursor-text inline-block absolute transform transition-all duration-300 ease-in-out tracking-[.5px]`}>
                    {label}
                </label>
            </fieldset>
        </div>
    )
}
