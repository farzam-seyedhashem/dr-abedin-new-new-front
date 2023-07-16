/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, {Fragment, useEffect, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon, XIcon} from '@heroicons/react/solid'
import {postData} from "../helpers/Helper";
import {CheckCircleIcon} from "@heroicons/react/outline";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CommentForm({id}) {
    // const [assigned, setAssigned] = useState(assignees[0])
    // const [labelled, setLabelled] = useState(labels[0])
    // const [dated, setDated] = useState(dueDates[0])
    const [data,setData] = useState({})
    const [buttonDisable,setButtonDisable] = useState(true)
    const [sended,setSended] = useState(false)
    const generateData=(id,value)=>{
        setData({...data,[id]:value})
    }
    useEffect(()=>{
        if (data.name && data.name !== "" && data.content !== "" && data.email !== "" && data.content && data.email) {
            setButtonDisable(false)
        }else{
            setButtonDisable(true)

        }

    },[data])
   const sendData = ()=>{
       if (data.name && data.name !== "" && data.content !== "" && data.email !== "" && data.content && data.email) {
            postData(data, `blog/${id}/comment`,()=>{
                setData({})
                setSended(true)
            },()=>{

            })

        }
    }
    return (
        <div className="relative bg-white">
            <div
                aria-live="assertive"
                className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
            >
                <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={sended}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-900">Successfully send!</p>
                                        <p className="mt-1 text-sm text-gray-500">Comment will be publish when accept by admin.</p>
                                    </div>
                                    <div className="ml-4 flex-shrink-0 flex">
                                        <button
                                            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={() => {
                                                setSended(false)
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
            <div
                className="border px-4 py-4  border-gray-300 rounded-lg shadow-sm overflow-hidden">
                <div className={"grid grid-cols-3 gap-4"}>
                    <div className={"col-span-1"}>
                        <label htmlFor="name" className="sr-only">
                            Name*
                        </label>
                        <input

                            value={data?.name?data?.name:""}
                            onChange={(e)=>generateData("name",e.target.value)}
                            type="text"
                            name="name"
                            id="name"
                            className="block rounded-lg border border-black border-opacity-10 w-full border-0 pt-2.5 text-base font-medium placeholder-gray-500 focus:ring-1 focus:ring-primary focus:border-primary"
                            placeholder="Name*"
                        />
                    </div>
                    <div className={"col-span-1"}>
                        <label htmlFor="email" className="sr-only">
                            Email*
                        </label>
                        <input

                            value={data?.email?data?.email:""}
                            onChange={(e)=>generateData("email",e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            className="block rounded-lg border border-black border-opacity-10 w-full border-0 pt-2.5 text-base font-medium placeholder-gray-500 focus:ring-1 focus:ring-primary focus:border-primary"
                            placeholder="Email*"
                        />
                    </div>
                    <div className={"col-span-1"}>
                        <label htmlFor="website" className="sr-only">
                            Website
                        </label>
                        <input
                            value={data?.websiteURL?data?.websiteURL:""}

                            onChange={(e)=>generateData("websiteURL",e.target.value)}
                            type="text"
                            name="website"
                            id="website"
                            className="block rounded-lg border border-black border-opacity-10 w-full border-0 pt-2.5 text-base font-medium placeholder-gray-500 focus:ring-1 focus:ring-primary focus:border-primary"
                            placeholder="Website"
                        />
                    </div>
                    <div className={"col-span-3"}>
                        <label htmlFor="comment" className="sr-only">
                            Comment
                        </label>
                        <textarea
                            value={data?.content?data?.content:""}
                            onChange={(e)=>generateData("content",e.target.value)}
                            rows={2}
                            name="comment"
                            id="comment"
                            className="block rounded-lg h-32 border border-black border-opacity-10 w-full border-0 pt-2.5 text-base font-medium placeholder-gray-500 focus:ring-1 focus:ring-primary focus:border-primary"
                            placeholder="Comment"
                            defaultValue={''}
                        />
                    </div>
                </div>


                {/* Spacer element to match the height of the toolbar */}
                <div className={"mt-4"} aria-hidden="true">
                    <div className="py-2">
                        {/*<div className="h-9" />*/}
                    </div>
                    <div className="h-px"/>
                    <div className="py-2">
                        <div className="py-px">
                            <div className="h-"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 inset-x-px">

                <div className="border-t border-gray-200 px-2 py-2 flex justify-between items-center space-x-3 sm:px-3">
                    <div>
                        <p className={"font-normal text-black text-opacity-60 text-sm"}>Your email address will not be
                            published. Required fields are marked *</p>
                    </div>
                    <div className="flex-shrink-0 ml-auto">
                        <button
                            disabled={buttonDisable}
                            onClick={()=>{
                                sendData()
                            }}
                            // type="submit"
                            className={`${buttonDisable?"bg-gray-300 cursor-not-allowed":"bg-primary hover:bg-yellow-700"} inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500`}
                        >
                            Post Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
