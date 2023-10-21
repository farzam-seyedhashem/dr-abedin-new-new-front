/* This example requires Tailwind CSS v2.0+ */
import BreadCrumbs from '../components/BreadCrumbs'
import Layout from '../layouts/Main'
import {API} from "../config";
import PageHeader from "../components/PageHeader";
import Typography from "../components/assets/Typography";
import Space from "../components/assets/Space";
import React from "react";
import Image from 'next/legacy/image'

// const faqs = [
//     {
//         question: "WHAT DO I DO WHEN I HAVE A FLAT TIRE DUE TO A ROAD HAZARD?",
//         answer: "Return to your selling Dealer and your tire will be repaired or replaced. Refer to your warranty for details."
//     },
//     // More questions...
// ]
const breadCrumbs = [
    {name: 'FAQ', href: "/faq"},

]


export default function Example(props) {
    const {...other} = props
    const faqs = {
        data: [
            {
                title: "حداقل سن مناسب براي جراحي بيني چند سال است؟",
                content: "حداقل سن براي دختران ١٦ سال و براي پسران ١٨ سال مي باشد."
            },
            {
                title: "حداكثر سن براي جراحي بيني چقدر است؟",
                content: "افراد بالاتر از ٥٠ سال نيز مي توانند كانديد جراحي بيني باشند، ولي با درنظر گرفتن كيفيت پوست و قوام و استحكام اسكلت غضروفي/استخواني بيني و درنظرگرفتن حفظ عملكرد تنفسي."
            },
            {
                title: "تفاوت بيني گوشتي و استخواني در چيست؟",
                content: "تفاوت عمده شامل ضخامت و الاستيسيته پوست و قوام و استحكام غضروف هاي نوك بيني مي باشد."
            },
            {
                title: "انجام همزمان جراحي بيني و سينوس ممكن است؟",
                content: "در مواردي كه يك سينوس درگير باشد بله، ولي در مواردي كه چندين سينوس درگير باشد بهتر است ابتدا جراحي سينوس انجام پذيرد و پس از ٣ تا ٦ ماه و با بهبود سينوزيت رينوپلاستي انجام شود."
            },
            {
                title: "انجام جراحي زيبايي بيني بعد از شكستگي بيني مقدور هست؟",
                content: "خير، در مواردي كه جااندازي شكستگي بيني ضرورت دارد ابتدا جااندازي انجام مي شود و پس از ٦ ماه و استحكام يافتن اسكلت استخواني انجام جراحي زيبايي بيني بلامانع است."
            },
            {
                title: "چه مدت استراحت بعد از جراحي بيني لازم است؟",
                content: "يك هفته استراحت كامل در منزل بعد از جراحي بيني ضرورت دارد."
            },
            {
                title: "چه مدت چسب زدن بعد از جراحي لازم است؟",
                content: "البته اين موضوع بستگي به نظر جراح، ميزان تورم پس از جراحي و ضخامت پوست دارد، در مجموع ١ تا ٢ ماه چسب زدن در كاهش تورم و حفظ فرم بيني كاملا موثر است."
            },
            {
                title: "آيا آلرژي مانع جراحي بيني مي شود؟",
                content: "افرادي كه آلرژي فصلي دارند بهتر است در ساير فصول سال جراحي بيني را انجام دهند و در موارد آلرژي شديد بهتر است ابتدا با مراجعه به كلينيك هاي آلرژي، حساسيت كنترل و درمان و سپس جراحي بيني انجام پذيرد."
            },
            {
                title: "بهترين فصل مناسب براي جراحي بيني؟",
                content: "فصل خاصي براي جراحي بيني توصيه نمي شود ولي در افرادي كه پوست چرب دارند يا مبتلا به آكنه هستند بهتر است جراحي در فصول خنك انجام شود و يا افرادي كه آلرژي فصلي دارند، جراحي در ساير فصول انجام پذيرد."
            },
            {
                title: "آيا جراحي بيني دردناك است؟",
                content: "معمولا افرادي كه تحت عمل رينوپلاستي قرار مي گيرند درد مختصري را تجربه مي كنند و معمولا مصرف مسكن هاي خوراكي معمول كاملا در تسكين درد موثر و كافي است."
            },
            {
                title: "بهترين روش بيهوشي براي جراحي بيني چيست؟",
                content: "بهترين و ايمن ترين روش بيهوشي براي جراحي بيني، بيهوشي كامل يا عمومي است."
            },
            {
                title: "جراحي باز بهتر است يا بسته؟",
                content: "بسته به تسلط و تبحر جراح هر كدام از اين دو روش قابل انجام و نتيجه بخش است، البته همه مشكلات بيني ممكن است در روش بسته قابل رفع نباشد."
            },
            {
                title: "آيا گذاشتن تامپون ضرورت دارد؟",
                content: "خير، ولي در روش هاي نوين جراحي سايز تامپون ها كوچك است و برخلاف گذشته خارج كردن تامپون ها به راحتي و بدون درد انجام مي شود."
            },
            {
                title: "جراحي بيني در افراد ديابتيك مقدور است؟",
                content: "بله، اگر قند خون به خوبي تحت كنترل شود با رعايت دقيق پروتكل تنظيم قند، قبل و حين بيهوشي انجام رينوپلاستي براي افراد ديابتيك بلامانع است."
            },
            {title: "انجام مشاوره قلب براي بيهوشي ضرورت دارد؟", content: "براي افراد كمتر از ٤٥ سال در صورتي كه سابقه قبلي مشكلات قلب و عروق نداشته باشند انجام مشاوره قلب ضروري نيست."},
           
            {
                title: "آيا افراد مبتلا به كم كاري تيروئيد مي توانند جراحي بيني انجام دهند؟",
                content: "بله، در صورتي كه آزمايش هورمون هاي تيروئيد همزمان با مصرف لووتيروكسين كاملا نرمال باشد انجام بيهوشي و جراحي بيني بلامانع است."
            },
            {
                title: "انجام سي تي اسكن قبل از جراحي براي همه افراد ضروري است؟",
                content: "در صورتي كه فرد متقاضي جراحي بيني در معاينه انحراف بيني و مشكل تنفسي و همچنين سابقه سينوزيت يا شكستگي بيني نداشته باشد انجام روتين سي تي اسكن ضرورت ندارد."
            },
            {
                title: "هزينه جراحي بيني چقدر است؟",
                content: "جراحي هاي زيبايي در همه نقاط دنيا تحت پوشش بيمه نبوده و تعرفه ثابت و معيني نيز ندارند، و هزينه جراحي به نسبت تخصص و تجربه جراح، محل انجام جراحي و همچنين تايم عمل و سهولت يا دشواري جراحي تعيين مي گردد."
            },
            {
                title: "كدام انواع بيني ممكن است نياز به ترميم يا جراحي مجدد داشته باشند؟",
                content: "بيني هاي داراي پوست چرب و ضخيم، بيني هاي داراي پوست بسيار نازك، بيني هاي داراي انحراف محور واضح ظاهري و بيني هايي كه قبلا دچار آسيب شديد ناشي از تروما يا جراحي ناموفق قبلي بوده اند."
            },
            {
                title: "مدت زمان جراحي بيني چقدر است؟",
                content: "مدت جراحي و بيهوشي به طور معمول بين ٢ تا ٣ ساعت خواهد بود."
            },
        ]
    }
    return (
        <Layout {...other} pageTitle={"FAQ"} breadCrumbs={breadCrumbs}>
            {/*<PageHeader isFull title={"FAQ"} metaTitle={page.metaTitle} breadCrumbs={breadCrumbs}/>*/}
            <div className={"px-4 md:px-6 pt-6"}>
                {/*<Space size={"large"}/>*/}
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-2"}>
                    <div
                        className={"relative flex items-center md:p-[56px] p-6 rounded-[24px] w-full h-[220px] md:h-[523px] bg-surface-container-high-light dark:bg-surface-container-high-dark"}>
                        <div>
                            <h1 className={"md:text-display-large text-display-small font-black text-on-surface-light dark:text-on-surface-dark "}>
                                سوالات متداول
                            </h1>
                            <p className={"text-on-surface-light dark:text-on-surface-dark text-title-small md:text-title-large mt-2 font-normal"}>
                                {"درباره ی دکتر بهزاد عابدین و وبسایت رسمی ایشان بیشتر بدانید."}
                            </p>
                        </div>
                    </div>

                    <div className={"relative rounded-[24px] bg-white overflow-hidden h-[220px] md:h-[523px]"}>
                        <Image layout={"fill"} objectFit={"contain"} src={"/faq-thumbnail.jpg"}/>
                    </div>
                </div>
                <Space size={"normal"}/>
                <div className={"container mx-auto"}>
                    {faqs.data.map((faq, i) => (<div key={i}
                                                            className={"text-on-surface-light  items-start dark:text-on-surface-dark flex mb-4 max-w-4xl"}>
                        <Typography type={"p"}
                            className={"flex items-center ml-4 justify-center font-medium w-[24px] h-[32px] text-inverse-on-surface-light dark:text-inverse-on-surface-dark bg-inverse-surface-light dark:bg-inverse-surface-dark rounded-[12px]"}>
                            {(i + 1).toString().replace("0","۰").replace("1","۱").replace("2","۲").replace("3","۳").replace("4","۴").replace("5","۵").replace("6","۶").replace("7","۷").replace("8","۸").replace("9","۹")}
                        </Typography>
                        <Typography type={"p"} className={"!text-on-surface-variant-light dark:!text-on-surface-variant-dark font-light w-[calc(100%_-_24px)] py-1"}>
                            <strong className={"mr-1.5 font-bold !text-on-surface-light dark:!text-on-surface-dark block"}>
                                {faq.title}
                            </strong>
                            {faq.content}
                        </Typography>

                    </div>))}
                </div>
            </div>

        </Layout>
    )
}
