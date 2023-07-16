import Image from 'next/legacy/image'
import Link from 'next/link'
import ConvertDate from "../helpers/ConvertDate";
import ArrowRightIcon from "@heroicons/react/solid/ArrowRightIcon";
import PhotographIcon from "@heroicons/react/solid/PhotographIcon";
import TruncText from "../helpers/TruncText";
import dynamic from "next/dynamic";
import React from "react";
import Typography from "./assets/Typography";
import Button from "./buttons/Button";

const ReadTime = dynamic(import('../helpers/ReadTime'), {ssr: false});
export default function Home(props) {
    console.log(props.description)
    let pContent = "";

    props.description && JSON.parse(props.description).blocks.map((item, i) => {
        // console.log('l',`${convertContentType(item)}`)

        item?.data?.items?.map((itemd, i) => {
            pContent += itemd
        })

        if (item?.data?.text) {
            pContent += item.data.text.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ')
        }
    })

    return (
        <Link key={props.title} href={'/blog/' + props.slug}
              className="flex flex-col rounded-[32px] border border-outline-light dark:border-outline-dark">
            {props.imageUrl ?
                <div className="rounded-[32px] overflow-hidden">
                    <Image objectFit={'cover'} width={1920} height={1280} layout={'responsive'} src={props.imageUrl}
                           alt={props.title}/>
                </div>
                : <div
                    className={"bg-gray-100 h-48 flex items-center justify-center w-full"}>
                    <PhotographIcon className={"w-16 h-16 text-gray-300"}/>
                </div>}
            <div className="flex-1 px-4 flex flex-col justify-between">

                <Typography type={"h4"}
                    className="py-4 flex-1 text-on-surface-light dark:text-on-surface-dark ">
                    {props.title}
                </Typography>

                <Typography type={"p"} className="py-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">
                    <TruncText charNumber={props.related ? 250 : 360}>
                        {pContent}
                    </TruncText>
                </Typography>
                <div className="flex py-2 text-label-large text-on-surface-variant-light dark:text-on-surface-variant-dark">
                    <time dateTime={props.datetime}><ConvertDate date={props.date}/></time>
                    <span aria-hidden="true">&middot;</span>
                    <ReadTime content={props.description}/> read
                </div>
                <div className={"py-4 mt-4 justify-end flex border-t border-outline-light dark:border-outline-dark"}>


                    <Button type={""}>
                        Read More
                    </Button>
                </div>


            </div>
        </Link>
    )
}
