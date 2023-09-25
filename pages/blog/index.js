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
                              مقالات دکتر بهزاد عابدین
                            </h1>
                            <p className={"text-on-surface-light dark:text-on-surface-dark text-title-small md:text-title-large mt-2 font-normal"}>
                                {"صفحه مقالات تخصصی دکتر بهزاد عابدین"}
                            </p>
                        </div>
                    </div>

                    <div className={"relative bg-white rounded-[24px] overflow-hidden h-[220px] md:h-[523px]"}>
                        <Image layout={"fill"} objectFit={"contain"} src={"/blog-thumbnail.jpg"}/>
                    </div>
                </div>
                <Space size={"normal"}/>
            </div>


        </MainLayout>
    )
}
