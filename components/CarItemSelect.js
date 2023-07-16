/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useEffect, useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import IMask from 'imask';
import {CheckCircleIcon} from '@heroicons/react/outline'
import {XIcon} from '@heroicons/react/solid'

const plans = [
    {
        name: 'Buy curbside',
        ram: 'Place your deposit, prepare your documents, test drive and sign at Bumble Auto',
        cpus: '4 CPUs',
        disk: '160 GB SSD disk',
        price: 'Free'
    },
    {name: 'Virtual Tour', ram: 'Request a virtual tour of your car', cpus: '', disk: '256 GB SSD disk', price: 'Free'},
    {
        name: 'Deliver to You',
        ram: 'Request shipping to your home or work ',
        cpus: '',
        disk: '512 GB SSD disk',
        price: 'Free'
    },
]
import {Dialog, Transition} from '@headlessui/react'
import {LinkIcon, PlusIcon, QuestionMarkCircleIcon} from '@heroicons/react/solid'
import {postData} from "../helpers/Helper";
import ListContainer from "./lists/ListContainer";
import ListItem from "./lists/ListItem";
import ListItemSecondaryText from "./lists/ListItemSecondaryText";
import ListItemPrimaryText from "./lists/ListItemPrimaryText";
import Icon from "./assets/Icon";
import Radio from "./inputs/Radio";

