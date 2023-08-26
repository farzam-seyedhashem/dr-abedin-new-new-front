import Appbar from '../components/Appbar'
import Footer from '../components/Footer'
import Head from "next/head";
import {useRouter} from "next/router";
import {SWRConfig} from "swr";
import React, {useState} from "react";
import NavigationBar from "../components/Appbars/NavigationBar";
import MobileAppbarWithSearch from "@/components/Appbars/MobileAppbarWithSearch";
import MobileAppbar from "@/components/Appbars/MobileAppbar";

export default function MainLayout({
                                       modeType,
                                       handleChangeMode,
                                       handleChangeColor,
                                       colorMode,
                                       breadCrumbs,
                                       pageTitle,
                                       withoutFAB,
                                       children,
                                       withoutFooter,
                                       title,
                                       metaKeywords,
                                       whitoutpadding,
                                       siteSetting,
                                       twitterCard,
                                       ogType
                                   }, props) {
    const router = useRouter()
    const [openDrawer, setOpenDrawer] = useState(false)
    const config = {
        headers: {
            // 'Authorization': 'Bearer ' + props.token,
            'Content-Type': 'application/json',
        }
    }

    return (

        <>
            <Head>
                <meta name="msapplication-navbutton-color" content="#000000"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
                <meta charSet="utf-8"/>
                {siteSetting?.metaTitle && <title>{siteSetting.metaTitle}</title>}
                {siteSetting?.metaTitle && <meta name="title" content={siteSetting.metaTitle}/>}
                {siteSetting?.metaDescription && <meta name="description" content={siteSetting?.metaDescription}/>}
                <meta name='viewport'
                      content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover, maximum-scale=5'/>
                {siteSetting?.metaKeywords && <meta name="keywords" content={siteSetting.metaKeywords}/>}
                {/*og:meta*/}
                {siteSetting?.websiteURL &&
                    <meta property="og:url" content={siteSetting?.websiteURL + router.pathname}/>}


                {siteSetting?.siteName && <meta property="og:site_name" content={siteSetting?.siteName}/>}

                {/*siteSetting.ogType ||*/}
                {<meta property="og:type" content={ogType || "website"}/>}
                <meta property="og:locale" content={"en_US"}/>
                {siteSetting?.metaTitle && <meta property="og:title" content={siteSetting?.metaTitle}/>}
                {siteSetting?.metaDescription &&
                    <meta property="og:description" content={siteSetting.metaDescription}/>}

                <meta property="og:image"
                      content={!props.ogImage ? siteSetting?.websiteURL + '/logo.png' : props.ogImage}/>
                <meta property="og:image:secure_url"
                      content={!props.ogImage ? siteSetting?.websiteURL + '/logo.png' : props.ogImage}/>

                {/*twitter meta*/}
                {siteSetting?.websiteURL && <meta name="twitter:domain" content={siteSetting?.websiteURL}/>}
                {siteSetting?.websiteURL && <meta name="twitter:site" content={siteSetting?.websiteURL}/>}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:label1" content="Est. reading time"/>
                <meta name="twitter:data1" content="13 minutes"/>
                {/*<meta name="twitter:title" content={!metaTitle ? siteSetting?.title : metaTitle}/>*/}
                {/*<meta name="twitter:description" content={!metaDescr ? siteSetting?.description : metaDescr}/>*/}
                {siteSetting?.metaTitle && <meta name="twitter:title" content={siteSetting.metaTitle}/>}
                {siteSetting?.metaDescription &&
                    <meta name="twitter:description" content={siteSetting?.metaDescription}/>}


                <meta name="twitter:card" content={twitterCard ? twitterCard : "summary"}/>
                {/*<meta name="twitter:image" content={siteSetting.websiteURL + "/icon-144x144.png"}/>*/}
                {/*<meta name="twitter:creator" content="@farzam"/>*/}

                <link itemProp="url" href=""/>
                {siteSetting?.websiteURL && <link rel="canonical" href={siteSetting.websiteURL + router.pathname}/>}
                {/*<meta itemProp="name" content={!metaTitle ? siteSetting?.title : metaTitle}/>*/}
                {/*<meta itemProp="description" content={!metaDescr ? siteSetting?.description : metaDescr}/>*/}


                {siteSetting?.websiteURL && <meta name="author" content={siteSetting?.websiteURL}/>}


                {siteSetting?.metaTitle && <meta itemProp="name" content={siteSetting.metaTitle}/>}
                {siteSetting?.metaDescription && <meta itemProp="description" content={siteSetting?.metaDescription}/>}

                {siteSetting?.robot && <meta name="robots" content="index, follow"/>}
                {siteSetting?.robot && <meta name="googlebot"
                                             content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>}
                {siteSetting?.robot && <meta name="bingbot"
                                             content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>}

                {siteSetting?.placename && <meta name="geo.placename" content={siteSetting.placename}/>}
                {siteSetting?.position && <meta name="geo.position" content={siteSetting.position}/>}
                {siteSetting?.region && <meta name="geo.region" content={siteSetting.region}/>}

                <link rel='dns-prefetch' href='//s.w.org'/>


                {/*pwa*/}
                {/*<meta name='application-name' content='irBCoffee'/>*/}
                {/*<meta name='apple-mobile-web-app-capable' content='yes'/>*/}
                {/*<meta name='apple-mobile-web-app-status-bar-style' content='default'/>*/}
                {/*<meta name='apple-mobile-web-app-title'*/}
                {/*      content='irBCoffee'/>*/}
                {/*<meta name='format-detection' content='telephone=yes'/>*/}
                {/*<meta name='mobile-web-app-capable' content='yes'/>*/}
                {/*<meta name='msapplication-config' content={siteSetting.websiteURL + '/icons/browserconfig.xml'}/>*/}
                {/*<meta name='msapplication-TileColor' content='#da532c'/>*/}
                {/*<meta name='msapplication-tap-highlight' content='no'/>*/}
                {/*<meta name="msapplication-TileImage" content={siteSetting.websiteURL + "/mstile-144x144.png"}/>*/}
                {/*<meta name="msapplication-starturl" content="/"/>*/}
                {/*{siteSetting?.themeColor && <meta name='theme-color' content={siteSetting.themeColor}/>}*/}

                {/*<link rel='apple-touch-icon' sizes='180x180'*/}
                {/*      href={siteSetting.websiteURL + '/apple-touch-icon.png'}/>*/}
                {/*<link rel='icon' type='image/png' sizes='32x32'*/}
                {/*      href={siteSetting.websiteURL + '/icons/favicon-32x32.png'}/>*/}
                {/*<link rel='icon' type='image/png' sizes='16x16'*/}
                {/*      href={siteSetting.websiteURL + '/icons/favicon-16x16.png'}/>*/}
                {/*<link rel='manifest' href={siteSetting.websiteURL + '/manifest.json'} crossOrigin='use-credentials'/>*/}
                {/*<link rel='mask-icon' href={siteSetting.websiteURL + '/safari-pinned-tab.svg'} color='#4f2c1d'/>*/}
                {/*<link rel='shortcut icon' href={siteSetting.websiteURL + '/favicon.svg'}/>*/}

                {/*      <Script*/}
                {/*          async*/}
                {/*          src={`https://www.googletagmanager.com/gtag/js?id=${"UA-168224782-1"}`}*/}
                {/*      />*/}
                {/*      <script*/}
                {/*          dangerouslySetInnerHTML={{*/}
                {/*              __html: `*/}
                {/*  window.dataLayer = window.dataLayer || [];*/}
                {/*  function gtag(){dataLayer.push(arguments);}*/}
                {/*  gtag('js', new Date());*/}
                {/*  gtag('config', '${"UA-168224782-1"}', {*/}
                {/*    page_path: window.location.pathname,*/}
                {/*  });*/}
                {/*`,*/}
                {/*          }}*/}
                {/*      />*/}
                <script type={"application/ld+json"} dangerouslySetInnerHTML={{
                    __html: `
                {
        "@context": "https:\\/\\/schema.org",
        "@graph": [
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Home",
            "url": "https:\\/\\/bumbleauto.com\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Pages",
            "url": "#"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Car Services",
            "url": "https:\\/\\/bumbleauto.com\\/services\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Car Repair Services",
            "url": "https:\\/\\/bumbleauto.com\\/services\\/repair-car\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Sell Your Car",
            "url": "https:\\/\\/bumbleauto.com\\/services\\/sell-your-car\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Get Pre-Qualified",
            "url": "https:\\/\\/bumbleauto.com\\/get-pre-qualified\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Used Car financing to Support You",
            "url": "https:\\/\\/bumbleauto.com\\/financing\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Car Trade-in",
            "url": "https:\\/\\/bumbleauto.com\\/services\\/car-trade-in\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "About Us",
            "url": "https:\\/\\/bumbleauto.com\\/about-us\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Warranty",
            "url": "https:\\/\\/bumbleauto.com\\/warranty\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Locations",
            "url": "https:\\/\\/bumbleauto.com\\/locations\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Contact Us",
            "url": "https:\\/\\/bumbleauto.com\\/contact-us\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Car Wishlist",
            "url": "https:\\/\\/bumbleauto.com\\/car-wishlist\\/"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Contact Us",
            "url": "#"
        },
        {
            "@context": "https:\\/\\/schema.org",
            "@type": "SiteNavigationElement",
            "@id": "https:\\/\\/bumbleauto.com\\/#Main Menu",
            "name": "Shortcodes",
            "url": "#"
        }
        ]
    },
                `
                }}>

                </script>


                <link rel='icon' href='/favicon.ico'/>
                <link rel="apple-touch-icon"
                      href="/icon/apple-touch-icon.png"/>
                <link rel="icon" href="/icon/favicon-32x32.png" sizes="32x32"/>

                <link rel="icon" href="/icon/android-chrome-192x192.png"
                      sizes="192x192"/>


            </Head>
            <SWRConfig value={{
                fetcher: (...args) => fetch(...args, config).then(res => {
                    if (!res.ok) {
                        const error = new Error('An error occurred while fetching the data.')
                        // Attach extra info to the error object.
                        error.info = res.json()
                        error.status = res.status
                        throw error
                    }
                    return res.json()
                }),
                onError: (error, key) => {
                    console.log(error)
                    if (error.status === 401) {

                    } else if (error.status === 403) {

                    }
                }
            }}>


                <div className={"md:flex bg-surface-container-light dark:bg-surface-container-dark"}>
                    <Appbar colorMode={colorMode}  handleChangeColor={handleChangeColor} handleChangeMode={handleChangeMode} modeType={modeType} withoutFAB={withoutFAB} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>

                    {/*<NavigationBar/>*/}
                    <div className={"bg-surface-light dark:bg-surface-dark md:mr-auto w-full md:mt-[64px]"}>
                        <MobileAppbar colorMode={colorMode}  handleChangeColor={handleChangeColor} handleChangeMode={handleChangeMode} modeType={modeType} withoutFAB={withoutFAB} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
                        {/*<TopAppbar modeType={modeType}*/}
                        {/*           handleChangeMode={handleChangeMode}*/}
                        {/*           handleChangeColor={handleChangeColor}*/}
                        {/*           colorMode={colorMode} breadCrumbs={breadCrumbs} title={pageTitle}/>*/}
                        {/*<MobileAppbarWithSearch modeType={modeType}*/}
                        {/*                        handleChangeMode={handleChangeMode}*/}
                        {/*                        handleChangeColor={handleChangeColor}*/}
                        {/*                        colorMode={colorMode}/>*/}
                        <div>
                            {children}
                        </div>
                        {!withoutFooter && <Footer/>}
                        {/*<FullDialog>*/}
                        {/*    */}
                        {/*</FullDialog>*/}
                    </div>

                </div>


            </SWRConfig>

            {/*<Banner/>*/}
            {/*<Footer/>*/}

        </>

    )
}
