import MainLayout from "@/layouts/Main";
import Slider from '@/components/Slider'
import About from "@/components/About";
import Typography from "@/components/assets/Typography";
import Space from "@/components/assets/Space";
import PageHeader from "@/components/PageHeader";
import Image from 'next/legacy/image'
import Link from "next/link";
import {useState} from "react";

export default function Home(props) {
    const {...other} = props
    const breadCrumbs = [
        {name: "تماس با ما", href: "/contact-us", current: true},
    ]
    const [openVideo, setOpenVideo] = useState(false)

    const drFeatures = [
        "متولد سال ١٣٦١ در تهران",
        "دارای درجه دانشنامه ( بورد تخصصی ) در جراحی گوش، گلو، بینی و جراحی سر و گردن و جراح بینی در تهران.",
        "بیش از ۱۳ سال تجربه در جراحی بینی ( رینوپلاستی ) و سایر اعمال جراحی تخصصی رشته گوش، گلو، بینی و جراحی سر و گردن.",
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
                                درباره ما
                            </h1>
                            <p className={"text-on-surface-light dark:text-on-surface-dark text-title-small md:text-title-large mt-2 font-normal"}>
                                {"درباره ی دکتر بهزاد عابدین و وبسایت رسمی ایشان بیشتر بدانید."}
                            </p>
                        </div>
                    </div>

                    <div className={"relative rounded-[24px] overflow-hidden h-[220px] md:h-[523px]"}>
                        <Image layout={"fill"} objectFit={"cover"} src={"/dr-abedin-3.jpeg"}/>
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
                            <Link locale={false} href={"/about-us#h1"}>
                                <div
                                    className={"hover:underline hover:underline-offset-2 p-px text-primary-light dark:text-primary-dark  font-medium hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}>
                                    {"درباره ی دکتر بهزاد عابدین"}
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link locale={false} href={"/about-us#h2"}>
                                <div
                                    className={"hover:underline hover:underline-offset-2 p-px text-primary-light  dark:text-primary-dark font-medium hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}>
                                    {"درباره ی وبسایت"}
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link locale={false} href={"/about-us#h3"}>
                                <div
                                    className={"hover:underline hover:underline-offset-2 p-px text-primary-light dark:text-primary-dark  font-medium hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark"}>
                                    {"تیزر دکتر بهزاد عابدین"}
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
                        {"درباره ی دکتر بهزاد عابدین"}
                    </h2>

                    {/*<Typography className={"text-on-surface-light dark:text-on-surface-dark mb-4"} type={"p"}>*/}
                    {/*    {"دکتر بهزاد عابدین متولد ١٣٦١ در تهران، داراي درجه دانشنامه (بورد تخصصي)، عضو انجمن گوش، حلق، بيني و جراحان سر و گردن ايران و عضو انجمن راینولوژی ایران مي باشند."}*/}
                    {/*</Typography>*/}

                    <ul className={"list-star-rtl mr-[22px]"}>
                        {drFeatures.map((item, i) => i <= 3 && <li key={i}
                                                                   className={"mb-4 relative text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            <h6>
                                {item}
                            </h6>
                        </li>)}
                    </ul>
                    <h2 id={"h2"}
                        className="-mt-8  pt-24 mb-8 font-black text-on-surface-light dark:text-on-surface-dark  sm:text-4xl text-title-large">
                        {"درباره ی وبسایت"}
                    </h2>
                    <Typography className={"text-on-surface-light dark:text-on-surface-dark mb-4"} type={"p"}>
                        {"این وب سایت، سايت رسمی دکتر بهزاد عابدین جراح و متخصص گوش، حلق، بيني مي باشد و در آن توضیحاتی در مورد جراحي  بینی و همچنین خدمات این جراح (دکتر بهزاد عابدین) وجود دارد. بازديد كنندگان از سايت می توانند با مطالعه این بخش ها اطلاعات مورد نیاز خود را جهت جراحی بینی به دست بیاورند و یا برای دریافت وقت مشاوره و نوبت گیری جهت انجام جراحی بینی و صورت و معاينات گوش و حلق و بيني در این وبسایت از طریق بخش نوبت دهی آنلاین از دکتر بهزاد عابدین اقدام نمايند."}
                    </Typography>
                    <Typography type={"p"} className={"text-on-surface-light dark:text-on-surface-dark "}>
                        {"شما مي توانيد از طریق اين سايت نسبت به مشاهده تصاوير مربوط به جراحي هاي انجام شده توسط ايشان و دریافت نوبت به صورت آنلاین براي مشاوره در مورد جراحی بینی و صورت و دیگر خدمات ارائه شده از دکتر بهزاد عابدین اقدام فرماييد و همچنين اطلاعات علمي و كاربردي مفيدي در خصوص اصول و شرايط جراحي بيني، مراقبتهاي بعد از جراحي و پاسخ به بسياري از سوالات و ابهامات خود در اين خصوص را دريافت نماييد."}
                    </Typography>
                    {/*<h2 id={"h3"}*/}
                    {/*    className="-mt-8  pt-24 mb-8 font-black text-on-surface-light dark:text-on-surface-dark  sm:text-4xl text-title-large">*/}
                    {/*    {"تیزر دکتر بهزاد عابدین"}*/}
                    {/*</h2>*/}
                    {/*<div*/}
                    {/*    className={"relative mt-10 w-full h-full relative rounded-[32px] overflow-hidden md:rounded-[64px]"}>*/}
                    {/*    <div className={"aspect-w-16 aspect-h-10 relative"}>*/}
                    {/*        <Image objectFit={"cover"} className={"z-10"} width={1135} height={768} layout={"fill"}*/}
                    {/*               src={"/video-thumb.png"}/>*/}
                    {/*    </div>*/}
                    {/*    <div*/}
                    {/*        className={"absolute z-20 inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-25"}>*/}
                    {/*        <button onClick={() => setOpenVideo(true)}*/}
                    {/*                aria-label={"video-play"}*/}
                    {/*                className={"relative  hover:bg-white hover:bg-opacity-[12%] transition duration-300 outline-none focus:border-2 focus:border-white rounded-3xl w-[92px] h-[92px] flex items-center justify-center"}>*/}
                    {/*            <svg width="80" height="80" viewBox="0 0 80 80" fill="none"*/}
                    {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                <path*/}
                    {/*                    d="M77.1461 39.9994C83.6068 52.0411 78.7255 62.9426 66.2666 66.2653C62.9426 78.7255 52.0411 83.6055 39.9994 77.1461C27.9577 83.6068 17.0561 78.7255 13.7334 66.2666C1.27453 62.9426 -3.60675 52.0411 2.85391 39.9994C-3.60675 27.9577 1.27453 17.0561 13.7334 13.7334C17.0561 1.27453 27.9577 -3.60675 39.9994 2.85391C52.0411 -3.60675 62.9426 1.27453 66.2653 13.7334C78.7255 17.0561 83.6055 27.9577 77.1461 39.9994Z"*/}
                    {/*                    fill="white"/>*/}
                    {/*            </svg>*/}
                    {/*            <svg xmlns="http://www.w3.org/2000/svg" className={"absolute"} height="40px"*/}
                    {/*                 viewBox="0 0 24 24" width="40px" fill="#000000">*/}
                    {/*                <path d="M0 0h24v24H0V0z" fill="none"/>*/}
                    {/*                <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/>*/}
                    {/*            </svg>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*{openVideo && <div*/}
                    {/*    className={"fixed inset-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur md:px-32 sm:px-8 px-4 z-1001 flex items-center justify-center"}>*/}
                    {/*    <div*/}
                    {/*        className={"bg-black relative rounded-[16px] overflow-hidden h-auto w-full md:w-8/12 overflow-hidden"}>*/}
                    {/*        /!*<video controls autoPlay className={""} src={"/pr-v.mp4"}/>*!/*/}
                    {/*        <div className={" w-full overflow-hidden overflow-hidden"}>*/}
                    {/*            <div className="relative overflow-hidden aspect-video w-full h-full">*/}
                    {/*                <video controls className={"rounded-[16px]"}>*/}
                    {/*                    <source src={"/about-us-video.MP4"}/>*/}
                    {/*                </video>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <button onClick={() => setOpenVideo(false)}*/}
                    {/*                className={"bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl text-white md:h-12 md:w-12 h-10 w-10 flex items-center justify-center md:top-5 ltr:md:left-5 ltr:left-2 rtl:md:right-5 rtl:right-2 top-2  rounded-full absolute"}>*/}
                    {/*            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"*/}
                    {/*                 fill="currentColor">*/}
                    {/*                <path d="M0 0h24v24H0V0z" fill="none"/>*/}
                    {/*                <path*/}
                    {/*                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>*/}
                    {/*            </svg>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}

                    {/*</div>}*/}
                </div>
            </div>


        </MainLayout>
    )
}
