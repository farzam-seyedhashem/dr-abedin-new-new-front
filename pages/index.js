import MainLayout from "@/layouts/Main";
import Image from 'next/legacy/image'
import Slider from '@/components/Slider'
import Button from "@/components/buttons/Button";
import About from "@/components/About";

export default function Home(props) {
    const {...other} = props

    return (
        <MainLayout {...other}>
            <div className={"px-4 md:px-6 pt-6"}>
                <div
                    className={"flex  bg-surface-light dark:bg-surface-dark md:space-x-2 md:space-x-reverse"}>
                    <div
                        className={" px-6 py-6 w-4/12 flex items-center bg-surface-container-highest-light dark:bg-surface-container-highest-dark h-[700px] rounded-[24px]"}>
                        <h1 className={"text-display-large text-on-surface-light dark:text-on-surface-dark font-black"}>
                            وب سایت رسمی دکتر بهزاد عابدین جراح زیبایی
                        </h1>
                        {/*<p className={"my-6"}>*/}
                        {/*    جهت دریافت نوب بر روی دکمه دریافت نوبت کلیک نمایید.*/}
                        {/*</p>*/}
                        {/*<Button>*/}
                        {/*    دریافت نوبت*/}
                        {/*</Button>*/}
                    </div>
                    <div className={"w-8/12"}>
                        <Slider/>
                    </div>

                </div>
                <div>
                    <About/>
                </div>
            </div>


        </MainLayout>
    )
}
