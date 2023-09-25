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
