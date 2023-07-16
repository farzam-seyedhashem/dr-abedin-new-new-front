import Image from "next/legacy/image";
import StoryComponent from "@/components/story/StoryComponent";
import StoryContainer from "@/components/story/StoryContainer";
import {useState} from "react";

export default function StoryList() {
    const [openStory, setOpenStory] = useState(null)

    const stories = [
        {
            thumbnail: "/Cars-banner.jpg", title: "lweknfl", storyItems: [
                {
                    onClose:()=>setOpenStory(null),
                    type: 'component',
                    duration: 9000,
                    storyType: "text",
                    link: {
                        text: "klesnf",
                        url: "lkewnf",
                    },
                    colorType: 4,
                    description: [{
                        text: "weklfbk welf welkfn klwenf lkwenf nwelfkn welkfn lkwefn lwkefn welkfn weflkn",
                        position: {x: "right", y: "top"},
                        withBg: true
                    }],
                    component: StoryComponent,
                },
            ]
        },
        {
            thumbnail: "/car-img.jpg", title: "lweknfl", storyItems: [
                {
                    onClose:()=>setOpenStory(null),
                    type: 'component',
                    duration: 9000,
                    link: {
                        text: "klesnf",
                        url: "lkewnf",
                    },
                    storyType: "video",
                    videoURL: "/video.mp4",
                    colorType: 2,
                    description: [{
                        text: "weklfbk welf welkfn klwenf lkwenf nwelfkn welkfn lkwefn lwkefn welkfn weflkn",
                        position: {x: "right", y: "top"},
                        withBg: true
                    }],
                    component: StoryComponent,
                },
                {
                    onClose:()=>setOpenStory(null),
                    type: 'component',
                    duration: 9000,
                    link: {
                        text: "klesnf",
                        url: "lkewnf",
                    },
                    storyType: "image",
                    imageURL: "/car-img.jpg",
                    colorType: 3,
                    description: [{
                        text: "weklfbk welf welkfn klwenf lkwenf nwelfkn welkfn lkwefn lwkefn welkfn weflkn",
                        position: {x: "left", y: "bottom"},
                        withBg: true
                    }],
                    component: StoryComponent,
                },
            ]
        }
    ]

    return (
        <div className={"px-4  py-6 md:px-6"}>
            <label className={"text-title-small text-on-background-light dark:text-on-background-light font-bold"}>
                Our New Stories
            </label>
            <div className={"flex space-x-4 mt-3"}>
                {stories.map((item,i) => <>
                    <div key={i} onClick={()=>setOpenStory(i)} className={"w-fit"}>
                        <div
                            className={"relative rounded-[24px] overflow-hidden w-[120px] h-[120px] ring-2 dark:ring-primary-dark ring-primary-light ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark"}>
                            <Image src={item.thumbnail} layout={"fill"} objectFit={"cover"}/>
                            <div
                                className={"absolute inset-0 bg-gradient-to-tl opacity-30  to-primary-light from-primary-container-light"}/>
                        </div>
                        <p className={"text-body-large px-4 py-4 text-on-surface-light dark:text-on-surface-variant-dark text-center font-medium pt-2"}>
                            {item.title}
                        </p>

                    </div>
                    {openStory===i&&<StoryContainer stories={item.storyItems} handleStory={setOpenStory}/>}
                </>)}

            </div>
        </div>
    )
}