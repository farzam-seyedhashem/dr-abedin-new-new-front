import MainLayout from "@/layouts/Main";
import Slider from '@/components/Slider'
import About from "@/components/About";
import Typography from "@/components/assets/Typography";
import Space from "@/components/assets/Space";
import PageHeader from "@/components/PageHeader";
import Image from 'next/legacy/image'
import Link from "next/link";

export default function Home(props) {
    const {...other} = props
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
            </div>


        </MainLayout>
    )
}
