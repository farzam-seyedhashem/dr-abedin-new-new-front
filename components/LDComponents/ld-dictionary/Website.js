import Setting from '../Setting.json'
export const WebsiteLD = (items) => {
    let json = {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": `${Setting.websiteName}`,
        "url": `${Setting.websiteURL}`,
        "sameAs": [`${Setting.facebookURL}`,
            `${Setting.instagramURL}`,
            `${Setting.twitterURL}`],
        "potentialAction": {
            "@type": "SearchAction",
            "target": "http://example.com/pages/search_results?q={search_term}",
            "query-input": "required name=search_term"
        }
    }
    return json

}