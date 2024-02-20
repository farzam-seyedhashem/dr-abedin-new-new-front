import MainLayout from "@/layouts/Main";
import Slider from '@/components/Slider'
import About from "@/components/About";
import Typography from "@/components/assets/Typography";
import Space from "@/components/assets/Space";
import PageHeader from "@/components/PageHeader";
import Image from 'next/legacy/image'

export default function Home(props) {
    const {...other} = props
    const breadCrumbs = [
        {name: "تماس با ما", href: "/contact-us", current: true},
    ]
    return (
        <MainLayout {...other}>
            <div className={"px-4 md:md:px-6 px-4 pt-6"}>
                {/*<PageHeader breadcrumbs={breadCrumbs} title={""}*/}
                {/*            shortDescription={""}*/}
                {/*            imageAlt={"تماس با ما"} imageUrl={"/contact-us-top.jpg"}/>*/}

                <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                    <div
                        className={"relative flex items-center md:p-[56px] p-6 rounded-[24px] w-full h-[220px] md:h-[523px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                        <div>
                            <h1 className={"md:text-display-large text-display-small font-black text-on-surface-light dark:text-on-surface-dark "}>
                                تماس با ما
                            </h1>
                            <p className={"text-on-surface-light dark:text-on-surface-dark text-title-small md:text-title-large mt-2 font-normal"}>
                                {"دکتر بهزاد عابدین جراح و متخصص گوش، حلق، بيني و جراح پلاستيك بيني و صورت مي باشد در این صفحه راه های دیگر ارتباطی با ایشان ذکر گردیده."}
                            </p>
                        </div>
                    </div>

                    <div className={"relative rounded-[24px] bg-white overflow-hidden h-[220px] md:h-[523px]"}>
                        <Image layout={"fill"} objectFit={"contain"} src={"/contact-thumbnail.jpg"}/>
                    </div>
                </div>
                <Space size={"normal"}/>
                <div className={"container mx-auto"}>


                    <Typography type={"h2"} className="text-on-surface-light dark:text-on-surface-dark">
                        راه های ارتباطی و آدرس
                    </Typography>
                    <Space size={"xs"}/>
                    <div
                        className={"rounded-2xl overflow-hidden w-full  border border-surface-variant-light dark:border-surface-variant-dark md:max-w-3xl overflow-x-hidden"}>
                        <div className={"flex overflow-scroll whitespace-nowrap"}>
                        <table className={"w-full whitespace-normal"}>
                            <thead className={""}>
                            <tr className={`bg-surface-light dark:bg-surface-dark dark:bg-surface-1-dark divide-x-reverse divide-x divide-surface-variant-light dark:divide-surface-variant-dark`}>
                                <th className={" md:px-6 px-4 py-4 text-on-surface-light dark:text-on-surface-dark font-medium"}>
                                    عنوان
                                </th>
                                <th className={"py-4 md:px-6 px-4  text-on-surface-light dark:text-on-surface-dark font-medium"}>
                                    اطلاعات
                                </th>
                            </tr>
                            </thead>
                            <tbody
                                className={"text-body-small  md:text-body-large bg-surface-light dark:bg-surface-dark w-full text-right"}>
                            <tr>
                                <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                    تلفن
                                </td>
                                <td
                                    className={`md:px-6 px-4  font-medium border-r border-t border-surface-variant-light dark:border-surface-variant-dark py-4  text-on-surface-light dark:text-on-surface-dark`}>
                                    <a dir={"ltr"} className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}
                                       href={"tel:02126601967"}>
                                        {"+21-26601967"}
                                    </a>
                                    {/*-*/}
                                    {/*<a dir={"ltr"} className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}*/}
                                    {/*   href={"tel:0216601967"}>*/}
                                    {/*    {"+21-6601967"}*/}
                                    {/*</a>*/}
                                </td>

                            </tr>
                            <tr>
                                <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                    ساعت پاسخگویی
                                </td>
                                <td
                                    className={`md:px-6 px-4 font-medium border-r border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                                    {"شنبه تا چهارشنبه ساعت ۱۵ تا ۱۹"}
                                </td>

                            </tr>
                            <tr>
                                <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark  font-normal`}>
                                    ایمیل
                                </td>
                                <td
                                    className={`md:px-6 px-4 font-medium border-r border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light  dark:text-on-surface-dark`}>
                                    <a className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}
                                       href={"mailto:dr.behzad_adbedin@yahoo.com"}>
                                    dr.behzad_adbedin@yahoo.com
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light  dark:text-on-surface-variant-dark font-normal`}>
                                    آدرس مطب
                                </td>
                                <td
                                    className={`md:px-6 px-4  font-medium border-r border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                                    {" تهران، خیابان دکتر علی شریعتی، بالاتر از پل صدر، روبروی سفارت واتیکان، ساختمان رسا، پلاک ۱۷۳۰، طبقه اول، واحد ۲"}
                                </td>
                            </tr>
                            <tr>
                                <td className={`md:px-6 px-4 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark font-normal`}>
                                    شبکه اجتماعی
                                </td>
                                <td
                                    className={`md:px-6 px-4  font-medium border-r border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark`}>
                                    <a className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}
                                       href={"http://localhost:3000/contact-us#"}>
                                        واتس اپ
                                    </a>
                                    <a className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}
                                       href={"https://www.instagram.com/dr.behzadabedin/?next=%2F"}>
                                        اینستاگرام (dr.behzadabedin)
                                    </a>
                                    {/*<a className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}*/}
                                    {/*   href={"http://localhost:3000/contact-us#"}>*/}
                                    {/*    کانال تلگرام*/}
                                    {/*</a>*/}
                                </td>
                            </tr>


                            </tbody>

                        </table>
                        </div>
                    </div>

                </div>
            </div>


        </MainLayout>
    )
}
