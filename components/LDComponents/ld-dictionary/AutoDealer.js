import Setting from '../Setting.json'

export const AutoDealerLD = (items) => {
    return {
        "@context": "http://schema.org",
        "@type": "AutoDealer",
        "name": `"${Setting.websiteName}"`,
        "@id": "Bumble_Auto",
        "url": `"${Setting.websiteURL}"`,
        "image": `"${Setting.logo}"`,
        "telephone": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "",
            "postalCode": "",
            "addressCountry": "US"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Monday"
            ],
            "opens": "10:00",
            "closes": "19:00"
        }
    }

}