import Setting from '../Setting.json'
export const VideoLD = (items) => {
    let json = {
        "@context": "http://schema.org",
        "@type": "VideoObject",
        "name": `"${items.name}"`,
        "description": `"${items.description}"`,
        "thumbnailUrl": `"${items.tURL}"`,
        "uploadDate": `"${items.UploadData}"`,
        "duration": `"${items.duration}"`,
        "contentUrl": `"${items.contentURL}"`,
        // "name": `"${Setting.websiteName}"`,
        // "url": `"${Setting.websiteURL}"`,
        // "logo": `"${Setting.logo}"`,
        // "sameAs": [`"${Setting.facebookURL}"`,
        //     `"${Setting.instagramURL}"`,
        //     `"${Setting.twitterURL}"`],
        // "contactPoint": {
        //     "@type": "ContactPoint",
        //     "telephone": `"${Setting.tel}"`,
        //     "contactType": "",
        //     "areaServed": "US",
        //     "availableLanguage": "en"
        // },
    }
    return json

}