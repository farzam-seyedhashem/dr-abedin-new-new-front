/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useEffect, useState} from 'react'
import Link from 'next/link'

import {useRouter} from "next/router";
import {Dialog, Transition} from '@headlessui/react'
import Icon from "@/components/assets/Icon";
import {ModalSideSheet} from "@/components/SideSheet/ModalSideSheet";
import SettingList from "@/components/settings/SettingList";
import Image from "next/legacy/image";
import useSWR from "swr";



export default function Example({title, breadCrumbs, modeType, colorMode, handleChangeMode, handleChangeColor}) {
    const router = useRouter()
    const [isDark, setIsDark] = useState(false)
    const [isSettingOpen, setIsSettingOpen] = useState(false)
    const [searchText, setSearchText] = useState("")

    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true)
        } else {
            setIsDark(false)
        }
    }, [])
    const changeThemMode = () => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        // if set via local storage previously
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDark(true)
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setIsDark(false)
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setIsDark(false)
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDark(true)
            }
        }

// // Whenever the user explicitly chooses to respect the OS preference
//         localStorage.removeItem('theme')
    }
    const [mouseOverDrawer, setMouseOverDrawer] = useState(-1)
    return (
        <div className={"md:block hidden"} onMouseLeave={() => setMouseOverDrawer(-1)}>
            <ModalSideSheet className={"md:block hidden"} withBackIconButton title={"تنظیمات"}
                            setIsOpen={setIsSettingOpen} isOpen={isSettingOpen}
                            width={400} isNotFixedHeight isModal>
                <SettingList modeType={modeType} colorMode={colorMode} handleChangeMode={handleChangeMode}
                             handleChangeColor={handleChangeColor}/>
            </ModalSideSheet>
            {/*<Transition.Root show={mouseOverDrawer !== -1 && !!solutions[mouseOverDrawer]?.subItems} as={Fragment}>*/}

            {/*    <div className="fixed  w-full h-full z-[998] mr-[88px]  top-0 max-w-[229px] right-0 flex">*/}
            {/*        <Transition.Child*/}
            {/*            as={Fragment}*/}
            {/*            enter="transform transition ease-in-out duration-500 sm:duration-700"*/}
            {/*            enterFrom="translate-x-full"*/}
            {/*            enterTo="shadow-[rgba(0,_0,_0,_0.3)_0px_1px_2px,_rgba(0,_0,_0,_0.15)_0px_2px_6px_2px] translate-x-0"*/}
            {/*            leave="transform transition ease-in-out duration-500 sm:duration-700"*/}
            {/*            leaveFrom="translate-x-0"*/}
            {/*            leaveTo="shadow-[rgba(0,_0,_0,_0)_0px_1px_2px,_rgba(0,_0,_0,_0)_0px_2px_6px_2px] translate-x-full"*/}
            {/*        >*/}
            {/*            <div*/}
            {/*                className={"bg-surface-light dark:bg-surface-dark px-2 pt-2 border-r border-secondary-container-light rounded-l-2xl w-full"}>*/}
            {/*                <ul>*/}
            {/*                    {mouseOverDrawer !== -1 && solutions[mouseOverDrawer]?.subItems?.map((item, i) =>*/}

            {/*                        <li key={i} className={" w-full"}>*/}
            {/*                            <Link*/}
            {/*                                className={`h-10 m-[2px] transition duration-300 ease-in-out px-4 flex text-sm font-medium tracking-[0.1px] leading-[20px] items-center  rounded-full ${router.pathname === item.href ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark dark:hover:bg-opacity-[8%] hover:bg-opacity-[8%] hover:bg-primary-light dark:hover:bg-primary-dark"}`}*/}
            {/*                                href={item.href}>*/}
            {/*                                {item.name}*/}
            {/*                            </Link>*/}
            {/*                        </li>*/}
            {/*                    )}*/}
            {/*                </ul>*/}

            {/*            </div>*/}
            {/*        </Transition.Child>*/}
            {/*    </div>*/}


            {/*</Transition.Root>*/}
            <div
                className={"h-[64px] border-b border-outline-variant-light dark:border-outline-variant-dark flex items-center px-4 md:px-6 z-999 fixed bg-surface-light dark:bg-surface-dark w-full top-0 left-0 py-2"}>
                <div className={"h-12 w-12 "}>
                    <svg className={"text-on-surface-light dark:text-on-surface-dark"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 749 678.83">
                        <g id="Shape_1" data-name="Shape 1" style={{isolation:"isolate"}}>
                            <g id="Shape_1-2" data-name="Shape 1">
                                <path
                                    d="M760.48,272.6a374.31,374.31,0,0,0-31.62-21.08C627.47,386.3,489.5,431.44,403,463c-89.12,32.52-193.49,94.78-205,181-8.47,63.44,12.85,111.48,24.71,132.44a376.4,376.4,0,0,0,95.53,100.69c-13.68-28-40.8-92.42-42.24-165.13-1.93-97.47,32.92-130.84,98-172s178.48-79.65,278-161C729.5,315.65,753.61,283.66,760.48,272.6Zm13.66,10.63c-2,37.39-26.34,69-56.14,122.77-37.41,67.45-16.58,119-11,150s-11.6,30-27,31-18.45-.57-16,12c6.53,34.36-17,40.32-27,45,1.31,15.67-.77,22.71-11,29s-11.06,12.49-11,25c-4.45,53.68-43.88,58.76-85,37s-74.58-53.26-106-77c17.48,148.55.44,189.76,152,181,107.14-6.2,158.74,21.85,179.79,38.83,94.6-68,156.21-179,156.21-304.33C912,456.42,858.27,351.9,774.14,283.23ZM326,457c44.71-19.1,146.62-29.52,237-83,82.34-48.73,139.15-119.89,148.6-132.16A373,373,0,0,0,537.5,199C330.67,199,163,366.67,163,573.5c0,3.11,0,6.2.12,9.29C229.37,489.53,283.23,475.27,326,457Z"
                                    transform="translate(-163 -199)" fill="currentColor"/>
                            </g>
                        </g>
                    </svg>

                </div>
                <ul className={"mr-6 flex text-title-small font-medium flex-grow items-center space-x-reverse space-x-4"}>
                    <li className={"cursor-pointer"}>
                        <a href={"/"} className={`${router.pathname === "/" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            خانه
                        </a>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/services"} className={`${router.pathname === "/services" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            خدمات
                        </Link>
                    </li>
                    <li className={"cursor-pointer"}>
                        <a className={`${router.pathname === "/blog" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            بلاگ
                        </a>
                    </li>
                    <li className={"cursor-pointer"}>
                        <a className={`${router.pathname === "/products" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            نوبت دهی
                        </a>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/about-us"} className={`${router.pathname === "/about-us" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            درباره ما
                        </Link>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/contact-us"} className={`${router.pathname === "/contact-us" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            تماس با ما
                        </Link>
                    </li>

                </ul>
                {/*<div*/}
                {/*    className={`*/}
                {/*         transition-all duration-300 ml-6  relative  focus-within:w-[480px] w-[390px] h-[48px]  ${isOpenSearch ? "rounded-t-[16px] bg-surface-container-high-light dark:bg-surface-container-high-dark w-[480px]  border-b border-outline-light dark:border-outline-dark" : isShow ? "dark:bg-surface-container-high-dark bg-surface-container-high-light rounded-full " : "dark:focus-within:bg-surface-container-high-dark  rounded-full dark:hover:bg-surface-container-high-dark focus-within:border-0 hover:border-0 focus-within:bg-surface-container-high-light hover:bg-surface-container-high-light bg-surface-light dark:bg-surface-dark border border-outline-variant-light dark:border-outline-variant-dark"}`}>*/}
                {/*    <input onChange={(e) => setSearchText(e.target.value)} onClick={() => setIsOpenSearch(true)}*/}
                {/*           placeholder={"جستجو"}*/}
                {/*           className={"h-full focus:ring-0 focus:outline-none text-body-large placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark text-on-surface-light dark:text-on-surface-dark  pr-[56px] w-full bg-transparent"}/>*/}
                {/*    <Icon*/}
                {/*        className={"absolute text-on-surface-light dark:text-on-surface-dark top-1/2 transform -translate-y-1/2 right-4"}*/}
                {/*        type={"outline"}>*/}
                {/*        search*/}
                {/*    </Icon>*/}


                {/*</div>*/}

                <button onClick={() => setIsSettingOpen(true)}
                        className={`ml-2 hover:bg-opacity-[8%] rounded-full dark:hover:bg-opacity-[8%] dark:hover:bg-on-surface-variant-dark hover:bg-on-surface-variant-light transform flex items-center justify-center   w-[40px] h-[40px] group  `}>

                    <Icon
                        className={`text-on-surface-variant-light material-symbols-outlined group-hover:font-vs-[1_400_0_24] font-vs-[0_400_0_24] dark:text-on-surface-variant-dark`}
                        type={"outline"}>
                        settings
                    </Icon>


                </button>
            </div>
        </div>
    )
}
