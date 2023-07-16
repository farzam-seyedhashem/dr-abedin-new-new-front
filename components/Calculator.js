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

export default function Calculator({setIsCalculatorOpen,isCalculatorOpen,price}) {
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
          <StandardDialog setIsOpen={setIsCalculatorOpen} isOpen={(screen==="md"||screen==="lg"||screen==="xl")&&isCalculatorOpen}>
              <DialogHead title={"Calculator"}/>
              <DialogDescription>
                  {"Estimate inventory finance price"}
              </DialogDescription>
              <DialogContent>

                  <div className={"w-[560px]"}>
                      <div className="grid grid-cols-2 gap-2 items-center">
                          <div className={"col-span-2"}>
                              <Select onChange={(e) => setMonth(e.target.value)} defaultValue={month}
                                      label={"Term Length"}>
                                  <option value={36}>36 months</option>
                                  <option value={48}>48 months</option>
                                  <option value={60}>60 months</option>
                                  <option value={72}>72 months</option>
                              </Select>
                          </div>
                          <TextField label={"Down Payment"} defaultValue={downPayment}
                                     onChange={(e) => setDownPayment(e.target.value)}></TextField>
                          <TextField label={"Interest Rate"} defaultValue={interestRate}
                                     onChange={(e) => setInterestRate(e.target.value)}></TextField>
                      </div>
                      {monthPayment && <div className="py-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                          <Typography type={"h3"} className="text-on-surface-light dark:text-on-surface-dark mt-10">Summary</Typography>
                          <div className="flex items-center justify-between mt-4">
                              <Typography type={"h6"} className={"text-on-surface-light dark:text-on-surface-dark"}>Vehicle Price</Typography>
                              <Typography type={"p"}
                                          className="text-on-surface-variant-light dark:text-on-surface-variant-dark">${parseFloat(price).toLocaleString()}</Typography>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                              <Typography type={"h6"} className="text-on-surface-light dark:text-on-surface-dark">Down Payment (Get a trade-in
                                  offer)</Typography>
                              <Typography type={"p"} className="text-on-surface-variant-light dark:text-on-surface-variant-dark">-
                                  ${parseFloat(downPayment).toLocaleString()}</Typography>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                              <Typography type={"h6"} className={"text-on-surface-light dark:text-on-surface-dark"}>Total Finance
                                  Amount</Typography>
                              <Typography type={"p"}
                                          className="text-on-surface-variant-light dark:text-on-surface-variant-dark">${parseFloat((monthPayment * month).toFixed(2)).toLocaleString()}</Typography>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                              <Typography type={"h6"} className={"text-on-surface-light dark:text-on-surface-dark"}>Estimated Monthly
                                  Payment</Typography>
                              <Typography type={"p"}
                                          className="text-on-surface-variant-light dark:text-on-surface-variant-dark">${parseFloat(monthPayment.toFixed(2)).toLocaleString()}</Typography>
                          </div>
                      </div>}
                  </div>
              </DialogContent>
              <DialogAction>
                  <Button onClick={() => setIsCalculatorOpen(false)}>
                      Cancel
                  </Button>
              </DialogAction>
          </StandardDialog>

          <FullDialog setIsOpen={setIsCalculatorOpen} isOpen={(screen==="xs"||screen==="sm")&&isCalculatorOpen}>
              <DialogHead onClose={()=>setIsCalculatorOpen(false)} isFull title={"Calculator"}/>

              <DialogContent isFull>
                  <Typography className={"mb-4"}>Estimate inventory finance price</Typography>
                  <div>
                      <div className="grid grid-cols-2 gap-2 items-center">
                          <div className={"col-span-2"}>
                              <Select onChange={(e) => setMonth(e.target.value)} defaultValue={month}
                                      label={"Term Length"}>
                                  <option value={36}>36 months</option>
                                  <option value={48}>48 months</option>
                                  <option value={60}>60 months</option>
                                  <option value={72}>72 months</option>
                              </Select>
                          </div>
                          <TextField label={"Down Payment"} defaultValue={downPayment}
                                     onChange={(e) => setDownPayment(e.target.value)}></TextField>
                          <TextField label={"Interest Rate"} defaultValue={interestRate}
                                     onChange={(e) => setInterestRate(e.target.value)}></TextField>
                      </div>
                      {monthPayment && <div className="py-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                          <Typography type={"h3"} className="text-on-surface-light dark:text-on-surface-dark mt-10">Summary</Typography>
                          <div className="flex items-center justify-between mt-4">
                              <Typography type={"h6"} className={"text-on-surface-light dark:text-on-surface-dark"}>Vehicle Price</Typography>
                              <Typography type={"p"}
                                          className="text-on-surface-variant-light dark:text-on-surface-variant-dark">${parseFloat(price).toLocaleString()}</Typography>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                              <Typography type={"h6"} className="text-on-surface-light dark:text-on-surface-dark">Down Payment (Get a trade-in
                                  offer)</Typography>
                              <Typography type={"p"} className="text-on-surface-variant-light dark:text-on-surface-variant-dark">-
                                  ${parseFloat(downPayment).toLocaleString()}</Typography>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                              <Typography type={"h6"} className={"text-on-surface-light dark:text-on-surface-dark"}>Total Finance
                                  Amount</Typography>
                              <Typography type={"p"}
                                          className="text-on-surface-variant-light dark:text-on-surface-variant-dark">${parseFloat((monthPayment * month).toFixed(2)).toLocaleString()}</Typography>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                              <Typography type={"h6"} className={"text-on-surface-light dark:text-on-surface-dark"}>Estimated Monthly
                                  Payment</Typography>
                              <Typography type={"p"}
                                          className="text-on-surface-variant-light dark:text-on-surface-variant-dark">${parseFloat(monthPayment.toFixed(2)).toLocaleString()}</Typography>
                          </div>
                      </div>}
                  </div>
              </DialogContent>


          </FullDialog>
      </>
    )
}
