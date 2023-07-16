import Image from 'next/legacy/image'
import {ImageBaseURL} from "@/config"
    ;
import {Swiper, SwiperSlide} from 'swiper/react';
import {useEffect, useState} from "react";
import {getMedia} from "@/helpers/GetMedia";

export default function Crousel({slides}) {
    const [activeIndex, setActiveIndex] = useState(0)
    // const windowSize = getMedia()
    const [windowSize, setWindowSize] = useState()
    useEffect(() => {
        setWindowSize(getMedia())
    }, [])
    const onChange = (swiper) => {
        setActiveIndex(swiper.realIndex)
    }
    const slide = [...slides.data, ...slides.data, ...slides.data]
    return (
        <div className={"container py-2 px-4 mx-auto"}>
            {/*<swiper-container slideVisibleClass={"!w-[400px]"} className={"crousel"} space-between={"8px"} slides-per-view="3"  loop={true} >*/}
            {/*    {slides.data.map(item=><swiper-slide class={"slides"}>*/}
            {/*        <div className={"h-[400px] relative w-full"}>*/}

            {/*        <Image objectFit={"cover"} layout={"fill"} src={ImageBaseURL+item?.thumbnail?.url}/>*/}
            {/*        </div>*/}
            {/*    </swiper-slide>)}*/}
            {/*    {slides.data.map(item=><swiper-slide class={"slides"}>*/}
            {/*        <div className={"h-[400px] relative w-full"}>*/}
            {/*            <Image objectFit={"cover"} layout={"fill"} src={ImageBaseURL+item?.thumbnail?.url}/>*/}
            {/*        </div>*/}
            {/*    </swiper-slide>)}*/}

            {/*</swiper-container>*/}
            {windowSize&&<Swiper
                watchSlidesProgress
                spaceBetween={8}
                slidesPerView={(windowSize === "xs" || windowSize === "sm") ? 3 : 4}
                loop={true}
                loopPreventsSliding
                loopedSlides={4}
                onSlideChange={(swiper) => onChange(swiper)}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {slide.map((item, index) => <SwiperSlide key={index}
                    className={`!transition-all ease-in !duration-[500ms] ${activeIndex - 1 === index ? "animate-slide" : activeIndex === index ? "md:!w-2/5 !w-6/12" : activeIndex + 1 === index ? "md:!w-2/5 !w-[calc(6*100%_/_12_-_64px)]" : activeIndex + 2 === index ? "md:!w-[calc(100%_/_5_-_82px)] !w-[48px]" : activeIndex + 3 === index ? "md:!w-[56px]" : ""}`}>
                    {({isVisible}) => (
                        <div
                            className={`${isVisible ? "visible-slide" : ""} group overflow-hidden rounded-[28px] h-[250px] md:h-[400px] relative w-full`}>

                            <Image objectFit={"cover"} layout={"fill"} src={ImageBaseURL + item?.thumbnail?.url}/>
                            <div
                                className={"dark:group-hover:bg-opacity-[8%] group-hover:bg-opacity-[8%] absolute inset-0 group-hover:bg-on-surface-light dark:group-hover:bg-on-surface-dark"}/>
                            <div
                                className={"absolute flex items-end  py-4 dark:text-inverse-on-surface-dark text-inverse-on-surface-light inset-0 bg-gradient-to-b from-transparent via-transparent dark:to-inverse-surface-dark to-inverse-surface-light"}>
                                <div className={"px-4 w-11/12 overflow-hidden"}>

                                    <h3 className={`${(windowSize === "xs" || windowSize === "sm") ?( activeIndex === index) ? "opacity-100" : "opacity-0":(activeIndex + 1 === index || activeIndex === index) ? "opacity-100" : "opacity-0"} ${(windowSize === "xs" || windowSize === "sm") && "truncate"} transition-opacity duration-1000 text-title-medium font-bold`}>
                                        {item.title}
                                    </h3>
                                    <p className={`${(windowSize === "xs" || windowSize === "sm") ?(activeIndex !== index) ? "truncate overflow-hidden" : "w-full ":(activeIndex + 1 !== index && activeIndex !== index) ? "truncate overflow-hidden" : "w-full "} ${(windowSize === "xs" || windowSize === "sm") && "truncate"} transition-all duration-1000 text-body-medium font-medium`}>
                                        {item.subTitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </SwiperSlide>)}

                {/*<SwiperSlide>Slide 1</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 2</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 3</SwiperSlide>*/}
                {/*<SwiperSlide>Slide 4</SwiperSlide>*/}


            </Swiper>}


        </div>
    )
}