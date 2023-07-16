import DialogHead from "@/components/dialogs/DialogHead";
import DialogContent from "@/components/dialogs/DialogContent";
import DialogAction from "@/components/dialogs/DialogAction";
import Button from "@/components/buttons/Button";
import StandardDialog from "@/components/dialogs/StandardDialog";
import CarItemSelect from '@/components/CarItemSelect'
import {useState} from "react";
import TextField from "@/components/inputs/TextField";
import Select from "@/components/inputs/Select";
import Icon from "@/components/assets/Icon";
import {postData} from "@/helpers/Helper";
import {API} from "@/config";
import FullDialog from "@/components/dialogs/FullDialog";


export default function GetStartDialog({isMobile, setIsOpen, isOpen, inventory}) {
    const [values, setValues] = useState({})
    const [disableSubmit, setDisableSubmit] = useState(false)
    const [timeSelected, setTimeSelected] = useState(0)
    const formSubmitHandler = () => {

        let data = {...values}
        if (values.services === "tour") {
            const time = times[timeSelected].label
            data = {...data, "preferTime": time, "inventory": {...inventory}}
            console.log(data)
        } else {
            data = {...data, "inventory": {...inventory}}
            console.log(data)
        }
        postData(
            data,
            "/send-mail",
            successCB,
            errCB,
        )
    }
    const successCB = () => {

    }
    const errCB = () => {

    }
    const serviceSelectHandler = (value) => {
        setValues({...values, "services": value})
        console.log(value)
    }
    const handleValue = (name, value) => {
        setValues({...values, [name]: value})
        console.log(value)
    }
    const times = [
        {
            label: "5:00 am - 12:00 pm"
        },
        {
            label: "12:00 pm - 5:00 pm"
        },
        {
            label: "5:00 pm - 9:00 pm"
        }
    ]
    return (
        <>
            {!isMobile ? <StandardDialog setIsOpen={setIsOpen} isOpen={isOpen}>
                    <DialogHead title={"Get Start"} description={"Get start to use one of these options"}/>
                    <DialogContent>
                        <div className={"md:w-[560px] w-[300px]"}>
                            <div className={"grid grid-cols-2 gap-2"}>
                                <div className={"col-span-1"}>
                                    <TextField onChange={(e) => handleValue("firstName", e.target.value)}
                                               label={"First Name"}/>
                                </div>
                                <div className={"col-span-1"}>
                                    <TextField onChange={(e) => handleValue("lastName", e.target.value)}
                                               label={"Last Name"}/>
                                </div>
                                <div className={"col-span-1"}>
                                    <TextField onChange={(e) => handleValue("phone", e.target.value)} label={"phone"}/>
                                </div>
                                <div className={"col-span-1"}>
                                    <TextField onChange={(e) => handleValue("email", e.target.value)} label={"Email"}/>
                                </div>
                                <div className={"col-span-2"}>
                                    <Select onChange={(e) => serviceSelectHandler(e.target.value)} label={"Service"}>
                                        <option defaultChecked/>
                                        <option value={"buy"}>
                                            Buy curbside
                                        </option>
                                        <option value={"tour"}>
                                            Virtual Tour
                                        </option>
                                        <option value={"deliver"}>
                                            Deliver to You
                                        </option>
                                    </Select>
                                </div>
                                {values?.services === "tour" && <div className={"col-span-2"}>
                                    <label
                                        className={"block text-label-medium font-medium mt-4 mb-2 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                        Prefer Time
                                    </label>
                                    <div className={"inline-flex"}>
                                        {times.map((item, index) => <div key={index} onClick={() => setTimeSelected(index)}
                                                                         className={`${index === timeSelected ? "bg-secondary-container-light dark:bg-secondary-container-dark dark:text-on-secondary-container-dark text-on-secondary-container-light px-2" : " px-4 border dark:border-outline-dark border-outline-light text-on-surface-variant-light dark:text-on-surface-dark"} mr-2 rounded-[8px] w-fit h-[32px] cursor-pointer inline-flex justify-center items-center  text-label-large font-normal`}>
                                            {index === timeSelected && <Icon size={18}
                                                                             className={`${index === timeSelected ? "text-on-secondary-container-light mr-2 dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}
                                                                             type={"outline"}>
                                                check
                                            </Icon>}

                                            {item.label}
                                        </div>)}
                                    </div>
                                </div>}

                            </div>
                        </div>
                    </DialogContent>
                    <DialogAction>
                        <Button onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button type={"filled"} onClick={() => formSubmitHandler()}>
                            Sumbit
                        </Button>
                    </DialogAction>
                </StandardDialog> :
                <FullDialog setIsOpen={setIsOpen} isOpen={isOpen}>
                    <DialogHead isFull actionText={"Submit"} actionClick={() => formSubmitHandler()} title={"Get Start"}
                                description={"Get start to use one of these options"}/>
                    <DialogContent isFull>

                        <div className={"grid grid-cols-2 gap-2"}>
                            <div className={"col-span-1"}>
                                <TextField onChange={(e) => handleValue("firstName", e.target.value)}
                                           label={"First Name"}/>
                            </div>
                            <div className={"col-span-1"}>
                                <TextField onChange={(e) => handleValue("lastName", e.target.value)}
                                           label={"Last Name"}/>
                            </div>
                            <div className={"col-span-1"}>
                                <TextField onChange={(e) => handleValue("phone", e.target.value)} label={"phone"}/>
                            </div>
                            <div className={"col-span-1"}>
                                <TextField onChange={(e) => handleValue("email", e.target.value)} label={"Email"}/>
                            </div>
                            <div className={"col-span-2"}>
                                <Select onChange={(e) => serviceSelectHandler(e.target.value)} label={"Service"}>
                                    <option defaultChecked/>
                                    <option value={"buy"}>
                                        Buy curbside
                                    </option>
                                    <option value={"tour"}>
                                        Virtual Tour
                                    </option>
                                    <option value={"deliver"}>
                                        Deliver to You
                                    </option>
                                </Select>
                            </div>
                            {values?.services === "tour" && <div className={"col-span-2"}>
                                <label
                                    className={"block text-label-medium font-medium mt-4 mb-2 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Prefer Time
                                </label>
                                <div className={""}>
                                    {times.map((item, index) => <div key={index} onClick={() => setTimeSelected(index)}
                                                                     className={`${index === timeSelected ? "bg-secondary-container-light  dark:bg-secondary-container-dark dark:text-on-secondary-container-dark text-on-secondary-container-light px-2" : " px-4 border dark:border-outline-dark border-outline-light text-on-surface-variant-light dark:text-on-surface-dark"} mb-2 mr-2 rounded-[8px] w-fit h-[32px] cursor-pointer inline-flex justify-center items-center  text-label-large font-normal`}>
                                        {index === timeSelected ? <Icon size={18}
                                                                         className={`${index === timeSelected ? "text-on-secondary-container-light mr-2 dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}
                                                                         type={"outline"}>
                                            check
                                        </Icon>:<span className={"h-[18px]"}>

                                        </span>}

                                        {item.label}
                                    </div>)}
                                </div>
                            </div>}

                        </div>
                    </DialogContent>
                </FullDialog>
            }
        </>
    )
}