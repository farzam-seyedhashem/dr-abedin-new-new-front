/* This example requires Tailwind CSS v2.0+ */
import Head from 'next/head'
import Link from "next/link";
import Icon from "./assets/Icon";
// const pages = [
//     {name: 'Used Car financing to Support You', current: false},
// ]

export default function Breadcrumbs({items, ldName, white}) {
    const BreadcrumbsJSON = (items) => {
        let JSON = "";
        for (let i = 0; i < items.length; i++) {
            if (i === items.length - 1) {
                JSON += `{
            "@type": "ListItem",
            "position": ${i + 2},
            "name": "${ldName}",
            "item": "https://bumbleauto.com${items[i].href}"
        }`
            } else {
                JSON += `{
            "@type": "ListItem",
            "position": ${i + 2},
            "name": "${items[i].name}",
            "item": "https://bumbleauto.com${items[i].href}"
        },`
            }

        }
        return JSON


    }
    return (
        <>
            <Head>
                <script key="breadcrumbs-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `{
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Bumble Auto",
                    "item": "https://bumbleauto.com"
                },` + BreadcrumbsJSON(items) + `]
                }`
                }}>

                </script>
            </Head>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex whitespace-nowrap text-label-medium overflow-scroll scrollbar-hide items-center space-x-1">
                    <li>
                    <span property="itemListElement" typeof="ListItem">
                        <Link href="/" title={"Go to Bumble Auto."} property="item" typeof={"WebPage"}
                              className={"dark:text-on-surface-variant-dark text-on-surface-variant-light rounded-[8px] px-4 h-[32px] hover:text-primary-light dark:hover:text-primary-dark hover:bg-primary-light dark:hover:bg-primary-dark hover:bg-opacity-[8%] dark:hover:bg-opacity-[8%] justify-center  inline-flex items-center"}>
                            {/*<HomeIcon className="flex-shrink-0 h-5 w-5 mr-2" aria-hidden="true"/>*/}
                            <Icon className={"h-fit"} weight={500} type={"fill"} size={18}>
                                home
                            </Icon>
                            {/*<span className={"hover:underline"} property="name">Bumble Auto</span>*/}
                        </Link>
                         <meta property="position" content="1"/>
                    </span>
                    </li>
                    {items.map((page, i) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                                <Icon
                                    className={`text-on-surface-variant-light dark:text-on-surface-variant-dark`}
                                    weight={500} type={"fill"} size={18}>
                                    chevron_right
                                </Icon>
                                {i !== items.length - 1 ?
                                    <span className={"hover:underline"} property="itemListElement" typeof="ListItem">

                                       <Link href={page.href} title={`Go to ${page.name}.`}
                                             property="item"
                                             typeof="WebPage"

                                            className={"dark:text-on-surface-variant-dark text-on-surface-variant-light rounded-[8px] px-4 h-[32px] hover:text-primary-light dark:hover:text-primary-dark hover:bg-primary-light dark:hover:bg-primary-dark hover:bg-opacity-[8%] dark:hover:bg-opacity-[8%] justify-center  flex item-center"}
                                       >

                                <span className={"flex items-center"}
                                    property="name">
                                {page.name}
                                    </span>
                                       </Link>
                                        <meta property="position" content={i + 2}/>
                                    </span> :
                                    <span property="itemListElement" typeof="ListItem">
                                        <span property="name"
                                              className={"dark:text-on-surface-dark text-on-surface-light px-4 h-[32px] flex items-center justify-center"}>{page.name}</span>
                                        <meta property="url" content=""/>
                                        <meta property="position" content={i + 2}/>
                            </span>}
                            </div>

                        </li>
                    ))}
                </ol>
            </nav>
        </>
    )
}
