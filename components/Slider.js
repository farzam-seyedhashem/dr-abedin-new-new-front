import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {useTranslation} from "next-i18next";
import slide1 from '../public/slider/s-1.jpg'
import slide2 from '../public/slider/s-2.jpeg'

import {useRouter} from "next/router";


export default function Example() {
    const {t} = useTranslation("index")
    const router = useRouter()

    const slides = {
        data: [
            {
                img: slide1,
                disableDescription: true,
                title: "دکتر بهزاد عابدین",
                description: "متخصص و جراح گوش، حلق و بینی"
            },
            {
                img: slide2,
                disableDescription: true,
                title: "امکان نوبت دهی آنلاین",
                description: "میتوانید برای مراجعه خود به مطب پزشک در وب سایت دکتر بهزاد عابدین اقدام به تعیین وقت مراجعه خود نمایید."
            },

        ]
    }
    const [currentStep, setCurrentStep] = useState(0)
    const [steps, setSteps] = useState(slides.data);
    const [currentTimeOut, setCurrentTimeOut] = useState(null)

    const getMedia = () => {
        return window.matchMedia("screen and (min-width: 600px) and (max-width: 904px)").matches ? "sm" : window.matchMedia("screen and (min-width: 905px) and (max-width: 1239px)").matches ? "md" : window.matchMedia("screen and (min-width: 1240px) and (max-width: 1439px)").matches ? "lg" : window.matchMedia("screen and (min-width: 1440px)").matches ? "xl" : "xs"
    }
    const [media, setMedia] = useState()
    useEffect(() => {
        setMedia(getMedia())
    }, [])
    const nextStep = async () => {
        setCurrentStep(currentStep + 1);
    };

    useEffect(() => {
        if (currentTimeOut) {
            clearTimeout(currentTimeOut);
        }
        console.log(1)
        let i = setTimeout(async function () {
            if (currentStep === steps.length - 1) {
                setCurrentStep(0)
            } else {
                await nextStep()
            }

        }, 5000)
        setCurrentTimeOut(i)

    }, [currentStep]);
    return (
        <div className={"bg-background-light w-full h-full !rounded-[24px] overflow-hidden"}>
            <div className={"relative !rounded-[24px] overflow-hidden h-full bg-background-light  w-full"}>
                <div
                    className={"absolute z-[444] bg-black rounded-2xl overflow-hidden  flex items-center inset-0  h-full"}>

                    {/*</div>*/}
                    {slides.data.map((item, i) => <div key={i}
                                                       className={`transition-all flex items-center top-0  absolute bg-background-light  inset-0 ${currentStep === i ? "block" : "hidden"}`}>
                        <div
                            className={`relative w-full h-full w-[calc(100%_-_8px)]  mx-auto rounded-[24px] bg-black z-10 overflow-hidden relative `}>
                            {item.disableDescription && <div
                                className={`md:bottom-4 bottom-0 w-full md:w-full md:max-w-md ltr:md:left-4 rtl:md:right-4 md:rounded-[16px] py-5 px-6 sm:px-6 sm:py-6 dark:bg-surface-container-highest-dark bg-surface-container-highest-light absolute z-10`}>

                                <h2 className={"text-title-large text-on-surface-light dark:text-on-surface-dark  font-bold"}>
                                    {item.title}
                                </h2>
                                <p className={"text-on-surface-light dark:text-on-surface-dark text-body-large z-20  mt-2 "}>
                                    {item.description}
                                </p>

                                {/*<div*/}
                                {/*    className={" absolute inset-0 bg-secondary-container  bg-opacity-30 absolute bottom-0 z-10"}/>*/}

                            </div>}

                            <Image quality={100} priority={i === 0} sizes={"98vw"}
                                   className={`${i === 0 ? "" : "slider-animation"}  rounded-[24px] z-0`}
                                   layout={"responsive"}
                                   width={1280}
                                   height={720}
                                   objectFit={"cover"}
                                   src={item.img}/>
                        </div>
                    </div>)}
                </div>
            </div>

        </div>
    )
}
