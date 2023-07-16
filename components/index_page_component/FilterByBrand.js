import Typography from "@/components/assets/Typography";
import Image from 'next/legacy/image'
import Icon from "@/components/assets/Icon";
import Space from "@/components/assets/Space";
import Button from "@/components/buttons/Button";

const logos = {
    "brands": [
        {
            "name": "BMW",
            "logo": "bmw-logo.svg",
            "bg": "#000"
        },
        {
            "name": "MINI",
            "logo": "mini-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "BENZ",
            "logo": "benz-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "mercedes-benz",
            "logo": "benz-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "Infiniti",
            "logo": "infiniti-logo.svg",
            "bg": "#000"
        },
        {
            "name": "Hyundai",
            "logo": "hyundai-logo.svg",
            "bg": "rgb(1, 44, 95)"
        },
        {
            "name": "Volvo",
            "logo": "volvo-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "Honda",
            "logo": "honda-logo.svg",
            "bg": "#c00"
        },
        {
            "name": "Ford",
            "logo": "ford-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "Fiat",
            "logo": "fiat-logo.png",
            "bg": "#fff"
        },
        {
            "name": "Audi",
            "logo": "audi-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "Cadillac",
            "logo": "cadillac-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "Land Rover",
            "logo": "land-rover.svg",
            "bg": "#fff"
        },
        {
            "name": "Land Rover",
            "logo": "land-rover.svg",
            "bg": "#fff"
        },
        {
            "name": "Mazda",
            "logo": "mazda-logo.png",
            "bg": "#fff"
        } ,
        {
            "name": "Kia",
            "logo": "kia-logo.png",
            "bg": "#fff"
        },
        {
            "name": "RAM",
            "logo": "ram-logo.jpg",
            "bg": "#fff"
        },
        {
            "name": "Mitsubishi",
            "logo": "mitsubishi-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "Acura",
            "logo": "acura-logo.svg",
            "bg": "#000"
        },
        {
            "name": "Nissan",
            "logo": "nissan-logo.svg",
            "bg": "#000"
        },
        {
            "name": "Toyota",
            "logo": "toyouta-logo.svg",
            "bg": "#000"
        },
        {
            "name": "GMC",
            "logo": "GMC-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "Doge",
            "logo": "doge-logo.png",
            "bg": "#000"
        },
        {
            "name": "Lexus",
            "logo": "lexus-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "Jaguar",
            "logo": "jaguar-logo.png",
            "bg": "#000"
        },
        {
            "name": "Lincoln",
            "logo": "Lincoln-logo.png",
            "bg": "#fff"
        },
        {
            "name": "Jeep",
            "logo": "jeep-logo.png",
            "bg": "#000"
        },
        {
            "name": "Chevrolet",
            "logo": "chevrolet-logo.png",
            "bg": "#fff"
        },
        {
            "name": "Porsche",
            "logo": "porsche-logo.svg",
            "bg": "#fff"
        },
        {
            "name": "Tesla",
            "logo": "tesla-logo.svg",
            "bg": "#fff"
        }
    ]
}
export default function FilterByBrand({makes}) {
    return (
        <div className={"md:w-3/12 w-full"}>
            <div className={" py-4 bg-surface-container-low-light dark:bg-surface-container-low-dark shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15),0px_1px_2px_0px_rgba(0,0,0,0.30)]  rounded-[12px]"}>
                <h3 className={"text-title-medium px-4 font-bold text-on-surface-light dark:text-on-surface-dark"}>
                    Filter by Brand 🔥
                </h3>
                <h3 className={"pb-2 text-label-medium px-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                    Most viewed brands
                </h3>
                {console.log("makeeeeee",makes)}
                {makes.map((item,i) => i<8 && logos.brands.findIndex(b=>b.name.toLowerCase() === item.name.toLowerCase()) !== -1 &&
                    <div key={i}
                         className={"hover:bg-on-surface-light hover:bg-opacity-[8%] dark:hover:bg-opacity-[8%] dark:hover:bg-on-surface-dark pr-6 py-2 pl-4 flex items-center"}>
                        <div style={{backgroundColor: logos.brands.find(b=>b.name.toLowerCase() === item.name.toLowerCase()).bg}}
                             className={"flex w-[40px] h-[40px] items-center  rounded-full justify-center"}>
                            <div className={"h-[24px] w-[24px]"}>
                                <Image layout={"responsive"} width={48} height={48} objectFit={"contain"}
                                       src={`/brands-logo-new/${logos.brands.find(b=>b.name.toLowerCase() === item.name.toLowerCase()).logo}`}/>
                            </div>
                        </div>
                        <div className={"pl-4 flex items-center  flex-1"}>
                            <div className={"flex-1"}>
                                <div className={"flex items-center"}>
                                    <h5 className={"text-body-large text-on-surface-light dark:text-on-surface-dark font-medium"}>
                                        {item.name}
                                    </h5>
                                    {/*{item.iconTitle ? <item.iconTitle/> : ""}*/}
                                </div>
                                <h6 className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>
                                    {item.count} matches
                                </h6>
                            </div>

                            <Icon className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}
                                  type={"outline"}>
                                chevron_right
                            </Icon>

                        </div>
                    </div>
                )}
            </div>

            {/*<div className={"flex items-center justify-between"}>*/}
            {/*    <div>*/}
            {/*        <Typography*/}
            {/*            className={"font-normal text-on-surface-variant-light dark:text-on-surface-variant-dark"}*/}
            {/*            type={"h6"}>*/}
            {/*            Most viewed brands*/}
            {/*        </Typography>*/}
            {/*        <Typography className={"font-bold text-on-surface-light dark:text-on-surface-dark"} type={"h3"}>*/}
            {/*            Filter by Brand 🔥*/}
            {/*        </Typography>*/}
            {/*    </div>*/}
            {/*    /!*<a className={"text-primary-light text-label-large  dark:text-primary-dark hover:underline"}>*!/*/}
            {/*    /!*    See all*!/*/}
            {/*    /!*</a>*!/*/}
            {/*</div>*/}
            {/*<Space size={"xs"}/>*/}
            {/*<div className={"md:grid overflow-scroll md:overflow-auto whitespace-nowrap md:whitespace-normal  md:grid-cols-5 gap-4"}>*/}
            {/*    {logos.brands.map((item,i) => <div key={i}*/}
            {/*        className={"md:flex md:mr-0 mr-2 inline-flex rounded-[12px] items-center bg-surface-container-high-light overflow-hidden dark:bg-surface-container-high-dark   pr-6"}>*/}
            {/*        <div style={{backgroundColor: item.bg}}*/}
            {/*             className={"flex w-[72px] h-[72px] items-center  rounded-[12px] justify-center"}>*/}
            {/*            <div className={"h-[56px] w-[56px]  "}>*/}
            {/*                <Image layout={"responsive"} width={48} height={48} objectFit={"contain"}*/}
            {/*                       src={`/brands-logo-new/${item.logo}`}/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={"pl-4 flex items-center  flex-1"}>*/}
            {/*            <div className={"flex-1"}>*/}
            {/*                <h5 className={"text-body-large text-on-surface-light dark:text-on-surface-dark font-medium"}>*/}
            {/*                    {item.name}*/}
            {/*                </h5>*/}
            {/*                <h6 className={"text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-medium"}>*/}
            {/*                    1150 matches*/}
            {/*                </h6>*/}
            {/*            </div>*/}

            {/*            <Icon className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"} type={"outline"}>*/}
            {/*                chevron_right*/}
            {/*            </Icon>*/}

            {/*        </div>*/}
            {/*    </div>)}*/}
            {/*</div>*/}
        </div>
    )
}