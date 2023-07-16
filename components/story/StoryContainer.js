import StoryComponent from "@/components/story/StoryComponent";
import Stories from "stories-react";
import IconButton from "@/components/buttons/IconButton";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import Button from "@/components/buttons/Button";

/*const stories = [
    {
        title: "",
        description: "",
        link: "",
        type: "video",
        videoURL: "",
    },
    {
        title: "",
        description: "",
        link: "",
        type: "image",
        imageURL: ""
    },
    {
        title: "test",
        description: "",
        link: "",
        type: "text",
        colorType: 1
    }
]*/
export default function StoryContainer({handleStory, stories}) {
    // const stories = [
    //     {
    //         type: 'component',
    //         duration: 9000,
    //         storyType:"text",
    //         link:{
    //             text:"klesnf",
    //             url:"lkewnf",
    //         },
    //
    //         colorType: 4,
    //         description: [{text: "weklfbk welf welkfn klwenf lkwenf nwelfkn welkfn lkwefn lwkefn welkfn weflkn", position: {x: "right", y: "top"},withBg:true}],
    //         component: StoryComponent,
    //     },
    //     {
    //         type: 'component',
    //         duration: 9000,
    //         link:{
    //             text:"klesnf",
    //             url:"lkewnf",
    //         },
    //         storyType:"video",
    //         videoURL: "/video.mp4",
    //         colorType: 2,
    //         description: [{text: "weklfbk welf welkfn klwenf lkwenf nwelfkn welkfn lkwefn lwkefn welkfn weflkn", position: {x: "right", y: "top"},withBg:true}],
    //         component: StoryComponent,
    //     },
    //     {
    //         type: 'component',
    //         duration: 9000,
    //         link:{
    //             text:"klesnf",
    //             url:"lkewnf",
    //         },
    //         storyType:"image",
    //         imageURL: "/car-img.jpg",
    //         colorType: 3,
    //         description: [{text: "weklfbk welf welkfn klwenf lkwenf nwelfkn welkfn lkwefn lwkefn welkfn weflkn", position: {x: "left", y: "bottom"},withBg:true}],
    //         component: StoryComponent,
    //     },
    // ];

    return (
        <div
            className={"fixed flex items-center justify-center !ml-0  bg-black w-full h-full z-999 inset-0"}
        >
            <IconButton onClick={() => handleStory(null)} icon={""}
                        className={"md:block hidden absolute !text-white z-999 right-6 top-6"}>
                close
            </IconButton>
            <div className={"md:py-6 w-full md:w-4/12 h-full"}>
                <div className={"w-full h-full "}>
                    <Stories  onAllStoriesEnd={()=>handleStory(null)} classNames={{
                        progressBarContainer: "!h-[4px] !rounded-none !bg-surface-container-highest-light !dark:bg-surface-container-highest-dark",
                        progressBar: "!h-[4px] !rounded-l-none !bg-primary-light !dark:bg-primary-dark",

                        progressContainer: "!px-0 !pt-0 z-999"
                    }} width="100%" height="100%" stories={stories}/>
                </div>
            </div>
        </div>
    )
}