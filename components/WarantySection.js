import Image from 'next/legacy/image'
import Typography from "./assets/Typography";
import Space from "./assets/Space";
import Button from "@/components/buttons/Button";
import Icon from "@/components/assets/Icon";

export default function Example() {
    const next = [
        "When it comes to purchasing a vehicle, Bumble Auto goes the extra mile to provide customers with peace of mind. They offer a range of warranty options designed to protect your investment and instill confidence in your purchase. Their warranty options include a comprehensive bumper-to-bumper warranty, a basic powertrain warranty, and customizable extended warranties.",
        "The comprehensive bumper-to-bumper warranty covers a wide range of components and systems, offering extensive coverage for your vehicle. The basic powertrain warranty provides protection for essential components like the engine and transmission. Additionally, Bumble Auto offers customizable extended warranties, allowing customers to tailor their coverage based on their specific needs and preferences.",
        "By offering these warranty options, Bumble Auto demonstrates their commitment to excellent customer service. They want to ensure that every customer feels secure and protected in their vehicle purchase. These warranty options provide reassurance, offering assistance and coverage in the event of unforeseen repairs or issues.",
        "When you choose Bumble Auto, you can be confident that your vehicle is backed by comprehensive warranty options, giving you peace of mind on the road. They prioritize customer satisfaction and strive to provide a positive ownership experience beyond the initial purchase.",
        "Visit Bumble Auto today and explore their range of warranty options, designed to enhance your ownership experience and protect your investment. Their knowledgeable team is ready to assist you in selecting the warranty that best suits your needs, ensuring your continued satisfaction with your vehicle.",
    ]
    return (

        <div className="md:px-6 px-4 mx-auto">
            <Typography type={"h5"} className="uppercase text-on-surface-light dark:text-on-surface-dark">
                OUR WARRANTY
            </Typography>
            <Space/>
            <div className={"md:flex space-y-[20px] md:space-y-0 md:space-x-[20px]"}>

                <div className={"md:w-5/12"}>
                {next.map((item,index)=><><Typography type={"p"} className={`text-on-surface-light dark:text-on-surface-dark max-w-6xl`}>
                    {item}
                    {index === next.length-1 && <Button component={"a"}  href={"/services/sell-your-car"} type={"outline"} className={"md:w-fit w-full mt-4 justify-center bg-surface-light dark:bg-surface-dark"}>
                        learn More
                        <Icon size={24} className={"ml-2"} type={"outline"}>
                            chevron_right
                        </Icon>
                    </Button>}

                </Typography><Space size={"sm"}/></>)}
                </div>
                <div className={"md:w-7/12 h-fit bg-surface-container-light dark:bg-surface-container-dark rounded-[16px] px-8"}>
                    <Image
                        objectFit={'cover'}
                        layout={'responsive'}
                        width={1920}
                        height={1200}
                        src="/car.png"
                        alt="People working on laptops"
                    />
                </div>
            </div>

        </div>

    )
}
