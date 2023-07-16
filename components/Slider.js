import Image from "next/legacy/image";
import {ImageBaseURL} from '@/config'
import {ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";
import React, {Fragment, useEffect, useRef, useState} from "react";
import Typography from "./assets/Typography";
import IconButton from "@/components/buttons/IconButton";
import Space from "@/components/assets/Space";
import {Dialog, Transition} from "@headlessui/react";

function StoryCard({setIsStoryOpen,item, setCurrentStep, index}) {
    return (
        <>

            <div onClick={() => {
                setIsStoryOpen(true)
                setCurrentStep(index)
            }} className={"group/story inline-flex md:block md:mr-0 mr-6"}>

                <div
                    className={"md:rounded-[28px] rounded-[12px]  relative overflow-hidden  ring-offset-[3px] dark:ring-offset-background-dark ring-offset-background-light ring-2 ring-primary-light  dark:ring-outline-dark h-[100px]  md:h-[220px] w-[84px] md:w-[170px]"}>

                    <Image
                        style={{backgroundImage:`url('data:image/svg+xml, <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 text-secondary-container-light dark:group-hover:text-secondary-dark group-hover:text-secondary-light dark:text-secondary-container-dark"><path d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z" fill="currentColor"></path></svg>')`}}
                        priority={1}
                        layout={'responsive'}
                        className={"rounded-[24px]"}
                        width={150}
                        height={300}
                        sizes={"60vw"}
                        objectFit={"cover"}
                        alt={item.title}
                        src={ImageBaseURL + item?.thumbnail.url}
                    />
                    <div
                        className={"absolute bg-gradient-to-t from-transparent to-black flex items-center justify-center  inset-0 bg-black bg-opacity-[8%]"}/>
                    <p className={"absolute truncate  left-2 top-2 text-body-large text-on-background-dark font-medium mt-2 px-2  w-[160px]"}>
                        {item.title}
                    </p>
                </div>

            </div>
        </>
    )
}

export default function Slider({slides}) {
    const [currentStep, setCurrentStep] = useState(0)
    const [currentTimeOut, setCurrentTimeOut] = useState(null)
    const [isStoryOpen, setIsStoryOpen] = useState(false)

    const steps = slides.data;
    const nextStep = async () => {
        if (currentStep === steps.length - 1) {

            setCurrentStep(0)
        } else {

            await setCurrentStep(currentStep + 1);
        }

    };
    const beforeStep = async () => {
        if (currentStep === 0) {
            setCurrentStep(slides.data.length - 1)
        } else {

            await setCurrentStep(currentStep - 1);
        }


    };

    useEffect(() => {
        if (currentTimeOut) {
            clearTimeout(currentTimeOut);
        }
        let i = setTimeout(async function () {
            await nextStep()
        }, 5000)
        setCurrentTimeOut(i)

    }, [currentStep]);

    return (

        <div className={"px-4 md:px-6 pt-6"}>

            {/*<h1 className={"text-title-large font-black text-on-background-light dark:text-on-background-dark "}>*/}
            {/*    Discover Maryland's Finest Selection of Pre-Owned Vehicles at our Top-Rated Dealership*/}
            {/*</h1>*/}
            {/*<Space size={"xs"}/>*/}
            <p
                className={"dark:text-on-surface-dark text-on-surface-light md:max-w-4xl px-2 font-bold text-title-medium  "}>
                Our New Stories
            </p>
            <Space/>

            <div className={" md:h-[240px] h-[120px] flex items-center md:pl-2 pl-2 whitespace-nowrap md:overflow-auto overflow-scroll md:whitespace-normal md:items-center md:space-x-6 "}>
                {steps.map((item, i) =>
                    <StoryCard index={i} setCurrentStep={setCurrentStep} setIsStoryOpen={setIsStoryOpen} key={i}
                               item={item}/>
                )}
            </div>
            <Transition.Root show={isStoryOpen} as={Fragment}>
                <Dialog as="div" className="absolute inset-0 flex z-999 overflow-hidden" onClose={setIsStoryOpen}>

                    <Dialog.Overlay className="fixed bg-black bg-opacity-[80%] backdrop-filter backdrop-blur inset-0"/>
                    <div
                        className="fixed  w-[calc(100vw_-_32px)] h-[calc(100%_-_32px)] justify-center transform -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2">
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
                                className={"w-full h-full relative flex items-center  bg-black overflow-hidden  rounded-[28px]"}>
                                <div className={"w-full h-fit"}>
                                    <Image
                                        priority={1}
                                        layout={'responsive'}
                                        width={1080}
                                        height={1920}
                                        quality={100}
                                        sizes={"100vw"}
                                        objectFit={"cover"}
                                        alt={steps[currentStep]?.title}
                                        src={ImageBaseURL + steps[currentStep]?.thumbnail.url}
                                    />
                                </div>
                                <IconButton className={"absolute top-0"}>
                                    close
                                </IconButton>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>


            {/*<div className="relative md:h-[720px] w-full overflow-hidden ">*/}
            {/*    <div className={"absolute bottom-6 space-x-3 right-6 z-10 flex items-center"}>*/}
            {/*        <IconButton onClick={nextStep}>*/}
            {/*            chevron_left*/}
            {/*        </IconButton>*/}
            {/*        <IconButton onClick={beforeStep}>*/}
            {/*            chevron_right*/}
            {/*        </IconButton>*/}
            {/*    </div>*/}
            {/*    <div className={"rounded-[24px] h-full flex overflow-hidden"}>*/}
            {/*        {steps.map((item, i) => <div key={i}*/}
            {/*                                     className={`h-full bg-surface-light dark:bg-surface-dark rounded-[24px]  transform transition-all duration-500 ${i === currentStep ? "opacity-100 w-full" : i < currentStep ? "opacity-90" : "opacity-90"}`}>*/}
            {/*            {i === currentStep && <>*/}

            {/*                <Image*/}
            {/*                    priority={i === 0}*/}
            {/*                    layout={'responsive'}*/}
            {/*                    className={"rounded-[24px]"}*/}
            {/*                    width={1920}*/}
            {/*                    height={780}*/}
            {/*                    sizes={"60vw"}*/}
            {/*                    objectFit={"cover"}*/}
            {/*                    alt={item.title}*/}
            {/*                    src={ImageBaseURL + item?.thumbnail.url}*/}
            {/*                />*/}

            {/*                <div*/}
            {/*                    className={"w-full py-8 px-6 sm:py-10 sm:px-10  z-10"}>*/}
            {/*                    <Typography type={"h2"}*/}
            {/*                                className={"text-on-surface-light dark:text-on-surface-dark w-full truncate"}>*/}
            {/*                        {item?.title}*/}
            {/*                    </Typography>*/}
            {/*                    <Typography type={"p"}*/}
            {/*                                className={"text-on-surface-variant-light dark:text-on-surface-variant-dark mt-2"}>*/}
            {/*                        {item?.content}*/}
            {/*                    </Typography>*/}
            {/*                    <a href={item?.firstButtonLink}*/}
            {/*                       className={"text-on-secondary-container-light dark:text-on-secondary-container-dark rounded-full px-6 h-10 bg-secondary-container-light dark:bg-secondary-container-dark mt-4 inline-flex items-center text-sm"}>*/}
            {/*                        {item?.firstButtonText}*/}
            {/*                        <ArrowRightIcon className={"w-4 h-4 ml-2"}/>*/}
            {/*                    </a>*/}
            {/*                </div>*/}

            {/*            </>}*/}
            {/*        </div>)}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    )

}
