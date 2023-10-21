import MainLayout from "@/layouts/Main";
import Slider from '@/components/Slider'
import About from "@/components/About";
import Typography from "@/components/assets/Typography";
import Space from "@/components/assets/Space";
import PageHeader from "@/components/PageHeader";
import Image from 'next/legacy/image'
import TextField from "@/components/inputs/TextField";
import Button from "@/components/buttons/Button";

export default function Home(props) {
    const {...other} = props
    const breadCrumbs = [
        {name: "مقالات", href: "/blog", current: true},
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
                                دریافت نوبت
                            </h1>
                            <p className={"text-on-surface-light dark:text-on-surface-dark text-title-small md:text-title-large mt-2 font-normal"}>
                                {"صفحه دریافت نوبت آنلاین از دکتر بهزاد عابدین"}
                            </p>

                        </div>
                    </div>

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
