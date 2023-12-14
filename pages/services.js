import MainLayout from "@/layouts/Main";
import Slider from '@/components/Slider'
import About from "@/components/About";
import Typography from "@/components/assets/Typography";
import Space from "@/components/assets/Space";
import PageHeader from "@/components/PageHeader";
import Image from 'next/legacy/image'
import Link from "next/link";
import useSWR from "swr";
import {useState} from "react";

export default function Home(props) {
    const {...other} = props
    const [openVideo,setOpenVideo] = useState(false)
    const breadCrumbs = [
        {name: "تماس با ما", href: "/contact-us", current: true},
    ]
    const drFeatures = [
        "جراحي زيبايي بيني و سپتوم (سپتورينوپلاستي)","جراحي پلك (بلفاروپلاستي)","جراحي زيبايي گوش (اتوپلاستي)","پروتز چانه (منتوپلاستي)","اصلاح انحراف بيني و بازسازي راه هوايي (سپتوپلاستي)","جراحي آندوسكوپيك بيني و سينوس (FESS)","جراحي لوزه در اطفال و بزرگسالان","جا اندازي شكستگي بيني","مشاوره قبل از عمل همگي اعمال جراحي توسط دكتر عابدين.","انجام همه مراقبت هاي پس از جراحي از قبيل تعويض چسب بيني، كشيدن بخيه ها و … توسط ايشان.","انجام تمامي معاينات گوش و حلق و بيني از قبيل معاينه و ساكشن گوش با استفاده از ميكروسكوپ، آندوسكوپي تشخيصي بيني و حنجره و بررسي و تشخيص انواع مشكلات شايع از قبيل مشكلات تنفسي و انسداد بيني، آپنه و خروپف خواب شبانه، كاهش شنوايي، سرگيجه، آلرژي فصلي، سينوزيت و دردهاي صورت، بيماري هاي تيروئيد و غدد بزاقي، بررسي علل گرفتگي صدا و مشكلات تكلم و ساير بيماري هاي مربوط به تخصص جراحي گوش، حلق، بيني و جراحي سر و گردن و جراحي پلاستيك بيني و صورت."
    ]
    return (
        <MainLayout {...other}>
            <div className={"px-4 md:px-6 pt-6"}>
                {/*<PageHeader breadcrumbs={breadCrumbs} title={""}*/}
                {/*            shortDescription={""}*/}
                {/*            imageAlt={"تماس با ما"} imageUrl={"/contact-us-top.jpg"}/>*/}
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                    <div
                        className={"relative flex items-center md:p-[56px] p-6 rounded-[24px] w-full h-[220px] md:h-[523px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                        <div>
                            <h1 className={"md:text-display-large text-display-small font-black text-on-surface-light dark:text-on-surface-dark "}>
                                خدمات دکتر بهزاد عابدین
                            </h1>
                            <p className={"text-on-surface-light dark:text-on-surface-dark text-title-small md:text-title-large mt-2 font-normal"}>
                                {"فهرست خدمات و جراحي هاي ارائه شده توسط دكتر بهزاد عابدين جراح و متخصص گوش، حلق، بيني، جراحي سر و گردن و جراح پلاستيك بيني و صورت"}
                            </p>
                        </div>
                    </div>

                    <div className={"relative bg-white rounded-[24px] overflow-hidden h-[220px] md:h-[523px]"}>
                        <Image layout={"fill"} objectFit={"cover"} src={"/services-thumbnail.jpg"}/>
                    </div>
                </div>
                <div className={"mt-16 container mx-auto"}>
                    <p className={"leading-6 text-on-surface-variant-light dark:text-on-surface-variant-dark  "}>
                        <strong className={"font-medium"}>
                            محتوا
                        </strong>
                    </p>
                    <ul className={"mt-4 space-y-[0.5]"}>
                        <li>
                            <Link locale={false} href={"/services#h1"}>
                                <div className={"hover:underline hover:underline-offset-2 p-px text-primary-light dark:text-primary-dark  font-medium hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}>
                                    {"اعمال جراحي زيبايي"}
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link locale={false} href={"/services#h2"}>
                                <div className={"hover:underline hover:underline-offset-2 p-px text-primary-light  dark:text-primary-dark font-medium hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}>
                                    {"ساير اعمال جراحي"}
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link locale={false} href={"/services#h3"}>
                                <div className={"hover:underline hover:underline-offset-2 p-px text-primary-light dark:text-primary-dark  font-medium hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}>
                                    {"خدمات ارائه شده در مطب"}
                                </div>
                            </Link>
                        </li>
                        {/*<li>*/}
                        {/*    <Link locale={false} href={"/about-us#h3"}>*/}
                        {/*        <div className={"hover:underline hover:underline-offset-2 p-px text-primary-light dark:text-primary-dark  font-medium hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}>*/}
                        {/*            {"نوبت دهی آنلاین"}*/}
                        {/*        </div>*/}
                        {/*    </Link>*/}
                        {/*</li>*/}

                    </ul>
                    <h2 id={"h1"}
                        className="-mt-8  pt-24 mb-8 font-black text-on-surface-light dark:text-on-surface-dark  sm:text-4xl text-title-large">
                        {"اعمال جراحي زيبايي"}
                    </h2>
                    <ul className={"list-star-rtl mr-[22px]"}>
                        {drFeatures.map((item,i) => i<=3 && <li key={i} className={"mb-4 relative text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            <h6>
                                {item}
                            </h6>
                        </li>)}
                    </ul>
                    <h2 id={"h2"}
                        className="-mt-8  pt-24 mb-8 font-black text-on-surface-light dark:text-on-surface-dark  sm:text-4xl text-title-large">
                        {"ساير اعمال جراحي"}
                    </h2>
                    <ul className={"list-star-rtl mr-[22px]"}>
                        {drFeatures.map((item,i) =>  (i>3 && i<=7) && <li key={i} className={"mb-4 relative text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            <h6>
                                {item}
                            </h6>
                        </li>)}
                    </ul>
                    <h2 id={"h3"}
                        className="-mt-8  pt-24 mb-8 font-black text-on-surface-light dark:text-on-surface-dark  sm:text-4xl text-title-large">
                        {"خدمات ارائه شده در مطب"}
                    </h2>
                    <ul className={"list-star-rtl mr-[22px]"}>
                        {drFeatures.map((item,i) => i>7 && <li key={i} className={"mb-4 relative text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            <h6>
                                {item}
                            </h6>
                        </li>)}
                    </ul>
                </div>
                <div className={"container mx-auto"}>
                    <div
                        className={"relative mt-10 w-full h-full relative rounded-[32px] overflow-hidden md:rounded-[64px]"}>
                        <div className={"aspect-w-16 aspect-h-10 relative"}>
                            <Image objectFit={"cover"} className={"z-10"} width={1135} height={768} layout={"fill"}
                                   src={"/index-video-thumbnail.jpg"}/>
                        </div>
                        <div
                            className={"absolute z-20 inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-25"}>
                            <button onClick={() => setOpenVideo(true)}
                                    aria-label={"video-play"}
                                    className={"relative  hover:bg-white hover:bg-opacity-[12%] transition duration-300 outline-none focus:border-2 focus:border-white rounded-3xl w-[92px] h-[92px] flex items-center justify-center"}>
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M77.1461 39.9994C83.6068 52.0411 78.7255 62.9426 66.2666 66.2653C62.9426 78.7255 52.0411 83.6055 39.9994 77.1461C27.9577 83.6068 17.0561 78.7255 13.7334 66.2666C1.27453 62.9426 -3.60675 52.0411 2.85391 39.9994C-3.60675 27.9577 1.27453 17.0561 13.7334 13.7334C17.0561 1.27453 27.9577 -3.60675 39.9994 2.85391C52.0411 -3.60675 62.9426 1.27453 66.2653 13.7334C78.7255 17.0561 83.6055 27.9577 77.1461 39.9994Z"
                                        fill="white"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className={"absolute"} height="40px"
                                     viewBox="0 0 24 24" width="40px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none"/>
                                    <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            {openVideo && <div
                className={"fixed inset-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur md:px-32 sm:px-8 px-4 z-1001 flex items-center justify-center"}>
                <div
                    className={"bg-black relative rounded-[16px] overflow-hidden h-auto w-full md:w-8/12 overflow-hidden"}>
                    {/*<video controls autoPlay className={""} src={"/pr-v.mp4"}/>*/}
                    <div className={" w-full overflow-hidden overflow-hidden"}>
                        <div className="relative overflow-hidden aspect-video w-full h-full">
                            <video controls className={"rounded-[16px] w-full"}>
                                <source src={"/index-video.MP4"}/>
                            </video>
                        </div>
                    </div>
                    <button onClick={() => setOpenVideo(false)}
                            className={"bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl text-white md:h-12 md:w-12 h-10 w-10 flex items-center justify-center md:top-5 ltr:md:left-5 ltr:left-2 rtl:md:right-5 rtl:right-2 top-2  rounded-full absolute"}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                             fill="currentColor">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
                        </svg>
                    </button>
                </div>

            </div>}



        </MainLayout>
    )
}
