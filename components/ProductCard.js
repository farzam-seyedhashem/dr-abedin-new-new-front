import React from "react";
import Image from 'next/legacy/image'
import Link from 'next/link'
import {PhotographIcon} from "@heroicons/react/solid";
import Typography from "./assets/Typography";
import Button from "@/components/buttons/Button";

export default function Home(props) {
    const {inventory,isHorizontal} = props
    return (
        <Link href={'/buy-used-cars/' + inventory.slug}>
                <div
                    className={`${isHorizontal?"flex items-center":""} w-full h-full border border-outline-light dark:border-outline-dark relative bg-surface rounded-[32px] overflow-hidden`}>
                    <div className={`${isHorizontal?"w-4/12 h-full":""}`}>
                    {inventory && inventory.photoURLS[0] && inventory.photoURLS[0] !== " " ?
                        <Image layout={'responsive'} width={1080} height={720}
                               className="rounded-[32px] w-full object-cover"
                               src={inventory.photoURLS[0]} alt=""/> :
                        <div className="w-full h-[223px] bg-gray-200 rounded-[32px] flex items-center justify-center">
                            <div className="w-16 h-16 text-gray-50">
                                <PhotographIcon/>
                            </div>
                        </div>}
                    </div>
                    <div className={`${isHorizontal?"w-8/12 h-full":""}`}>
                    <div className="bg-surface  px-4">

                        <Typography type={"h4"}
                            className="pt-4  text-on-surface-light dark:text-on-surface-dark truncate">
                            {inventory.Year + " " + inventory.Make + " " + inventory.Model + " " + inventory.Trim.replace(inventory.Model, "")}
                        </Typography>
                        <p
                            className={"text-body-large mt-1.5 pb-4 whitespace-normal font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            ${parseFloat(inventory.Price).toLocaleString()}
                        </p>

                        <div className={`grid  grid-cols-12 divide-x divide-outline-light ${isHorizontal?"py-2":"py-4"} gap-0`}>
                            <div className={`col-span-3  ${isHorizontal?"px-1":"px-2"}`}>
                                <p className={`${isHorizontal?"text-label-small font-medium":"text-label-large"}  mb-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Miles:
                                </p>
                                <p className={`${isHorizontal?"text-body-medium":"text-body-large"} text-on-surface-light dark:text-on-surface-dark text-right`}>
                                    {(inventory.Odometer / 1000).toFixed(.1)}k
                                </p>
                            </div>
                            {inventory.InteriorColor && <div className={`col-span-4 ${isHorizontal?"px-1":"px-2"}`}>
                                <p className={`${isHorizontal?"text-label-small font-medium":"text-label-large"} mb-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Interior:
                                </p>
                                <p className={`${isHorizontal?"text-body-medium":"text-body-large"} text-on-surface-light dark:text-on-surface-dark text-right`}>
                                    {inventory.InteriorColor}
                                </p>
                            </div>}
                            {!props.small && <div className={`col-span-5 ${isHorizontal?"px-1":"px-2"}`}>
                                <p className={`${isHorizontal?"text-label-small font-medium":"text-label-large"} mb-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                    Est. payment:
                                </p>
                                <p className={`${isHorizontal?"text-body-medium":"text-body-large"}  text-on-surface-light dark:text-on-surface-dark text-right`}>
                                    ${inventory.finance} /mo
                                </p>
                            </div>}

                        </div>
                        <div className={"py-4 border-t border-outline-light dark:border-outline-dark justify-end w-full flex "}>

                                <Button type={"tonal"}>
                                    Show Detail
                                </Button>

                        </div>

                    </div>
                    </div>
                </div>
        </Link>
    )
}
