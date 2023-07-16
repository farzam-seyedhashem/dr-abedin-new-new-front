import Appbar from "@/components/Appbar";
import NavigationBar from "@/components/Appbars/NavigationBar";
import MobileAppbar from "@/components/Appbars/MobileAppbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Icon from "@/components/assets/Icon";
import {useRouter} from "next/router";
import Image from "next/legacy/image";
import FAB from "@/components/buttons/FAB";
import IconButton from "@/components/buttons/IconButton";

export default function AdminLayout({children,fabAction,fabIcon}) {
    const router = useRouter()
    const menu = [
        {
            name: "Dashboard",
            icon: "dashboard",
            href: "/admin"
        },
        {
            name: "Blog",
            icon: "newspaper",
            href: "/admin/blog"
        },
        {
            name: "Slider",
            icon: "web_stories",
            href: "/admin/faq"
        },
        {
            name: "FAQ",
            icon: "quiz",
            href: "/admin/faq"
        },

        {
            name: "Pages",
            icon: "web",
            href: "/admin/faq"
        },
        {
            name: "Gallery",
            icon: "gallery_thumbnail",
            href: "/admin/faq"
        },
    ]
    return (
        <div className={"md:flex w-full  min-h-screen bg-surface-light dark:bg-surface-dark"}>
            <div className={"w-[80px]  border-outline-light dark:border-outline-dark fixed top-0 h-full flex flex-col justify-between  pb-4 bg-background-light dark:bg-background-dark"}>
                <div className={" col h-[124px]"}>
                    <div className={"h-[64px] mx-auto w-[48px] flex items-center justify-center px-1 mb-3 text-on-surface-light dark:text-on-surface-dark"}>
                        <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="New-Group-copy-copy">
                                <path id="Path" fill="none" stroke="currentColor" strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M 22.32873 13.40695 C 22.126829 13.097501 21.831987 12.788211 21.537279 12.556371 L 21.537306 12.57186 C 20.870335 12.046354 20.048838 11.737973 19.134937 11.73955 C 18.995527 11.73979 18.809675 11.7556 18.639341 11.786874 C 18.066351 11.865312 17.586887 12.284366 17.46393 12.842214 C 17.448601 12.93518 17.433298 13.043635 17.433458 13.136575 L 17.433592 13.214024 C 17.465773 13.911014 18.070786 14.436626 18.767828 14.435425 L 19.666239 14.433875 C 19.666239 14.433875 20.069002 14.44867 20.223928 14.463893 C 20.378853 14.479115 20.518314 14.509855 20.673267 14.540567 C 20.76626 14.571387 20.905722 14.602127 20.983196 14.617483 C 21.882063 14.879261 22.874722 15.636554 22.874695 15.621064 C 22.919775 14.815512 22.763515 14.025796 22.32873 13.40695 Z"/>
                                <path id="Path-1" fill="none" stroke="currentColor" strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M 21.262148 14.694451 C 20.502638 14.401453 19.821138 14.433608 19.821138 14.433608 C 19.821138 14.433608 20.317242 14.680591 20.318123 15.191756 C 20.319592 16.043697 19.62319 16.416656 19.081366 16.60347 C 18.493097 16.805853 17.052916 17.025196 15.93778 17.104568 C 16.216785 17.212515 17.674381 18.108416 19.703283 17.950018 C 22.584049 17.743681 22.874695 15.621064 22.874695 15.621064 C 22.874695 15.621064 22.22316 15.064551 21.262148 14.694451 Z"/>
                                <path id="Path-2" fill="none" stroke="currentColor" strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M 23.006517 11.221705 C 23.006758 11.361115 23.007 11.500524 22.991722 11.624469 C 22.293022 10.6653 21.161194 10.047656 19.875538 10.049873 C 19.782598 10.050034 19.705149 10.050167 19.612238 10.065817 C 19.565767 10.065897 19.534761 10.050461 19.488291 10.050541 L 15.786217 10.056926 C 15.801013 9.654163 16.292921 7.46924 19.143053 7.464325 C 21.28068 7.476128 23.002859 9.099596 23.006517 11.221705 Z"/>
                                <path id="Path-3" fill="none" stroke="currentColor" strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M 19.860075 10.06539 C 19.767136 10.06555 19.627728 10.06579 19.550278 10.065924 C 19.9841 10.127135 20.310001 10.482841 20.310696 10.885577 C 20.310909 11.009496 20.280117 11.117979 20.233835 11.226487 C 20.187525 11.319507 20.14119 11.397037 20.079336 11.459103 C 20.079336 11.459103 20.079336 11.459103 20.063873 11.474619 C 19.909243 11.629785 19.708035 11.723071 19.475687 11.723472 L 19.134911 11.724059 C 20.064301 11.722457 20.916803 12.046274 21.583803 12.587271 C 21.86302 12.819138 22.126829 13.097501 22.32873 13.40695 C 22.421455 13.282871 22.498665 13.143329 22.560383 13.003813 C 22.776522 12.585214 22.915127 12.120277 22.976234 11.624496 C 22.277561 10.680817 21.145733 10.063172 19.860075 10.06539 Z"/>
                                <path id="Path-4" fill="none" stroke="currentColor" strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M 15.626937 7.516857 C 14.000503 7.519663 12.686135 8.83857 12.688941 10.465004 L 13.004962 14.073606 C 13.099772 15.157735 13.039709 16.257622 12.824721 17.342285 L 12.701897 17.977583 C 14.328331 17.974777 15.642698 16.655869 15.639893 15.029435 L 15.648652 11.125966 C 15.647289 10.335983 15.878302 9.56109 16.341902 8.925205 C 16.820938 8.258313 17.609772 7.590887 18.957201 7.480135 Z"/>
                                <path id="Path-14" fill="none" stroke="currentColor" strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M 10.546213 7.49464 C 9.059187 7.497204 7.634948 7.979847 6.598678 8.880049 C 5.85626 9.516415 5.362054 10.369211 5.00667 10.880991 C 4.867635 11.098089 4.821272 11.160129 4.728413 11.206758 L 4.527045 11.207106 C 4.449596 11.207239 4.37212 11.191883 4.310081 11.145521 L 3.875777 10.805491 L 3.689658 10.666404 C 3.581096 10.589141 3.441607 10.542912 3.302198 10.543153 L 2.155949 10.54513 C 2.04752 10.545317 1.939145 10.576484 1.830796 10.623139 L 1.799816 10.623193 C 1.614098 10.716453 1.505936 10.871538 1.506257 11.057417 L 1.506738 11.336234 C 1.506791 11.367213 1.522361 11.413656 1.537905 11.44461 C 1.553475 11.491052 1.584508 11.521978 1.615541 11.552905 C 1.724157 11.661147 1.879162 11.722838 2.049551 11.722545 L 2.312905 11.737581 L 3.645058 11.750773 C 3.753488 11.750587 3.84656 11.827875 3.84672 11.920815 L 3.847148 12.168653 C 3.072655 12.169988 2.484201 12.263942 1.896041 12.528284 C 1.880551 12.528311 1.865088 12.543828 1.834135 12.559371 C 1.431773 12.776924 1.18455 13.133617 1.123258 13.520971 C 1.092572 13.691413 1.092866 13.861801 1.093187 14.047679 C 1.094068 14.558845 1.218842 15.054305 1.451938 15.487621 C 1.560714 15.688802 1.623047 15.905553 1.623421 16.12241 L 1.623555 16.19986 C 1.624383 16.680046 1.733587 17.129065 1.951166 17.546917 C 2.075512 17.79454 2.354597 17.948959 2.679883 17.948397 L 8.875824 17.937712 C 9.046212 17.937418 9.169865 17.782307 9.092201 17.65852 L 8.424026 16.43597 C 8.346337 16.296696 8.361533 16.12628 8.454232 15.986712 L 8.577857 15.816109 C 8.701509 15.660996 8.918206 15.567684 9.135118 15.598289 C 9.228084 15.613619 9.321023 15.613459 9.413988 15.628789 C 9.94075 15.689839 11.304017 15.780428 12.357461 15.856061 C 12.402889 15.251876 12.40182 14.632282 12.338819 14.028285 L 12.165065 12.076858 L 8.044765 12.083963 C 7.146353 12.085513 6.340667 11.962983 5.782658 11.747087 C 5.426151 11.608293 5.239685 11.267837 5.378533 10.942309 C 5.51738 10.616782 6.351855 9.46909 6.846809 9.05001 C 7.836744 8.227338 9.15258 7.760372 10.546667 7.757967 L 13.427779 7.752998 C 13.644423 7.628706 13.892074 7.51985 14.155294 7.457436 L 10.54616 7.463659 Z M 6.658318 16.516464 L 5.512015 16.487463 C 4.938864 16.472961 4.396452 16.318996 3.915812 16.056498 L 3.063069 15.593271 C 2.737462 15.407954 2.427317 15.20712 2.163563 14.959737 C 2.086006 14.897911 2.023753 14.72763 2.023753 14.72763 L 1.992346 14.479846 C 1.945476 14.247579 2.19294 14.030293 2.471837 14.076282 L 2.502817 14.076228 L 5.430933 14.380976 C 5.864728 14.426698 6.236859 14.642915 6.438788 14.967854 L 7.060119 15.973625 C 7.215471 16.236687 6.999121 16.531368 6.658318 16.516464 Z M 7.320855 14.470656 C 7.382922 14.532509 7.414034 14.609904 7.398678 14.68738 C 7.398812 14.76483 7.336986 14.842385 7.275107 14.888962 C 7.213227 14.935539 7.135805 14.951162 7.073846 14.951269 C 7.058355 14.951296 7.042866 14.951323 7.027376 14.951349 C 6.93441 14.93602 6.856907 14.905173 6.794814 14.827831 L 4.575331 12.260335 C 4.513265 12.198483 4.544111 12.12098 4.605964 12.058914 C 4.683333 12.012311 4.776299 12.02764 4.838338 12.074003 Z"/>
                                <path id="Path-15" fill="none" stroke="currentColor" strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M 6.091253 11.049509 C 6.091253 11.049509 7.838668 9.342607 10.534008 9.399919 L 12.206912 9.397033 C 12.268337 9.08713 12.407239 8.792582 12.608152 8.528907 L 9.711551 8.533902 C 7.388046 8.52242 6.091253 11.049509 6.091253 11.049509 Z"/>
                                <path id="Path-16" fill="none" stroke="currentColor" strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M 12.902678 17.636459 C 12.949148 17.636379 12.995617 17.636299 13.042113 17.651709 C 12.995617 17.636299 12.949148 17.636379 12.902678 17.636459 Z"/>
                            </g>
                        </svg>
                    </div>
                    {fabIcon&&<FAB onClick={fabAction} withOutShadow className={"relative mx-auto left-0 top-0"} icon={fabIcon}>

                    </FAB>}
                </div>
                <ul className={"px-3 self-center"}>
                    {menu.map((item, index) =>
                        <Link className={"flex"} href={item.href}>
                            <li className={`mb-3 relative group ${router.pathname === item.href ? "bg-secondary-container-light dark:bg-secondary-container-dark" : ""}  items-center justify-center h-[56px] w-[56px] flex rounded-full `}>
                                <div
                                    className={"group-hover:flex hidden absolute  top-[56px] left-[56px]  bg-inverse-surface-light dark:bg-inverse-surface-dark text-inverse-on-surface-light dark:text-inverse-on-surface-dark text-body-small px-2 rounded-[4px] min-h-[24px]  items-center"}>
                                    {item.name}
                                </div>
                                <div
                                    className={`flex justify-center items-center ${router.pathname === item.href ? "hover:bg-on-surface-light dark:hover:bg-on-surface-dark" : "hover:bg-on-surface-variant-light dark:hover:bg-on-surface-variant-dark"}  hover:bg-opacity-[8%] dark:hover:bg-opacity-[8%] w-full h-full rounded-full `}>

                                    {router.pathname === item.href ? <Icon
                                        className={"text-on-secondary-container-light dark:text-on-secondary-container-dark group-hover:text-on-surface-light dark:group-hover:text-on-surface-dark"}
                                        type={"fill"}>
                                        {item.icon}
                                    </Icon> : <Icon
                                        className={"text-on-surface-variant-light dark:text-on-surface-variant-dark group-hover:text-on-surface-variant-light dark:group-hover:text-on-surface-variant-dark"}
                                        type={"outline"}>
                                        {item.icon}
                                    </Icon>}

                                </div>
                            </li>
                        </Link>
                    )}
                </ul>
                <div className={"h-[124px] flex items-end justify-center"}>
                <button className={"h-[48px] group w-[48px] hover:bg-opacity-[8%] rounded-full border-outline-light dark:border-outline-dark border flex items-center justify-center dark:hover:bg-opacity-[8%] dark:hover:bg-on-surface-variant-dark hover:bg-on-surface-variant-light"}>
                    <i className={"material-symbols-outlined group-hover:font-vs-[1_400_0_24] font-vs-[0_400_0_24] dark:text-on-surface-variant-dark text-on-surface-variant-light"} type={"outline"}>
                        settings
                    </i>
                </button>
                </div>
            </div>

            <div className={"bg-background-light  dark:bg-background-dark md:ml-auto w-full md:pl-[80px]"}>

                {children}
            </div>

        </div>

    )
}