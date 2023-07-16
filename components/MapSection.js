import Image from "next/legacy/image";
import Typography from "./assets/Typography";
import Space from "./assets/Space";
import Button from "./buttons/Button";
import {useState} from "react";
import {ModalSideSheet} from "@/components/SideSheet/ModalSideSheet";
import Icon from "@/components/assets/Icon";
import BottomSheet from "@/components/BottomSheet/BottomSheet";
import FullDialog from "@/components/dialogs/FullDialog";
import DialogHead from "@/components/dialogs/DialogHead";
import DialogContent from "@/components/dialogs/DialogContent";

function MapCard({thumbnailSrc}) {
    return (
        <div className={"bg-surface-light dark:bg-surface-dark rounded-[32px] overflow-hidden"}>
            <Image
                objectFit={'cover'}
                layout={'responsive'}
                width={1920}
                height={1080}
                src="/map.png"
                alt="People working on laptops"
            />

        </div>
    )
}

export default function MapSection(props) {
    const {horizontal, showSmall} = props
    const [isLocationDialogOpenElkridge, setIsLocationDialogOpenElkridge] = useState(false)
    const [isLocationDialogOpenElkridgeMobile, setIsLocationDialogOpenElkridgeMobile] = useState(false)
    const [isLocationDialogOpenElicot, setIsLocationDialogOpenElicot] = useState(false)
    const [isLocationDialogOpenElicotMobile, setIsLocationDialogOpenElicotMobile] = useState(false)
    const [elkridgeReadMore, setElkridgeReadMore] = useState(false)
    const [elicoReadMore, setElicoReadMore] = useState(false)

    return (
        <>

            <ModalSideSheet className={"md:block hidden"} withBackIconButton title={"Elkridge Location Info"}
                            setIsOpen={setIsLocationDialogOpenElkridge} isOpen={isLocationDialogOpenElkridge}
                            width={400} isNotFixedHeight isModal>
                <div className={"w-full overflow-hidden rounded-[16px]"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.8198600535507!2d-76.7390551078418!3d39.20154179859028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7e16f026e5351%3A0x1d991b8c62a237b1!2sBumble%20Auto%20(Elkridge%2C%20MD)!5e0!3m2!1sen!2sus!4v1684234827240!5m2!1sen!2sus"
                        width="100%" height="260" className={"border-0 rounded-[16px]"} allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={"py-4"}>
                    <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                </div>
                {/*<h3 className={"text-title-medium pb-4 font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                {/*    Information*/}
                {/*</h3>*/}
                <div className={"flex items-start space-x-4"}>
                    <a href={"https://goo.gl/maps/3HTKcbMmrcZKFR3aA"}
                       className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] justify-center items-start w-[78px] px-2  "}>
                        <div className={"text-center"}>
                            <Icon type={"outline"}>
                                map
                            </Icon>
                            <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark"}>
                                Show on Map
                            </div>
                        </div>
                    </a>
                    <a href={"tel:+14434222300"}
                       className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] justify-center items-start w-[78px] px-2  "}>
                        <div className={"text-center"}>
                            <Icon type={"outline"}>
                                call
                            </Icon>
                            <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark"}>
                                Call US
                            </div>
                        </div>
                    </a>
                    <button className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] justify-center items-start w-[78px] px-2  "}>
                        <div className={"text-center"}>
                            <Icon type={"outline"}>
                                share
                            </Icon>
                            <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark"}>
                                Share
                            </div>
                        </div>
                    </button>
                </div>
                <div className={"py-4"}>
                    <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                </div>
                <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                    Address
                </h3>
                <p className={"text-body-medium mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                    6475 Washington Blvd Unit B, Elkridge, MD 21075
                </p>
                <div className={"py-4"}>
                    <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                </div>
                <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                    Opening Time
                </h3>
                <ul>
                    <li className={"flex items-center justify-between"}>
                        <p className={"text-label-medium font-medium mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Monday to Saturday
                        </p>
                        <p className={"text-body-medium mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                            10:00 AM to 7:00 PM
                        </p>
                    </li>
                    <li className={"flex items-center justify-between"}>
                        <p className={"text-label-medium font-medium mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Sunday
                        </p>
                        <p className={"text-body-medium mt-4 text-error-light dark:text-error-dark"}>
                            Close
                        </p>
                    </li>
                </ul>
                <div className={"py-4"}>
                    <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                </div>

                <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                    About Bumble Auto Elkridge
                </h3>
                <div className={"pt-4 space-y-2"}>
                    <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                        {`If you're looking for a preowned car in Elkridge, Maryland, Bumble Auto is conveniently
                        located and easy to find. Simply search "preowned car dealerships near me" in your
                        preferred search engine, and Bumble Auto should appear in the search results.`}
                    </p>
                    <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                        {`When it comes to buying a used car, one of the most important factors is finding a
                        dealership you can trust. Bumble Auto has been serving the Elkridge community for years,
                        providing high-quality preowned vehicles at competitive prices.`}
                        {!elkridgeReadMore && <a onClick={() => setElkridgeReadMore(true)}
                                                 className={"text-primary-light hover:underline ml-2 dark:text-primary-dark"}>
                            Read More
                        </a>}
                    </p>
                    {elkridgeReadMore && <div>
                        <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                            {`Alternatively, if you're already in Elkridge or the surrounding area, you can use your
                    smartphone's GPS or mapping app to find the nearest preowned car dealership. Just enter
                    "preowned car dealerships" into the search bar, and your phone should automatically show
                    you the options closest to your current location.`}
                        </p>

                        <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                            {`By searching "preowned car dealerships near me" or using your smartphone's GPS, you can
                    easily find Bumble Auto and other preowned car dealerships in the Elkridge area. This
                    can save you time and effort, allowing you to focus on finding the perfect car for your
                    needs and budget.`}
                            {elkridgeReadMore && <a onClick={() => setElkridgeReadMore(false)}
                                                    className={"text-primary-light hover:underline ml-2 dark:text-primary-dark"}>
                                Read Less
                            </a>}
                        </p>
                    </div>}
                </div>


            </ModalSideSheet>
            <ModalSideSheet className={"md:block hidden"} withBackIconButton title={"Ellicott City Location Info"}
                            setIsOpen={setIsLocationDialogOpenElicot} isOpen={isLocationDialogOpenElicot}
                            width={400} isNotFixedHeight isModal>
                <div className={"w-full overflow-hidden rounded-[16px]"}>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.305798013795!2d-76.86395880782321!3d39.28131499853275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8216ae231a78f%3A0x5b5844b3c480a00c!2sBumble%20Auto%20(Ellicott%20City%2C%20MD)!5e0!3m2!1sen!2sus!4v1684238711144!5m2!1sen!2sus"
                        width="100%" height="260" className={"border-0 rounded-[16px]"} allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={"py-4"}>
                    <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                </div>
                {/*<h3 className={"text-title-medium pb-4 font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                {/*    Information*/}
                {/*</h3>*/}
                <div className={"flex items-start space-x-4"}>
                    <a href={"https://goo.gl/maps/exX5dxdEGfF3yYPg6"}
                       className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] justify-center items-start w-[78px] px-2  "}>
                        <div className={"text-center"}>
                            <Icon type={"outline"}>
                                map
                            </Icon>
                            <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark"}>
                                Show on Map
                            </div>
                        </div>
                    </a>
                    <a href={"tel:+14434222300"}
                       className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] justify-center items-start w-[78px] px-2  "}>
                        <div className={"text-center"}>
                            <Icon type={"outline"}>
                                call
                            </Icon>
                            <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark"}>
                                Call US
                            </div>
                        </div>
                    </a>
                    <button className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] justify-center items-start w-[78px] px-2  "}>
                        <div className={"text-center"}>
                            <Icon type={"outline"}>
                                share
                            </Icon>
                            <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark"}>
                                Share
                            </div>
                        </div>
                    </button>
                </div>
                <div className={"py-4"}>
                    <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                </div>
                <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                    Address
                </h3>
                <p className={"text-body-medium mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                    3243 Bethany Ln Unit A, Ellicott City, MD 21042
                </p>
                <div className={"py-4"}>
                    <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                </div>
                <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                    Opening Time
                </h3>
                <ul>
                    <li className={"flex items-center justify-between"}>
                        <p className={"text-label-medium font-medium mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Monday to Saturday
                        </p>
                        <p className={"text-body-medium mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                            10:00 AM to 7:00 PM
                        </p>
                    </li>
                    <li className={"flex items-center justify-between"}>
                        <p className={"text-label-medium font-medium mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Sunday
                        </p>
                        <p className={"text-body-medium mt-4 text-error-light dark:text-error-dark"}>
                            Close
                        </p>
                    </li>
                </ul>
                <div className={"py-4"}>
                    <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                </div>

                <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                    About Bumble Auto Elkridge
                </h3>
                <div className={"pt-4 pb-4 space-y-2"}>
                    <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                        {`Looking for a preowned car dealership near Ellicott City, Maryland? Look no further than
                        Bumble Auto, a trusted dealership with a wide selection of high-quality preowned
                        vehicles.`}
                    </p>
                    <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                        {`One of the benefits of shopping at Bumble Auto is their location. They are conveniently
                        located near Ellicott City, making it easy to stop by and browse their selection of
                        preowned cars. Just search "preowned car dealership near me" in your preferred search
                        engine, and Bumble Auto should appear in the search results.`}
                        {!elicoReadMore && <a onClick={() => setElicoReadMore(true)}
                                              className={"text-primary-light hover:underline ml-2 dark:text-primary-dark"}>
                            Read More
                        </a>}
                    </p>
                    {elicoReadMore && <div>

                        <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                            {`Once you arrive at Bumble Auto, you'll find a friendly and knowledgeable sales team
                                ready to assist you. They can answer any questions you may have about the cars on their
                                lot, provide you with a vehicle history report, and even help you secure financing.`}
                        </p>

                        <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                            {`Another advantage of shopping at Bumble Auto is their selection of preowned cars. They
                                have a variety of makes and models, so you're sure to find something that fits your
                                needs. Whether you're looking for a fuel-efficient sedan or a spacious SUV, Bumble Auto
                                has you covered.`}
                            {elicoReadMore && <a onClick={() => setElicoReadMore(false)}
                                                 className={"text-primary-light hover:underline ml-2 dark:text-primary-dark"}>
                                Read Less
                            </a>}
                        </p>
                    </div>}
                </div>


            </ModalSideSheet>

                <FullDialog className={"md:hidden block"}  setIsOpen={setIsLocationDialogOpenElkridgeMobile} isOpen={isLocationDialogOpenElkridgeMobile}>
                    <DialogHead onClose={() => setIsLocationDialogOpenElkridgeMobile(false)} title={"Elkridge Location Info"}
                                isFull>

                    </DialogHead>
                    <DialogContent isFull>

                        <div className={" w-full overflow-hidden rounded-[16px]"}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.8198600535507!2d-76.7390551078418!3d39.20154179859028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7e16f026e5351%3A0x1d991b8c62a237b1!2sBumble%20Auto%20(Elkridge%2C%20MD)!5e0!3m2!1sen!2sus!4v1684234827240!5m2!1sen!2sus"
                                width="100%" height="260" className={"border-0 rounded-[16px]"} allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className={"py-4 "}>
                            <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                        </div>
                        {/*<h3 className={"text-title-medium pb-4 font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                        {/*    Information*/}
                        {/*</h3>*/}
                        <div className={"flex items-start space-x-4"}>
                            <a href={"https://goo.gl/maps/3HTKcbMmrcZKFR3aA"}
                               className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] justify-center items-start w-[78px] px-2  "}>
                                <div className={"text-center"}>
                                    <Icon type={"outline"}>
                                        map
                                    </Icon>
                                    <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark"}>
                                        Show on Map
                                    </div>
                                </div>
                            </a>
                            <a href={"tel:+14434222300"}
                               className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] justify-center items-start w-[78px] px-2  "}>
                                <div className={"text-center"}>
                                    <Icon type={"outline"}>
                                        call
                                    </Icon>
                                    <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark"}>
                                        Call US
                                    </div>
                                </div>
                            </a>
                            <button className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] justify-center items-start w-[78px] px-2  "}>
                                <div className={"text-center"}>
                                    <Icon type={"outline"}>
                                        share
                                    </Icon>
                                    <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark"}>
                                        Share
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className={"py-4"}>
                            <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                        </div>
                        <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Address
                        </h3>
                        <p className={"text-body-medium mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                            6475 Washington Blvd Unit B, Elkridge, MD 21075
                        </p>
                        <div className={"py-4"}>
                            <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                        </div>
                        <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Opening Time
                        </h3>
                        <ul>
                            <li className={"flex items-center justify-between"}>
                                <p className={"text-label-medium font-medium mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Monday to Saturday
                                </p>
                                <p className={"text-body-medium mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                                    10:00 AM to 7:00 PM
                                </p>
                            </li>
                            <li className={"flex items-center justify-between"}>
                                <p className={"text-label-medium font-medium mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Sunday
                                </p>
                                <p className={"text-body-medium mt-4 text-error-light dark:text-error-dark"}>
                                    Close
                                </p>
                            </li>
                        </ul>
                        <div className={"py-4"}>
                            <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                        </div>

                        <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            About Bumble Auto Elkridge
                        </h3>
                        <div className={"pt-4 space-y-2"}>
                            <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                                {`If you're looking for a preowned car in Elkridge, Maryland, Bumble Auto is conveniently
                        located and easy to find. Simply search "preowned car dealerships near me" in your
                        preferred search engine, and Bumble Auto should appear in the search results.`}
                            </p>
                            <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                                {`When it comes to buying a used car, one of the most important factors is finding a
                        dealership you can trust. Bumble Auto has been serving the Elkridge community for years,
                        providing high-quality preowned vehicles at competitive prices.`}
                                {!elkridgeReadMore && <a onClick={() => setElkridgeReadMore(true)}
                                                         className={"text-primary-light hover:underline ml-2 dark:text-primary-dark"}>
                                    Read More
                                </a>}
                            </p>
                            {elkridgeReadMore && <div>
                                <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                                    {`Alternatively, if you're already in Elkridge or the surrounding area, you can use your
                    smartphone's GPS or mapping app to find the nearest preowned car dealership. Just enter
                    "preowned car dealerships" into the search bar, and your phone should automatically show
                    you the options closest to your current location.`}
                                </p>

                                <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                                    {`By searching "preowned car dealerships near me" or using your smartphone's GPS, you can
                    easily find Bumble Auto and other preowned car dealerships in the Elkridge area. This
                    can save you time and effort, allowing you to focus on finding the perfect car for your
                    needs and budget.`}
                                    {elkridgeReadMore && <a onClick={() => setElkridgeReadMore(false)}
                                                            className={"text-primary-light hover:underline ml-2 dark:text-primary-dark"}>
                                        Read Less
                                    </a>}
                                </p>
                            </div>}
                        </div>

                    </DialogContent>
                </FullDialog>
                <FullDialog className={"md:hidden block"} setIsOpen={setIsLocationDialogOpenElicotMobile} isOpen={isLocationDialogOpenElicotMobile}>
                    <DialogHead onClose={() => setIsLocationDialogOpenElicotMobile(false)} title={"Elkridge Location Info"}
                                isFull>

                    </DialogHead>
                    <DialogContent isFull>
                        <div className={"w-full overflow-hidden rounded-[16px]"}>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.305798013795!2d-76.86395880782321!3d39.28131499853275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8216ae231a78f%3A0x5b5844b3c480a00c!2sBumble%20Auto%20(Ellicott%20City%2C%20MD)!5e0!3m2!1sen!2sus!4v1684238711144!5m2!1sen!2sus"
                                width="100%" height="260" className={"border-0 rounded-[16px]"} allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className={"py-4"}>
                            <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                        </div>
                        {/*<h3 className={"text-title-medium pb-4 font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}
                        {/*    Information*/}
                        {/*</h3>*/}
                        <div className={"flex items-start space-x-4"}>
                            <a href={"https://goo.gl/maps/exX5dxdEGfF3yYPg6"}
                               className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] justify-center items-start w-[78px] px-2  "}>
                                <div className={"text-center"}>
                                    <Icon type={"outline"}>
                                        map
                                    </Icon>
                                    <div className={"text-on-surface-light dark:text-on-surface-dark  text-label-small"}>
                                        Show on Map
                                    </div>
                                </div>
                            </a>
                            <a href={"tel:+14434222300"}
                               className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] items-start justify-center w-[78px] px-2 "}>
                                <div className={"text-center"}>
                                    <Icon type={"outline"}>
                                        call
                                    </Icon>
                                    <div className={" text-on-surface-light dark:text-on-surface-dark  text-label-small"}>
                                        Call US
                                    </div>
                                </div>
                            </a>
                            <button className={"flex text-on-surface-variant-light dark:text-on-surface-variant-dark  rounded-[8px] items-start justify-center w-[78px]  px-2 "}>
                                <div className={"text-center"}>
                                    <Icon type={"outline"}>
                                        share
                                    </Icon>
                                    <div className={"text-label-small text-on-surface-light dark:text-on-surface-dark "}>
                                        Share
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className={"py-4"}>
                            <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                        </div>
                        <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Address
                        </h3>
                        <p className={"text-body-medium mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                            3243 Bethany Ln Unit A, Ellicott City, MD 21042
                        </p>
                        <div className={"py-4"}>
                            <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                        </div>
                        <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            Opening Time
                        </h3>
                        <ul>
                            <li className={"flex items-center justify-between"}>
                                <p className={"text-label-medium font-medium mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Monday to Saturday
                                </p>
                                <p className={"text-body-medium mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                                    10:00 AM to 7:00 PM
                                </p>
                            </li>
                            <li className={"flex items-center justify-between"}>
                                <p className={"text-label-medium font-medium mt-4 text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                    Sunday
                                </p>
                                <p className={"text-body-medium mt-4 text-error-light dark:text-error-dark"}>
                                    Close
                                </p>
                            </li>
                        </ul>
                        <div className={"py-4"}>
                            <div className={"h-[1px] bg-outline-variant-light dark:bg-outline-variant-dark"}/>
                        </div>

                        <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            About Bumble Auto Elkridge
                        </h3>
                        <div className={"pt-4 pb-4 space-y-2"}>
                            <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                                {`Looking for a preowned car dealership near Ellicott City, Maryland? Look no further than
                        Bumble Auto, a trusted dealership with a wide selection of high-quality preowned
                        vehicles.`}
                            </p>
                            <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                                {`One of the benefits of shopping at Bumble Auto is their location. They are conveniently
                        located near Ellicott City, making it easy to stop by and browse their selection of
                        preowned cars. Just search "preowned car dealership near me" in your preferred search
                        engine, and Bumble Auto should appear in the search results.`}
                                {!elicoReadMore && <a onClick={() => setElicoReadMore(true)}
                                                      className={"text-primary-light hover:underline ml-2 dark:text-primary-dark"}>
                                    Read More
                                </a>}
                            </p>
                            {elicoReadMore && <div>

                                <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                                    {`Once you arrive at Bumble Auto, you'll find a friendly and knowledgeable sales team
                                ready to assist you. They can answer any questions you may have about the cars on their
                                lot, provide you with a vehicle history report, and even help you secure financing.`}
                                </p>

                                <p className={"text-body-medium text-on-surface-light dark:text-on-surface-dark"}>
                                    {`Another advantage of shopping at Bumble Auto is their selection of preowned cars. They
                                have a variety of makes and models, so you're sure to find something that fits your
                                needs. Whether you're looking for a fuel-efficient sedan or a spacious SUV, Bumble Auto
                                has you covered.`}
                                    {elicoReadMore && <a onClick={() => setElicoReadMore(false)}
                                                         className={"text-primary-light hover:underline ml-2 dark:text-primary-dark"}>
                                        Read Less
                                    </a>}
                                </p>
                            </div>}
                        </div>

                    </DialogContent>
                </FullDialog>

            <div className={"md:flex  justify-between space-y-[20px] md:space-y-0 md:space-x-[20px]"}>
                {!showSmall && <div
                    className={"xl:w-8/12 bg-surface-container-light dark:bg-surface-container-dark py-6 px-4 md:py-10 md:px-10 rounded-[24px] lg:w-7/12 md:w-6/12 text-on-surface-light dark:text-on-surface-dark"}>
                    <h2 className={"font-black text-headline-small mb-4"}>
                        Elkridge, Store Info
                    </h2>
                    <div className={"space-y-2 mb-2"}>
                        <Typography type={"p"}>
                            {`If you're looking for a preowned car in Elkridge, Maryland, Bumble Auto is conveniently
                        located and easy to find. Simply search "preowned car dealerships near me" in your
                        preferred search engine, and Bumble Auto should appear in the search results.`}
                        </Typography>
                        <Typography type={"p"}>
                            {`When it comes to buying a used car, one of the most important factors is finding a
                        dealership you can trust. Bumble Auto has been serving the Elkridge community for years,
                        providing high-quality preowned vehicles at competitive prices.`}

                        </Typography>
                        <Typography type={"p"}>
                            {`...`}

                        </Typography>
                    </div>
                    <Space size={"xs"}/>
                    <div className={"flex justify-end"}>
                        <Button className={"md:block hidden"} onClick={() => setIsLocationDialogOpenElkridge(true)} icon={"map"} type={"tonal"}>
                            Show Location Info
                        </Button>
                        <Button className={"md:hidden"} onClick={() => setIsLocationDialogOpenElkridgeMobile(true)} icon={"map"} type={"tonal"}>
                            Show Location Info
                        </Button>
                    </div>
                    <Space size={"small"}/>
                    <h2 className={"font-black text-headline-small mb-4"}>
                        Ellicott City, Store Info
                    </h2>
                    <div className={"space-y-2 mb-2"}>

                        <Typography type={"p"}>
                            {`Looking for a preowned car dealership near Ellicott City, Maryland? Look no further than
                        Bumble Auto, a trusted dealership with a wide selection of high-quality preowned
                        vehicles.`}
                        </Typography>
                        <Typography type={"p"}>
                            {`One of the benefits of shopping at Bumble Auto is their location. They are conveniently
                        located near Ellicott City, making it easy to stop by and browse their selection of
                        preowned cars. Just search "preowned car dealership near me" in your preferred search
                        engine, and Bumble Auto should appear in the search results.`}
                        </Typography>
                        <Typography type={"p"}>
                            {`...`}

                        </Typography>
                        {/*<Typography type={"p"}>*/}
                        {/*    {`Once you arrive at Bumble Auto, you'll find a friendly and knowledgeable sales team*/}
                        {/*    ready to assist you. They can answer any questions you may have about the cars on their*/}
                        {/*    lot, provide you with a vehicle history report, and even help you secure financing.`}*/}
                        {/*</Typography>*/}
                        {/*<Typography type={"p"}>*/}
                        {/*    {`Another advantage of shopping at Bumble Auto is their selection of preowned cars. They*/}
                        {/*    have a variety of makes and models, so you're sure to find something that fits your*/}
                        {/*    needs. Whether you're looking for a fuel-efficient sedan or a spacious SUV, Bumble Auto*/}
                        {/*    has you covered.`}*/}
                        {/*</Typography>*/}
                    </div>
                    <Space size={"xs"}/>
                    <div className={"flex justify-end"}>
                        <Button className={"md:block hidden"} onClick={() => setIsLocationDialogOpenElicot(true)} icon={"map"} type={"tonal"}>
                            Show Location Info
                        </Button>
                        <Button className="md:hidden" onClick={() => setIsLocationDialogOpenElicotMobile(true)} icon={"map"} type={"tonal"}>
                            Show Location Info
                        </Button>
                    </div>

                </div>
                }
                <div
                    className={`${showSmall ? "w-full min-h-[500px] " : "md:w-6/12 lg:w-5/12 xl:w-4/12 md:min-h-[760px] min-h-[500px] lg:max-h-full  md:max-h-[760px]"} flex flex-col relative overflow-hidden  rounded-[24px] bg-surface-container-light dark:bg-surface-container-dark `}>
                    {/*<div className="grid-item-header">*/}
                    {/*    <h3 className="text-on-surface-light dark:text-on-surface-dark text-title-large font-bold px-10 pt-10">Our Locations</h3>*/}
                    {/*</div>*/}
                    <div className={`${showSmall ? "px-[30px]" : "px-[30px] md:px-10"} flex items-center  flex-1`}>
                        <div className={`${showSmall ? "w-[200px] " : "w-[200px] md:w-[370px]"} relative mb-[120px] `}>
                            <p className={`${showSmall ? "text-display-small" : "md:text-display-large text-display-small"} w-full font-black text-on-surface-light mt-20 dark:text-on-surface-dark z-20 relative`}>
                                Bumble&nbsp;Auto, Location Info
                            </p>
                            <div className={" absolute top-0 left-0 mt-[.8em] w-full h-full"}>
                                <div
                                    className={`${showSmall ? "w-[318px] -top-[70px] -right-[50px]" : "w-[318px] md:w-[454px] -top-[70px] md:-top-[130px] md:right-[8px] -right-[50px]"}  absolute`}>
                                    <div className={"pt-[134%]"}>
                                        <svg className={"map-svg bottom-0 w-full h-full  absolute"}
                                             viewBox="0 0 838 1124">
                                            <path
                                                className="map-path fill-transparent stroke-outline-variant-light dark:stroke-outline-variant-dark stroke-[14px]"
                                                d="M361,1105.2l466-516c1.1-1.2,2-3.6,2-5.2V306c0-1.6-1.3-3.5-2.8-4L0,7"
                                                style={{
                                                    strokeMiterlimit: 10,
                                                    strokeDasharray: "1862px",
                                                    strokeWidth: "14px",
                                                    strokeDashoffset: "0px"
                                                }}></path>
                                        </svg>
                                    </div>
                                    <div
                                        className={`${showSmall ? "w-[50px] h-[50px] left-[100px] -bottom-[28px]" : "md:w-[80px] md:h-[80px] w-[50px] h-[50px] left-[100px] md:left-[145px] md:-bottom-[40px] -bottom-[28px]"} absolute `}>
                                        <div
                                            className={`${showSmall ? "w-[56px] h-[56px] -m-[28px]" : "md:w-[80px] md:h-[80px] w-[56px] h-[56px] -m-[28px] md:-m-[40px]"} bg-opacity-[12%] dark:bg-opacity-[12%]  bg-secondary-light dark:bg-secondary-dark absolute left-1/2 top-1/2 rounded-full `}
                                            style={{transform: "matrix(1, 0, 0, 1, 0, 0)"}}></div>
                                        <div
                                            className={`${showSmall ? "w-[26px] h-[26px] -m-[13px]" : "md:w-[36px] md:h-[36px] w-[26px] h-[26px] -m-[13px] md:-m-[18px]"}   bg-surface-light dark:bg-surface-dark absolute left-1/2 top-1/2 rounded-full `}
                                            style={{transform: "matrix(1, 0, 0, 1, 0, 0)"}}></div>
                                        <div
                                            className={`${showSmall ? "w-[16px] h-[16px] -m-[8px]" : "md:w-[24px] md:h-[24px] w-[16px] h-[16px] -m-[8px] md:-m-[12px]"}   bg-secondary-light dark:bg-secondary-dark absolute left-1/2 top-1/2 rounded-full `}
                                            style={{transform: "matrix(1, 0, 0, 1, 0, 0)"}}></div>
                                    </div>
                                    <div
                                        className={`${showSmall ? "top-[30px] right-[20px]" : "md:top-[40px] top-[30px] md:right-[30px] right-[20px]"} dark:hidden block  absolute`}>
                                        <div
                                            className={`${showSmall ? "h-[67px] w-[58px]" : "md:h-[101px] md:w-[87px] h-[67px] w-[58px]"} relative`}>
                                            {/*<Image layout={"fill"}*/}
                                            {/*       style={{transform: " matrix(1, 0, 0, 1, 0, 0)"}}*/}
                                            {/*       src={"/map-logo-b.png"}/>*/}
                                            <svg className={"text-surface-light dark:text-surface-dark"} width="100%" height="100%" viewBox="0 0 522 606" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path className={"dark:text-on-surface-variant-dark text-on-surface-variant-light"} id="Path" fill="currentColor" fillRule="evenodd" stroke="none" d="M 516 256.799988 C 516 118.199982 402 6 261 6 C 120 6 6 118.199982 6 256.799988 C 6 367.799988 79.199997 461.400024 180.600006 494.400024 C 201.599991 508.800018 224.400009 531.599976 237 565.199951 C 237 565.199951 245.400009 600 261 600 C 276 600 285 565.199951 285 565.199951 C 297.599976 531.599976 319.799988 508.800018 341.400024 494.400024 C 442.800018 461.400024 516 367.200012 516 256.799988"/>
                                                <g id="New-Group-copy-copy-3-copy-5">
                                                    <path id="path1" fill="currentColor" stroke="none" d="M 396.750427 266.685333 C 393.897705 262.296478 389.728271 257.907623 385.558899 254.615997 L 385.558899 254.835419 C 376.122833 247.37439 364.492401 242.985535 351.545319 242.985535 C 349.570313 242.985535 346.937012 243.204987 344.523132 243.64386 C 336.403778 244.741089 329.601074 250.666046 327.84552 258.565948 C 327.626068 259.882599 327.406647 261.418732 327.406647 262.735352 L 327.406647 263.832581 C 327.84552 273.707489 336.403778 281.168518 346.278687 281.168518 L 359.006348 281.168518 C 359.006348 281.168518 364.711853 281.38797 366.906281 281.607422 C 369.100708 281.826843 371.075684 282.265717 373.270111 282.70462 C 374.586761 283.143524 376.561737 283.582397 377.658936 283.801819 C 390.386597 287.532349 404.430908 298.285034 404.430908 298.065582 C 405.089233 286.654572 402.894836 275.463013 396.750427 266.685333 Z"/>
                                                    <path id="Path-1" fill="currentColor" stroke="none" d="M 381.608917 284.899048 C 370.856232 280.729645 361.200775 281.168518 361.200775 281.168518 C 361.200775 281.168518 368.222931 284.679596 368.222931 291.921204 C 368.222931 303.99054 358.348022 309.257141 350.667542 311.890442 C 342.328735 314.743195 321.920593 317.815399 306.120728 318.912628 C 310.070679 320.44873 330.698273 333.176361 359.445221 330.981934 C 400.261505 328.129181 404.430908 298.065582 404.430908 298.065582 C 404.430908 298.065582 395.214325 290.165649 381.608917 284.899048 Z"/>
                                                    <path id="Path-2" fill="currentColor" stroke="none" d="M 406.405884 235.743927 C 406.405884 237.718933 406.405884 239.693909 406.186462 241.449432 C 396.311554 227.844025 380.292267 219.066315 362.078522 219.066315 C 360.761902 219.066315 359.664673 219.066315 358.348022 219.285767 C 357.689697 219.285767 357.250824 219.066315 356.592468 219.066315 L 304.145752 219.066315 C 304.365173 213.360809 311.38736 182.419434 351.76474 182.419434 C 382.047791 182.638885 406.405884 205.680328 406.405884 235.743927 Z"/>
                                                    <path id="Path-3" fill="currentColor" stroke="none" d="M 361.8591 219.285767 C 360.54245 219.285767 358.567444 219.285767 357.470245 219.285767 C 363.614655 220.163544 368.222931 225.210724 368.222931 230.916229 C 368.222931 232.671753 367.784027 234.207825 367.125732 235.743927 C 366.467377 237.060608 365.809052 238.157806 364.931274 239.035583 C 364.931274 239.035583 364.931274 239.035583 364.711853 239.255035 C 362.517426 241.449432 359.664673 242.766083 356.373016 242.766083 L 351.545319 242.766083 C 364.711853 242.766083 376.781219 247.37439 386.217194 255.054871 C 390.167175 258.346527 393.897705 262.296478 396.750427 266.685333 C 398.067078 264.929779 399.164307 262.954803 400.042084 260.979828 C 403.114288 255.054871 405.089233 248.471588 405.96701 241.449432 C 396.092102 228.063446 380.072815 219.285767 361.8591 219.285767 Z"/>
                                                    <path id="Path-4" fill="currentColor" stroke="none" d="M 301.951294 183.077759 C 278.909851 183.077759 260.257263 201.730377 260.257263 224.77182 L 264.646088 275.901917 C 265.962769 291.262878 265.084991 306.843292 262.012787 322.204254 L 260.257263 331.201385 C 283.298706 331.201385 301.951294 312.548798 301.951294 289.507324 L 302.170776 234.207825 C 302.170776 223.016296 305.462402 212.044159 312.045685 203.047028 C 318.848389 193.611023 330.039948 184.174957 349.131409 182.638885 Z"/>
                                                    <path id="Path-14" fill="currentColor" stroke="none" d="M 229.974213 182.638885 C 208.90773 182.638885 188.719025 189.441589 174.016388 202.169281 C 163.48317 211.166382 156.460999 223.235718 151.413834 230.477325 C 149.438858 233.54953 148.780518 234.427277 147.463867 235.085632 L 144.611115 235.085632 C 143.513901 235.085632 142.416687 234.86615 141.538925 234.207825 L 135.394531 229.380127 L 132.76123 227.405121 C 131.225128 226.307922 129.250153 225.649597 127.275169 225.649597 L 111.03643 225.649597 C 109.500328 225.649597 107.964226 226.08847 106.428139 226.746796 L 105.98925 226.746796 C 103.355949 228.063446 101.819847 230.257874 101.819847 232.891174 L 101.819847 236.841156 C 101.819847 237.280029 102.039291 237.938354 102.258736 238.377258 C 102.478165 239.035583 102.917053 239.474457 103.355949 239.91333 C 104.892036 241.449432 107.086464 242.32724 109.500328 242.32724 L 113.230858 242.546661 L 132.10289 242.766083 C 133.638992 242.766083 134.955658 243.863312 134.955658 245.179962 L 134.955658 248.69104 C 123.983528 248.69104 115.644714 250.00769 107.305901 253.73822 C 107.086464 253.73822 106.867012 253.957672 106.428139 254.177094 C 100.722633 257.249298 97.211548 262.296478 96.333786 267.782532 C 95.894897 270.196411 95.894897 272.61026 95.894897 275.243561 C 95.894897 282.485168 97.650444 289.507324 100.942078 295.651733 C 102.478165 298.504486 103.355949 301.57666 103.355949 304.648865 L 103.355949 305.746063 C 103.355949 312.548798 104.892036 318.912628 107.964226 324.837555 C 109.719772 328.348663 113.669731 330.54306 118.278023 330.54306 L 206.054977 330.54306 C 208.468857 330.54306 210.224396 328.348663 209.127182 326.593109 L 199.691147 309.257141 C 198.593948 307.282166 198.8134 304.868286 200.130035 302.893311 L 201.885574 300.479462 C 203.641129 298.285034 206.713333 296.968384 209.785522 297.407257 C 211.102158 297.626709 212.418823 297.626709 213.735474 297.846161 C 221.196533 298.723907 240.507431 300.040558 255.42952 301.137787 C 256.08786 292.579529 256.08786 283.801819 255.210083 275.243561 L 252.796234 247.593842 L 194.424545 247.593842 C 181.696869 247.593842 170.285873 245.838287 162.385956 242.766083 C 157.338776 240.791138 154.705475 235.963379 156.68045 231.355103 C 158.655426 226.746796 170.50531 210.508057 177.527481 204.58313 C 191.571777 192.952667 210.224396 186.369385 229.974213 186.369385 L 270.790497 186.369385 C 273.862701 184.613892 277.373779 183.077759 281.104279 182.200012 L 229.974213 182.200012 Z M 174.674728 310.35437 L 158.435974 309.915497 C 150.31662 309.696014 142.636139 307.501617 135.83342 303.771088 L 123.764084 297.187805 C 119.155792 294.554535 114.766945 291.701752 111.03643 288.190674 C 109.939224 287.312897 109.06144 284.899048 109.06144 284.899048 L 108.622559 281.38797 C 107.964226 278.096344 111.475311 275.024139 115.425262 275.682465 L 115.864159 275.682465 L 157.338776 280.07132 C 163.48317 280.729645 168.749786 283.801819 171.602539 288.410126 L 180.380234 302.673889 C 182.574646 306.404388 179.502441 310.573822 174.674728 310.35437 Z M 184.110748 281.38797 C 184.98851 282.265717 185.427383 283.362946 185.207947 284.460144 C 185.207947 285.557373 184.330185 286.654572 183.452423 287.312897 C 182.574646 287.971252 181.477432 288.190674 180.59967 288.190674 C 180.380234 288.190674 180.160782 288.190674 179.94133 288.190674 C 178.62468 287.971252 177.527481 287.532349 176.649689 286.43515 L 145.26944 250.00769 C 144.391663 249.129944 144.830551 248.032745 145.708328 247.154938 C 146.805527 246.496643 148.122192 246.716064 148.999969 247.37439 Z"/>
                                                    <path id="Path-15" fill="currentColor" stroke="none" d="M 166.774796 232.891174 C 166.774796 232.891174 191.571777 208.752502 229.754761 209.63031 L 253.454559 209.63031 C 254.332321 205.241455 256.307312 201.072052 259.160034 197.341522 L 218.124329 197.341522 C 185.207947 197.12207 166.774796 232.891174 166.774796 232.891174 Z"/>
                                                    <path id="Path-16" fill="currentColor" stroke="none" d="M 263.109985 326.373657 C 263.768372 326.373657 264.426666 326.373657 265.084991 326.593109 C 264.426666 326.373657 263.768372 326.373657 263.109985 326.373657 Z"/>
                                                </g>

                                            </svg>

                                        </div>
                                    </div>
                                    <div
                                        className={`${showSmall ? "top-[30px] right-[20px]" : "md:top-[40px] top-[30px] md:right-[30px] right-[20px]"} dark:block hidden  absolute`}>
                                        <div
                                            className={`${showSmall ? "h-[67px] w-[58px]" : "md:h-[101px] md:w-[87px] h-[67px] w-[58px]"} relative`}>
                                            <svg className={"text-surface-light dark:text-surface-dark"} width="100%" height="100%" viewBox="0 0 522 606" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                <path className={"dark:text-on-surface-variant-dark text-on-surface-variant-light"} id="Path" fill="currentColor" fillRule="evenodd" stroke="none" d="M 516 256.799988 C 516 118.199982 402 6 261 6 C 120 6 6 118.199982 6 256.799988 C 6 367.799988 79.199997 461.400024 180.600006 494.400024 C 201.599991 508.800018 224.400009 531.599976 237 565.199951 C 237 565.199951 245.400009 600 261 600 C 276 600 285 565.199951 285 565.199951 C 297.599976 531.599976 319.799988 508.800018 341.400024 494.400024 C 442.800018 461.400024 516 367.200012 516 256.799988"/>
                                                <g id="New-Group-copy-copy-3-copy-5">
                                                    <path id="path1" fill="currentColor" stroke="none" d="M 396.750427 266.685333 C 393.897705 262.296478 389.728271 257.907623 385.558899 254.615997 L 385.558899 254.835419 C 376.122833 247.37439 364.492401 242.985535 351.545319 242.985535 C 349.570313 242.985535 346.937012 243.204987 344.523132 243.64386 C 336.403778 244.741089 329.601074 250.666046 327.84552 258.565948 C 327.626068 259.882599 327.406647 261.418732 327.406647 262.735352 L 327.406647 263.832581 C 327.84552 273.707489 336.403778 281.168518 346.278687 281.168518 L 359.006348 281.168518 C 359.006348 281.168518 364.711853 281.38797 366.906281 281.607422 C 369.100708 281.826843 371.075684 282.265717 373.270111 282.70462 C 374.586761 283.143524 376.561737 283.582397 377.658936 283.801819 C 390.386597 287.532349 404.430908 298.285034 404.430908 298.065582 C 405.089233 286.654572 402.894836 275.463013 396.750427 266.685333 Z"/>
                                                    <path id="Path-1" fill="currentColor" stroke="none" d="M 381.608917 284.899048 C 370.856232 280.729645 361.200775 281.168518 361.200775 281.168518 C 361.200775 281.168518 368.222931 284.679596 368.222931 291.921204 C 368.222931 303.99054 358.348022 309.257141 350.667542 311.890442 C 342.328735 314.743195 321.920593 317.815399 306.120728 318.912628 C 310.070679 320.44873 330.698273 333.176361 359.445221 330.981934 C 400.261505 328.129181 404.430908 298.065582 404.430908 298.065582 C 404.430908 298.065582 395.214325 290.165649 381.608917 284.899048 Z"/>
                                                    <path id="Path-2" fill="currentColor" stroke="none" d="M 406.405884 235.743927 C 406.405884 237.718933 406.405884 239.693909 406.186462 241.449432 C 396.311554 227.844025 380.292267 219.066315 362.078522 219.066315 C 360.761902 219.066315 359.664673 219.066315 358.348022 219.285767 C 357.689697 219.285767 357.250824 219.066315 356.592468 219.066315 L 304.145752 219.066315 C 304.365173 213.360809 311.38736 182.419434 351.76474 182.419434 C 382.047791 182.638885 406.405884 205.680328 406.405884 235.743927 Z"/>
                                                    <path id="Path-3" fill="currentColor" stroke="none" d="M 361.8591 219.285767 C 360.54245 219.285767 358.567444 219.285767 357.470245 219.285767 C 363.614655 220.163544 368.222931 225.210724 368.222931 230.916229 C 368.222931 232.671753 367.784027 234.207825 367.125732 235.743927 C 366.467377 237.060608 365.809052 238.157806 364.931274 239.035583 C 364.931274 239.035583 364.931274 239.035583 364.711853 239.255035 C 362.517426 241.449432 359.664673 242.766083 356.373016 242.766083 L 351.545319 242.766083 C 364.711853 242.766083 376.781219 247.37439 386.217194 255.054871 C 390.167175 258.346527 393.897705 262.296478 396.750427 266.685333 C 398.067078 264.929779 399.164307 262.954803 400.042084 260.979828 C 403.114288 255.054871 405.089233 248.471588 405.96701 241.449432 C 396.092102 228.063446 380.072815 219.285767 361.8591 219.285767 Z"/>
                                                    <path id="Path-4" fill="currentColor" stroke="none" d="M 301.951294 183.077759 C 278.909851 183.077759 260.257263 201.730377 260.257263 224.77182 L 264.646088 275.901917 C 265.962769 291.262878 265.084991 306.843292 262.012787 322.204254 L 260.257263 331.201385 C 283.298706 331.201385 301.951294 312.548798 301.951294 289.507324 L 302.170776 234.207825 C 302.170776 223.016296 305.462402 212.044159 312.045685 203.047028 C 318.848389 193.611023 330.039948 184.174957 349.131409 182.638885 Z"/>
                                                    <path id="Path-14" fill="currentColor" stroke="none" d="M 229.974213 182.638885 C 208.90773 182.638885 188.719025 189.441589 174.016388 202.169281 C 163.48317 211.166382 156.460999 223.235718 151.413834 230.477325 C 149.438858 233.54953 148.780518 234.427277 147.463867 235.085632 L 144.611115 235.085632 C 143.513901 235.085632 142.416687 234.86615 141.538925 234.207825 L 135.394531 229.380127 L 132.76123 227.405121 C 131.225128 226.307922 129.250153 225.649597 127.275169 225.649597 L 111.03643 225.649597 C 109.500328 225.649597 107.964226 226.08847 106.428139 226.746796 L 105.98925 226.746796 C 103.355949 228.063446 101.819847 230.257874 101.819847 232.891174 L 101.819847 236.841156 C 101.819847 237.280029 102.039291 237.938354 102.258736 238.377258 C 102.478165 239.035583 102.917053 239.474457 103.355949 239.91333 C 104.892036 241.449432 107.086464 242.32724 109.500328 242.32724 L 113.230858 242.546661 L 132.10289 242.766083 C 133.638992 242.766083 134.955658 243.863312 134.955658 245.179962 L 134.955658 248.69104 C 123.983528 248.69104 115.644714 250.00769 107.305901 253.73822 C 107.086464 253.73822 106.867012 253.957672 106.428139 254.177094 C 100.722633 257.249298 97.211548 262.296478 96.333786 267.782532 C 95.894897 270.196411 95.894897 272.61026 95.894897 275.243561 C 95.894897 282.485168 97.650444 289.507324 100.942078 295.651733 C 102.478165 298.504486 103.355949 301.57666 103.355949 304.648865 L 103.355949 305.746063 C 103.355949 312.548798 104.892036 318.912628 107.964226 324.837555 C 109.719772 328.348663 113.669731 330.54306 118.278023 330.54306 L 206.054977 330.54306 C 208.468857 330.54306 210.224396 328.348663 209.127182 326.593109 L 199.691147 309.257141 C 198.593948 307.282166 198.8134 304.868286 200.130035 302.893311 L 201.885574 300.479462 C 203.641129 298.285034 206.713333 296.968384 209.785522 297.407257 C 211.102158 297.626709 212.418823 297.626709 213.735474 297.846161 C 221.196533 298.723907 240.507431 300.040558 255.42952 301.137787 C 256.08786 292.579529 256.08786 283.801819 255.210083 275.243561 L 252.796234 247.593842 L 194.424545 247.593842 C 181.696869 247.593842 170.285873 245.838287 162.385956 242.766083 C 157.338776 240.791138 154.705475 235.963379 156.68045 231.355103 C 158.655426 226.746796 170.50531 210.508057 177.527481 204.58313 C 191.571777 192.952667 210.224396 186.369385 229.974213 186.369385 L 270.790497 186.369385 C 273.862701 184.613892 277.373779 183.077759 281.104279 182.200012 L 229.974213 182.200012 Z M 174.674728 310.35437 L 158.435974 309.915497 C 150.31662 309.696014 142.636139 307.501617 135.83342 303.771088 L 123.764084 297.187805 C 119.155792 294.554535 114.766945 291.701752 111.03643 288.190674 C 109.939224 287.312897 109.06144 284.899048 109.06144 284.899048 L 108.622559 281.38797 C 107.964226 278.096344 111.475311 275.024139 115.425262 275.682465 L 115.864159 275.682465 L 157.338776 280.07132 C 163.48317 280.729645 168.749786 283.801819 171.602539 288.410126 L 180.380234 302.673889 C 182.574646 306.404388 179.502441 310.573822 174.674728 310.35437 Z M 184.110748 281.38797 C 184.98851 282.265717 185.427383 283.362946 185.207947 284.460144 C 185.207947 285.557373 184.330185 286.654572 183.452423 287.312897 C 182.574646 287.971252 181.477432 288.190674 180.59967 288.190674 C 180.380234 288.190674 180.160782 288.190674 179.94133 288.190674 C 178.62468 287.971252 177.527481 287.532349 176.649689 286.43515 L 145.26944 250.00769 C 144.391663 249.129944 144.830551 248.032745 145.708328 247.154938 C 146.805527 246.496643 148.122192 246.716064 148.999969 247.37439 Z"/>
                                                    <path id="Path-15" fill="currentColor" stroke="none" d="M 166.774796 232.891174 C 166.774796 232.891174 191.571777 208.752502 229.754761 209.63031 L 253.454559 209.63031 C 254.332321 205.241455 256.307312 201.072052 259.160034 197.341522 L 218.124329 197.341522 C 185.207947 197.12207 166.774796 232.891174 166.774796 232.891174 Z"/>
                                                    <path id="Path-16" fill="currentColor" stroke="none" d="M 263.109985 326.373657 C 263.768372 326.373657 264.426666 326.373657 265.084991 326.593109 C 264.426666 326.373657 263.768372 326.373657 263.109985 326.373657 Z"/>
                                                </g>

                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
