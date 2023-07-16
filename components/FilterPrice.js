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

export default function FilterPrice({filterKey, title, filters}) {
    let [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    let [filterSelected, setFilterSelected] = useState(router.query[filterKey]?.split(",") || [])

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
    const handleFilter =   () => {
        // console.log(router.query)
        // let query = ""
        // filterSelected.map((item, index) =>
        //     query += (index !== 0 ? "," : "") + item
        // )
        router.query[filterKey] = `${filterSelected[0]},${filterSelected[1]}`
         router.push(router).then(()=>setIsOpen(false))
        // router.reload()


    }

    return (
        <>

            <Button icon={filterSelected.length!==0?"check":""} type={filterSelected.length!==0?"tonal":"outline"} onClick={openModal}>
                {title}
            </Button>
            <StandardDialog setIsOpen={setIsOpen} isOpen={isOpen}>
                <DialogHead title={`Filter ${title}`}/>
                <DialogContent className={"w-[400px] max-h-[400px] overflow-scroll"}>
                    {/*{console.log(filters,filterSelected)}*/}
                    <SliderInput maxValue={parseInt(filterSelected[1])} minValue={parseInt(filterSelected[0])} min={parseInt(filters[0])} max={parseInt(filters[1])}
                                 onChangeEvent={(data) => setFilterSelected([data.min, data.max])}/>
                    <Typography className={"text-on-surface-light dark:text-on-surface-dark font-medium mt-2"} type={"p"}>
                        Inventory price between

                        <span className={"text-primary-light dark:text-primary-dark mx-2"}>
                                                $ {filterSelected[0] ? filterSelected[0] : filters[0]}
                                            </span>
                        to
                        <span className={"text-primary-light dark:text-primary-dark mx-2"}>
                                                $ {filterSelected[1] ? filterSelected[1] : filters[1]}
                                            </span>
                    </Typography>
                    {/*{filterItems.map(item => <Checkbox value={itemSelected.findIndex(l=>l===item)>-1} onClick={handleSelectedItem} checkboxKey={item} label={item}/>)}*/}
                </DialogContent>
                <DialogAction>
                    <Button onClick={()=>setIsOpen(false)}>
                        Close
                    </Button>
                    <Button onClick={()=>handleFilter()} icon={"filter_alt"} type={"filled"}>
                        Filter
                    </Button>
                </DialogAction>
            </StandardDialog>
        </>
    )
}
