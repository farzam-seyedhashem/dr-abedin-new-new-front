/* This example requires Tailwind CSS v2.0+ */
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {useEffect, useMemo, useState} from "react";

export default function Pagination({totalCount,currentPage,inventories,value,handler,id}) {
    let [pages,setPages] = useState()
    let [pageItems,setPageItems] = useState(inventories)
    let selectedPage = parseInt(value)
    useMemo(()=>{
        let p = []
        for (let i = 1; i <= pageItems.lastPageIndex ;i++){
            p.push(i)
        }
        setPages(p)
    },[inventories.lastPageIndex])


    return (
        <div className="bg-transparent px-4 py-3 flex items-center justify-between border-t border-on-surface-variant-light sm:px-6">
            <div className="flex-1 flex justify-between md:hidden">
                {selectedPage!==1?<a
                    rel="prev"
                    href={handler(selectedPage - 1)}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50"
                >
                    Previous
                </a>:<div></div>}
                {pageItems && pageItems.lastPageIndex && pageItems.lastPageIndex!==selectedPage ? <a
                    href={handler(selectedPage + 1)}
                    rel="next"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50"
                >
                    Next
                </a>:<div></div>}
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <div>
                    {/*<p className="text-sm text-gray-700">*/}
                    {/*    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}*/}
                    {/*    <span className="font-medium">97</span> results*/}
                    {/*</p>*/}
                </div>
                <div>
                    <nav className="relative z-0 flex items-center rounded-lg shadow-sm " aria-label="Pagination">
                        {pages&&pages.map((item,i)=> item === selectedPage ?<a key={i}
                            aria-current="page"
                            className="ml-2 z-10 bg-surface-container-highest-light dark:bg-surface-container-highest-dark text-on-secondary-container-light dark:text-on-secondary-container-dark px-6 h-[40px] rounded-lg  flex items-center text-sm font-medium"
                        >
                            {item}
                        </a> : (item !== 0 && item === selectedPage - 1) ? <a key={i} rel="prev" href={handler(item)}
                            className="ml-2  bg-surface-container-low-light dark:bg-surface-container-low-dark text-on-surface-variant-light dark:text-on-surface-variant-dark px-6 h-[38px] rounded-lg  flex items-center text-sm font-medium"
                        >
                            {item}
                        </a>:(item !== pages.length && item === selectedPage + 1)?<a key={i} rel="next" href={handler(item)}
                                                                                     className="ml-2  bg-surface-container-low-light dark:bg-surface-container-low-dark text-on-surface-variant-light dark:text-on-surface-variant-dark px-6 h-[38px] rounded-lg  flex items-center text-sm font-medium"
                        >
                            {item}
                        </a>:<a  key={i} href={handler(item)}
                                className="ml-2  bg-surface-container-low-light dark:bg-surface-container-low-dark text-on-surface-variant-light dark:text-on-surface-variant-dark px-6 h-[38px] rounded-lg  flex items-center text-sm font-medium"
                        >
                            {item}
                        </a>)}
                    </nav>
                </div>
            </div>
        </div>
    )
}
