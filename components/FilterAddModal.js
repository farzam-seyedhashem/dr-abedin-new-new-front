import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import StandardDialog from "./dialogs/StandardDialog";
import DialogHead from "./dialogs/DialogHead";
import DialogContent from "./dialogs/DialogContent";
import DialogAction from "./dialogs/DialogAction";
import Button from "./buttons/Button";
import Checkbox from "./inputs/Checkbox";
import {useRouter} from "next/router";
import Icon from "@/components/assets/Icon";

export default function FilterAddModal({filterKey, title, filterItems}) {
    let [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    let [itemSelected, setItemSelected] = useState(router.query[filterKey]?.split(",") || [])
    let filterIsHave = router.query[filterKey]?.split(",") || []

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleSelectedItem = (key, value) => {
        console.log(key)
        let index = itemSelected.findIndex(item => item === key)

        let items = itemSelected
        console.log(index)
        if (index < 0) {
            console.log(key)
            value === true && items.push(key)
            setItemSelected(items)
        } else {
            value === false && items.splice(index, 1);
            setItemSelected(items)
        }
    }
    const handleFilter = async () => {
        // console.log(router.query)
        let query = ""
        itemSelected.map((item, index) =>
            query += (index !== 0 ? "," : "") + item
        )
        if (query === "") {
            delete router.query[filterKey]
        } else {
            router.query[filterKey] = query
        }

        router.push(router).then(r => setIsOpen(false))
        // router.reload()

    }

    return (
        <>
        <div onClick={openModal}
            className={`${itemSelected.length !== 0 ? "border-b" : ""} cursor-pointer border-b py-[8px] h-[48px] pl-4 pr-6 justify-between flex items-center border-outline-variant-light dark:border-outline-variant-dark`}>
            <div
                className={"text-on-surface-light flex items-center dark:text-on-surface-dark text-label-large"}>
                {title}
                {filterIsHave.length !== 0 && <span
                    className={"rounded-full flex items-center justify-center min-w-[24px] max-w-[32px] h-[24px]  text-label-medium ml-2 text-on-secondary-container-light dark:text-on-secondary-container-dark bg-secondary-container-light dark:bg-secondary-container-dark"}>
                {filterIsHave.length}
                    </span>}
            </div>
            <Icon
                  className={"text-on-surface-variant-light cursor-pointer dark:text-on-surface-variant-dark"}
                  type={"outline"}>
                {filterIsHave.length !== 0?"edit":"add"}
            </Icon>


        </div>
        {filterIsHave.length !== 0 && <div className={"px-4 pb-2 pt-4"}>
            {filterIsHave.map((item,index) =>
                <div key={index}
                className={"inline-flex border pl-3 pr-2 rounded-[8px] h-[32px] items-center border-outline-light mr-2 mb-2 dark:border-outline-dark text-label-large text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
            {item}
            <Icon onClick={async () => {
                handleSelectedItem(item, false)
                await handleFilter()
            }} className={"ml-2 cursor-pointer"} size={18} type={"outline"}>
                close
            </Icon>
        </div>
            )}
        </div>
}
{/*<button */
}
{/*        className={`border border-outline-light dark:border-outline-dark text-primary-light dark:text-primary-dark h-[40px] pl-6 ${itemSelected.length!==0?"pr-4":"pr-6"}  rounded-full mr-2 text-label-large inline-flex items-center font-medium`}>*/
}
{/*    {title}*/
}
{/*    */
}
{/*</button>*/
}
    <StandardDialog setIsOpen={setIsOpen} isOpen={isOpen}>
        <DialogHead title={`Filter ${title}`}/>
        <DialogContent className={"w-[400px] max-h-[400px] overflow-scroll"}>
            {filterItems.map((item, index) => <Checkbox key={index}
                                                        value={itemSelected.findIndex(l => l === item) > -1}
                                                        onClick={handleSelectedItem} checkboxKey={item}
                                                        label={item}/>)}
        </DialogContent>
        <DialogAction>
            <Button onClick={() => setIsOpen(false)}>
                Close
            </Button>
            <Button onClick={handleFilter} icon={"filter_alt"} type={"filled"}>
                Filter
            </Button>

        </DialogAction>
    </StandardDialog>
</>
)
}
