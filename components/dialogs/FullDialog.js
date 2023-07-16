import React, {Fragment, useState} from "react";
import {Transition} from "@headlessui/react";
import {Dialog} from "@headlessui/react";

export default function FullDialog({children,isOpen,setIsOpen}) {
    // const [isOpen, setIsOpen] = useState(true)
    return (

        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className={` absolute inset-0 flex z-999 overflow-hidden `} onClose={setIsOpen}>

                <Dialog.Overlay className="absolute bg-black bg-opacity-70 inset-0"/>
                <div
                    className="fixed w-full h-full justify-center transform top-0 left-0 ">
                    <Transition.Child
                        as={Fragment}
                        enter={`transform transition duration-300`}
                        enterFrom={`translate-y-full`}
                        enterTo={`translate-y-0`}
                        leave={`transform transition duration-300`}
                        leaveFrom={`translate-y-0`}
                        leaveTo={`translate-y-full`}

                    >
                        <div
                            className={"overflow-scroll h-full relative bg-surface-light dark:bg-surface-dark"}>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>

    )
}
