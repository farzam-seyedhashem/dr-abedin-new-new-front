import Typography from "./assets/Typography";
import Space from "./assets/Space";
import Button from "./buttons/Button";
import Link from "next/link";
import Icon from "@/components/assets/Icon";

export default function Example() {

const answer = [
    "If you're considering selling or trading in your car, Bumble Auto is here to assist you every step of the way. Our team of experienced professionals is dedicated to providing you with a fair and competitive offer for your vehicle. Whether you prefer to sell your car privately or trade it in at our dealership, we have the expertise to guide you through the process and ensure a seamless transaction.",
    "When you choose Bumble Auto, you can rest assured that we will handle all the necessary paperwork and facilitate any negotiations with potential buyers or dealerships on your behalf. Our goal is to make the selling or trading experience as smooth and hassle-free as possible. We take pride in delivering exceptional service and value to our customers.",
    "Don't hesitate to reach out to us today to start the process of selling or trading your car. Our team is ready to provide you with a personalized and professional experience that meets your specific needs and maximizes the value of your vehicle."
]
    return (
        <div className="px-4 md:px-6 mx-auto">

            <Typography type={"h2"} className="text-on-surface-light dark:text-on-surface-dark">
                ARE YOU LOOKING TO SELL OR TRADE IN YOUR CAR?
            </Typography>
            <Space size={"small"}/>
            {answer.map((item,index)=><><Typography type={"p"} className={`text-on-surface-light dark:text-on-surface-dark max-w-6xl`}>
                {item}
                {/*{index === answer.length-1 && <a*/}
                {/*    href={"https://bumbleauto.com/services/car-trade-in"}*/}
                {/*    className={`ml-1 text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark underline`}*/}
                {/*>*/}
                {/*    Trade Your Car*/}
                {/*</a>}*/}
                {index === answer.length-1 &&   <Button component={"a"}  href={"https://bumbleauto.com/services/car-trade-in"} type={"outline"} className={"md:w-fit w-full mt-4 justify-center bg-surface-light dark:bg-surface-dark"}>
                    Trade Your Car
                    <Icon size={24} className={"ml-2"} type={"outline"}>
                        chevron_right
                    </Icon>
                </Button>}
            </Typography><Space size={"sm"}/></>)}

        </div>
    )
}
