import Setting from '../Setting.json'
export const OrganizationLD = (items) => {
    let json = {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": `"${Setting.websiteName}"`,
        "url": `"${Setting.websiteURL}"`,
        "logo": `"${Setting.logo}"`,
        "sameAs": [`"${Setting.facebookURL}"`,
            `"${Setting.instagramURL}"`,
            `"${Setting.twitterURL}"`],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": `"${Setting.tel}"`,
            "contactType": "",
            "areaServed": "US",
            "availableLanguage": "en"
        },
    }
    return json

}