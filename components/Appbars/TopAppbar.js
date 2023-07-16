import IconButton from "@/components/buttons/IconButton";
import React, {useEffect, useState} from "react";
import Icon from "@/components/assets/Icon";
import useSWR from "swr";
import {API} from "@/config";
import Link from "next/link";
import Image from 'next/legacy/image'
import Breadcrumbs from "@/components/BreadCrumbs";
import {ModalSideSheet} from "@/components/SideSheet/ModalSideSheet";
import SettingList from "@/components/settings/SettingList";

export default function TopAppbar({title,breadCrumbs,modeType,colorMode,handleChangeMode,handleChangeColor}) {
    const [isShow, setIsShow] = useState(false)
    const [isDark, setIsDark] = useState(false)
    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [isSettingOpen,setIsSettingOpen] = useState(false)
    const {data: searchData, error, isValidating, mutate} = useSWR(`${API}/search?s=${searchText}`)

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
    useEffect(() => {
        let body = document.getElementsByTagName("body")[0]
        let appbar = document.getElementById("appbar")
        window.addEventListener("scroll", (event) => {
            if (document.documentElement.scrollTop > 0) {
                setIsShow(false)
            } else {
                setIsShow(true)
            }
        });
    }, [])
    const logos = {
        "brands": [
            {
                "name": "BMW",
                "logo": "bmw-logo.svg",
                "bg": "#000"
            },
            {
                "name": "MINI",
                "logo": "mini-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "BENZ",
                "logo": "benz-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "mercedes-benz",
                "logo": "benz-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "Infiniti",
                "logo": "infiniti-logo.svg",
                "bg": "#000"
            },
            {
                "name": "Hyundai",
                "logo": "hyundai-logo.svg",
                "bg": "rgb(1, 44, 95)"
            },
            {
                "name": "Volvo",
                "logo": "volvo-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "Honda",
                "logo": "honda-logo.svg",
                "bg": "#c00"
            },
            {
                "name": "Ford",
                "logo": "ford-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "Fiat",
                "logo": "fiat-logo.png",
                "bg": "#fff"
            },
            {
                "name": "Audi",
                "logo": "audi-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "Cadillac",
                "logo": "cadillac-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "Land Rover",
                "logo": "land-rover.svg",
                "bg": "#fff"
            },
            {
                "name": "Mazda-logo",
                "logo": "mazda-logo.png",
                "bg": "#fff"
            },
            {
                "name": "Kia",
                "logo": "kia-logo.png",
                "bg": "#fff"
            },
            {
                "name": "RAM",
                "logo": "ram-logo.jpg",
                "bg": "#fff"
            },
            {
                "name": "Mitsubishi",
                "logo": "mitsubishi-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "Acura",
                "logo": "acura-logo.svg",
                "bg": "#000"
            },
            {
                "name": "Nissan",
                "logo": "nissan-logo.svg",
                "bg": "#000"
            },
            {
                "name": "Toyota",
                "logo": "toyouta-logo.svg",
                "bg": "#000"
            },
            {
                "name": "GMC",
                "logo": "GMC-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "Doge",
                "logo": "doge-logo.png",
                "bg": "#000"
            },
            {
                "name": "Lexus",
                "logo": "lexus-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "Jaguar",
                "logo": "jaguar-logo.png",
                "bg": "#000"
            },
            {
                "name": "Lincoln",
                "logo": "Lincoln-logo.png",
                "bg": "#fff"
            },
            {
                "name": "Jeep",
                "logo": "jeep-logo.png",
                "bg": "#000"
            },
            {
                "name": "Chevrolet",
                "logo": "chevrolet-logo.png",
                "bg": "#fff"
            },
            {
                "name": "Porsche",
                "logo": "porsche-logo.svg",
                "bg": "#fff"
            },
            {
                "name": "Tesla",
                "logo": "tesla-logo.svg",
                "bg": "#fff"
            }
        ]
    }
    useEffect(() => {
        console.log()
    }, [searchText])
    const [showAllInventory,setShowAllInventory] = useState(false)
    const [showAllMake,setShowAllMake] = useState(false)
    const [showAllPosts,setShowAllPosts] = useState(false)

    return (
        <>
            <ModalSideSheet className={"md:block hidden"} withBackIconButton title={"تنظیمات"}
                            setIsOpen={setIsSettingOpen} isOpen={isSettingOpen}
                            width={400} isNotFixedHeight isModal>
                <SettingList modeType={modeType} colorMode={colorMode} handleChangeMode={handleChangeMode} handleChangeColor={handleChangeColor}/>
            </ModalSideSheet>
            <div
                className={`${!isShow && "bg-surface-light dark:bg-surface-dark"} hidden md:flex sticky top-0 w-full bg-background-light dark:bg-background-dark z-[888]  pr-4 pl-2 items-center py-2`}>
                <div className={"flex-1"}>
                    <h1 className={`${isShow ? "hide-menu " : "show-menu mr-[24px]"}  font-bold italic w-5/12  truncate overflow-hidden  text-title-large text-on-surface-light dark:text-on-surface-dark `}>
                        {title}
                    </h1>
                </div>

                <div
                    className={`
                         transition-all duration-300 ml-6  relative  focus-within:w-[480px] w-[390px] h-[48px]  ${isOpenSearch ? "rounded-t-[16px] bg-surface-container-high-light dark:bg-surface-container-high-dark w-[480px]  border-b border-outline-light dark:border-outline-dark" : isShow ? "dark:bg-surface-container-high-dark bg-surface-container-high-light rounded-full " : "dark:focus-within:bg-surface-container-high-dark  rounded-full dark:hover:bg-surface-container-high-dark focus-within:border-0 hover:border-0 focus-within:bg-surface-container-high-light hover:bg-surface-container-high-light bg-surface-light dark:bg-surface-dark border border-outline-variant-light dark:border-outline-variant-dark"}`}>
                    <input onChange={(e) => setSearchText(e.target.value)} onClick={() => setIsOpenSearch(true)}
                           placeholder={"جستجو"}
                           className={"h-full focus:ring-0 focus:outline-none text-body-large placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark text-on-surface-light dark:text-on-surface-dark  pr-[56px] w-full bg-transparent"}/>
                    <Icon
                        className={"absolute text-on-surface-light dark:text-on-surface-dark top-1/2 transform -translate-y-1/2 right-4"}
                        type={"outline"}>
                        search
                    </Icon>
                    {isOpenSearch && <div
                        className={"absolute overflow-scroll rounded-b-[16px] pb-4 bg-surface-container-high-light dark:bg-surface-container-high-dark top-[48px] left-0 w-full h-[400px] z-[999]"}>
                        {(searchData && searchText !== "") && searchData.data.inventories.length!==0&&<div className={"py-2 border-b dark:border-outline-dark border-outline-light"}>
                            <div
                                className={"flex justify-between pl-6 text-title-small pb-1 pr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark font-medium items-center"}>
                                <h2>Inventories Find</h2>
                                <a className={"flex underline hover:text-on-primary-container-light dark:text-on-primary-container-dark items-center text-label-large text-primary-light dark:text-primary-dark "}>

                                    Show More
                                    {/*<Icon type={"outline"}>*/}
                                    {/*    arrow_right*/}
                                    {/*</Icon>*/}
                                </a>
                            </div>
                            <ul>
                                {(searchData && searchText !== "") && searchData.data.inventories.map((item, i) => (i < 4 || showAllInventory) &&
                                    <li key={i} className={"text-black relative group h-fit"}>
                                        <div
                                            className={"group-hover:block inset-0 hidden absolute bg-on-surface-light dark:bg-on-surface-dark bg-opacity-[8%] dark:bg-opacity-[8%]"}/>
                                        <Link className={"py-2 pr-4 pl-6 flex items-center"}
                                              href={`/buy-used-cars/${item.VIN}`}>
                                            <Icon
                                                className={"text-on-surface-variant-light ml-4 dark:text-on-surface-variant-dark"}
                                                type={"outline"}>
                                                search
                                            </Icon>
                                            <div className={"w-7/12 mr-auto"}>
                                                <h6 className={"text-on-surface-light w-full truncate w-full dark:text-on-surface-dark text-body-large"}>
                                                    {item.Year + " " + item.Make + " " + item.Model}
                                                </h6>
                                            </div>
                                            {/*<a className={" group-hover:block hidden text-primary-light dark:text-primary-dark underline"}>*/}
                                            {/*    show detail*/}
                                            {/*</a>*/}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>}
                        {(searchData && searchText !== "") && searchData.data.makes.length!==0&&<div className={"py-2  border-b dark:border-outline-dark border-outline-light "}>
                            <div
                                className={"flex  justify-between pl-6 text-title-small pb-1 pr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark font-medium items-center"}>
                                <h2>Brands Find</h2>
                                <a className={"text-on-surface-light dark:text-on-surface-dark"}>
                                    <Icon type={"outline"}>
                                        arrow_right
                                    </Icon>
                                </a>
                            </div>
                            <ul className={"grid grid-cols-4 gap-2 px-4"}>
                                {(searchData && searchText !== "") && searchData.data.makes.map((item, i) => (i < 4 || showAllMake) &&
                                    <div key={i} className={""}>

                                        <Link
                                            className={"flex justify-center hover:bg-on-surface-light dark:hover:bg-on-surface-dark dark:hover:bg-opacity-[8%] py-3 rounded-[8px] hover:bg-opacity-[8%]"}
                                            href={`/buy-used-cars?make=${item}`}>
                                            <div>
                                                <div
                                                    style={{backgroundColor: logos.brands.find(b => b.name.toLowerCase().includes(item.toLowerCase().replace("-", " ")))?.bg}}
                                                    className={"rounded-full mx-auto flex items-center justify-center h-[48px] w-[48px]"}>
                                                    <div className={"h-[36px] w-[36px]"}>
                                                        <Image height={24} width={24} objectFit={"contain"}
                                                               layout={"responsive"}
                                                               src={"/brands-logo-new/" + (logos.brands.find(b => b.name.toLowerCase().includes(item.toLowerCase().replace("-", " ")))?.logo)}/>
                                                    </div>
                                                </div>
                                                <div
                                                    className={"text-center text-on-surface-light dark:text-on-surface-dark text-label-medium mt-2 w-full"}>
                                                    {item}
                                                </div>
                                            </div>

                                        </Link>

                                    </div>
                                )}
                            </ul>
                        </div>}
                        {(searchData && searchText !== "") && searchData.data.posts.length!==0&&<div className={"py-2 "}>
                            <div
                                className={"flex justify-between pl-6 text-title-small pb-1 pr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark font-medium items-center"}>
                                <h2>Posts Find</h2>
                                <a className={"text-on-surface-light dark:text-on-surface-dark"}>
                                    <Icon type={"outline"}>
                                        arrow_right
                                    </Icon>
                                </a>
                            </div>
                            <ul>
                                {(searchData && searchText !== "") && searchData.data.posts.map((item, i) => (i < 4 || showAllPosts) &&
                                    <li key={i} className={"text-black relative group h-fit"}>
                                        <div
                                            className={"group-hover:block inset-0 hidden absolute bg-on-surface-light dark:bg-on-surface-dark bg-opacity-[8%] dark:bg-opacity-[8%]"}/>
                                        <Link className={"py-2 pr-4 pl-6 flex items-center"}
                                              href={`/blog/${item.slug}`}>
                                            <Icon
                                                className={"text-on-surface-variant-light mr-4 dark:text-on-surface-variant-dark"}
                                                type={"outline"}>
                                                search
                                            </Icon>
                                            <div className={"w-7/12 mr-auto"}>
                                                <h6 className={"text-on-surface-light w-full truncate w-full dark:text-on-surface-dark text-body-large"}>
                                                    {item.title}
                                                </h6>
                                            </div>
                                            {/*<a className={" group-hover:block hidden text-primary-light dark:text-primary-dark underline"}>*/}
                                            {/*    show detail*/}
                                            {/*</a>*/}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>}
                    </div>
                    }

                </div>

                <button onClick={()=>setIsSettingOpen(true)}
                        className={`ml-2 hover:bg-opacity-[8%] rounded-full dark:hover:bg-opacity-[8%] dark:hover:bg-on-surface-variant-dark hover:bg-on-surface-variant-light transform flex items-center justify-center   w-[40px] h-[40px] group  `}>

                        <Icon
                            className={`text-on-surface-variant-light material-symbols-outlined group-hover:font-vs-[1_400_0_24] font-vs-[0_400_0_24] dark:text-on-surface-variant-dark`}
                            type={"outline"}>
                            settings
                        </Icon>


                </button>
                <IconButton href={"tel:+14434222300"} component={"a"}>
                    call
                </IconButton>

            </div>
            <div
                className={`${isShow ? "show-menu md:!flex !hidden" : "hide-menu"}  border-b border-outline-light px-4  z-[400] bg-background-light dark:bg-background-dark sticky top-[64px] w-full    items-end `}>
                <div
                    className={"h-[88px]  flex items-end   pb-[20px]"}>
                    <div>
                        {breadCrumbs&&<Breadcrumbs items={breadCrumbs}/>}
                    <h1 className={" text-headline-medium text-on-background-light font-[950] dark:text-on-background-dark"}>
                        {title}
                    </h1>
                    </div>
                </div>
            </div>
        </>
    )
}