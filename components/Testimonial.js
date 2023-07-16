/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/legacy/image'
import {useEffect, useState} from "react";
import Typography from "./assets/Typography";

export default function Testimonial({testimonial}) {
    const [editSteps, setEditSteps] = useState([])
    const steps = testimonial.data;
    useEffect(() => {
        let edited = []
        edited.push(...steps.filter(item => item.content.length > 500))
        edited.push(...steps.filter(item => item.content.length < 500 && item.content.length > 200))
        edited.push(...steps.filter(item => item.content.length < 200 && item.content.length > 0))
        console.log(edited)
        setEditSteps(edited)
    }, [])
    return (

        <div className="px-4 md:px-6 mx-auto">
            <Typography type={"h2"} className="px-6 text-on-surface-light dark:text-on-surface-dark">
                OUR TESTIMONIAL
            </Typography>
            <Typography type={"h3"} className="px-6 mb-[24px] text-on-surface-variant-light dark:text-on-surface-variant-dark mt-2">
                What Our Happy Clients say about us
            </Typography>
            <div className="w-full lg:columns-3 sm:columns-2 gap-6">

                {editSteps.map((item, i) => <div key={i}
                    className={`w-full relative inline-block px-4 pb-4 pt-20 mb-6 rounded-[24px] group bg-surface-container-light dark:bg-surface-container-dark hover:bg-secondary-container-light dark:hover:bg-secondary-container-dark transition duration-300 `}>
                    <div
                        className={"absolute flex items-center justify-center top-6 right-6 w-16 h-16"}>

                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none"
                             xmlns="http://www.w3.org/2000/svg" className="transition-all duration-300 text-secondary-container-light dark:group-hover:text-secondary-dark group-hover:text-secondary-light dark:text-secondary-container-dark">
                            <path
                                d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z"
                                fill="currentColor"></path>
                        </svg>
                        <svg className={"absolute transition-scale duration-300 ease-in-out text-on-secondary-container-light dark:text-on-secondary-container-dark group-hover:text-on-secondary-light dark:group-hover:text-on-secondary-dark group-hover:scale-[120%] transform translate-y-1/2 top-2"} xmlns="http://www.w3.org/2000/svg" height="24px"
                             viewBox="0 0 24 24" width="24px"
                             fill="currentColor">
                            <path d="M0 0h24v24H0V0z" fill="none"/>
                            <path
                                d="M18.62 18h-5.24l2-4H13V6h8v7.24L18.62 18zm-2-2h.76L19 12.76V8h-4v4h3.62l-2 4zm-8 2H3.38l2-4H3V6h8v7.24L8.62 18zm-2-2h.76L9 12.76V8H5v4h3.62l-2 4z"/>
                        </svg>

                    </div>
                    <blockquote>
                        <p className="text-[32px] mb-2 leading-[40px] font-medium text-on-secondary-container-light dark:text-on-surface-dark">
                            {item.title}
                        </p>
                        <p className="leading-[24px] text-on-surface-variant-light dark:text-on-surface-variant-dark">
                            {item.content}
                        </p>
                    </blockquote>
                </div>)}
            </div>

        </div>

    )
}
