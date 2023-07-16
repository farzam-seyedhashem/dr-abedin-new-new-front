/* This example requires Tailwind CSS v2.0+ */
import Typography from "./assets/Typography";
import Space from "./assets/Space";
import Button from "@/components/buttons/Button";
import Icon from "@/components/assets/Icon";

export default function Affordable() {
    const next = [
        "If you're in search of affordable cars and SUVs, look no further than Bumble Auto. This car dealership specializes in offering quality vehicles at competitive prices, catering to budget-conscious buyers. Bumble Auto takes pride in providing a wide selection of vehicles, including sedans, SUVs, and trucks, ensuring there's something for everyone.",
        "What sets Bumble Auto apart is their commitment to customer satisfaction and affordability. They understand the importance of finding a reliable vehicle without straining your budget. That's why they offer financing options to help customers secure their dream car while maintaining financial stability.",
        "Whether you're in the market for a brand-new vehicle or considering a quality used car, Bumble Auto is the perfect destination. Their knowledgeable team is ready to assist you in finding the right vehicle that meets both your needs and budget. Expect to discover great deals on dependable vehicles while experiencing excellent customer service.",
        "Visit Bumble Auto today and explore their wide range of affordable cars and SUVs. With their dedication to customer satisfaction and focus on affordability, you can confidently find the perfect vehicle that suits your requirements without compromising your financial well-being."
    ]
    return (
        <div className="px-4 md:px-6 mx-auto">
            <Typography type={"h3"} className="text-on-surface-light dark:text-on-surface-dark">
                AFFORDABLE
            </Typography>
            <Space/>
            {next.map((item,index)=><><Typography type={"p"} className={`text-on-surface-light dark:text-on-surface-dark max-w-6xl`}>
                {item}
                {index === next.length-1 &&  <Button component={"a"}  href={"/services/sell-your-car"} type={"outline"} className={"md:w-fit w-full mt-4 justify-center bg-surface-light dark:bg-surface-dark"}>
                    Search Inventory
                    <Icon size={24} className={"ml-2"} type={"outline"}>
                        chevron_right
                    </Icon>
                </Button>}

            </Typography><Space size={"sm"}/></>)}

        </div>

    )
}
