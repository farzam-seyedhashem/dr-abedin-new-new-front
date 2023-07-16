/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {CheckIcon} from '@heroicons/react/outline'
import {ArrowLeftIcon, ArrowRightIcon, PhoneIcon, XIcon} from "@heroicons/react/solid";
import FilterCarYear from "./FilterCarYear";

export default function Example(props) {
    // const [open, ] = useState()
    const [showResult, setShowResult] = React.useState(false)

    return (
        <Transition.Root show={props.open} as={Fragment}>
            <Dialog as="div" static className="fixed z-999 inset-0 overflow-y-auto" open={props.open}
                    onClose={()=> {
                        setShowResult(false)
                        props.setOpen(false)
                    }}>
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
                            className="inline-block align-bottom bg-white rounded-lg shadow-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
                            <div className="relative mx-auto  bg-white w-full rounded-lg ">
                                {showResult ? <div className="bg-gray-100 px-4 pt-6 pb-3">
                                    <button onClick={()=> {
                                        setShowResult(false)
                                        props.setOpen(false)
                                    }} className="h-8 w-8 absolute top-0 right-0 mt-4 mr-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center hover:bg-black dark:hover:bg-opacity-4 hover:bg-opacity-4">
                                    <div className="w-5 h-5 text-black text-opacity-60">
                                        <XIcon/>
                                    </div>
                                    </button>
                                    <h3 className="font-medium text-xl mb-3">Summary : </h3>
                                    <div className="relative mb-2">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="w-full border-t border-gray-300"/>
                                        </div>
                                        <div className="relative flex items-center justify-between">
                                            <span
                                                className="pr-3 bg-gray-100 text-base font-normal text-gray-500">Vehicle Price</span>
                                            <span
                                                className="bg-gray-100 text-gray-800 pl-3"
                                            >
                                                $13,998
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative mb-2">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="w-full border-t border-gray-300"/>
                                        </div>
                                        <div className="relative flex items-center justify-between">
                                            <span
                                                className="pr-3 bg-gray-100 text-base font-normal text-gray-500">Down Payment (Get a trade-in offer)</span>
                                            <span
                                                className="bg-gray-100 text-gray-800 pl-3"
                                            >
                                                - $2,000
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative mb-2 mt-6">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="w-full border-t border-gray-300"/>
                                        </div>
                                        <div className="relative flex items-center justify-between">
                                            <span
                                                className="pr-3 bg-gray-100 text-base font-medium text-gray-800">Total Finance Amount</span>
                                            <span
                                                className="bg-gray-100 text-green-700 font-medium pl-3"
                                            >
                                                $12,973
                                            </span>
                                        </div>
                                    </div>
                                    <div className="my-1 border border-black border-opacity-10"/>
                                    <div className="text-center">
                                        <h3 className="font-medium text-gray-600">Estimated Monthly Payment</h3>
                                        <h4 className="font-bold text-xl text-green-600">$209 - $234</h4>
                                    </div>
                                    <div
                                        className="mt-2">

                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-800 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:text-sm"
                                            onClick={() => setShowResult(false)}
                                        >
                                            <div className="w-4 h-4 mr-2">
                                            <ArrowLeftIcon/>
                                            </div>
                                            Back to Calculator
                                        </button>

                                    </div>

                                </div> : <div className="px-6 pt-6">
                                    <button onClick={()=> {
                                        setShowResult(false)
                                        props.setOpen(false)
                                    }} className="h-8 w-8 absolute top-0 right-0 mt-4 mr-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center hover:bg-black dark:hover:bg-opacity-4 hover:bg-opacity-4">
                                        <div className="w-5 h-5 text-black text-opacity-60">
                                            <XIcon/>
                                        </div>
                                    </button>
                                    <h3 className="text-xl font-medium">Filter Car</h3>
                                    <p className="text-gray-400">here you can filter your car</p>
                                    <div className="mt-4">
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                            Credit Score
                                        </label>
                                        <select
                                            id="location"
                                            name="location"
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
                                            defaultValue="Canada"
                                        >
                                            <option>Excellent</option>
                                            <option>Very Good</option>
                                            <option>Good</option>
                                            <option>Fair</option>
                                            <option>Challanged</option>
                                        </select>
                                    </div>
                                    <div className="mt-6 mb-8">

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="">
                                                <label htmlFor="price"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Down Payment
                                                </label>
                                                <div className="mt-1 relative  rounded-md shadow-sm">
                                                    <div
                                                        className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <span className="text-gray-500 sm:text-sm">$</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="price"
                                                        id="price"
                                                        className="focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="0.00"
                                                        aria-describedby="price-currency"
                                                    />
                                                    <div
                                                        className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            USD
          </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <label htmlFor="price"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Term Length
                                                </label>
                                                <select
                                                    id="location"
                                                    name="location"
                                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm rounded-md"
                                                    defaultValue="Canada"
                                                >
                                                    <option>36 Months</option>
                                                    <option>48 Months</option>
                                                    <option>60 Months</option>
                                                    <option>72 Months</option>
                                                </select>
                                            </div>


                                        </div>

                                    </div>
                                </div>}

                            </div>
                            {!showResult && <div
                                className="bg-gray-50 rounded-b-lg border-t border-black border-opacity-10 py-2 px-6 flex justify-end">

                                <button
                                    type="button"
                                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-yellow-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:text-sm"
                                    onClick={() => setShowResult(true)}
                                >
                                    Calculate
                                </button>

                            </div>}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
