/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {ExclamationIcon, XIcon} from '@heroicons/react/outline'
import Image from "next/legacy/image";
import {ArrowRightIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";
import Typography from "./assets/Typography";
import IconButton from "./buttons/IconButton";

export default function Example({open, setOpen, photoURLS, selectedImage, setSelectedImage}) {
    // const [selectedImage, setSelectedImage] = useState(imageSelected)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" static
                    className="fixed z-999 h-screen  flex items-center justify-center w-full inset-0 overflow-y-auto"
                    open={open}
                    onClose={setOpen}>

                <Dialog.Overlay className="fixed inset-0 bg-gray-500 dark:hover:bg-opacity-75 bg-opacity-75 transition-opacity"/>
                <div className="absolute inset-0">
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
                            className="bg-background-light dark:bg-background-dark relative overflow-hidden md:flex  w-full h-full">
                            <IconButton onClick={()=>setOpen(false)} className={"absolute top-4 left-4"}>
                                arrow_back
                            </IconButton>
                            <div className={"md:flex hidden w-5/12 h-full items-center justify-center"}>
                                <div className={"px-4 md:px-6"}>
                                    <Typography type={"h2"} className={"text-on-surface-light dark:text-on-surface-dark"}>
                                        List of car images
                                    </Typography>
                                    <Typography type={"p"} className={"text-on-surface-variant-light dark:text-on-surface-variant-dark mt-4 mb-[58px]"}>
                                        you can select each image on bottom list to see it large in right side.
                                    </Typography>
                                    <div className={"space-y-2 mt-4"}>
                                        {photoURLS.map((item, i) => <div key={i} onClick={() => setSelectedImage(i)}
                                                                         className={`${i === selectedImage ? "outline outline-[2px] outline-primary-light outline-offset-[5px] w-[114px]" : "w-[57px]"} cursor-pointer inline-block mr-[20px] relative h-[114px]`}>
                                            <Image
                                                className={`${i === selectedImage ? "rounded-[8px]" : "rounded-[80px] hover:rounded-[8px]"} transition-all duration-100`}
                                                objectFit={"cover"} quality={100}
                                                sizes={"60vw"}
                                                layout={"fill"}
                                                src={item}/>
                                        </div>)}


                                    </div>
                                </div>
                            </div>
                            <div
                                className={"md:w-7/12 w-full p-2 md:p-[48px] flex items-center bg-surface-light dark:bg-surface-dark md:h-full h-4/6"}>
                                <div className={"relative w-full"}>
                                    <Image height={1920} width={1920} objectFit={"contain"} quality={100} sizes={"60vw"}
                                           layout={"responsive"}
                                           src={photoURLS[selectedImage]}/>
                                </div>
                            </div>

                            <div className={"md:hidden flex items-start mt-1 w-full h-2/6"}>
                                <div
                                    className={"px-4 py-4 md:px-0  whitespace-nowrap  overflow-scroll"}>
                                    {photoURLS.map((item, i) => <div key={i} onClick={() => setSelectedImage(i)}
                                                                     className={`inline-block ${i === selectedImage ? "outline outline-[2px] outline-primary-light outline-offset-[5px] w-[240px] " : "w-[57px]"} cursor-pointer inline-block mr-2 md:mr-[20px] relative h-[114px]`}>
                                        <Image
                                            className={`${i === selectedImage ? "rounded-[8px]" : "rounded-[80px] hover:rounded-[8px]"} transition-all duration-100`}
                                            objectFit={"cover"} quality={100}
                                            sizes={"60vw"}
                                            layout={"fill"}
                                            src={item}/>
                                    </div>)}
                                </div>
                            </div>


                            {/*<div*/}
                            {/*    className={"absolute md:h-495 h-48 top-0 left-0 flex items-center justify-between w-full"}>*/}
                            {/*    {selectedImage !== 0 ?*/}
                            {/*        <button onClick={() => setSelectedImage(selectedImage - 1)}*/}
                            {/*                className={"ml-2 bg-background-light dark:bg-background-dark flex items-center justify-center rounded-full border border-black border-opacity-10 w-8 h-8 "}>*/}
                            {/*            <ChevronLeftIcon className={"w-5 h-5 opacity-8"}/>*/}
                            {/*        </button> : <div/>}*/}
                            {/*    {selectedImage !== photoURLS.length - 1 &&*/}
                            {/*        <button onClick={() => setSelectedImage(selectedImage + 1)}*/}
                            {/*                className={"mr-2 bg-background-light dark:bg-background-dark flex items-center justify-center rounded-full border border-black border-opacity-10 w-8 h-8 "}>*/}
                            {/*            <ChevronRightIcon className={"w-5 h-5 opacity-8"}/>*/}
                            {/*        </button>}*/}

                            {/*</div>*/}


                            {/*<div className="md:col-span-4 col-span-12 md:pr-8  scrollbar-hide overflow-scroll">*/}
                            {/*    <div*/}
                            {/*        className="md:grid md:block inline-flex  whitespace-nowrap  md:overflow-auto md:grid-cols-2 md:gap-2 md:justify-center">*/}
                            {/*        {photoURLS.map((item, i) => <div key={i} onClick={() => setSelectedImage(i)}*/}
                            {/*                                         className={`px-1 relative py-1  ${selectedImage === i ? "border-2 border-primary" : 'border-2 border-white'} bg-background-light dark:bg-background-dark md:overflow-hidden rounded-lg`}>*/}
                            {/*            <div className="md:w-full w-32 h-24 relative rounded-lg md:overflow-hidden">*/}
                            {/*                <Image layout={'fill'} objectFit={"cover"} src={item}/>*/}
                            {/*            </div>*/}
                            {/*            {selectedImage === i && <div className="absolute top-0 left-0">*/}
                            {/*                <div className="w-11 relative overflow-hidden inline-block">*/}
                            {/*                    <div*/}
                            {/*                        className="h-16 bg-primary rotate-45 transform origin-top-right"></div>*/}
                            {/*                    <div className="w-5 h-5 absolute top-0 left-0 mt-1 ml-1 text-white">*/}
                            {/*                        <CheckIcon/>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>}*/}
                            {/*        </div>)}*/}


                            {/*    </div>*/}
                            {/*</div>*/}

                        </div>
                    </Transition.Child>
                </div>

            </Dialog>
        </Transition.Root>
    )
}
