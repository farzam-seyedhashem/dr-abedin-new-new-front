/* This example requires Tailwind CSS v2.0+ */
import {SpeakerphoneIcon, XIcon} from '@heroicons/react/outline'
import {useState} from "react";
import {Fragment, useRef} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {CheckIcon} from '@heroicons/react/outline'
import {MailIcon} from "@heroicons/react/solid";

export default function Example() {
    const [show, setShow] = useState(true)
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)
    return (

        show ?
            <>
                <div className="fixed bottom-0 z-999 inset-x-0 pb-2 sm:pb-5">
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="p-2 rounded-lg bg-primary shadow-lg sm:p-3">
                            <div className="flex items-center justify-between flex-wrap">
                                <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-yellow-600">
                <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true"/>
              </span>
                                    <p className="ml-3 font-medium text-white truncate">
                                        <span className="md:hidden">Join to Get Top News!</span>
                                        <span
                                            className="hidden md:inline">Join to Get Top News and Stories for Our Deals!</span>
                                    </p>
                                </div>
                                <button onClick={()=>setOpen(true)} className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-4 py-2  border-transparent rounded-md shadow-sm text-sm font-medium text-yellow-600 bg-white hover:bg-yellow-50"
                                    >
                                        Learn more
                                    </a>
                                </button>
                                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                                    <button
                                        onClick={() => setShow(false)}
                                        type="button"
                                        className="-mr-1 flex p-2 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
                                    >
                                        <span className="sr-only">Dismiss</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Transition.Root show={open} as={Fragment}>
                    <Dialog
                        as="div"
                        static
                        className="fixed z-999 inset-0 overflow-y-auto"
                        initialFocus={cancelButtonRef}
                        open={open}
                        onClose={setOpen}
                    >
                        <div
                            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 dark:bg-opacity-75 bg-opacity-75 transition-opacity"/>
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <div
                                    className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                    <div>

                                        <button
                                            className="w-8 h-8 rounded-full absolute right-3 top-3 flex items-center justify-center hover:bg-black dark:hover:bg-opacity-4 hover:bg-opacity-4">
                                            <div onClick={()=>setOpen(false)} className="w-5 h-5 ">
                                                <XIcon/>
                                            </div>
                                        </button>
                                        <div
                                            className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100">
                                            <CheckIcon className="h-6 w-6 text-yellow-600" aria-hidden="true"/>
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3"
                                                          className="text-lg leading-6 font-medium text-gray-900">
                                                Join to Get Top News and Stories for Our Deals
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Be the first in the know by getting special deals and offers sent
                                                    directly to your inbox.
                                                </p>
                                            </div>
                                            <div>
                                                <div className="mt-5 relative rounded-md shadow-sm">
                                                    <div
                                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        id="email"
                                                        className="focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="you@example.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="mt-3 sm:mt-4">
                                        <button
                                            type="button"
                                            autoFocus
                                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:col-start-2 sm:text-sm"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            GET TOP DEALS
                                        </button>
                                        {/*<button*/}
                                        {/*    type="button"*/}
                                        {/*    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:col-start-1 sm:text-sm"*/}
                                        {/*    onClick={() => setOpen(false)}*/}
                                        {/*    ref={cancelButtonRef}*/}
                                        {/*>*/}
                                        {/*    Cancel*/}
                                        {/*</button>*/}
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
            </>
            : <></>

    )
}
