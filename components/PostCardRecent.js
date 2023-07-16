import Image from 'next/legacy/image'
import Link from 'next/link'
import ConvertDate from "../helpers/ConvertDate";
import ArrowRightIcon from "@heroicons/react/solid/ArrowRightIcon";
import PhotographIcon from "@heroicons/react/solid/PhotographIcon";
import TruncText from "../helpers/TruncText";
import dynamic from "next/dynamic";
import React from "react";
import {ImageBaseURL} from "../config";

const ReadTime = dynamic(import('../helpers/ReadTime'), {ssr: false});
export default function PostCardRecent({post}) {
    let pContent = "";
    {
        post.content && JSON.parse(post.content).blocks.map((item, i) => {

            item?.data?.items?.map((itemd, i) => {
                pContent += itemd
            })

            if (item?.data?.text) {
                pContent += item.data.text.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ')
            }
        })
    }

    return (
        <div
            className="relative rounded-[24px] mt-2 overflow-hidden bg-surface-light dark:bg-surface-dark h-[340px] md:h-[240px]">
            {post?.thumbnail &&
                <Image objectFit={"cover"} layout={"fill"} width={80} height={80}
                       src={ImageBaseURL + post.thumbnail.url}/>}


            <div
                className="z-10 absolute group flex items-end inset-0 dark:hover:bg-on-secondary-container-dark dark:hover:bg-opacity-80 hover:bg-on-secondary-container-light hover:bg-opacity-80 dark:bg-on-surface-dark bg-on-surface-light dark:bg-opacity-80 bg-opacity-80 overflow-hidden">
                <div
                    className={"absolute flex items-center justify-center top-6 right-6 w-[64px] h-[64px]"}>

                    <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                         className="transition-all duration-300 text-surface-light dark:text-surface-dark group-hover:text-secondary-light group-hover:dark:text-secondary-dark">
                        <path
                            d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z"
                            fill="currentColor"></path>
                    </svg>
                    <svg
                        className={"absolute transition-scale duration-300 ease-in-out text-on-surface-light dark:text-on-surface-dark group-hover:text-on-secondary-light group-hover:dark:text-on-secondary-dark group-hover:scale-[110%] transform translate-y-1/2 top-0"}
                        xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px"
                         fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path
                            d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                </div>
                <div className={"p-6 w-full md:max-w-2xl"}>
                    <h2 className="font-medium text-[24px] leading-[32px] mb-2 text-on-secondary-light dark:text-on-secondary-dark w-full truncate">{post.title}</h2>
                    <div className={"text-base text-on-secondary-light dark:text-on-secondary-dark w-full leading-[24px]"}>
                        <TruncText charNumber={150}>
                            {pContent}
                        </TruncText>
                    </div>
                </div>
            </div>
        </div>
    )
}
