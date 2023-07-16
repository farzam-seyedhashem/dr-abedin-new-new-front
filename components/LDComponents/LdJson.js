import Script from "next/script";
import {WebsiteLD} from "./ld-dictionary/Website";
import {WebPageLD} from "./ld-dictionary/WebPage";
import {VideoLD} from "./ld-dictionary/Video";
import {AutoDealerLD} from "./ld-dictionary/AutoDealer";
import {OrganizationLD} from "./ld-dictionary/Organization";
import {useEffect, useState} from "react";
export default function LdJson({type, items}){
let jsonDatas = {}
    switch (type){
        case "website":
            jsonDatas = WebsiteLD(items)
            break;
        case "webpage":
            jsonDatas = WebPageLD(items)
            break;
        case "video":
            jsonDatas = VideoLD(items)
            break;
        case "auto-dealer":
            jsonDatas = AutoDealerLD(items)
            break;
        case "organization":
            jsonDatas = OrganizationLD(items)
            break;
    }


    return(
        <Script
            id={type}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonDatas) }}
        />
    )


}