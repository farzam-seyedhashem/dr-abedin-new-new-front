import Image from 'next/legacy/image'
import {ImageBaseURL} from "@/config"
    ;
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import {useRef, useState} from "react";
import IconButton from "@/components/buttons/IconButton";
import Typography from "@/components/assets/Typography";
import Icon from "@/components/assets/Icon";

export default function SellCarStepsSlider({slides}) {
    const [activeIndex, setActiveIndex] = useState(0)

    const onChange = (swiper) => {
        setActiveIndex(swiper.realIndex)
    }
    const sliderRef = useRef();
    // const slide = [...slides.data, ...slides.data, ...slides.data]
    return (
        <>
            <div className={"md:max-w-4xl md:hidden block md:px-0 inventory-slide relative  md:mx-0 mx-auto"}>
                <Swiper
                    modules={[Pagination]}
                    className={"rounded-[24px]"}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    watchSlidesProgress
                    slidesPerView={1}
                    loop={false}
                    onSlideChange={(swiper) => onChange(swiper)}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div
                            className={"rounded-[24px] relative flex items-center h-[420px] w-full bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                            <div
                                className={"mx-auto w-10/12 text-body-large font-normal text-on-surface-light dark:text-on-surface-dark"}>
                                <Icon className={"text-[48px] mb-4 justify-center flex"} type={"outline"} size={24}>
                                    footprint
                                </Icon>
                                <Typography type={"h2"}
                                            className="text-on-surface-light pb-2 dark:text-on-surface-dark">
                                    HOW DO I SELL MY CAR TO BUMBLE AUTO?

                                </Typography>
                                <Typography type={"p"}
                                            className="text-on-surface-variant-light  dark:text-on-surface-variant-dark">
                                    Experience the convenience of selling or trading in your vehicle entirely online,
                                    with
                                    the added
                                    assurance of a contact-free process.
                                </Typography>
                            </div>
                        </div>
                    </SwiperSlide>
                    {slides.map((item, index) => <SwiperSlide key={index}
                                                              className={`w-full h-fit`}>
                        <div
                            className={"rounded-[24px] relative flex items-center h-[420px] w-full bg-surface-container-high-light dark:bg-surface-container-high-dark"}>

                            <div
                                className={"mx-auto w-10/12 text-body-large font-normal text-on-surface-light dark:text-on-surface-dark"}>
                                <label className={" mb-2 block font-bold text-title-small"}>
                                    {item.name}
                                </label>
                                {item.description}
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
                {/*<IconButton type={"tonal"} className={"absolute bottom-[16px] right-[16px] z-10"}>*/}
                {/*    open_in_full*/}
                {/*</IconButton>*/}
            </div>
            <div className={"md:max-w-4xl hidden md:block md:px-0 px-4 inventory-slide relative  md:mx-0 mx-auto"}>
                <Swiper
                    // modules={[Pagination]}
                    // pagination={{
                    //     dynamicBullets: false,
                    // }}
                    className={"rounded-[24px]"}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    watchSlidesProgress
                    slidesPerView={1}
                    grabCursor={true}
                    loop={false}
                    onSlideChange={(swiper) => onChange(swiper)}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div
                            className={"rounded-[24px] relative flex items-center h-[520px] w-full bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                            <div
                                className={"mx-auto w-8/12 text-body-large font-normal text-on-surface-light dark:text-on-surface-dark"}>
                                <Icon className={"text-[48px] mb-4 justify-center flex"} type={"outline"} size={24}>
                                    footprint
                                </Icon>
                                <Typography type={"h2"}
                                            className="text-on-surface-light pb-2 dark:text-on-surface-dark">
                                    HOW DO I SELL MY CAR TO BUMBLE AUTO?

                                </Typography>
                                <Typography type={"p"}
                                            className="text-on-surface-variant-light  dark:text-on-surface-variant-dark">
                                    Experience the convenience of selling or trading in your vehicle entirely online,
                                    with
                                    the added
                                    assurance of a contact-free process.
                                </Typography>
                            </div>
                        </div>
                    </SwiperSlide>
                    {slides.map((item, index) => <SwiperSlide key={index}
                                                              className={`w-full h-fit`}>
                        <div
                            className={"rounded-[24px] relative flex items-center h-[520px] w-full bg-surface-container-high-light dark:bg-surface-container-high-dark"}>

                            <div
                                className={"mx-auto w-8/12 text-body-large font-normal text-on-surface-light dark:text-on-surface-dark"}>
                                <label className={" mb-2 block font-bold text-title-small"}>
                                    {item.name}
                                </label>
                                {item.description}
                            </div>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
                <div
                    className={"absolute  items-center z-10 rounded-full bottom-[16px] right-[16px] md:flex hidden bg-surface-container-low-light dark:bg-surface-container-high-dark h-[32px]"}>
                    <IconButton className={"swiper-button-prev h-[32px] w-[32px]"}>
                        arrow_back
                    </IconButton>
                    <span className={"mx-2 text-label-large"}>
                        {`${activeIndex + 1} / ${slides.length + 1}`}
                    </span>
                    <IconButton className={"swiper-button-next h-[32px] w-[32px]"}>
                        arrow_forward
                    </IconButton>
                </div>
                {/*<IconButton type={"tonal"} className={"absolute bottom-[16px] md:left-[16px] right-[16px] z-10"}>*/}
                {/*    open_in_full*/}
                {/*</IconButton>*/}
            </div>
        </>
    )
}