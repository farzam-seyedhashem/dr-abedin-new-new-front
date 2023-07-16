/* This example requires Tailwind CSS v2.0+ */
import Typography from "./assets/Typography";
import Space from "./assets/Space";
import Button from "@/components/buttons/Button";
import Icon from "@/components/assets/Icon";

export default function Example(props) {

    return (
        <div className={"px-4 md:px-6 mx-auto"}>


            <Typography type={"h2"}
                        className={`text-on-surface-light uppercase dark:text-on-surface-dark`}>{props.question}</Typography>
            <Space size={"small"}/>
            {typeof props.answer === typeof "" ?<Typography type={"p"} className={`text-on-surface-light dark:text-on-surface-dark max-w-6xl`}>
                {props.answer}
                <a
                    href={props.link}
                    className={`ml-1 text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark underline`}
                >
                    {props.buttonText}
                </a>
            </Typography>:props.answer.map((item,index)=><><Typography type={"p"} className={`text-on-surface-light dark:text-on-surface-dark max-w-6xl`}>
                {item}

                {index === props.answer.length-1 &&   <Button component={"a"}  href={props.link} type={"outline"} className={"md:w-fit w-full mt-4 justify-center bg-surface-light dark:bg-surface-dark"}>
                    {props.buttonText}
                    <Icon size={24} className={"ml-2"} type={"outline"}>
                        chevron_right
                    </Icon>
                </Button>}
            </Typography>
                <Space size={"sm"}/></>)}


        </div>
    )
}