function Notification({show, setShow}) {
    // const [show, setShow] = useState(true)

    return (
        <>
            {/* Global notification live region, render this permanently at the end of the document */}
            <div
                aria-live="assertive"
                className="fixed inset-0 z-1001 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
            >
                <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
                    {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
                    <Transition
                        show={show}
                        as={Fragment}
                        enter="transform ease-out duration-300 transition"
                        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true"/>
                                    </div>
                                    <div className="ml-3 w-0 flex-1 pt-0.5">
                                        <p className="text-sm font-medium text-gray-900">Successfully send!</p>
                                        {/*<p className="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>*/}
                                    </div>
                                    <div className="ml-4 flex-shrink-0 flex">
                                        <button
                                            className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            onClick={() => {
                                                setShow(false)
                                            }}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XIcon className="h-5 w-5" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </>
    )
}

const team = [
    {
        name: 'Tom Cook',
        email: 'tomcook@example.com',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Whitney Francis',
        email: 'whitneyfrancis@example.com',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leonard Krasner',
        email: 'leonardkrasner@example.com',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Floyd Miles',
        email: 'floydmiles@example.com',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Emily Selman',
        email: 'emilyselman@example.com',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Drawer = ({setOpen, open, children, desc, title}) => {
    // const [open, setOpen] = useState(true)
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog  as="div" className="fixed inset-0 z-999 overflow-hidden" onClose={setOpen}>
                <div className="absolute inset-0 overflow-hidden">
                    <Dialog.Overlay className="absolute inset-0"/>

                    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="w-screen max-w-2xl">
                                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                    <div className="flex-1 relative">
                                        {/* Header */}
                                        <div className="px-4 py-6 bg-gray-50 sm:px-6">
                                            <div className="flex items-start justify-between space-x-3">
                                                <div className="space-y-1">
                                                    <Dialog.Title
                                                        className="text-lg font-medium text-gray-900">{title}</Dialog.Title>
                                                    <p className="text-sm text-gray-500">
                                                        {desc}
                                                    </p>
                                                </div>
                                                <div className="h-7 flex items-center">
                                                    <button
                                                        type="button"
                                                        className="text-gray-400 hover:text-gray-500"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

function phonenumber(inputtxt) {
    var phoneno = /^\d{10}$/;
    if (inputtxt.match(phoneno)) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    if (email.match(re)) {
        return true;
    } else {
        return false
    }
}
export default function Example() {
    const [selected, setSelected] = useState(0)
    const [openDialog, setOpenDialog] = useState(false)
    const [selectedTab, setSelectedTab] = useState(0)
    const [showNotic, setShowNotic] = useState(false)
    const [phoneErr, setPhoneErr] = useState(false)
    const [emailLoading,setEmailLoading] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [buttonDisable, setButtonDisable] = useState(true)
    const [data, setData] = useState({
        email: "",
        phone: "",
        lastName: "",
        firstName: "",
        preferTime: "Morning",
    })
    const generateData = (key, value) => {
        setData({...data, [key]: value})
    }
    const onSuccess = () => {
        setData({
            email: "",
            phone: "",
            lastName: "",
            firstName: "",
            preferTime: "Morning"
        })
        setShowNotic(true)
        setEmailLoading(false)
    }
    const onErr = () => {
        setEmailLoading(false)
    }
    const sendData = () => {
        setEmailLoading(true)
        if (selected === 0) {
            console.log(0)
            console.log(data)
            postData(data, 'send-mail/curbside', onSuccess, onErr)
        } else if (selected === 1) {
            console.log(1)
            postData(data, 'send-mail/virtual-tour', onSuccess, onErr)

        } else if (selected === 2) {
            console.log(2)
            postData(data, 'send-mail/deliver-to-you', onSuccess, onErr)

        }
        console.log(selected)
    }
    const tabs = [
        {name: 'Cash', href: '#', current: true},
        {name: 'Finance', href: '#', current: false},
    ]
    useEffect(() => {
        if (emailErr || phoneErr || data?.email === "" || data?.phone === "" || data?.firstName === "" || data?.lastName === "") {
            setButtonDisable(true)
        } else {
            setButtonDisable(false)
        }
    }, [emailErr, phoneErr, data])
    const handlePhoneNumber = (e) => {
        generateData('phone', e.target.value)
        if (phonenumber(e.target.value)) {
            setPhoneErr(false)
        } else {
            setPhoneErr(true)
        }
    }
    const handleEmailNumber = (e) => {
        generateData('email', e.target.value)
        if (validateEmail(e.target.value)) {
            setEmailErr(false)
        } else {
            setEmailErr(true)
        }
    }

    return (
        <div>
            <Drawer title={plans[selected].name} desc={plans[selected].ram} open={openDialog} setOpen={setOpenDialog}>

                {selected === 0 && <div className="border-b border-gray-200">
                    <div className="px-6">
                        <nav className="-mb-px flex space-x-6" x-descriptions="Tab component">
                            {tabs.map((tab, i) => (
                                <button
                                    type={'button'}
                                    onClick={() => {
                                        setSelectedTab(i)


                                    }}
                                    key={tab.name}
                                    className={classNames(
                                        selectedTab === i
                                            ? 'border-primary text-primary'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                        'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                                    )}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>}
                {/* Divider container */}
                {((selected === 0 && selectedTab === 0) || (selected !== 0)) &&
                <div className="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                    {/* Project name */}
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                First Name
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                onChange={(e) => generateData('firstName', e.target.value)}
                                type="text"
                                value={data?.firstName}
                                name="first-name"
                                id="first-name"
                                className="block w-full shadow-sm sm:text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Last Name
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                onChange={(e) => generateData('lastName', e.target.value)}
                                value={data?.lastName}
                                type="text"
                                name="last-name"
                                id="last-name"
                                className="block w-full shadow-sm sm:text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="phone-number"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Phone
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                onChange={(e) => handlePhoneNumber(e)}
                                value={data?.phone}
                                type="text"
                                name="phone-number"
                                id="phone-number"
                                className="block w-full shadow-sm sm:text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                            />
                            {phoneErr &&
                            <p className={"text-red-600 mt-px text-xs"}>Your phone number is not correct</p>}
                        </div>
                    </div>
                    <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                                Email
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                onChange={(e) => handleEmailNumber(e)}
                                value={data?.email}
                                type="email"
                                name="email"
                                id="email"
                                className="block w-full shadow-sm sm:text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                            />
                            {emailErr &&
                            <p className={"text-red-600 mt-px text-xs"}>Your email is not correct</p>}

                        </div>
                    </div>
                    {selected === 1 && <fieldset onChange={(e) => generateData("preferTime",)}>
                        <div
                            className="space-y-2 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:px-6 sm:py-5">
                            <div>
                                <legend className="text-sm font-medium text-gray-900">Prefer Time</legend>
                            </div>
                            <div className="space-y-5 sm:col-span-2">
                                <div className="space-y-5 sm:mt-0">
                                    <div className="relative flex items-start">
                                        <div className="absolute flex items-center h-5">
                                            <input
                                                id="public-access"
                                                name="privacy"
                                                aria-describedby="public-access-description"
                                                type="radio"
                                                value={"Morning"}
                                                className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                                defaultChecked
                                            />
                                        </div>
                                        <div className="pl-7 text-sm">
                                            <label htmlFor="public-access" className="font-medium text-gray-900">
                                                Morning
                                            </label>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="absolute flex items-center h-5">
                                            <input
                                                id="restricted-access"
                                                name="privacy"
                                                aria-describedby="restricted-access-description"
                                                type="radio"
                                                value={"Afternoon"}
                                                className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                            />
                                        </div>
                                        <div className="pl-7 text-sm">
                                            <label htmlFor="restricted-access" className="font-medium text-gray-900">
                                                Afternoon
                                            </label>
                                        </div>
                                    </div>
                                    <div className="relative flex items-start">
                                        <div className="absolute flex items-center h-5">
                                            <input
                                                id="private-access"
                                                name="privacy"
                                                aria-describedby="private-access-description"
                                                type="radio"
                                                value={"Evening"}
                                                className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                                            />
                                        </div>
                                        <div className="pl-7 text-sm">
                                            <label htmlFor="private-access" className="font-medium text-gray-900">
                                                Evening
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>}
                </div>}


                {/* Action buttons */}
                {((selected === 0 && selectedTab === 0) || (selected !== 0)) && <div
                    className="flex-shrink-0  px-4 border-t border-gray-200 py-5 sm:px-6 md:absolute relative bottom-0 left-0 w-full">
                    <div className="space-x-3  bg-white flex justify-end">
                        <button
                            type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            onClick={() => setOpenVirtualTourDrawer(false)}
                        >
                            Cancel
                        </button>

                        <button
                            type="button"
                            disabled={buttonDisable || emailLoading}
                            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary  ${(buttonDisable || emailLoading) ? "bg-gray-300 cursor-default" : "bg-primary"}`}
                            onClick={() => {
                                if (buttonDisable) {
                                } else {
                                    sendData()
                                }

                            }}
                        >
                            {emailLoading&& <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>}
                            Submit
                        </button>
                    </div>
                </div>}

            </Drawer>
            <div className=" webbuy-buttons">
                {/*<webbuy-button-async*/}
                {/*    vin={inventory.VIN}*/}
                {/*    template="vdp"*/}
                {/*    year={inventory.Year}*/}
                {/*    make={inventory.Make}*/}
                {/*    model={inventory.Model}*/}
                {/*    condition="New"*/}
                {/*    mileage={inventory.Odometer}*/}
                {/*    // pricemsrp="100000"*/}
                {/*    pricefinal={parseFloat((monthPayment * month).toFixed(2)).toLocaleString()}*/}
                {/*    // priceinternet="98500"*/}
                {/*    photo={inventory.photoURLS[0]}*/}
                {/*></webbuy-button-async>*/}
                <ListContainer>
                {plans.map((plan, i) => (

                        <ListItem key={i} onClick={()=>setSelected(i)} withDescription startItem={<Radio selected={selected===i}/>}>
                            <ListItemPrimaryText text={plan.name}/>
                            <ListItemSecondaryText text={plan.ram}/>
                        </ListItem>

                //     <RadioGroup.Option
                //         key={plan.name}
                //         value={i}
                //         className={({active}) =>
                //             classNames(
                //                 active ? 'ring-1 ring-offset-2 ring-yellow-500' : '',
                //                 'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none'
                //             )
                //         }
                //     >
                //         {({checked}) => (
                //             <>
                //                 <div className="flex items-center">
                //                     <div className="text-sm">
                //                         <RadioGroup.Label as="p" className="font-medium text-gray-900">
                //
                //                         </RadioGroup.Label>
                //                         <RadioGroup.Description as="div" className="text-gray-500">
                //                             <p className="sm:inline">
                //
                //                             </p>
                //                             {/*{' '}*/}
                //                             {/*<span className="hidden sm:inline sm:mx-1" aria-hidden="true">*/}
                //                             {/*&middot;*/}
                //                             {/*</span>{' '}*/}
                //                             {/*<p className="sm:inline">{plan.disk}</p>*/}
                //                         </RadioGroup.Description>
                //                     </div>
                //                 </div>
                //                 <RadioGroup.Description as="div"
                //                                         className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                //                     <div className="font-medium text-gray-900">{plan.price}</div>
                //                     {/*<div className="ml-1 text-gray-500 sm:ml-0">/mo</div>*/}
                //                 </RadioGroup.Description>
                //                 <div
                //                     className={classNames(
                //                         checked ? 'border-yellow-500' : 'border-transparent',
                //                         'absolute -inset-px rounded-lg border-2 pointer-events-none'
                //                     )}
                //                     aria-hidden="true"
                //                 />
                //             </>
                //         )}
                //     </RadioGroup.Option>
                ))}
                </ListContainer>
            </div>
            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*        setOpenDialog(true)*/}
            {/*    }}*/}
            {/*    type="button"*/}
            {/*    className="inline-flex w-full mt-4 text-center justify-center items-center px-4 py-2 border border-black  shadow-sm text-base font-medium rounded-md text-black transition duration-300 ease-in-out bg-white hover:bg-black hover:bg-opacity-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"*/}
            {/*>*/}
            {/*    Continue*/}
            {/*</button>*/}
        </div>
    )
}
