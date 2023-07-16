import React, {Fragment, useState} from "react";
import {Transition} from "@headlessui/react";
import {Dialog} from "@headlessui/react";

export default function StandardDialog({children,isOpen,setIsOpen}) {
    // const [isOpen, setIsOpen] = useState(true)
    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="absolute inset-0 flex z-999 overflow-hidden" onClose={setIsOpen}>

                <Dialog.Overlay className="fixed bg-black bg-opacity-[70%] inset-0"/>
                <div
                    className="fixed  min-w-[280px] max-w-[608px] justify-center transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2">
                    <Transition.Child
                        as={Fragment}
                        enter="transition duration-200 opacity-0"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition opacity-0 duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className={"min-w-[280px] max-w-[608px] w-full relative p-6 bg-surface-light dark:bg-surface-dark  rounded-[28px]"}>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
