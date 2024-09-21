import React from "react";
import {API} from "../config";
// const globby = require('globby')
// import {globby} from 'globby'
function addPage(route, lastMod, changeFreq, priority) {
    // const path = page.replace('pages', '').replace('.js', '').replace('.mdx', '')
    // const route = path === '/index' ? '' : path
    const baseUrl = {
        development: "http://localhost:3000", production: "https://dr-abedin.com",
    }[process.env.NODE_ENV];
    return `  <url>
    <loc>${`${baseUrl}${route}`}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

export const getServerSideProps = async ({res, locale}) => {
    const getPost = await fetch(API + '/blog?per_page=' + 1 + '&page=' + 1 + '&lang=' + locale, {
        method: "GET", headers: {
            // update with your user-agent
            "User-Agent": "*", Accept: "application/json; charset=UTF-8",
        },
    });
    const posts = await getPost.json()
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml">
           ${addPage('', new Date().toISOString(), 'always', '1.0')}
     ${addPage('/blog', posts?.data[0]?.updatedAt, 'weekly', '0.9')}
     ${addPage('/contact-us', "2024-09-21T11:43:28.235Z", 'never', '0.5')}
     ${addPage('/about-us', "2024-09-21T11:43:28.235Z", 'never', '0.5')}
     ${addPage('/reserve', "2024-09-21T11:43:28.235Z", 'never', '0.5')}
          ${addPage('/services', "2024-09-21T11:43:28.235Z", 'never', '0.5')}
     ${addPage('/faq', "2024-09-21T11:43:28.235Z", 'yearly', '0.6')}
 
 </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap.replaceAll(",", ""));
    res.end();

    return {
        props: {},
    };
};
const Sitemap = () => {
};

export default Sitemap;
