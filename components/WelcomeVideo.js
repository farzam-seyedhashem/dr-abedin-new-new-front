/* This example requires Tailwind CSS v2.0+ */
import React, {useState} from "react";
import VideoModal from './VideoModal'
import Image from 'next/legacy/image'
import Typography from "./assets/Typography";
import Space from "./assets/Space";

export default function Example({title, description}) {
    const [openVideo, setOpenVideo] = useState(false)
    return (
        <>
            <div className="relative container mx-auto">

                <Typography type={"h2"} className="text-on-background-light dark:text-on-background-dark">
                    {"Trusted Used Car Dealer in Columbia, Baltimore and Washington DC"}
                </Typography>
                <Space size={"small"}/>
                <div className={"md:flex space-y-[20px] md:space-y-0 md:space-x-[20px]"}>
                    <Typography type={"p"} className="text-on-surface-light dark:text-on-surface-dark md:w-5/12 max-w-3xl">
                        {description || "We at Bumble Auto are proud to present different services such as helping you sell, trade your car or even find the best used car for you. Bumble Auto is the best used car dealership in Maryland. So, if you are looking for the best used car dealer, Bumble Auto is at your service. Our prices are suitable for every budget and the cars are exactly as described, so there won’t be any surprises. We also schedule test drives if you are interested in buying a car and help you sell your car with the best possible price. Enjoy our high-quality services and the smoothest experience with our great offers."}
                    </Typography>
                    <div
                        className={"relative md:w-7/12 w-full overflow-hidden rounded-[16px] border border-surface-variant-light"}>
                        {openVideo?  <video autoPlay controls className="w-full h-auto">
                            <source src="/video.mp4" type="video/mp4"/>
                        </video>:<Image priority={false} width={1920} height={1200} objectFit={"cover"} className={"z-10"}
                                layout={"responsive"}
                                src={"/car-5.jpeg"}/>}
                        {!openVideo&&<div
                            className={"absolute z-20 inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-25"}>
                            <button onClick={() => setOpenVideo(true)}
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
                        </div>}
                    </div>
                </div>

            </div>
            {/*{openVideo && <VideoModal handleClose={() => setOpenVideo(false)}/>}*/}
        </>
    )
}
