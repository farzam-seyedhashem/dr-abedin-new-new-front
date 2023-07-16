import React, {useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {Fragment} from "react";
import Link from "next/link";
import SliderInput from "./inputs/SliderInput";
import Typography from "./assets/Typography";
import {useRouter} from "next/router";
import Button from "@/components/buttons/Button";


export default function Example({filters}) {
    const [selectedBrand, setSelectedBrand] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [filterSelectedPage, setFilterSelectedPage] = useState(0)
    const [filterSelected, setFilterSelected] = useState({})
    // const [price,setPrice] = useRouter([])
    const router = useRouter()
    const filterTitles = [
        {
            id: "make",
            filterKey:"make",
            title: "Car Brand",
            description: "Filter your inventory by brand",
            icon: () => {
                return (
                    <svg className={"mr-4"} xmlns="http://www.w3.org/2000/svg" height="24px"
                         viewBox="0 0 24 24"
                         width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 6h10.29l1.04 3H5.81l1.04-3zM19 16H5v-4.66l.12-.34h13.77l.11.34V16z"/>
                        <circle cx="7.5" cy="13.5" r="1.5"/>
                        <circle cx="16.5" cy="13.5" r="1.5"/>
                    </svg>
                )
            }
        },
        // {
        //     id: "models",
        //     title: "Model",
        //     description:"Filter your inventory by model",
        //
        //     icon: () => {
        //         return (
        //             <svg className={"mr-4"} xmlns="http://www.w3.org/2000/svg" height="24px"
        //                  viewBox="0 0 24 24"
        //                  width="24px" fill="currentColor">
        //                 <path d="M0 0h24v24H0V0z" fill="none"/>
        //                 <path
        //                     d="M12 4H5C3.34 4 2 5.34 2 7v8c0 1.66 1.34 3 3 3l-1 1v1h1l2-2h2v-5H4V6h9v2h2V7c0-1.66-1.34-3-3-3zM5 14c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm15.57-4.34c-.14-.4-.52-.66-.97-.66h-7.19c-.46 0-.83.26-.98.66l-1.42 4.11v5.51c0 .38.31.72.69.72h.62c.38 0 .68-.38.68-.76V18h8v1.24c0 .38.31.76.69.76h.61c.38 0 .69-.34.69-.72l.01-1.37v-4.14l-1.43-4.11zm-8.16.34h7.19l1.03 3h-9.25l1.03-3zM12 16c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
        //             </svg>
        //         )
        //     }
        // },
        {
            id: "year",
            filterKey:"year",
            title: "Year",
            description: "Filter your inventory by year",

            icon: () => {
                return (
                    <svg className={"mr-4"} xmlns="http://www.w3.org/2000/svg" height="24px"
                         viewBox="0 0 24 24"
                         width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"/>
                    </svg>
                )
            }
        },
        {
            id: "exterior",
            filterKey:"exterior",
            title: "Exterior Color",
            description: "Filter your inventory by exterior color",
            icon: () => {
                return (
                    <svg className={"mr-4"} xmlns="http://www.w3.org/2000/svg"
                         enableBackground="new 0 0 24 24"
                         height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                        <g>
                            <rect fill="none" height="24" width="24"/>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <path
                                            d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z"/>
                                        <circle cx="6.5" cy="11.5" r="1.5"/>
                                        <circle cx="9.5" cy="7.5" r="1.5"/>
                                        <circle cx="14.5" cy="7.5" r="1.5"/>
                                        <circle cx="17.5" cy="11.5" r="1.5"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                )
            }
        },
        {
            id: "interior",
            filterKey:"interior",
            title: "Interior Color",
            description: "Filter your inventory by interior color",

            icon: () => {
                return (
                    <svg className={"mr-4"} xmlns="http://www.w3.org/2000/svg"
                         enableBackground="new 0 0 24 24"
                         height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                        <g>
                            <path d="M0,0h24v24H0V0z" fill="none"/>
                        </g>
                        <g>
                            <path
                                d="M12,4.81L12,19c-3.31,0-6-2.63-6-5.87c0-1.56,0.62-3.03,1.75-4.14L12,4.81 M12,2L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87c0-2.17-0.9-4.14-2.35-5.57l0,0L12,2z"/>
                        </g>
                    </svg>
                )
            }
        },
        {
            id: "price",
            filterKey:"price",
            title: "Price",
            description: "Filter your inventory by price",

            icon: () => {
                return (
                    <svg className={"mr-4"} xmlns="http://www.w3.org/2000/svg" height="24px"
                         viewBox="0 0 24 24"
                         width="24px" fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"/>
                        <circle cx="6.5" cy="6.5" r="1.5"/>
                    </svg>
                )
            }
        },
    ]
    const handleFilter = (key, value) => {
        // if (key === "ma")
        if (key !== "price") {
            if (typeof filterSelected[key] !== typeof []) {
                filterSelected[key] = []
            }
            let index = filterSelected[key].findIndex(item => item === value);
            let arr = filterSelected[key]
            if (index < 0) {
                arr.push(value)
            } else {
                arr.splice(index, 1)
            }
            setFilterSelected({...filterSelected, [key]: arr})
        }else{
            setFilterSelected({...filterSelected, [key]: value})
        }
    }
    const makeFilter = async () => {

        Object.keys(filterSelected).map((filterKey, i) => {

            if (filterKey !== "price") {
                let query = []
                filterSelected[filterKey].map((item, index) =>
                    query += (index !== 0 ? "," : "") + item
                )
                router.query[filterKey] = query
            }else{

                router.query.price = `${filterSelected[filterKey][0]},${filterSelected[filterKey][1]}`

            }
        })
        console.log(router.pathname)
        router.pathname="/buy-used-cars"
        // console.log(router.pathname)
        await router.push(router,router,{shallow:true})
        // router.push("/buy-used-car"+router.query).then(e=>console.log("ewk"))
        // router.push()
        // router.reload()
    }
    return (

        <div className="relative container mx-auto">
            <Typography type={"h2"} className="px-6 mb-[24px] text-on-background-light dark:text-on-background-dark">
                Search Inventory
            </Typography>
            <div className={"grid md:grid-cols-2 grid-cols-1 gap-2"}>
                <div onClick={() => setIsOpen(true)}
                     className="rounded-[24px] cursor-pointer w-full py-6 px-6  bg-surface-container-highest-light dark:bg-surface-container-highest-dark transition duration-300 ">
                    <div>
                        <p className="mb-1 text-title-large font-medium text-on-surface-light dark:text-on-surface-dark">
                            Filter Inventory
                        </p>
                        <p className="text-body-large text-on-surface-variant-light dark:text-on-surface-variant-dark">
                            Click the box to select parameters and filter your inventory.
                        </p>
                    </div>
                </div>
                <Link href={"/buy-used-cars"}>
                    <div
                        className="rounded-[24px] cursor-pointer w-full py-6 px-6  bg-surface-container-highest-light dark:bg-surface-container-highest-dark transition duration-300 ">
                        <p className="mb-1 text-title-large font-medium text-on-surface-light dark:text-on-surface-dark">
                            Show All Car without Filter
                        </p>
                        <p className="text-body-large text-on-surface-variant-light dark:text-on-surface-variant-dark">
                            Click on the box to display all the available inventory.
                        </p>
                    </div>
                </Link>
                {/*<Link href={"/blog"}>*/}
                {/*    <div*/}
                {/*        className="rounded-[24px] w-full py-6 px-6  bg-surface-light dark:bg-surface-dark hover:bg-secondary-container-light dark:bg-secondary-container-dark transition duration-300 ">*/}
                {/*        <p className="text-[24px] mb-2 leading-[32px] font-medium text-on-secondary-container-light dark:text-on-secondary-container-dark">*/}
                {/*            Our posts*/}
                {/*        </p>*/}
                {/*        <p className="leading-[24px] text-on-secondary-container-light dark:text-on-secondary-container-dark">*/}
                {/*            click on box to show you all our posts in blog*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</Link>*/}
                {/*<Link href={"/services"}>*/}
                {/*    <div*/}
                {/*        className="rounded-[24px] w-full py-6 px-6  bg-surface-light dark:bg-surface-dark hover:bg-secondary-container-light dark:bg-secondary-container-dark transition duration-300 ">*/}
                {/*        <p className="text-[24px] mb-2 leading-[32px] font-medium text-on-secondary-container-light dark:text-on-secondary-container-dark">*/}
                {/*            Our Services*/}
                {/*        </p>*/}
                {/*        <p className="leading-[24px] text-on-secondary-container-light dark:text-on-secondary-container-dark">*/}
                {/*            click on box to see our services*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</Link>*/}
            </div>

            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-999 overflow-hidden" onClose={setIsOpen}>
                    <div className="absolute inset-0 flex overflow-hidden">
                        <Dialog.Overlay className="absolute bg-inverse-surface-light dark:bg-inverse-surface-dark dark:bg-opacity-70 bg-opacity-70 inset-0"/>
                        <div
                            className="fixed   inset-0 items-center justify-center transform -translate-y-1/2 top-1/2  h-full w-full mx-auto  flex">
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
                                    className={"w-full relative p-6 bg-surface-light dark:bg-surface-dark w-full sm:w-[560px] sm:rounded-[28px]"}>
                                    <svg className={"text-secondary-light dark:text-secondary-dark mx-auto mb-4"}
                                         xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                                         fill={"currentColor"}>
                                        <path
                                            d="M10.95 21.175V15h2.2v2h8v2.175h-8v2Zm-8.1-2V17h6.2v2.175Zm4-4.075v-2h-4v-2.2h4v-2h2.2v6.2Zm4.1-2v-2.2h10.2v2.2Zm4-4.1V2.825h2.2v2h4V7h-4v2ZM2.85 7V4.825h10.2V7Z"/>
                                    </svg>
                                    <h1 className={`mb-4 text-on-surface-light dark:text-on-surface-dark text-[24px] leading-[32px] text-center`}>
                                        {filterSelectedPage === 0 ? "Filter Car" : filterTitles[filterSelectedPage - 1].title}
                                    </h1>
                                    <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark mb-6 text-sm leading-[20px] tracking-[.25]"}>
                                        {filterSelectedPage === 0 ? "This will filter inventory by blow options. each step you can select all filter" +
                                            "                                        on section or choose one of it." : filterTitles[filterSelectedPage - 1].description}

                                    </p>
                                    {filterSelectedPage !== 0 &&
                                        <div className={"h-px w-full mb-1 bg-outline-variant-light"}/>}

                                    {filterSelectedPage !== 0 && filterSelectedPage !== 5 &&
                                        <div className={"h-[300px] overflow-scroll pt-3"}>
                                            {filters[filterTitles[filterSelectedPage - 1].id]?.map((item, i) =>
                                                    item && <button key={i}
                                                                    onClick={() => handleFilter(filterTitles[filterSelectedPage - 1].id, item)}
                                                                    className={`${filterSelected[filterTitles[filterSelectedPage - 1].id]?.findIndex(l => l === item) > -1 ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark h-8 pl-2 pr-4" : "border border-outline-light dark:border-outline-dark text-on-surface-variant-light dark:text-on-surface-variant-dark h-[30px] px-4"}  rounded-lg mr-2 mb-3 text-sm inline-flex items-center tracking-[.1px] leading-[20px] font-medium `}>
                                                        {filterSelected[filterTitles[filterSelectedPage - 1].id]?.findIndex(l => l === item) > -1 ?
                                                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg"
                                                                 height="18px"
                                                                 viewBox="0 0 24 24" width="18px" fill="currentColor">
                                                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                                                <path
                                                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                                                            </svg> : <div className={"h-[18px]"}/>}
                                                        {item}
                                                    </button>
                                            )}
                                        </div>}
                                    {filterSelectedPage === 5 && <div className={"h-[300px] overflow-scroll pt-3"}>

                                        <SliderInput min={filters.price[0]} max={filters.price[1]}
                                                     onChangeEvent={(data) => handleFilter("price", [data.min, data.max])}/>
                                        <Typography className={"text-on-surface-light dark:text-on-surface-dark font-medium mt-2"} type={"p"}>
                                            Inventory price between
                                            <span className={"text-primary-light dark:text-primary-dark mx-2"}>
                                                $ {filterSelected?.price ? filterSelected.price[0] : filters.price[0]}
                                            </span>
                                            to
                                            <span className={"text-primary-light dark:text-primary-dark mx-2"}>
                                                $ {filterSelected?.price ? filterSelected.price[1] : filters.price[1]}
                                            </span>
                                        </Typography>
                                    </div>}
                                    {filterSelectedPage === 0 && <ul
                                        className={"h-[310px] text-on-surface-variant text-on-surface-variant-light dark:text-on-surface-variant-dark py-4 space-y-4 tracking-[0.25px] leading-[24px]"}>
                                        {filterTitles.map((item, i) => <li key={i} className={"flex items-center"}>
                                            <item.icon/>
                                            {item.title}
                                        </li>)}
                                    </ul>}
                                    {filterSelectedPage !== 0 &&
                                        <div className={"h-px w-full mt-1 mb-2 bg-outline-variant-light"}/>}
                                    <div
                                        className={"flex space-x-2 mt-6 bottom-0 left-0 w-full justify-end"}>
                                        <Button
                                            onClick={() => setFilterSelectedPage((prev) => {
                                                if (prev === 0) {
                                                    setIsOpen(false)
                                                    return 0
                                                } else {
                                                    return --prev
                                                }
                                            })}
                                        >
                                            {filterSelectedPage === 0 ? "Cancel" : "Back"}
                                        </Button>
                                        <button
                                            onClick={() => {
                                                filterSelectedPage === filterTitles.length ? makeFilter() : setFilterSelectedPage((prev) => {
                                                    return ++prev
                                                })
                                            }}
                                            className="bg-primary-light dark:bg-primary-dark text-on-primary-light dark:text-on-primary-dark rounded-full px-6 h-10"
                                        >
                                            {filterSelectedPage === filterTitles.length ? "Search" : "Next"}
                                        </button>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>


        </div>

    )
}
