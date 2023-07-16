import {Dialog} from "@headlessui/react";
import React, {Fragment} from "react";
import {Transition} from "@headlessui/react";
import Icon from "@/components/assets/Icon";
import IconButton from "@/components/buttons/IconButton";

export function ModalSideSheet({

                                   width,
                                   isNotFixedHeight,
                                   children,
                                   title,
                                   isOpen,
                                   setIsOpen,
                                   withCloseIconButton,
                                   withBackIconButton
                               }) {

    const isNotFixedHeightStyle = " h-[calc(100vh_-_32px)] top-[16px] left-[16px]"
    const fixedHeightStyle = "h-[calc(100vh)] top-0 left-0"
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className={`fixed  inset-0  z-999 overflow-hidden`} onClose={setIsOpen}>

                <Dialog.Overlay className="absolute  bg-black bg-opacity-70 inset-0"/>
                <div
                    className={`fixed w-[${width}px] z-999 ${isNotFixedHeight ? isNotFixedHeightStyle : fixedHeightStyle} justify-center transform   `}>
                    <Transition.Child
                        as={Fragment}
                        enter={`transform transition duration-300`}
                        enterFrom={`-translate-x-full`}
                        enterTo={`translate-x-0`}
                        leave={`transform transition duration-300`}
                        leaveFrom={`translate-x-0`}
                        leaveTo={`-translate-x-full`}

                    >

                        <div
                            className={`w-full h-full   relative  bg-surface-container-low-light dark:bg-surface-container-low-dark ${isNotFixedHeight ? "rounded-[28px]" : "rounded-l-[28px]"}`}>
                                <div
                                        className={`${isNotFixedHeight ? "rounded-t-[28px]" : "rounded-t-l-[28px]"} sticky bg-surface-container-low-light dark:bg-surface-container-low-dark  top-0 py-[24px] border-b border-outline-light dark:border-outline-dark flex items-center pr-6 pl-4`}>
                                    {withBackIconButton &&
                                        <IconButton className={"transform -scale-x-100"} onClick={()=>setIsOpen(false)}>
                                            arrow_back
                                        </IconButton>}
                                    <span
                                        className={"flex-1 mr-3 font-bold text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    {title}
                                </span>
                                    {withCloseIconButton &&
                                        <IconButton onClick={()=>setIsOpen(false)}>
                                            close
                                        </IconButton>}
                                </div>
                                <div className={"px-6 pt-6  h-[calc(100%_-_89px)]  overflow-scroll"}>
                                    {children}
                                </div>
                        </div>

                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}