import Head from 'next/head'
import React from "react";
import BreadCrumbs from './BreadCrumbs'
import Image from "next/legacy/image";
import Breadcrumbs from "./BreadCrumbs";
import Typography from "./assets/Typography";

export default function PageHeader({isFull,breadCrumbs,imageAlt,imageURL,shortDescription,metaTitle,title}) {
    return (
        <div className={`${!isFull?'container h-96 pt-6 mx-auto':shortDescription?'h-[544px]':"md:h-[544px] h-[270px]"}`}>
            <div className={`overflow-hidden relative h-full ${!isFull?'rounded-[64px]':'rounded-[24px]'}`}>

                <Image
                    priority={true}
                    layout={"fill"}
                    sizes={"80vw"}
                    width={1080}
                    height={720}
                    className="w-full z-0 h-full object-cover"
                    src={imageURL?imageURL:"/Cars-banner.jpg"}
                    alt={imageAlt?imageAlt:"People working on laptops"}
                />
                <div className={`bg-surface-dark bg-opacity-60 z-0 absolute inset-0 ${!isFull?'rounded-[64px]':'rounded-[24px]'}`}/>
                <div className={"sm:mx-6 px-6 sm:px-16 absolute inset-0 py-10 inset-0 z-10 flex items-center"}>

                    <div className={"w-full"}>
                        <div className={"md:absolute max-w-full  mb-1 sm:mb-0 sm:top-10 sm:rtl:left-16 sm:ltr:right-16 z-999"}>
                            <Breadcrumbs white={true} ldName={metaTitle} items={breadCrumbs}/>
                        </div>
                        <Typography type={"h1"} className={`max-w-4xl text-on-secondary-light  mb-4`}>
                            {title}
                        </Typography>
                        <p className={"text-on-secondary-light max-w-4xl md:text-title-large text-body-large"}>
                            {shortDescription || ""}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
