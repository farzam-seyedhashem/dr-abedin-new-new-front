/* This example requires Tailwind CSS v2.0+ */
import ProductCard from './ProductCard'
import Typography from "./assets/Typography";
import Space from "./assets/Space";
import Icon from "@/components/assets/Icon";
import Button from "@/components/buttons/Button";
import ProductCardHorizontal from "@/components/ProductCardHorizontal";


export default function Example({inventories}) {
    return (
        <div className="px-4 md:px-6 ">
            <div className={"flex items-center justify-between"}>

                <Typography type={"h2"} className="text-on-surface-light dark:text-on-surface-dark px-4 md:px-6">
                    NEW
                    ARRIVAL
                </Typography>
                <a href={"/inventory"} className={"flex hover:underline pr-4 pl-6  items-center text-label-large text-primary-light dark:text-primary-dark"}>

                    See all
                    {/*<Icon className={"ml-2"} type={"outline"}>*/}
                    {/*    chevron_right*/}
                    {/*</Icon>*/}
                </a>
            </div>
            {/*<Typography type={"h3"} className="text-on-surface-variant-light dark:text-on-surface-variant-dark px-6">*/}
            {/*    Check Out Our New Cars*/}
            {/*</Typography>*/}
            <Space size={"xs"}/>
            <div
                className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4  grid-cols-1">

                {inventories.data.map((inventory, i) => (
                    <div key={i} className={"block "}>
                        <ProductCardHorizontal inventory={inventory}/>
                    </div>
                ))}
            </div>
            {/*<Button type={"outline"} className={"w-full justify-center bg-surface-light dark:bg-surface-dark"}>*/}
            {/*    See all*/}
            {/*    <Icon size={24} className={"ml-2"} type={"outline"}>*/}
            {/*        chevron_right*/}
            {/*    </Icon>*/}
            {/*</Button>*/}
        </div>
    )
}
