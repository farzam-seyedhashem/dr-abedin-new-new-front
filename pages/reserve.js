import MainLayout from "@/layouts/Main";
import Typography from "@/components/assets/Typography";
import Space from "@/components/assets/Space";
import Image from 'next/legacy/image'
import TextField from "@/components/inputs/TextField";
import Button from "@/components/buttons/Button";
import Breadcrumbs from "@/components/BreadCrumbs";

export default function Home(props) {
    const {...other} = props
    const breadCrumbs = [
        {name: "نوبت دهی", href: "/reserve", current: true},
    ]
    const siteSetting = {
        metaTitle: "دریافت نوبت | دکتر بهزاد عابدین",
        metaDescription: "دریافت نوبت از دکتر بهزاد عابدین جراح زیبایی بینی در تهران",
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
                {/*<PageHeader breadcrumbs={breadCrumbs} title={""}*/}
                {/*            shortDescription={""}*/}
                {/*            imageAlt={"تماس با ما"} imageUrl={"/contact-us-top.jpg"}/>*/}

                <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                    <header
                        className={"relative flex items-center md:p-[56px] p-6 rounded-[24px] w-full h-[220px] md:h-[523px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                        <div className={"absolute top-10 right-10"}>
                            <Breadcrumbs items={breadCrumbs}/>
                        </div>
                        <div>
                            <h1 className={"md:text-display-large text-display-small font-black text-on-surface-light dark:text-on-surface-dark "}>
                                دریافت نوبت
                            </h1>
                            <p className={"text-on-surface-light dark:text-on-surface-dark text-title-small md:text-title-large mt-2 font-normal"}>
                                {"ایام کاری مطب، روزهای شنبه و چهارشنبه از ساعت ۱۴ تا ۱۸ و پاسخگویی شنبه تا چهارشنبه در همین ساعات می باشد."}
                            </p>

                        </div>
                    </header>

                    <div className={"relative rounded-[24px] bg-white overflow-hidden h-[220px] md:h-[523px]"}>
                        <Image layout={"fill"} objectFit={"contain"} src={"/reserve-thumbnail.jpg"}/>
                    </div>
                </div>
                <Space size={"normal"}/>
                <div className={"container mx-auto"}>
                    <div className={"border p-6 border-outline-light dark:border-outline-dark rounded-[24px]"}>
                        <Typography className={"text-on-surface-light dark:text-on-surface-dark"} type={"h2"}>
                            فرم دریافت نوبت
                        </Typography>
                        <Typography className={" text-on-surface-light mt-2 dark:text-on-surface-dark"} type={"p"}>
                            جهت دریافت نوبت فرم زیر را پر کنید
                        </Typography>
                        <Typography className={"mb-8 text-on-surface-light dark:text-on-surface-dark"}>
                            {"ساعت کاری مطب در روز های ذوج ساعت ۱۵ تا ۱۹ می باشد."}
                        </Typography>
                        <div className={"grid grid-cols-1 md:grid-cols-2 gap-2 mb-4"}>
                            <TextField label={"نام و نام خانوادگی"}></TextField>
                            <TextField label={"شماره تماس"}></TextField>
                        </div>
                        <Button type={"tonal"}>
                            ارسال
                        </Button>
                    </div>
                </div>
            </div>


        </MainLayout>
    )
}
