import IconButton from "../buttons/IconButton";
import {useState, Fragment, useEffect} from "react";
import {Dialog, Transition} from '@headlessui/react'
import Link from "next/link";
import {useRouter} from "next/router";
import Button from "../buttons/Button";
import Icon from "@/components/assets/Icon";

export default function MobileAppbar() {
    const [isDark, setIsDark] = useState(false)
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
    const services = [
        {
            name: 'Car Services',
            description: 'Read more about our services',
            href: '/services',
        },
        {
            name: 'Car Trade In',
            description: 'Best car Trade in of Columbia, Baltimore & Elkridge, MD',
            href: '/services/car-trade-in',
        },
        {
            name: 'Sell your car',
            description: 'We buy your car in Baltimore & Columbia MD',
            href: '/services/sell-your-car',
        },
        {
            name: 'Car Repair services',
            description: 'Repair your used car in Columbia, Baltimore MD',
            href: '/services/repair-car',
        },

    ]
    const resources = [
        {
            name: 'Blog',
            description: 'Build strategic funnels that will drive your customers to convert',
            href: '/blog',
        },
        {
            name: 'About US',
            description: 'Get all of your questions answered in our forums or contact support.',
            href: '/about-us',

        },
        {
            name: 'Contact US',
            description: 'Eamil, Phone, Address and all things you want to contact with us.',
            href: '/contact-us',
        },
        {
            name: 'Locations',
            description: 'See all of our Locations.',
            href: '/locations',
        },
        {
            name: 'Warranty',
            description: 'See our Warranty, Benefits and Feature',
            href: '/warranty',
        },
        {
            name: 'FAQ', description: 'List of All important questions.', href: '/faq',
        },

    ]
    const menu = [
        {
            name: 'Home',
            description: 'Get a better understanding of where your traffic is coming from.',
            href: '/',
            icon: (props) => {
                return (
                    <svg {...props} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
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

                )
            },
            iconField: (props) => {
                return (
                    <svg {...props} width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="New-Group-copy-copy-3">
                            <path id="Path" fill="currentColor" stroke="none"
                                  d="M 22.389433 13.150065 C 22.183777 12.83367 21.8832 12.517274 21.582624 12.279977 L 21.582624 12.295796 C 20.902372 11.757923 20.063923 11.441527 19.130554 11.441527 C 18.988176 11.441527 18.798338 11.457347 18.624321 11.488986 C 18.038988 11.568086 17.548574 11.99522 17.422016 12.564733 C 17.406197 12.659652 17.390377 12.770391 17.390377 12.865309 L 17.390377 12.944408 C 17.422016 13.6563 18.038988 14.194172 18.750879 14.194172 L 19.668427 14.194172 C 19.668427 14.194172 20.079742 14.209992 20.237942 14.225812 C 20.396139 14.241632 20.538517 14.273271 20.696714 14.304911 C 20.791634 14.336551 20.934011 14.36819 21.013111 14.384009 C 21.930658 14.652946 22.943125 15.428117 22.943125 15.412297 C 22.990585 14.589667 22.832388 13.782858 22.389433 13.150065 Z"/>
                            <path id="Path-1" fill="currentColor" stroke="none"
                                  d="M 21.297867 14.463109 C 20.522697 14.162533 19.826626 14.194172 19.826626 14.194172 C 19.826626 14.194172 20.332859 14.447289 20.332859 14.969342 C 20.332859 15.839432 19.620968 16.219107 19.067276 16.408943 C 18.466124 16.614601 16.994883 16.836079 15.855856 16.915178 C 16.140612 17.025917 17.627674 17.943464 19.700068 17.785267 C 22.64255 17.579609 22.943125 15.412297 22.943125 15.412297 C 22.943125 15.412297 22.278694 14.842784 21.297867 14.463109 Z"/>
                            <path id="Path-2" fill="currentColor" stroke="none"
                                  d="M 23.085505 10.919474 C 23.085505 11.061852 23.085505 11.20423 23.069685 11.330789 C 22.357794 10.34996 21.202948 9.717169 19.889904 9.717169 C 19.794987 9.717169 19.715887 9.717169 19.620968 9.732988 C 19.573509 9.732988 19.54187 9.717169 19.49441 9.717169 L 15.713477 9.717169 C 15.729298 9.305854 16.235531 7.075262 19.146374 7.075262 C 21.329506 7.091082 23.085505 8.752161 23.085505 10.919474 Z"/>
                            <path id="Path-3" fill="currentColor" stroke="none"
                                  d="M 19.874084 9.732988 C 19.779167 9.732988 19.636787 9.732988 19.55769 9.732988 C 20.000645 9.796268 20.332859 10.160123 20.332859 10.571438 C 20.332859 10.697996 20.30122 10.808735 20.253761 10.919474 C 20.206301 11.014393 20.158842 11.093492 20.095562 11.156771 C 20.095562 11.156771 20.095562 11.156771 20.079742 11.17259 C 19.921545 11.330789 19.715887 11.425707 19.47859 11.425707 L 19.130554 11.425707 C 20.079742 11.425707 20.949833 11.757923 21.630083 12.311616 C 21.914839 12.548913 22.183777 12.83367 22.389433 13.150065 C 22.484352 13.023507 22.563452 12.881128 22.62673 12.73875 C 22.848207 12.311616 22.990585 11.837022 23.053865 11.330789 C 22.341974 10.36578 21.187128 9.732988 19.874084 9.732988 Z"/>
                            <path id="Path-4" fill="currentColor" stroke="none"
                                  d="M 15.555279 7.122721 C 13.8942 7.122721 12.549518 8.467404 12.549518 10.128484 L 12.865913 13.814497 C 12.960833 14.921884 12.897553 16.04509 12.676076 17.152475 L 12.549518 17.801086 C 14.210596 17.801086 15.555279 16.456404 15.555279 14.795324 L 15.5711 10.808735 C 15.5711 10.001925 15.808397 9.210935 16.282991 8.562324 C 16.773405 7.882072 17.580214 7.20182 18.956535 7.091082 Z"/>
                            <path id="Path-14" fill="currentColor" stroke="none"
                                  d="M 10.366385 7.091082 C 8.847684 7.091082 7.392262 7.581495 6.332336 8.499044 C 5.572986 9.147656 5.066752 10.017745 4.702897 10.539799 C 4.560519 10.761275 4.513059 10.824554 4.41814 10.872014 L 4.212483 10.872014 C 4.133384 10.872014 4.054285 10.856194 3.991006 10.808735 L 3.548051 10.460699 L 3.358214 10.318321 C 3.247475 10.239222 3.105097 10.191763 2.962719 10.191763 L 1.792054 10.191763 C 1.681315 10.191763 1.570576 10.223402 1.459838 10.270862 L 1.428198 10.270862 C 1.238361 10.36578 1.127622 10.523978 1.127622 10.713816 L 1.127622 10.998572 C 1.127622 11.030212 1.143442 11.077671 1.159262 11.109311 C 1.175081 11.156771 1.206721 11.18841 1.238361 11.22005 C 1.349099 11.330789 1.507297 11.394068 1.681315 11.394068 L 1.950252 11.409887 L 3.310754 11.425707 C 3.421493 11.425707 3.516412 11.504807 3.516412 11.599725 L 3.516412 11.852841 C 2.725422 11.852841 2.124269 11.947761 1.523117 12.216697 C 1.507297 12.216697 1.491477 12.232517 1.459838 12.248337 C 1.048523 12.469814 0.795406 12.83367 0.732127 13.229164 C 0.700487 13.403182 0.700487 13.5772 0.700487 13.767037 C 0.700487 14.289091 0.827046 14.795324 1.064343 15.238279 C 1.175081 15.443936 1.238361 15.665413 1.238361 15.88689 L 1.238361 15.96599 C 1.238361 16.456404 1.349099 16.915178 1.570576 17.342312 C 1.697135 17.59543 1.981891 17.753628 2.314107 17.753628 L 8.642027 17.753628 C 8.816045 17.753628 8.942603 17.59543 8.863504 17.46887 L 8.183252 16.219107 C 8.104154 16.076729 8.119974 15.90271 8.214892 15.760332 L 8.341451 15.586314 C 8.468009 15.428117 8.689487 15.333198 8.910964 15.364838 C 9.005882 15.380657 9.100801 15.380657 9.19572 15.396478 C 9.733594 15.459756 11.125735 15.554675 12.201482 15.633774 C 12.248942 15.016802 12.248942 14.384009 12.185662 13.767037 L 12.011645 11.773743 L 7.803578 11.773743 C 6.886029 11.773743 6.0634 11.647184 5.493887 11.425707 C 5.130031 11.283329 4.940194 10.935293 5.082572 10.603077 C 5.22495 10.270862 6.079219 9.100196 6.585453 8.673062 C 7.59792 7.834612 8.942603 7.360018 10.366385 7.360018 L 13.308868 7.360018 C 13.530346 7.233461 13.783463 7.122721 14.052398 7.059443 L 10.366385 7.059443 Z M 6.379796 16.298206 L 5.20913 16.266567 C 4.623798 16.250746 4.070105 16.092548 3.579691 15.823611 L 2.709602 15.349017 C 2.377386 15.159181 2.06099 14.953523 1.792054 14.700406 C 1.712955 14.637126 1.649675 14.463109 1.649675 14.463109 L 1.618036 14.209992 C 1.570576 13.972695 1.823693 13.751218 2.108449 13.798677 L 2.140089 13.798677 L 5.130031 14.115073 C 5.572986 14.162533 5.952661 14.384009 6.158319 14.716226 L 6.791111 15.744513 C 6.949308 16.013449 6.727831 16.314026 6.379796 16.298206 Z M 7.060047 14.209992 C 7.123326 14.273271 7.154965 14.35237 7.139146 14.431469 C 7.139146 14.510568 7.075867 14.589667 7.012588 14.637126 C 6.949308 14.684587 6.870209 14.700406 6.806931 14.700406 C 6.791111 14.700406 6.775291 14.700406 6.75947 14.700406 C 6.664552 14.684587 6.585453 14.652946 6.522173 14.573848 L 4.259942 11.947761 C 4.196663 11.884481 4.228303 11.805383 4.291582 11.742103 C 4.370681 11.694644 4.4656 11.710464 4.528879 11.757923 Z"/>
                            <path id="Path-15" fill="currentColor" stroke="none"
                                  d="M 5.810283 10.713816 C 5.810283 10.713816 7.59792 8.973638 10.350565 9.036918 L 12.059104 9.036918 C 12.122383 8.720522 12.264762 8.419945 12.470418 8.151009 L 9.512116 8.151009 C 7.139146 8.135189 5.810283 10.713816 5.810283 10.713816 Z"/>
                            <path id="Path-16" fill="currentColor" stroke="none"
                                  d="M 12.755175 17.453051 C 12.802635 17.453051 12.850094 17.453051 12.897553 17.46887 C 12.850094 17.453051 12.802635 17.453051 12.755175 17.453051 Z"/>
                        </g>
                    </svg>
                )
            },
        },
        {
            name: 'Inventory',
            description: 'Speak directly to your customers in a more meaningful way.',
            href: '/buy-used-cars',
            icon: ({className}) => {
                return (
                    <span className={`material-symbols-outlined material-symbols-menu-item ${className}`}>
                        directions_car
                    </span>
                )
            },
        },
        {
            name: 'Financing',
            description: "Connect with third-party tools that you're already using.",
            href: '/financing',
            icon: ({className}) => {
                return (
                    <span className={`material-symbols-outlined material-symbols-menu-item ${className}`}>
                        price_change
                    </span>
                )
            },
        },
        {
            name: 'Services',
            description: "Connect with third-party tools that you're already using.",
            href: '',
            subItems: services,
            icon: ({className}) => {
                return (
                    <span className={`material-symbols-outlined material-symbols-menu-item ${className}`}>
                        electric_car
                    </span>

                )
            },
        },
        {
            name: 'More',
            description: "Connect with third-party tools that you're already using.",
            href: '',
            subItems: resources,
            icon: ({className}) => {
                return (
                    <span className={`material-symbols-outlined material-symbols-menu-item ${className}`}>
                        more_horiz
                    </span>

                )
            },

        }

    ]
    const [open, setOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(true)
    const [menuSelected, setMenuSelected] = useState(null)
    const router = useRouter()


    return (
        <>
        <div
            className={"bg-surface-light dark:bg-surface-dark border-b border-outline-variant-light dark:border-outline-variant-dark md:hidden flex z-[999]  items-center h-[64px] w-full sticky top-0 px-1"}>
            <IconButton onClick={() => setOpen(true)}>
                menu
            </IconButton>
            <Link className={"ml-2 mr-auto"} href={"/"}>
                <IconButton>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
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
                </IconButton>
            </Link>
            <div className={"flex space-x-2 items-center"}>
                <button onClick={changeThemMode}
                        className={` hover:bg-opacity-[8%] rounded-full dark:hover:bg-opacity-[8%] dark:hover:bg-on-surface-variant-dark hover:bg-on-surface-variant-light transform flex items-center justify-center   w-[48px] h-[48px] group  `}>
                    {!isDark ?
                        <i className={"material-symbols-outlined group-hover:font-vs-[1_400_0_24] font-vs-[0_400_0_24] text-on-surface-variant-light"}
                           type={"outline"}>
                            dark_mode
                        </i> :
                        <Icon
                            className={`material-symbols-outlined group-hover:font-vs-[1_400_0_24] font-vs-[0_400_0_24] text-on-surface-variant-dark`}
                            type={"outline"}>
                            light_mode
                        </Icon>

                    }
                </button>
                <Link href={"tel:+14434222300"}>
                    <IconButton>
                        call
                    </IconButton>
                </Link>


                <IconButton>
                    search
                </IconButton>
            </div>



        </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog onTouchMove={() => {
                    setOpen(false)
                }} as="div" className="absolute inset-0 flex z-999 overflow-hidden" onClose={setOpen}>

                    <Dialog.Overlay  className="fixed bg-black bg-opacity-[70%] inset-0"/>

                    <div className="fixed inset-y-0 w-[360px]  left-0  flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition duration-700"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="ttransform transition duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >

                            <div
                                className="h-full relative w-[360px] flex flex-col rounded-r-2xl py-3 bg-surface-light dark:bg-surface-dark shadow-xl overflow-y-scroll">
                                <div className={`relative flex-1 px-3`}>
                                    <IconButton onClick={() => setOpen(false)} className={"mb-2 ml-1 group"}>
                                        menu_open
                                    </IconButton>
                                    <ul>
                                        {!menuSelected && menu.map((item, i) =>
                                            item.subItems ?
                                                <li className={`rounded-full group ${(router.pathname === item.href || (item.subItems && item.subItems.find(subItem => subItem.href === router.pathname))) ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-on-surface-light dark:hover:text-on-surface-dark hover:bg-surface-variant-light dark:hover:bg-surface-variant-dark"}`}
                                                    key={i}>
                                                    <button
                                                        className={"w-full h-[48px] tracking-[0.1px] leading-[24px] items-center flex  px-4"}
                                                        onClick={() => setMenuSelected(i)} key={i}>
                                                        <item.icon
                                                            className={`mr-3 ${(router.pathname === item.href || (item.subItems && item.subItems.find(subItem => subItem.href === router.pathname))) ? "material-symbols-menu-item-fill text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark "}`}/>
                                                        <span className={"flex-grow text-left"}>
                                                                    {item.name}
                                                                </span>
                                                        {item.subItems && <span
                                                            className="transition duration-200 material-symbols-outlined material-symbols-menu-item group-hover:material-symbols-menu-item-hover">
                                                                    arrow_forward
                                                                </span>}
                                                    </button>
                                                </li>

                                                : <Link locale={false} key={i} href={item.href}>
                                                    <li className={`h-[48px] flex tracking-[0.1px] leading-[24px] items-center px-4 rounded-full group ${(router.pathname === item.href || (item.subItems && item.subItems.find(subItem => subItem.href === router.pathname))) ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-on-surface-light dark:hover:text-on-surface-dark bg-opacity-[5%] dark:bg-opacity-[5%] hover:bg-surface-variant-light dark:hover:bg-surface-variant-dark"}`}
                                                        key={i}>
                                                        <item.icon
                                                            className={`mr-3 ${(router.pathname === item.href || (item.subItems && item.subItems.find(subItem => subItem.href === router.pathname))) ? "text-on-secondary-container-light dark:text-on-secondary-container-dark material-symbols-menu-item-fill" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}/>
                                                        <span className={"flex-grow "}>
                                                            {item.name}
                                                            </span>
                                                        {item.subItems && <span
                                                            className="transition duration-200 material-symbols-outlined material-symbols-menu-item group-hover:material-symbols-menu-item-hover">
                                                                arrow_forward
                                                            </span>}
                                                    </li>

                                                </Link>
                                        )}
                                        {menuSelected && <>
                                            <li className={`rounded-full group  text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-on-surface-light dark:hover:text-on-surface-dark hover:bg-surface-variant-light dark:hover:bg-surface-variant-dark`}
                                                key={"b-back"}>
                                                <button
                                                    className={"h-[48px] flex tracking-[0.1px] leading-[24px] items-center px-4"}
                                                    onClick={() => {
                                                        setMenuSelected(null)
                                                    }}>
                                                            <span
                                                                className="transition mr-4 duration-200 material-symbols-outlined material-symbols-menu-item group-hover:material-symbols-menu-item-hover">
                                                                arrow_back
                                                            </span>
                                                    <span className={"flex-grow "}>
                                                           Main Menu
                                                            </span>
                                                </button>
                                            </li>
                                            {menu[menuSelected].subItems.map((item, i) =>
                                                <Link locale={false} key={i} href={item.href}>
                                                    <li className={`h-[48px] ml-[40px] flex tracking-[0.1px] leading-[24px] items-center px-4 rounded-full group ${(router.pathname === item.href) ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark hover:text-on-surface-light dark:hover:text-on-surface-dark hover:bg-surface-variant-light bg-opacity-[5%] dark:bg-opacity-[5%] dark:hover:bg-surface-variant-dark"}`}
                                                        key={i}>
                                                                <span className={"flex-grow "}>
                                                            {item.name}
                                                            </span>
                                                    </li>

                                                </Link>
                                            )}
                                        </>}
                                    </ul>
                                </div>
                            </div>

                        </Transition.Child>
                    </div>

                </Dialog>
            </Transition.Root>
        </>
    )
}