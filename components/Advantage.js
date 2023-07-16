/* This example requires Tailwind CSS v2.0+ */
import CashIcon from '@heroicons/react/outline/CashIcon'
import CheckCircleIcon from '@heroicons/react/outline/CheckCircleIcon'
import LocationMarkerIcon from '@heroicons/react/outline/LocationMarkerIcon'
import Typography from "./assets/Typography";
import Icon from "@/components/assets/Icon";

export default function Example() {
    const features = [
        {
            name: 'Extensive Selection',
            description: 'Bumble Auto team offer a wide range of vehicles to cater to diverse preferences and budgets. Whether you\'re looking for a compact car, a spacious SUV, or a powerful truck, we have a diverse inventory to choose from.',
            icon: CashIcon,
        },
        {
            name: 'Competitive Prices',
            description: "Bumble Auto team understand the importance of affordability. That's why we strive to provide competitive prices on all our vehicles. Our goal is to ensure you get the best value for your money.",
            icon: ({className})=>{return(<Icon type={"outline"} className={className}>
                price_check
            </Icon>)},
        },
        {
            name: 'Transparent and Trustworthy',
            description: 'Bumble Auto team prioritize transparency in our dealings. You can trust us to provide accurate information about our vehicles, including their condition, history, and pricing. We believe in building long-term relationships with our customers based on trust and integrity.',
            icon: ({className})=>{return(<Icon type={"outline"} className={className}>
                verified
            </Icon>)},
        },
        {
            name: 'Customer Satisfaction',
            description: 'Bumble Auto team is dedicated to ensuring your satisfaction. We take the time to understand your needs and guide you towards the right vehicle that meets your requirements. Your happiness and satisfaction are our top priorities.',
            icon: CheckCircleIcon,
        },
        {
            name: 'Financing Options',
            description: 'Bumble Auto team offer flexible financing options to help make your car purchase more accessible and manageable. Our finance experts can assist you in finding the best financing solution tailored to your financial situation.',
            icon: CheckCircleIcon,
        },
        {
            name: 'Exceptional Service',
            description: 'Bumble Auto team offer flexible financing options to help make your car purchase more accessible and manageable. Our finance experts can assist you in finding the best financing solution tailored to your financial situation.',
            icon: CheckCircleIcon,
        },

    ]
    const stats = [
        {name: 'VEHICLES IN STOCK', stat: '56'},
        {name: 'DEALER REVIEWS', stat: '+1000'},
        {name: 'HAPPY CUSTOMERS', stat: '+1000' },
        // {name: 'AWARDS', stat: '356'},
    ]
    return (
        <>

            <div className="px-4 md:px-6 mx-auto">

                <Typography type={"h2"} className="text-on-background-light dark:text-on-background-dark px-6">
                    OUR COMPETITIVE ADVANTAGES
                </Typography>
                <Typography type={"h3"} className="mb-[24px] px-6 text-on-surface-variant-light dark:text-on-surface-variant-dark  mt-2">
                    Why choose us to buy and sell cars
                </Typography>

                <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                    {features.map((feature, i) => (
                        <div key={i}
                             className="relative group flex rounded-[32px] hover:rounded-2xl transition-all duration-300 ease-in-out dark:hover:bg-surface-container-highest-dark hover:bg-surface-container-highest-light bg-surface-container-light dark:bg-surface-container-dark py-4 px-8">

                            <dt>
                                <h6 className="mt-4 text-primary-light dark:text-primary-dark mb-2 text-2xl leading-[40px] font-medium">{feature.name}</h6>
                                <div className="mb-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">

                                    {feature.description}

                                </div>
                            </dt>

                            <div
                                className="h-12 w-12 mt-4 mr-4 flex justify-center items-center group-hover:text-secondary-light group-hover:dark:text-secondary-dark text-surface-variant-light dark:text-surface-variant-dark">
                                <svg width="40px" height="40px" viewBox="0 0 40 40"
                                     fill="none" xmlns="http://www.w3.org/2000/svg" className="clover">
                                    <path
                                        d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z"
                                        fill="currentColor"></path>
                                </svg>
                                <feature.icon
                                    className="text-on-surface-variant-light dark:text-on-surface-variant-dark group-hover:text-on-secondary-light group-hover:dark:text-on-secondary-dark w-6 h-6 absolute group-hover:scale-110 transition duration-300"
                                    aria-hidden="true"/>
                            </div>

                        </div>
                    ))}
                </dl>
            </div>

            <div className="py-10 mx-auto px-4 md:px-6">
                <dl className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {stats.map((item, i) => (
                        <div key={i} className="px-10 py-6 rounded-[32px] transition-all duration-300 hover:rounded-[16px] bg-surface-container-light dark:bg-surface-container-dark dark:hover:bg-surface-container-highest-dark hover:bg-surface-container-highest-light">
                            <h6 className="text-on-surface-light dark:text-on-surface-dark py-4 font-medium">{item.name}</h6>
                            <p className="text-right text-[32px] font-semibold py-4 text-on-surface-variant-light dark:text-on-surface-variant-dark">{item.stat}</p>
                        </div>
                    ))}
                </dl>
            </div>
        </>
    )
}
