import {Dialog, Transition} from "@headlessui/react";
import React, {Fragment, useState} from "react";

export default function BottomSheet({isOpen, setIsOpen, children,minHeight}) {
    const [fullOpen,setFullOpen] = useState(false)
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="absolute inset-0 flex z-999 overflow-hidden" onClose={setIsOpen}>

                <Dialog.Overlay className="fixed bg-black dark:bg-opacity-[70%] bg-opacity-[70%] inset-0"/>
                <div
                    className={`fixed  ${fullOpen?"h-full overflow-scroll":`h-${minHeight}`}   md:mt-[72px] md:ml-[56px] md:mr-[56px] max-w-[640px] w-full justify-center bottom-0 left-0 `}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition duration-300 transform"
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="transition transform duration-200"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                    >

                        <div
                            className={" w-full relative dark:bg-surface-container-low-dark bg-surface-container-low-light rounded-t-[28px]"}>
                            <div onTouchMove={(e) => {
                                const {scrollHeight, scrollTop, clientHeight} = e.target;

                                if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
                                    setIsOpen(false)

                                }else {
                                    setFullOpen(true)
                                }

                            }} className={"flex items-center justify-center w-full py-[22px]"}>
                                <div className={"bg-on-surface-variant-light opacity-40 w-[32px] h-[4px]"}/>
                            </div>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}