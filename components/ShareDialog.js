/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import {DotsVerticalIcon} from '@heroicons/react/solid'
import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example({open, setOpen}) {
    // const [] = useState(true)
    const router = useRouter()
    const [copy, setCopy] = useState(false)
    const copyLink = () => {
        /* Get the text field */
        var copyText = document.getElementById("url");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text */
        setCopy(true)
        // alert("Copied the text: " + copyText.value);
    }
    useEffect(() => {

        setTimeout(async function () {
            if (copy) {
                setCopy(false)
            }
        }, 1000)

    }, [copy])
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed z-1001 inset-0 overflow-hidden" onClose={setOpen}>
                <div className="absolute inset-0 overflow-hidden">
                    <Dialog.Overlay className="absolute inset-0 bg-black bg-opacity-40"/>

                    <div
                        className="pointer-events-none fixed bottom-0 left-0 right-0  flex items-end justify-center max-w-full ">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-y-full"
                            enterTo="translate-y-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-y-0"
                            leaveTo="translate-y-full"
                        >
                            <div className="pointer-events-auto pb-[22px] rounded-t-[28px] bg-surface-light dark:bg-surface-dark w-[640px] mx-auto">
                                <div className={"py-[22px] flex justify-center"}>
                                    <div className={"w-[32px] h-[4px] bg-on-surface-variant-light bg-opacity-[40%]"}/>
                                </div>
                                <div className={"px-[22px]"}>
                                    <h3 className={"text-on-surface-light dark:text-on-surface-dark font-bold text-[22px] font-bold  flex-grow"}>
                                        Share Post
                                    </h3>
                                    <h4 className={"text-[16px] text-on-surface-light dark:text-on-surface-dark mt-4 font-medium"}>Post Link</h4>
                                    <div
                                        className={"bg-surface-light dark:bg-surface-dark mt-2  text-on-surface-variant-light dark:text-on-surface-variant-dark relative border border-outline-light dark:border-outline-dark rounded-full w-full flex"}>
                                        <input
                                            className={"border-0 bg-surface-light dark:bg-surface-dark rounded-full text-[14px] w-full overflow-hidden whitespace-nowrap"}
                                            disabled type={"text"} id={"url"}
                                            value={"http://bumbleauto.com" + router.asPath}/>

                                        <div className={"absolute top-0 right-0 flex items-center"}>
                                            <div
                                                className={"bg-gradient-to-l from-surface-light with-surface-light to-transparent h-10 w-[100px]"}/>
                                            <div className={"rounded-full bg-surface-light dark:bg-surface-dark"}>
                                            <button onClick={() => copyLink()}
                                                    className={`${copy?"pl-4 pr-6":"px-6"} h-10 text-primary-light dark:text-primary-dark transition duration-300 rounded-full hover:bg-primary-light dark:bg-primary-dark hover:bg-opacity-[8%]`}>
                                                {copy ? "✓ Copied" : "Copy!"}
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className={"text-[16px] mt-4 text-on-surface-light dark:text-on-surface-dark font-medium"}>Social Share</h4>
                                    <div className={"flex mt-2 items-center"}>
                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${"http://bumbleauto.com" + router.asPath}`}
                                           className={" text-[12px] mr-2 flex items-center justify-center"}>
                                            <div className={"text-center text-on-surface-light dark:text-on-surface-dark"}>
                                                <svg className={"mx-auto text-on-surface-variant-light dark:text-on-surface-variant-dark mb-1"} width={18}
                                                     height={18}
                                                     viewBox="0 0 24 24">
                                                    <path fill="currentColor"
                                                          d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                                                </svg>
                                                Facebook
                                            </div>
                                        </a>
                                        <a href={`https://twitter.com/intent/tweet?text=A%20Look%20at%20Car%20Prices%20in%202022:%20Rises%20or%20Drops?%20${"http://bumbleauto.com" + router.asPath}`}
                                           className={"text-[12px] mr-2 flex items-center justify-center"}>
                                            <div className={"text-center text-on-surface-light dark:text-on-surface-dark"}>
                                                <svg className={"mx-auto text-on-surface-variant-light dark:text-on-surface-variant-dark mb-1"} width={18}
                                                     height={18} viewBox="0 0 24 24">
                                                    <path fill="currentColor"
                                                          d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
                                                </svg>
                                                Twitter

                                            </div>
                                        </a>
                                        <a href={`https://plus.google.com/share?url=${"http://bumbleauto.com" + router.asPath}`}
                                           className={" text-[12px] mr-2 flex items-center justify-center"}>
                                            <div className={"text-center text-on-surface-light dark:text-on-surface-dark"}>

                                                <svg className={"mx-auto text-on-surface-variant-light dark:text-on-surface-variant-dark mb-1"} width={18}
                                                     height={18} viewBox="0 0 24 24">
                                                    <path fill="currentColor"
                                                          d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z"/>
                                                </svg>
                                                Google plus
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
