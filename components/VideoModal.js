/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {ExclamationIcon, XIcon} from '@heroicons/react/outline'

export default function Example(props) {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 flex z-999 overflow-hidden" onClose={setIsOpen}>
                <div className="absolute inset-0 flex overflow-hidden">
                    <Dialog.Overlay className="absolute bg-inverse-surface-light dark:bg-inverse-surface-dark bg-opacity-70 inset-0"/>
                    <div
                        className="fixed  inset-0 items-center justify-center transform -translate-y-1/2 top-1/2  h-full w-full mx-auto  flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition duration-200 opacity-0"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition opacity-0 duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className={"w-7/12 bg-surface-light dark:bg-surface-dark rounded-[28px]"}>
                                <div className=" absolute top-0 right-0 pt-4 pr-4">
                                    {/*<button*/}
                                    {/*    type="button"*/}
                                    {/*    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-indigo-500"*/}
                                    {/*    onClick={props.handleClose}*/}
                                    {/*>*/}
                                    {/*    <span className="sr-only">Close</span>*/}
                                    {/*    <XIcon className="h-6 w-6" aria-hidden="true"/>*/}
                                    {/*</button>*/}
                                </div>

                                <div className="py-[24px]">
                                    <video autoPlay controls className="w-full h-auto">
                                        <source src="/video.mp4" type="video/mp4"/>
                                    </video>
                                    {/*<div className={"flex items-center justify-center"}>*/}
                                    {/*    <button className={"rounded-full w-[40px] h-[40px] bg-primary-light dark:bg-primary-dark flex justify-center items-center"}>*/}
                                    {/*        <svg className={"text-on-primary-light dark:text-on-primary-dark"} xmlns="http://www.w3.org/2000/svg" height="24" width="24" ><path fill={"currentColor"} d="M8 19V5l11 7Z"/></svg>*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
)
}
