import Image from "next/legacy/image";
import Button from "@/components/buttons/Button";
import IconButton from "@/components/buttons/IconButton";
import {useEffect, useRef} from "react";

const colors = [
    {id: 1, class: "default-theme-color"},
    {id: 2, class: "blue-theme-color"},
    {id: 3, class: "green-theme-color"},
    {id: 4, class: "red-theme-color"},
    {id: 5, class: "pink-theme-color"},
    {id: 6, class: "purple-theme-color"},
    {id: 7, class: "orange-theme-color"}
]
export default function StoryComponent(props) {
    const {story} = props
    const videoRef = useRef()
    useEffect(()=>{

        console.log(props.isPaused)
        if (story.storyType === "video") {
            if (props.isPaused) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
        }
    },[props.isPaused])
    return (
        <div className={`box h-full ${colors.find(item => item.id === story.colorType).class} `}>
            <IconButton onClick={() => story.onClose()} icon={""}
                        className={"md:hidden  absolute  z-999 right-4 top-4"}>
                close
            </IconButton>
            {story.storyType === "image" && <div className={"w-full  h-full relative"}>

                <Image layout={"fill"} objectFit={"cover"} src={`${story.imageURL}`}/>
                {story.description.map((item,i) =>
                    <p key={i} className={`w-[80%] ${item.position.y === "center" ? "top-1/2 transform -translate-y-1/2" : item.position.y === "top" ? "top-16" : story.link ? "bottom-16" : "bottom-4"} ${item.position.x === "center" ? "left-1/2 transform -translate-x-1/2" : item.position.x === "left" ? "left-4" : "right-4"} text-body-large ${item.withBg ? "bg-secondary-container-light text-on-secondary-container-light dark:bg-secondary-container-dark dark:text-on-secondary-container-dark rounded-[24px] py-4 px-4" : "text-on-surface-light dark:text-on-surface-dark"} absolute`}>
                        {item.text}
                    </p>
                )}
                {story.link && <Button type={"filled"} icon={"link"}
                                       className={" absolute bottom-4 transform -translate-x-1/2 left-1/2"}>
                    {story.link.text}
                </Button>}
            </div>}
            {/*{story.storyType === "image" && <div className={"w-full bg-surface-container-light justify-between px-[24px] dark:bg-surface-container-dark hidden md:flex h-full relative"}>*/}
            {/*    <div className={"w-5/12  py-6 relative"}>*/}
            {/*        {story.description.map(item =>*/}
            {/*            <p className={`w-fit   h-fit text-body-large ${item.withBg ? "bg-secondary-container-light text-on-secondary-container-light dark:bg-secondary-container-dark dark:text-on-secondary-container-dark rounded-[24px] py-4 px-4" : "text-on-surface-light dark:text-on-surface-dark"} `}>*/}
            {/*                {item.text}*/}
            {/*            </p>*/}
            {/*        )}*/}
            {/*        {story.link && <Button type={"filled"} icon={"link"}*/}
            {/*                               className={"  bottom-4 mt-4"}>*/}
            {/*            {story.link.text}*/}
            {/*        </Button>}*/}
            {/*    </div>*/}
            {/*    <div className={"h-full py-6 w-4/12 my-auto relative overflow-hidden "}>*/}
            {/*        <Image layout={"responsive"} className={"rounded-[24px]"} height={1920} width={1080} objectFit={"cover"} src={`${story.imageURL}`}/>*/}
            {/*    </div>*/}
            {/*</div>}*/}
            {story.storyType === "video" && <div className={"w-full h-full  bg-surface-container-light dark:bg-surface-container-dark relative"}>
                <video autoPlay
                       ref={videoRef}
                       playsInline
                       webkitPlaysinline
                       className={"w-full object-cover absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2"}
                       src={story.videoURL}>
                    <source
                            src={story.videoURL}
                            type="video/mp4"/>
                </video>
                {/*<video className={"w-full object-cover absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 Video-styles_video__BykuO"} playsInline="" webkitPlaysinline=""*/}
                {/*       src={story.videoURL}>*/}
                {/*    <source*/}
                {/*        src={story.videoURL}*/}
                {/*        type="video/mp4"/>*/}


                {/*</video>*/}
                {story.description.map((item,i) =>
                    <p key={i} className={`w-[80%]  ${item.position.y === "center" ? "top-1/2 transform -translate-y-1/2" : item.position.y === "top" ? "top-16" : story.link ? "bottom-16" : "bottom-4"} ${item.position.x === "center" ? "left-1/2 transform -translate-x-1/2" : item.position.x === "left" ? "left-4" : "right-4"} text-body-large ${item.withBg ? "bg-secondary-container-light text-on-secondary-container-light dark:bg-secondary-container-dark dark:text-on-secondary-container-dark rounded-[24px] py-4 px-4" : "text-on-surface-light dark:text-on-surface-dark"} absolute`}>
                        {item.text}
                    </p>
                )}
                {story.link && <Button type={"filled"} icon={"link"}
                                       className={" absolute bottom-4 transform -translate-x-1/2 left-1/2"}>
                    {story.link.text}
                </Button>}
            </div>}

            {story.storyType === "text" &&
                <div className={"w-full relative h-full  bg-surface-container-light  dark:bg-surface-container-dark"}>
                    {story.description.map((item,i) =>
                        <p key={i} className={`w-[80%] ${item.position.y === "center" ? "top-1/2 transform -translate-y-1/2" : item.position.y === "top" ? "top-16" : story.link ? "bottom-16" : "bottom-4"} ${item.position.x === "center" ? "left-1/2 transform -translate-x-1/2" : item.position.x === "left" ? "left-4" : "right-4"} text-body-large ${item.withBg ? "bg-secondary-container-light text-on-secondary-container-light dark:bg-secondary-container-dark dark:text-on-secondary-container-dark rounded-[24px] py-4 px-4" : "text-on-surface-light dark:text-on-surface-dark"} absolute`}>
                            {item.text}
                        </p>
                    )}
                    {story.link && <Button type={"filled"} icon={"link"}
                                           className={" absolute bottom-4 transform -translate-x-1/2 left-1/2"}>
                        {story.link.text}
                    </Button>}
                </div>}
        </div>
    )
}