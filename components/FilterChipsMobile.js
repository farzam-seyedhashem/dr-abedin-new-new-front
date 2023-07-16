import {Dialog, Transition} from '@headlessui/react'
import React, {Fragment, useEffect, useState} from 'react'
import DialogHead from "./dialogs/DialogHead";
import DialogContent from "./dialogs/DialogContent";
import DialogAction from "./dialogs/DialogAction";
import Button from "./buttons/Button";
import Checkbox from "./inputs/Checkbox";
import {useRouter} from "next/router";
import FullDialog from "./dialogs/FullDialog";
import SliderInput from "./inputs/SliderInput";
import Typography from "./assets/Typography";
import Icon from "@/components/assets/Icon";

function FilterChips({filters, filtersKey, handle}) {
    const router = useRouter()
    let [selectedItem, setSelectedItem] = useState(router.query[filtersKey] ? router.query[filtersKey].split(",") : [])
    const handleFilter = (filter) => {
        let index = selectedItem.findIndex(item => item === filter);
        let arr = selectedItem
        if (index < 0) {
            arr.push(filter)
        } else {
            arr.splice(index, 1)
        }
        setSelectedItem(arr)
        handle(filtersKey, arr)
    }

    return (
        <div>
            {filters.map((filter, i) =>
                    filter && <button key={i} onClick={() => handleFilter(filter)}
                                      className={`${selectedItem.findIndex(item => item === filter) > -1 ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark h-8 pl-2 pr-4" : "border border-outline-light dark:border-outline-dark text-on-surface-variant-light dark:text-on-surface-variant-dark h-[30px] px-4"} rounded-lg mr-2 mb-3 text-sm inline-flex items-center tracking-[.1px] leading-[20px] font-medium`}>
                        {selectedItem.findIndex(item => item === filter) > -1 ?
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg"
                                 height="18px"
                                 viewBox="0 0 24 24" width="18px" fill="currentColor">
                                <path d="M0 0h24v24H0V0z" fill="none"></path>
                                <path
                                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                            </svg> : <div className={"h-[18px]"}/>}
                        {filter}
                    </button>
            )}
        </div>
    )
}

function FilterMile({filters, handle}) {
    const router = useRouter()
    let [filterSelected, setFilterSelected] = useState(router.query["mile"] ? [0, router.query["mile"]] : [])
    return (
        <>
            <SliderInput id={"mile"} steps={1} isNotDouble={true} maxValue={parseInt(filterSelected[1])} minValue={0}
                         min={0} max={parseInt(filters[1])}
                         onChangeEvent={(data) => {
                             setFilterSelected([data.min, data.max])
                             handle("mile", [data.min, data.max])
                         }}/>
            <Typography className={"text-on-surface-light dark:text-on-surface-dark font-medium mt-2"} type={"p"}>
                Inventory mileage from 0 to
                <span className={"text-primary-light dark:text-primary-dark mx-2"}>
                                                {filterSelected[1] ? filterSelected[1] : filters[1]} k miles
                                            </span>
            </Typography>
        </>
    )
}

function FilterPrice({price, handle}) {
    const router = useRouter()
    let [selectedItem, setSelectedItem] = useState((router.query["price"] && router.query["price"].split(",")) || [])
    const handleFilter = (filter) => {
        setSelectedItem(filter)
        handle("price", filter)
    }
    return (
        <>
            <SliderInput id={"price"} minValue={parseInt(selectedItem[0]) || price[0]}
                         maxValue={parseInt(selectedItem[1]) || price[1]} min={price[0]} max={price[1]}
                         onChangeEvent={(data) => handleFilter([data.min, data.max])}/>
            <Typography className={"text-on-surface-light dark:text-on-surface-dark font-medium mt-2"} type={"p"}>
                Inventory price between
                <span className={"text-primary-light dark:text-primary-dark mx-2"}>
                                                $ {selectedItem ? selectedItem[0] : price[0]}
                                            </span>
                to
                <span className={"text-primary-light dark:text-primary-dark mx-2"}>
                                                $ {selectedItem ? selectedItem[1] : price[1]}
                                            </span>
            </Typography>
        </>
    )
}

