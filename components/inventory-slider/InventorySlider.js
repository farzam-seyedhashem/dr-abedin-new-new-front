import Image from 'next/legacy/image'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';
import {useRef, useState} from "react";
import IconButton from "@/components/buttons/IconButton";

export default function InventorySlider({slides,setGalleryModal}) {
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
                    {slides.map((item, index) =>  <SwiperSlide key={index}
                                                                           className={`w-full h-fit`}>
                        <div className={"rounded-[24px]"}>
                            <Image className={"rounded-[24px]"} objectFit={"cover"} layout={"responsive"} height={1240}
                                   width={1920} src={item}/>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
                <IconButton onClick={() => setGalleryModal(true)} type={"tonal"} className={"absolute bottom-[16px] right-[16px] z-10"}>
                    open_in_full
                </IconButton>
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
                    {slides.map((item, index) =>  <SwiperSlide key={index}
                                                                           className={`w-full h-fit`}>
                        <div className={"rounded-[24px]"}>
                            <Image quality={100} className={"rounded-[24px]"} objectFit={"cover"} layout={"responsive"} height={1240}
                                   width={1920} src={item}/>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
                <div
                    className={"absolute  items-center z-10 rounded-full bottom-[16px] right-[16px] md:flex hidden bg-surface-container-low-light dark:bg-surface-container-high-dark h-[32px]"}>
                    <IconButton className={"swiper-button-prev h-[32px] w-[32px]"}>
                        arrow_back
                    </IconButton>
                    <span className={"mx-2 text-on-surface-light dark:text-on-surface-dark text-center w-[60px] text-label-large"}>
                        {`${activeIndex + 1} / ${slides.length}`}
                    </span>
                    <IconButton className={"swiper-button-next h-[32px] w-[32px]"}>
                        arrow_forward
                    </IconButton>
                </div>
                <IconButton onClick={() => setGalleryModal(true)} type={"tonal"} className={"absolute bottom-[16px] md:left-[16px] right-[16px] z-10"}>
                    open_in_full
                </IconButton>
            </div>
        </>
    )
}