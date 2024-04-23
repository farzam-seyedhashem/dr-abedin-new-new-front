/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image'
import Link from 'next/link'
import {useTranslation} from "next-i18next";
import React from "react";


export default function Footer() {
    const {t} = useTranslation('common')
    const navigation = {
        pages: [
            {name: "خانه", href: '/'},
            {name: "خدمات", href: '/services'},
            {name: "نوبت دهی آنلاین", href: '/reserve'},
            {name: "مقالات", href: '/blog'},
            {name: "درباره ما", href: '/about-us'},
            {name: "تماس با ما", href: '/contact-us'},
        ],
        social: [
            {
                name: " تهران، خیابان دکتر علی شریعتی، بالاتر از پل صدر، روبروی سفارت واتیکان، ساختمان رسا،\n" +
                    "                                    پلاک ۱۷۳۰،\n" +
                    "                                    طبقه اول، واحد ۲",
                href: 'https://goo.gl/maps/xExaXbfm29BSDGe39',
                // eslint-disable-next-line react/display-name
                icon: (props) => (
                    <svg {...props} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px"
                         fill="currentColor">
                        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/>
                    </svg>
                ),
            },
            {
                name: "021-26601967",
                href: "tel:+982126601967",
                // eslint-disable-next-line react/display-name
                icon: (props) => (
                    <svg {...props} fill="currentColor" height="20" viewBox="0 -960 960 960" width="20">
                        <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                    </svg>
                ),
            },
            {
                name: "ساعت کاری روز های ذوج ۱۵ تا ۱۹ و ساعت پاسخگویی شنبه تا چهارشنبه در همان ساعات",
                href: "",
                // eslint-disable-next-line react/display-name
                icon: (props) => (
                    <svg {...props} fill="currentColor" height="20" viewBox="0 -960 960 960" width="20">
                        <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/>
                    </svg>
                ),
            },
            {
                name: "چت واتس اپ",
                href: "#",
                // eslint-disable-next-line react/display-name
                icon: (props) => (
                    <svg {...props} fill="currentColor" width={20} height={20} viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"/>
                    </svg>
                ),
            },

            {
                name: "پیج اینستاگرام",
                href: "https://www.instagram.com/dr.behzadabedin",
                // eslint-disable-next-line react/display-name
                icon: (props) => (
                    <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },

        ],
    }
    return (

        <footer className="bg-surface-light dark:bg-surface-dark pt-20 pb-10 " aria-labelledby="footer-heading">
            <div className={"container mx-auto relative"}>
                <div className="border border-outline-light dark:border-outline-variant-dark  rounded-[32px]">
                    <section className="px-8 py-8">
                        <div className=" flex items-center block">
                            <div className={"h-16 w-16"}>
                                <svg className={"text-on-surface-light dark:text-on-surface-dark"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 749 678.83">
                                    <g id="Shape_1" data-name="Shape 1" style={{isolation:"isolate"}}>
                                        <g id="Shape_1-2" data-name="Shape 1">
                                            <path
                                                d="M760.48,272.6a374.31,374.31,0,0,0-31.62-21.08C627.47,386.3,489.5,431.44,403,463c-89.12,32.52-193.49,94.78-205,181-8.47,63.44,12.85,111.48,24.71,132.44a376.4,376.4,0,0,0,95.53,100.69c-13.68-28-40.8-92.42-42.24-165.13-1.93-97.47,32.92-130.84,98-172s178.48-79.65,278-161C729.5,315.65,753.61,283.66,760.48,272.6Zm13.66,10.63c-2,37.39-26.34,69-56.14,122.77-37.41,67.45-16.58,119-11,150s-11.6,30-27,31-18.45-.57-16,12c6.53,34.36-17,40.32-27,45,1.31,15.67-.77,22.71-11,29s-11.06,12.49-11,25c-4.45,53.68-43.88,58.76-85,37s-74.58-53.26-106-77c17.48,148.55.44,189.76,152,181,107.14-6.2,158.74,21.85,179.79,38.83,94.6-68,156.21-179,156.21-304.33C912,456.42,858.27,351.9,774.14,283.23ZM326,457c44.71-19.1,146.62-29.52,237-83,82.34-48.73,139.15-119.89,148.6-132.16A373,373,0,0,0,537.5,199C330.67,199,163,366.67,163,573.5c0,3.11,0,6.2.12,9.29C229.37,489.53,283.23,475.27,326,457Z"
                                                transform="translate(-163 -199)" fill="currentColor"/>
                                        </g>
                                    </g>
                                </svg>

                            </div>
                        </div>
                        <p className="text-on-surface-light dark:text-on-surface-dark  my-4 max-w-4xl text-body-large">
                            {"دکتر بهزاد عابدین، دارای درجه دانشنامه ( بورد تخصصی ) گوش، گلو، بینی و جراحی سر و گردن و جراح بینی در تهران"}
                        </p>
                        <ul className="flex flex-wrap gap-y-4 gap-x-6">
                            {navigation.pages.map((item) => (
                                <li className={"ltr:mr-4 rtl:ml-4"} key={item.name}>
                                    <a href={item.href}
                                       className="text-base text-primary-light dark:text-primary-dark hover:border-b dark:hover:border-on-primary-container-dark hover:border-on-primary-container-light font-medium hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <div className={"h-px   bg-outline-light dark:bg-outline-dark w-full"}/>
                    <section className="px-8 py-8">
                        <ul className="flex flex-wrap gap-y-4 gap-x-6">
                            {navigation.social.map((item) => (
                                <li className={"ltr:mr-4 rtl:ml-4"} key={item.name}>
                                    <a href={item.href} target={"_blank"} rel="nofollow noreferrer"
                                       className="text-sm flex items-center text-on-surface-light dark:text-on-surface-dark hover:underline">
                                        <item.icon className={"ltr:mr-1 rtl:ml-1"}/>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>




        </footer>

    )
}
