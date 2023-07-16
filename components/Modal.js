/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {CheckIcon} from '@heroicons/react/outline'
import {MailIcon, PhoneIcon, UserIcon, XIcon} from "@heroicons/react/solid";

export default function Example(props) {
    // const [open, ] = useState()

    return (

        <Transition.Root show={props.open} as={Fragment}>
            <Dialog as="div" static className="fixed z-999 inset-0 overflow-y-auto" open={props.open}
                    onClose={props.setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
                            className="inline-block  align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg max-w-xs w-full sm:p-6">
                            <button onClick={() => {
                                props.setOpen(false)
                            }}
                                    className="h-8 w-8 z-20 absolute top-0 right-0 mt-4 mr-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center hover:bg-black hover:bg-opacity-4">
                                <div className="w-5 h-5 text-black text-opacity-60">
                                    <XIcon/>
                                </div>
                            </button>

                            <div className="carzing-widget w-full h-full"
                                 data-carmojo-theme="modern-medium"
                                 data-carmojo-price={props.inventory.Price}
                                 data-carmojo-vin={props.inventory.VIN}
                                 data-carmojo-primary-image-url={props.inventory.photoURLS[0]}>
                            </div>




                            {/*<div>*/}
                            {/*    <h3>We Call You Soon</h3>*/}
                            {/*    <label htmlFor="email" className="block text-sm mt-2 font-medium text-gray-700">*/}
                            {/*        Full Name*/}
                            {/*    </label>*/}
                            {/*    <div className="mt-1 relative rounded-md shadow-sm">*/}
                            {/*        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">*/}
                            {/*            <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                            {/*        </div>*/}
                            {/*        <input*/}
                            {/*            type="text"*/}
                            {/*            name="email"*/}
                            {/*            id="email"*/}
                            {/*            className="focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"*/}
                            {/*            placeholder="John Smith"*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    <label htmlFor="email" className="block mt-2 text-sm font-medium text-gray-700">*/}
                            {/*        Phone Number*/}
                            {/*    </label>*/}
                            {/*    <div className="mt-1 relative rounded-md shadow-sm">*/}
                            {/*        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">*/}
                            {/*            <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                            {/*        </div>*/}
                            {/*        <input*/}
                            {/*            type="text"*/}
                            {/*            name="email"*/}
                            {/*            id="email"*/}
                            {/*            className="focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"*/}
                            {/*            placeholder="+1 900 90 343"*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    <label htmlFor="email" className="block text-sm mt-2 font-medium text-gray-700">*/}
                            {/*        Email*/}
                            {/*    </label>*/}
                            {/*    <div className="mt-1 relative rounded-md shadow-sm">*/}
                            {/*        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">*/}
                            {/*            <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />*/}
                            {/*        </div>*/}
                            {/*        <input*/}
                            {/*            type="text"*/}
                            {/*            name="email"*/}
                            {/*            id="email"*/}
                            {/*            className="focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"*/}
                            {/*            placeholder="test@website.com"*/}
                            {/*        />*/}
                            {/*    </div>*/}

                            {/*</div>*/}
                            {/*<div className="mt-5 sm:mt-6">*/}
                            {/*    <button*/}
                            {/*        type="button"*/}
                            {/*        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:text-sm"*/}
                            {/*        onClick={() => props.setOpen(false)}*/}
                            {/*    >*/}
                            {/*        Email US*/}
                            {/*    </button>*/}
                            {/*    <div className="relative mt-3 mb-2">*/}
                            {/*        <div className="absolute inset-0 flex items-center" aria-hidden="true">*/}
                            {/*            <div className="w-full border-t border-gray-300" />*/}
                            {/*        </div>*/}
                            {/*        <div className="relative flex justify-center">*/}
                            {/*            <span className="px-2 bg-white text-sm text-gray-500">or</span>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <button*/}
                            {/*        type="button"*/}
                            {/*        className="flex items-center justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-primary text-base font-medium text-white  transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:text-sm"*/}
                            {/*        onClick={() => props.setOpen(false)}*/}
                            {/*    >*/}
                            {/*        <div className="w-4 h-4 mr-2">*/}
                            {/*        <PhoneIcon/>*/}
                            {/*        </div>*/}
                            {/*        Call Us*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
