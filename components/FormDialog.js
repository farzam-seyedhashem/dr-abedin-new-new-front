import React, {useEffect, useState} from "react";
import {CalculatorIcon} from "@heroicons/react/outline";
import StandardDialog from "./dialogs/StandardDialog";
import DialogHead from "./dialogs/DialogHead";
import DialogDescription from "./dialogs/DialogDescription";
import DialogContent from "./dialogs/DialogContent";
import Select from "./inputs/Select";
import TextField from "./inputs/TextField";
import Typography from "./assets/Typography";
import DialogAction from "./dialogs/DialogAction";
import Button from "./buttons/Button";
import FullDialog from "./dialogs/FullDialog";
import {getMedia} from "../helpers/GetMedia";
import TextArea from "./inputs/TextArea";

export default function FormDialog({setIsOpen,isOepn,price,fields}) {
    const [month, setMonth] = React.useState(72)
    const [interestRate, setInterestRate] = React.useState(1.9)
    const [downPayment, setDownPayment] = React.useState(1000)
    const [monthPayment, setMonthlyPayment] = React.useState()
    const [screen,setScreen] = useState(null)

    useEffect(()=>{
        setScreen(getMedia())
    },[])
    useEffect(() => {
        let p = (parseFloat(price) - downPayment) * ((interestRate / 1200) * (Math.pow((1 + (interestRate / 1200)), month)) / ((Math.pow((1 + (interestRate / 1200)), month)) - 1))
        p += (599 / month)
        p += (price * ((6 / month) / 100))
        setMonthlyPayment(p)
    }, [downPayment, interestRate, month])


    return (
      <>
          <StandardDialog setIsOpen={setIsOpen} isOpen={(screen==="md"||screen==="lg"||screen==="xl")&&isOepn}>
              <DialogHead title={"Calculator"}/>
              <DialogDescription>
                  {"Estimate inventory finance price"}
              </DialogDescription>
              <DialogContent>
                  <div className={"w-[560px]"}>
                      <div className="grid grid-cols-2 gap-4 items-center">
                          {fields.map((item,index)=>
                              <div key={index} className={`col-span-${item.col}`}>
                                  {item.type === "text_field" ? <TextField label={item.label}></TextField> :
                                      item.type === "select" ?
                                          <Select onChange={(e) => setMonth(e.target.value)} defaultValue={month}
                                                  label={"Term Length"}>
                                              {item.options.map((option,k) => <option key={k}
                                                  value={option.value}>{option.label}</option>)}
                                          </Select> :
                                          item.type === "text_area" ? <TextArea label={item.label}></TextArea> : ""}
                              </div>
                          )}
                      </div>
                  </div>
              </DialogContent>
              <DialogAction>
                  <Button onClick={() => setIsOpen(false)}>
                      Cancel
                  </Button>
                  <Button icon={"send"} type={"filled"} onClick={() => setIsOpen(false)}>
                      Send
                  </Button>
              </DialogAction>
          </StandardDialog>

          <FullDialog setIsOpen={setIsOpen} isOpen={(screen==="xs"||screen==="sm")&&isOepn}>
              <DialogHead actionText={"Send"} haveAction={true} onClose={()=>setIsOpen(false)} isFull title={"Calculator"}/>

              <DialogContent isFull>
                  <Typography className={"mb-4"}>Estimate inventory finance price</Typography>
                  <div>
                      <div className="grid grid-cols-1 gap-4 items-center">
                          {fields.map((item,index)=>
                              <div key={index} className={`col-span-1`}>
                                  {item.type === "text_field" ? <TextField label={item.label}></TextField> :
                                      item.type === "select" ?
                                          <Select onChange={(e) => setMonth(e.target.value)} defaultValue={month}
                                                  label={"Term Length"}>
                                              {item.options.map((option,k) => <option key={k}
                                                  value={option.value}>{option.label}</option>)}
                                          </Select> :
                                          item.type === "text_area" ? <TextArea label={item.label}></TextArea> : ""}
                              </div>
                          )}
                      </div>
                  </div>
              </DialogContent>


          </FullDialog>
      </>
    )
}
