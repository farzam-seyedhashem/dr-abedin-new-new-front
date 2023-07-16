import Setting from '../Setting.json'
export const WebPageLD = (items) => {
    let json = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": `"${items.name}"`,
        "description": `"${items.description}"`,
        "publisher": {
            "@type": "ProfilePage",
            "name": "Bumble Auto"
        }
    }
    return json

}