/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { useRouter } from "next/router";
import { Dialog, Transition } from '@headlessui/react'
import Icon from "@/components/assets/Icon";
import { ModalSideSheet } from "@/components/SideSheet/ModalSideSheet";
import SettingList from "@/components/settings/SettingList";
import Image from "next/legacy/image";
import useSWR from "swr";



export default function Example({ setIsGalleryOpen, title, breadCrumbs, modeType, colorMode, handleChangeMode, handleChangeColor }) {
    const router = useRouter()
    const [isDark, setIsDark] = useState(false)
    const [isSettingOpen, setIsSettingOpen] = useState(false)
    const [searchText, setSearchText] = useState("")

    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true)
        } else {
            setIsDark(false)
        }
    }, [])
    const changeThemMode = () => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        // if set via local storage previously
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDark(true)
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setIsDark(false)
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                setIsDark(false)
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDark(true)
            }
        }

        // // Whenever the user explicitly chooses to respect the OS preference
        //         localStorage.removeItem('theme')
    }
    const [mouseOverDrawer, setMouseOverDrawer] = useState(-1)
    return (
        <div className={"md:block hidden"} onMouseLeave={() => setMouseOverDrawer(-1)}>
            <ModalSideSheet className={"md:block hidden"} withBackIconButton title={"تنظیمات"}
                setIsOpen={setIsSettingOpen} isOpen={isSettingOpen}
                width={400} isNotFixedHeight isModal>
                <SettingList modeType={modeType} colorMode={colorMode} handleChangeMode={handleChangeMode}
                    handleChangeColor={handleChangeColor} />
            </ModalSideSheet>
            {/*<Transition.Root show={mouseOverDrawer !== -1 && !!solutions[mouseOverDrawer]?.subItems} as={Fragment}>*/}

            {/*    <div className="fixed  w-full h-full z-[998] mr-[88px]  top-0 max-w-[229px] right-0 flex">*/}
            {/*        <Transition.Child*/}
            {/*            as={Fragment}*/}
            {/*            enter="transform transition ease-in-out duration-500 sm:duration-700"*/}
            {/*            enterFrom="translate-x-full"*/}
            {/*            enterTo="shadow-[rgba(0,_0,_0,_0.3)_0px_1px_2px,_rgba(0,_0,_0,_0.15)_0px_2px_6px_2px] translate-x-0"*/}
            {/*            leave="transform transition ease-in-out duration-500 sm:duration-700"*/}
            {/*            leaveFrom="translate-x-0"*/}
            {/*            leaveTo="shadow-[rgba(0,_0,_0,_0)_0px_1px_2px,_rgba(0,_0,_0,_0)_0px_2px_6px_2px] translate-x-full"*/}
            {/*        >*/}
            {/*            <div*/}
            {/*                className={"bg-surface-light dark:bg-surface-dark px-2 pt-2 border-r border-secondary-container-light rounded-l-2xl w-full"}>*/}
            {/*                <ul>*/}
            {/*                    {mouseOverDrawer !== -1 && solutions[mouseOverDrawer]?.subItems?.map((item, i) =>*/}

            {/*                        <li key={i} className={" w-full"}>*/}
            {/*                            <Link*/}
            {/*                                className={`h-10 m-[2px] transition duration-300 ease-in-out px-4 flex text-sm font-medium tracking-[0.1px] leading-[20px] items-center  rounded-full ${router.pathname === item.href ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark dark:hover:bg-opacity-[8%] hover:bg-opacity-[8%] hover:bg-primary-light dark:hover:bg-primary-dark"}`}*/}
            {/*                                href={item.href}>*/}
            {/*                                {item.name}*/}
            {/*                            </Link>*/}
            {/*                        </li>*/}
            {/*                    )}*/}
            {/*                </ul>*/}

            {/*            </div>*/}
            {/*        </Transition.Child>*/}
            {/*    </div>*/}


            {/*</Transition.Root>*/}
            <div
                className={"h-[64px] border-b border-outline-variant-light dark:border-outline-variant-dark flex items-center px-4 md:px-6 z-999 fixed bg-surface-light dark:bg-surface-dark w-full top-0 left-0 py-2"}>
                <div className={"h-12 w-12 "}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 749 678.83">
                        <g id="Shape_1" data-name="Shape 1" style={{ isolation: "isolate" }}>
                            <g id="Shape_1-2" data-name="Shape 1">
                                <path
                                    d="M760.48,272.6a374.31,374.31,0,0,0-31.62-21.08C627.47,386.3,489.5,431.44,403,463c-89.12,32.52-193.49,94.78-205,181-8.47,63.44,12.85,111.48,24.71,132.44a376.4,376.4,0,0,0,95.53,100.69c-13.68-28-40.8-92.42-42.24-165.13-1.93-97.47,32.92-130.84,98-172s178.48-79.65,278-161C729.5,315.65,753.61,283.66,760.48,272.6Zm13.66,10.63c-2,37.39-26.34,69-56.14,122.77-37.41,67.45-16.58,119-11,150s-11.6,30-27,31-18.45-.57-16,12c6.53,34.36-17,40.32-27,45,1.31,15.67-.77,22.71-11,29s-11.06,12.49-11,25c-4.45,53.68-43.88,58.76-85,37s-74.58-53.26-106-77c17.48,148.55.44,189.76,152,181,107.14-6.2,158.74,21.85,179.79,38.83,94.6-68,156.21-179,156.21-304.33C912,456.42,858.27,351.9,774.14,283.23ZM326,457c44.71-19.1,146.62-29.52,237-83,82.34-48.73,139.15-119.89,148.6-132.16A373,373,0,0,0,537.5,199C330.67,199,163,366.67,163,573.5c0,3.11,0,6.2.12,9.29C229.37,489.53,283.23,475.27,326,457Z"
                                    transform="translate(-163 -199)" fill="currentColor" />
                            </g>
                        </g>
                    </svg> */}
                    <svg className={"text-on-surface-light dark:text-on-surface-dark"} width="100%" height="100%" viewBox="0 0 1631 2674" xmlns="http://www.w3.org/2000/svg">
                        <path id="Path-copy" fill="currentColor" stroke="none" d="M 275.205109 523.951416 C 285.605835 525.138428 293.073975 534.533936 291.887085 544.93457 C 290.700134 555.335449 281.304749 562.803711 270.904022 561.616699 C 205.737274 554.091797 156.96167 550.631348 121.42807 556.590576 C 89.933502 561.870605 69.032104 575.083008 55.463074 600.792236 C 36.167725 637.35083 33.219788 671.832031 47.321655 718.42627 C 60.197418 760.970947 86.758087 813.381348 127.341003 884.821655 C 133.120667 863.785278 140.712982 839.024414 149.610168 816.070313 C 158.094025 794.182861 167.904388 773.638916 178.753784 758.736572 C 192.870636 739.34668 209.45343 728.498779 228.745453 732.443848 L 234.972565 734.275635 C 250.588409 740.329102 258.383636 747.189453 265.755127 753.675293 C 273.668671 760.638184 280.811035 766.923828 309.529358 767.783936 C 320.25708 768.106201 330.104919 766.770508 338.971191 763.606689 C 347.458862 760.578857 355.079468 755.823242 361.74823 749.183838 C 371.453186 739.517822 377.073242 726.176758 382.352173 713.639893 C 391.782104 691.24707 400.431396 670.712402 426.645813 660.69458 C 453.848877 650.29541 508.490356 660.303467 538.867615 661.982666 L 589.583374 664.329834 C 749.937073 670.071289 902.809204 658.742432 1032.563354 594.736328 C 1109.192139 556.935547 1178.156006 500.476807 1236.37207 417.870117 C 1200.544189 307.146484 1183.092407 198.752441 1204.07666 114.032227 L 1204.777832 111.339844 C 1212.187256 82.779785 1225.484619 52.831299 1245.937378 31.732422 C 1268.289429 8.670898 1298.250854 -3.928711 1337.048584 5.678223 L 1342.391235 7.194824 C 1367.68335 15.335205 1385.952515 35.835449 1393.471924 69.449463 C 1399.990601 98.599854 1398.102173 138.477051 1384.841431 189.557617 C 1382.160522 199.885986 1379.031372 210.64209 1375.432739 221.822021 L 1374.924072 223.219238 C 1347.659302 301.813477 1315.15271 368.076416 1278.17981 423.834717 L 1280.639404 430.996094 C 1338.679688 598.169434 1436.307007 768.426025 1499.70874 861.361816 C 1510.636841 877.382568 1525.376587 896.046387 1540.812378 915.590088 C 1571.690796 954.684814 1605.214233 997.12915 1617.852661 1029.251221 C 1627.107666 1052.771729 1630.477051 1075.965698 1628.354858 1098.100342 C 1626.158081 1120.999756 1618.157471 1142.444946 1604.775879 1161.669434 C 1584.346924 1191.008789 1556.764771 1211.100342 1525.816772 1224.149414 C 1490.363647 1239.099121 1450.64856 1244.604736 1412.580688 1244.167603 C 1390.785156 1243.916382 1368.135742 1245.187134 1347.945068 1251.27002 C 1329.524658 1256.819214 1313.031738 1266.627075 1301.249634 1283.58313 C 1295.874878 1291.315918 1292.269653 1299.761841 1290.460205 1308.522339 C 1288.592163 1317.570801 1288.549683 1327.105713 1290.359863 1336.703247 C 1295.067139 1361.651978 1311.652466 1379.739136 1328.506836 1398.119263 L 1333.903687 1404.019287 C 1356.408936 1428.815552 1374.426514 1456.316528 1378.802246 1484.6698 C 1383.586182 1515.658936 1373.016846 1545.986572 1336.811157 1572.595581 C 1320.17041 1584.825684 1298.274536 1595.951294 1270.601563 1605.85498 C 1261.669922 1609.051636 1252.088989 1612.137451 1241.8396 1615.109985 C 1254.160522 1619.847656 1265.483032 1625.062744 1275.47644 1630.90625 C 1331.566895 1663.711914 1330.431641 1698.520142 1310.570435 1732.479492 C 1301.753784 1747.555298 1289.005493 1761.489258 1276.752808 1774.883301 C 1270.534058 1781.681274 1264.458252 1788.322754 1258.860596 1795.420166 L 1258.786133 1795.420166 C 1240.253662 1818.913696 1228.770142 1842.868042 1225.599243 1865.70752 C 1222.74585 1886.265625 1226.788208 1906.12915 1238.735107 1924.019287 L 1255.569458 1948.274414 C 1288.858765 1995.375244 1309.473511 2024.545898 1291.779297 2098.731934 C 1271.016235 2185.766113 1222.721313 2239.273682 1160.213867 2268.167725 C 1087.166382 2301.93457 995.351563 2300.977051 906.505493 2280.433105 C 844.95813 2266.200684 788.609375 2249.902344 733.984619 2234.103516 C 673.782532 2216.69165 615.709473 2199.899902 554.326355 2187.121826 C 539.822876 2229.99292 528.866394 2277.271973 517.719177 2325.375244 C 495.347534 2421.919922 472.233948 2521.6604 417.921143 2601.361084 L 410.964172 2610.972656 C 389.900696 2638.411865 362.61145 2659.653809 332.368774 2668.834473 C 300.803345 2678.415283 266.662109 2675.052002 233.55899 2652.491211 L 226.816956 2647.604492 C 190.325562 2619.588867 157.04541 2542.837891 135.903229 2461.542969 C 113.512421 2375.447266 104.10495 2282.420898 118.634247 2236.314453 C 153.27005 2126.409668 239.880676 2126.329102 330.851074 2126.246582 L 333.831909 2126.244141 C 406.261475 2126.165039 470.063416 2132.952148 529.922119 2143.789795 C 539.8479 2119.145508 551.389282 2096.023926 565.340759 2075.010254 C 581.192749 2051.14209 601.42926 2031.699951 630.287109 2020.973633 C 658.208008 2010.595337 693.475769 2008.858398 739.692139 2020.012451 C 749.847046 2022.46875 756.088318 2032.69458 753.632019 2042.849365 C 751.175598 2053.004395 740.94989 2059.245605 730.794983 2056.789063 C 692.584229 2047.568359 664.602966 2048.567871 643.485352 2056.41626 C 623.30304 2063.91748 608.695801 2078.199707 596.926575 2095.919922 C 585.770142 2112.722656 576.225525 2131.320068 567.827881 2151.268799 C 628.144897 2164.120605 685.321411 2180.652832 744.513977 2197.772949 C 798.161865 2213.289307 853.502075 2229.295898 914.958496 2243.507324 C 996.428467 2262.344727 1079.688599 2263.65332 1144.34668 2233.764893 C 1196.608032 2209.605957 1237.133545 2164.259766 1254.853638 2089.983643 C 1268.59729 2032.359131 1251.763306 2008.537231 1224.576538 1970.072388 L 1207.297974 1945.075317 C 1189.878906 1918.988281 1183.961548 1890.193359 1188.080444 1860.518677 C 1192.179565 1830.990112 1206.368896 1800.850342 1229.099609 1772.026611 L 1229.053345 1771.990356 C 1234.476318 1765.114624 1241.591797 1757.336914 1248.873291 1749.377563 C 1259.74646 1737.492432 1271.059937 1725.124512 1277.945679 1713.35022 C 1287.058228 1697.769043 1286.460327 1681.142456 1256.347656 1663.531128 C 1245.450806 1657.159912 1231.830078 1651.45105 1216.396362 1646.191284 C 1200.403809 1640.741211 1182.735718 1635.874268 1164.233643 1631.304077 C 1154.078735 1628.806396 1147.870483 1618.547363 1150.368408 1608.392456 C 1152.192749 1600.97522 1158.157837 1595.664185 1165.198486 1594.313599 C 1201.948242 1587.220825 1232.666992 1579.128906 1257.847412 1570.117188 C 1282.114746 1561.432617 1300.804199 1552.052124 1314.418213 1542.047241 C 1337.112305 1525.36731 1343.952271 1507.747559 1341.283447 1490.454102 C 1338.208496 1470.523315 1323.910767 1449.393677 1305.877441 1429.525391 L 1300.627197 1423.77417 C 1280.080688 1401.368408 1259.864258 1379.322144 1253.138916 1343.673096 C 1250.425171 1329.287964 1250.521729 1314.835693 1253.388062 1300.959595 C 1256.265991 1287.029053 1261.855225 1273.808228 1270.10791 1261.931519 C 1287.41687 1237.02063 1311.012451 1222.804565 1337.120728 1214.939453 C 1361.45752 1207.607056 1387.792725 1206.063477 1412.878174 1206.35376 C 1446.344849 1206.737549 1480.896973 1202.050659 1511.135498 1189.299927 C 1535.736816 1178.92627 1557.586914 1163.066284 1573.634644 1140.0177 C 1583.350098 1126.059082 1589.139282 1110.716187 1590.689453 1094.540771 C 1592.241333 1078.352539 1589.630493 1061.014893 1582.558838 1043.042236 C 1571.884521 1015.910034 1540.272827 975.885254 1511.154175 939.019775 C 1494.909302 918.451294 1479.395142 898.807251 1468.418213 882.715576 C 1406.114014 791.388672 1311.294556 626.543945 1251.361694 461.476074 C 1192.794922 537.873779 1124.5802 591.571289 1049.320557 628.695557 C 912.72998 696.074463 754.06311 708.080078 588.248962 702.143311 L 536.791565 699.796875 C 521.806519 698.968018 453.870117 690.887695 440.139404 696.136963 C 428.957153 700.409912 423.333313 713.761475 417.202087 728.321533 C 410.50592 744.224121 403.37561 761.147949 388.440063 776.02417 C 377.615234 786.801758 365.333557 794.488525 351.725769 799.344482 C 338.496704 804.066162 324.044067 806.06543 308.492371 805.597656 C 265.894257 804.321045 253.938782 793.80127 240.693054 782.147705 C 205.985168 751.614258 197.191742 798.013672 184.904205 829.712646 C 168.276428 872.608154 156.462158 922.182007 153.140106 938.164917 C 152.265228 943.582886 149.055237 948.578491 143.935913 951.542358 C 134.886261 956.783691 123.298645 953.696655 118.057678 944.646973 C 62.575867 849.133301 27.192261 782.93042 10.991058 729.399902 C -6.322876 672.193604 -2.40799 629.299316 21.950043 583.146729 C 41.721558 545.685791 71.239319 526.591309 115.199707 519.220947 C 155.121918 512.525879 206.852966 516.05957 275.205109 523.951416 Z M 480.79364 2316.922119 C 491.759644 2269.59668 502.549927 2223.037109 516.774719 2179.915771 C 460.596741 2170.077637 400.907166 2163.984863 333.831909 2164.05835 L 330.851074 2164.060303 C 254.135864 2164.130371 181.096802 2164.19873 154.818207 2247.584961 C 142.345276 2287.169434 151.688599 2371.906982 172.531281 2452.052979 C 191.830383 2526.260254 220.418671 2594.942627 249.803101 2617.502197 L 254.912842 2621.200928 C 277.508972 2636.600586 300.437195 2639.010986 321.395203 2632.650146 C 343.676453 2625.886963 364.378296 2609.461182 380.861938 2587.986816 L 386.630737 2580.00708 C 436.934509 2506.191162 459.221069 2410.016113 480.79364 2316.922119 Z M 1240.853394 123.078613 C 1223.53833 192.982178 1235.615845 282.665771 1263.194702 376.648682 C 1291.758057 329.126221 1317.260864 274.156982 1339.267456 210.679932 L 1339.397461 210.255615 C 1342.808228 199.659424 1345.739136 189.5979 1348.213379 180.067383 C 1359.888062 135.095947 1361.826172 101.218262 1356.546021 77.60498 C 1352.264038 58.458496 1343.098633 47.180176 1330.824829 43.22998 L 1327.863159 42.422119 C 1304.522949 36.690186 1286.508667 44.269531 1273.075439 58.12915 C 1257.713745 73.974609 1247.395874 97.742432 1241.406372 120.830322 Z" />
                    </svg>
                </div>
                <ul className={"mr-6 flex text-title-medium font-medium flex-grow items-center space-x-reverse space-x-4"}>
                    <li className={"cursor-pointer"}>
                        <a href={"/"} className={`${router.pathname === "/" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            خانه
                        </a>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/services"} className={`${router.pathname === "/services" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            خدمات
                        </Link>
                    </li>
                    <li className={"cursor-pointer"}>
                        <button onClick={() => setIsGalleryOpen(true)} className={`${router.pathname === "/services" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            گالری تصاویر
                        </button>
                    </li>
                    <li className={"cursor-pointer"}>
                        <a href={"/blog"} className={`${router.pathname === "/blog" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            مقالات
                        </a>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/reserve"} className={`${router.pathname === "/products" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            نوبت دهی
                        </Link>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/faq"} className={`${router.pathname === "/products" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            سوالات متداول
                        </Link>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/about-us"} className={`${router.pathname === "/about-us" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            درباره ما
                        </Link>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/contact-us"} className={`${router.pathname === "/contact-us" ? "text-on-surface-light dark:text-on-surface-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            تماس با ما
                        </Link>
                    </li>

                </ul>
                {/*<div*/}
                {/*    className={`*/}
                {/*         transition-all duration-300 ml-6  relative  focus-within:w-[480px] w-[390px] h-[48px]  ${isOpenSearch ? "rounded-t-[16px] bg-surface-container-high-light dark:bg-surface-container-high-dark w-[480px]  border-b border-outline-light dark:border-outline-dark" : isShow ? "dark:bg-surface-container-high-dark bg-surface-container-high-light rounded-full " : "dark:focus-within:bg-surface-container-high-dark  rounded-full dark:hover:bg-surface-container-high-dark focus-within:border-0 hover:border-0 focus-within:bg-surface-container-high-light hover:bg-surface-container-high-light bg-surface-light dark:bg-surface-dark border border-outline-variant-light dark:border-outline-variant-dark"}`}>*/}
                {/*    <input onChange={(e) => setSearchText(e.target.value)} onClick={() => setIsOpenSearch(true)}*/}
                {/*           placeholder={"جستجو"}*/}
                {/*           className={"h-full focus:ring-0 focus:outline-none text-title-medium placeholder-on-surface-variant-light dark:placeholder-on-surface-variant-dark text-on-surface-light dark:text-on-surface-dark  pr-[56px] w-full bg-transparent"}/>*/}
                {/*    <Icon*/}
                {/*        className={"absolute text-on-surface-light dark:text-on-surface-dark top-1/2 transform -translate-y-1/2 right-4"}*/}
                {/*        type={"outline"}>*/}
                {/*        search*/}
                {/*    </Icon>*/}


                {/*</div>*/}

                <button onClick={() => setIsSettingOpen(true)}
                    className={`ml-2 hover:bg-opacity-[8%] rounded-full dark:hover:bg-opacity-[8%] dark:hover:bg-on-surface-variant-dark hover:bg-on-surface-variant-light transform flex items-center justify-center   w-[40px] h-[40px] group  `}>

                    <Icon
                        className={`text-on-surface-variant-light material-symbols-outlined group-hover:font-vs-[1_400_0_24] font-vs-[0_400_0_24] dark:text-on-surface-variant-dark`}
                        type={"outline"}>
                        settings
                    </Icon>


                </button>
            </div>
        </div>
    )
}