export default function FilterChipsMobile({
                                              filters,
                                              mile,
                                              sort,
                                              setSort,
                                              price,
                                              sortList,
                                              updateFilter,
                                              filterItems,
                                              setIsOpen,
                                              isOpen
                                          }) {
    const router = useRouter()
    const [filterSelected, setFilterSelected] = React.useState({})
    // const [sort, setSort] = useState('make')
    const handleFilter = (key, value) => {
        if (key !== "price") {
            if (typeof filterSelected[key] !== typeof []) {
                setFilterSelected({...filterSelected, [key]: []})

            }

            setFilterSelected({...filterSelected, [key]: value})
        } else {

            setFilterSelected({...filterSelected, [key]: value})
        }
    }
    const makeFilter = async () => {
        console.log(filterSelected)
        Object.keys(filterSelected).map((filterKey, i) => {
            if (filterKey === "price") {
                router.query.price = `${filterSelected[filterKey][0]},${filterSelected[filterKey][1]}`

            } else if (filterKey === "mile") {
                router.query.mile = `${filterSelected[filterKey][1]}`

            } else {
                let query = []
                filterSelected[filterKey].map((item, index) =>
                    query += (index !== 0 ? "," : "") + item
                )
                router.query[filterKey] = query
            }
        })
        // console.log(router.pathname)
        await router.push(router).then(() => setIsOpen(false))
        // router.reload()
        // router.push("/buy-used-car"+router.query).then(e=>console.log("ewk"))
        // router.push()
        // router.reload()
    }
    return (
        <>
            <FullDialog setIsOpen={setIsOpen} isOpen={isOpen}>
                <DialogHead onClose={async () => {
                    await makeFilter()
                    setIsOpen(false)
                }} isFull
                            title={"Filter Inventory"}>

                </DialogHead>
                <DialogContent isFull>
                    {filters.map(item => item.id !== "price" && <>
                        <h2 className={"flex items-center text-title-small font-bold text-on-surface-light dark:text-on-surface-dark py-[8px]"}>
                            Filter by Car {item.title}
                        </h2>
                        <div>
                            <FilterChips handle={handleFilter} filtersKey={item.id} filters={item.items}/>
                        </div>
                    </>)}
                    <div className={"mb-4"}>
                        <h2 className={"flex items-center text-title-small font-bold text-on-surface-light dark:text-on-surface-dark py-[8px]"}>
                            Sort by
                        </h2>
                        <div
                            className={"h-[40px] border-outline-light overflow-hidden dark:border-outline-dark rounded-full border divide-x divide-outline-light dark:divide-outline-dark flex w-full "}>
                            {sortList.map((item,i) => <button key={i} onClick={async () => {
                                handleFilter("sort", [item.key])
                                setSort(item.key)
                            }}
                                                          className={`${item.key === sort ? "dark:bg-secondary-container-dark bg-secondary-container-light text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-light dark:text-on-surface-dark"} w-1/3 px-3 justify-center h-full text-label-large items-center flex  text-center`}>
                                {item.key === sort ? <Icon
                                    className={"mr-2 text-on-secondary-container-light dark:text-on-secondary-container-dark"}
                                    size={18} type={"outline"}>
                                    check
                                </Icon> : <div className={""}/>}

                                {item.name}
                            </button>)}
                        </div>
                    </div>
                    <h2 className={"flex items-center text-title-small font-bold text-on-surface-light dark:text-on-surface-dark mb-2"}>
                        Filter By Car Mile
                    </h2>
                    <FilterMile filters={mile} handle={handleFilter}/>
                    <h2 className={"flex items-center text-title-small font-bold text-on-surface-light dark:text-on-surface-dark mt-4 mb-2"}>
                        Filter By Car Price
                    </h2>
                    <FilterPrice price={price} handle={handleFilter}/>
                </DialogContent>

            </FullDialog>
            {/*<StandardDialog setIsOpen={setIsOpen} isOpen={isOpen}>*/}
            {/*    <DialogHead title={`Filter ${title}`}/>*/}
            {/*    <DialogContent className={"w-[400px] max-h-[400px] overflow-scroll"}>*/}
            {/*        {filterItems.map(item => <Checkbox value={itemSelected.findIndex(l => l === item) > -1}*/}
            {/*                                           onClick={handleSelectedItem} checkboxKey={item} label={item}/>)}*/}
            {/*    </DialogContent>*/}
            {/*    <DialogAction>*/}
            {/*        <Button onClick={() => setIsOpen(false)}>*/}
            {/*            Close*/}
            {/*        </Button>*/}
            {/*        <Button onClick={handleFilter} icon={"filter_alt"} type={"filled"}>*/}
            {/*            Filter*/}
            {/*        </Button>*/}

            {/*    </DialogAction>*/}
            {/*</StandardDialog>*/}
        </>
    )
}
