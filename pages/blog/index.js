import MainLayout from "@/layouts/Main";
import Space from "@/components/assets/Space";
import Image from 'next/legacy/image'
import Link from "next/link";
import {ContentConvertor} from "@/_helper/ContentConvertor";
import {API, ImageBaseURL} from '@/config'
import Icon from "@/components/assets/Icon";
import TruncText from "@/_helper/TruncText";
import Breadcrumbs from "@/components/BreadCrumbs";

// export async function getStaticProps() {
//     const getPost = await fetch(`${API}/blog`)
//     const getCategory = await fetch(`${API}/blog-category`)
//     const posts = await getPost.json()
//     const categories = await getCategory.json()
//     return {
//         props: {
//             categories,
//             posts,
//         },
//     }
// }

export default function Home(props) {
    const {posts, categories, ...other} = props
    const breadCrumbs = [
        {name: "مقالات", href: "/blog", current: true},
    ]
    const siteSetting = {
        metaTitle: "مقالات | دکتر بهزاد عابدین",
        mataDescription: "صفحه مقالات تخصصی دکتر بهزاد عابدین جراح زیبایی بینی در تهران",
        websiteURL: "https://dr-abedin.com",
        siteName: "دکتر بهزاد عابدین",
        robot: false,
        position: "35.78666374650412, 51.43571546845197",
        placename: "تهران",
        region: "ایران",
        themeColor: "#235FA6",
    }

    return (
        <MainLayout siteSetting={siteSetting} {...other}>
            <div className={"px-4 md:px-6 pt-6"}>

                <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                    <header
                        className={"relative flex items-center md:p-[56px] p-6 rounded-[24px] w-full h-[220px] md:h-[523px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                        <div>
                            <div className={"absolute top-10 right-10"}>
                            <Breadcrumbs items={breadCrumbs}/>
                            </div>
                            <h1 className={"md:text-display-large text-display-small font-black text-on-surface-light dark:text-on-surface-dark "}>
                                مقالات دکتر بهزاد عابدین
                            </h1>
                            <p className={"text-on-surface-light dark:text-on-surface-dark text-title-small md:text-title-large mt-2 font-normal"}>
                                {"صفحه مقالات تخصصی دکتر بهزاد عابدین جراح زیبایی بینی در تهران"}
                            </p>

                        </div>
                    </header>

                    <div className={"relative bg-white rounded-[24px] overflow-hidden h-[220px] md:h-[523px]"}>
                        <Image layout={"fill"} objectFit={"contain"} src={"/blog-thumbnail.jpg"}/>
                    </div>
                </div>
                <Space size={"normal"}/>
                <div className={"container mx-auto"}>
                    <div className={"overflow-hidden"}>

                        <ul className={"overflow-scroll w-full whitespace-nowrap space-x-reverse space-x-2 mb-8  flex items-center"}>
                            <li>
                                <Link
                                    className={"bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark inline-flex md:flex items-center pr-2 pl-4  h-[32px] rounded-[8px] text-label-large"}
                                    href={`/blog`}>
                                    <Icon size={24} type={"outline"} className={"!text-[20px] font-normal ml-2"}>
                                        check
                                    </Icon>
                                    همه دسته بندی ها
                                </Link>
                            </li>
                            {/*{categories.data.map((category, index) => <li key={index}>*/}
                            {/*    <Link*/}
                            {/*        className={"text-on-surface-variant-light dark:text-on-surface-variant-dark inline-flex md:flex items-center px-4 border-outline-variant-light dark:border-outline-variant-dark border h-[32px] rounded-[8px] text-label-large"}*/}
                            {/*        href={`/blog/${category.slug}`}>*/}
                            {/*        <div className={"h-[20px]"}>*/}

                            {/*        </div>*/}
                            {/*        {category.title}*/}
                            {/*    </Link>*/}
                            {/*</li>)}*/}
                        </ul>

                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-4 gap-4"}>

                        {/*{posts.data.map((post, index) => (*/}
                        {/*    <div*/}
                        {/*        className={"rounded-[24px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}*/}
                        {/*        key={index}>*/}
                        {/*        <Link href={`/${post.slug}`}>*/}
                        {/*            <Image className={"rounded-[24px]"} width={1920} height={1280} objectFit={"cover"}*/}
                        {/*                   layout={"responsive"} alt={post.title}*/}
                        {/*                   src={`${ImageBaseURL}${post.thumbnail.url}`}/>*/}
                        {/*        </Link>*/}
                        {/*        <div className={"pt-6 pb-6 px-6"}>*/}
                        {/*            <Link href={`/blog/${post?.categories?.slug}`}>*/}
                        {/*                <h3 className={"text-primary-light dark:text-primary-dark text-label-large mb-1"}>*/}
                        {/*                    {post?.categories?.title}*/}
                        {/*                </h3>*/}
                        {/*            </Link>*/}
                        {/*            <Link href={`/${post.slug}`}>*/}
                        {/*                <h2 className={"text-title-large font-bold text-on-surface-light dark:text-on-surface-dark "}>*/}
                        {/*                    {post.title}*/}
                        {/*                </h2>*/}
                        {/*            </Link>*/}

                        {/*            <p className={"text-on-surface-variant-light dark:text-on-surface-variant-dark mt-2"}>*/}
                        {/*                <TruncText >*/}
                        {/*                {ContentConvertor(post.content)}*/}
                        {/*                </TruncText>*/}
                        {/*            </p>*/}
                        {/*        </div>*/}

                        {/*    </div>*/}
                        {/*))}*/}


                    </div>
                </div>
            </div>


        </MainLayout>
    )
}
