import React from "react";
import {API, ImageBaseURL} from "@/config";
import MainLayout from "../layouts/Main";
import Icon from "@/components/assets/Icon";
import ConvertDate from "@/_helper/ConvertDate";
import Link from "next/link";
import Image from "next/image"
import {convertContentType} from "@/_helper/Convertor";

export async function getStaticProps(context) {
    const getPost = await fetch(API + '/blog/' + context.params.slug, {
        method: "GET",
        headers: {
            // update with your user-agent
            "User-Agent": "*",
            Accept: "application/json; charset=UTF-8",
        },
    });

    let post;
    if (getPost.status !== 404) {
        post = await getPost.json();
    }

    let type;
    let data;
    // const errorCode = getPost.ok ? false : getPost.statusCode
    if (post === null) return {
        notFound: true,
    }
    data = post
    type = "post"
    if (!post) {
        return {
            redirect: {
                destination: '/',
                statusCode: 301
            },
        }
    }


    return {
        props: {
            data,
            type,
        },
        revalidate: 3600,

    }

}

const getPosts = async (page, per_page) => {
    const getPost = await fetch(API + '/blog?per_page=' + per_page + '&page=' + page, {
        method: "GET",
        headers: {
            // update with your user-agent
            "User-Agent": "*",
            Accept: "application/json; charset=UTF-8",
        },
    });
    return await getPost.json()
}

export async function getStaticPaths() {
    const allPosts = {};
    const firstPosts = await getPosts(1, 100)
    allPosts.data = firstPosts.data
    allPosts.currentPage = firstPosts.currentPage
    allPosts.lastPageIndex = firstPosts.lastPageIndex

    if (allPosts.lastPageIndex !== allPosts.currentPage) {
        for (let i = 2; i <= allPosts.lastPageIndex; i++) {
            const newPostsl = await getPosts(i, 100)
            const newPosts = newPostsl.data
            const lastPosts = allPosts.data
            allPosts.data = [...lastPosts, ...newPosts]
            allPosts.currentPage = i
        }
    }

    const postPaths = allPosts.data.map((post) => ({
        params: {slug: post.slug},
    }))

    // console.log(productPaths)
    // Get the paths we want to pre-render based on posts
    const paths = [...postPaths]

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return {paths, fallback: true}
}


export default function Home(props) {
    const {data, type, ...other} = props
    return (
        <MainLayout  {...other}>
            <div className={"py-6"}>
                <div className={"container mx-auto"}>
                    <h1 className={"text-headline-large font-black text-on-surface-light dark:text-on-surface-dark "}>
                        {data.title}
                    </h1>
                    <div className={"mt-2 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                        دسته بندی :
                        <Link
                            className={"rtl:mr-2 ltr:ml-2 text-primary-light dark:text-primary-dark hover:underline dark:hover:text-on-primary-container-dark hover:text-on-primary-container-light"}
                            href={'/blog/' + data.categories.slug}>
                            {data.categories.title}
                        </Link>
                    </div>
                    <div
                        className={"mt-2 flex text-on-surface-variant-light dark:text-on-surface-variant-dark items-center space-x-reverse space-x-6"}>
                        <div className={"flex items-center"}>
                            <Icon type={"outline"}>
                                update
                            </Icon>

                            <ConvertDate date={data.updatedAt}/>
                        </div>
                        <div className={"flex items-center"}>
                            <Icon type={"outline"}>
                                calendar_month
                            </Icon>

                            <ConvertDate date={data.createdAt}/>
                        </div>
                    </div>
                    <div className={"max-w-4xl mt-4"}>
                        <Image width={1920} quality={100} height={1080} alt={""} className={"rounded-[24px]"} layout={"responsive"}
                               objectFit={"cover"} src={ImageBaseURL + data.thumbnail.url}/>
                    </div>
                    <div className={"mt-6"}>
                    {JSON.parse(data?.content).blocks.map((item, i) => {

                        return convertContentType(item)
                    })}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
