import {Dialog, Transition} from '@headlessui/react'
import React, {Fragment, useState} from 'react'
import StandardDialog from "./dialogs/StandardDialog";
import DialogHead from "./dialogs/DialogHead";
import DialogContent from "./dialogs/DialogContent";
import DialogAction from "./dialogs/DialogAction";
import Button from "./buttons/Button";
import Checkbox from "./inputs/Checkbox";
import {useRouter} from "next/router";
import SliderInput from "./inputs/SliderInput";
import Typography from "./assets/Typography";
import Icon from "@/components/assets/Icon";

export default function FilterMileModal({filterKey, title, filters}) {
    let [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    let [filterSelected, setFilterSelected] = useState(router.query[filterKey]?[0,router.query[filterKey]] : [])
    let filterIsHave = router.query[filterKey]?[0,router.query[filterKey]] : []
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // const handleSelectedItem = (key,value) => {
    //     console.log(key)
    //    setFilterSelected()
    // }
    const handleFilter = () => {
        // console.log(router.query)
        // let query = ""
        // filterSelected.map((item, index) =>
        //     query += (index !== 0 ? "," : "") + item
        // )
        if (parseInt(filterSelected[1]) === parseInt(filters[1])){
            delete router.query[filterKey]
        }else{
            router.query[filterKey] = `${filterSelected[1]}`
        }

        router.push(router).then(() => setIsOpen(false))
        // router.reload()


    }

    return (
        <>
            <div
                className={`${filterIsHave.length !== 0 ? "border-b" : ""} border-b py-[8px] h-[48px] pl-4 pr-6 justify-between flex items-center border-outline-variant-light dark:border-outline-variant-dark`}>
                <div className={"text-on-surface-light dark:text-on-surface-dark text-label-large"}>
                    {title}
                </div>

                <Icon onClick={openModal}
                      className={"text-on-surface-variant-light cursor-pointer dark:text-on-surface-variant-dark"}
                      type={"outline"}>
                    {(filterIsHave.length !== 0 && !(parseInt(filterSelected[0]) === parseInt(filters[0]) && parseInt(filterSelected[1]) === parseInt(filters[1]))) ? "edit" : "add"}
                </Icon>

            </div>
            {(filterIsHave.length !== 0 && !(parseInt(filterSelected[0]) === parseInt(filters[0]) && parseInt(filterSelected[1]) === parseInt(filters[1]))) &&
                <div className={"px-4 pb-4 pt-4 text-on-surface-light dark:text-on-surface-dark"}>
                    Inventory mileage from 0 to

                    <span className={"text-primary-light dark:text-primary-dark mx-2"}>
                                                {filterSelected[1] ? filterSelected[1] : filters[1]} k miles
                                            </span>
                </div>
            }
            <StandardDialog setIsOpen={setIsOpen} isOpen={isOpen}>
                <DialogHead title={`Filter ${title}`}/>
                <DialogContent className={"w-[400px] max-h-[400px] overflow-scroll"}>
                    {/*{console.log(filters,filterSelected)}*/}
                    <SliderInput steps={1} isNotDouble={true} maxValue={parseInt(filterSelected[1])} minValue={0}
                                 min={0} max={parseInt(filters[1])}
                                 onChangeEvent={(data) => setFilterSelected([data.min, data.max])}/>
                    <Typography className={"text-on-surface-light dark:text-on-surface-dark font-medium mt-2"}
                                type={"p"}>
                        Inventory mileage from 0 to
                        <span className={"text-primary-light dark:text-primary-dark mx-2"}>
                                                {filterSelected[1] ? parseInt(filterSelected[1])  : parseInt(filters[1])} k miles
                                            </span>
                    </Typography>
                    {/*{filterItems.map(item => <Checkbox value={itemSelected.findIndex(l=>l===item)>-1} onClick={handleSelectedItem} checkboxKey={item} label={item}/>)}*/}
                </DialogContent>
                <DialogAction>
                    <Button onClick={() => setIsOpen(false)}>
                        Close
                    </Button>
                    <Button onClick={() => handleFilter()} icon={"filter_alt"} type={"filled"}>
                        Filter
                    </Button>
                </DialogAction>
            </StandardDialog>
        </>
    )
}
