import MainLayout from "@/layouts/Main";
import Image from 'next/legacy/image'
import Slider from '@/components/Slider'
import Button from "@/components/buttons/Button";
import About from "@/components/About";
import {useState} from "react";

export default function Home(props) {
    const {...other} = props
const [openVideo,setOpenVideo] = useState(false)
    return (
        <MainLayout {...other}>
            <div className={"px-4 md:px-6 pt-6"}>
                <div
                    className={"md:flex md:h-[700px]  bg-surface-light dark:bg-surface-dark md:space-x-2 md:space-x-reverse"}>
                    <div
                        className={"md:mb-0 mb-4 px-6 py-6 w-full md:w-4/12 flex items-center bg-surface-container-highest-light dark:bg-surface-container-highest-dark h-fit md:h-[700px] rounded-[24px]"}>
                        <h1 className={"text-display-small md:text-display-large text-on-surface-light dark:text-on-surface-dark font-black"}>
                            وب سایت رسمی دکتر بهزاد عابدین جراح پلاستیک بینی دارای بورد تخصصی گوش، حلق و بینی
                        </h1>
                        {/*<p className={"my-6"}>*/}
                        {/*    جهت دریافت نوب بر روی دکمه دریافت نوبت کلیک نمایید.*/}
                        {/*</p>*/}
                        {/*<Button>*/}
                        {/*    دریافت نوبت*/}
                        {/*</Button>*/}
                    </div>
                    <div className={"md:w-8/12 w-full md:h-full h-[320px]"}>
                        <Slider/>
                    </div>

                </div>
                <div>
                    <About/>
                </div>
                <div className={"mt-20 container grid grid-cols-4 gap-4 mx-auto"}>
                    <div className={"relative rounded-[16px] overflow-hidden"}>
                        <Image layout={"responsive"} objectFit={"cover"} width={1920} height={1240} src={"/index-img/1-1.JPG"}/>
                    </div>
                    <div className={"relative rounded-[16px] overflow-hidden"}>
                        <Image layout={"responsive"} objectFit={"cover"} width={1920} height={1240} src={"/index-img/1-2.JPG"}/>
                    </div>
                    <div className={"relative rounded-[16px] overflow-hidden"}>
                        <Image layout={"responsive"} objectFit={"cover"} width={1920} height={1240} src={"/index-img/1-3.JPG"}/>
                    </div>
                    <div className={"relative rounded-[16px] overflow-hidden"}>
                        <Image layout={"responsive"} objectFit={"cover"} width={1920} height={1240} src={"/index-img/1-4.JPG"}/>
                    </div>
                </div>
            </div>

        </MainLayout>
    )
}
