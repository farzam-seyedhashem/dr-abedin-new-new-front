import Image from 'next/legacy/image'
// import {API} from "../config";

export const convertContentType = (item, index) => {
    // console.log(item)
    const data = item.data
    switch (item.type) {
        case "header":
            const Htag = `h${data.level}`
            return <Htag key={index} id={"h-" + index}
                         className={`${data.level===2?"text-headline-medium":"text-headline-small"} -mt-8 pt-24 mb-4 font-black text-on-background-light dark:text-on-background-dark`}
                         dangerouslySetInnerHTML={{__html: item.data.text}}/>
            break;
        case "paragraph":
            return item.data.text === "<br className='text-body-large' key={index}>wlknfl</br>" ?
                <div key={index} className={"mb-4 text-body-large text-on-surface-light dark:text-on-surface-dark"}/> :
                <p key={index} className="text-on-surface-variant-light dark:text-on-surface-variant-dark max-w-3xl text-body-large mb-4"
                   dangerouslySetInnerHTML={{__html: item.data.text}}></p>
            break;
        case "list":
            // const UlTag = data.style==='unordered'?`ol`:`ul`
            return <ul key={index}
                className=" ml-6 list-blog max-w-3xl pr-4 text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-large mb-4">
                {data.items.map((item, i) =>
                    <li key={i} dangerouslySetInnerHTML={{__html: item}}></li>
                )}
            </ul>
            break;
        case "table":

            return (
                <div key={index} className="flex flex-col mb-10">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                    <tr>
                                        {data.content[0].map((item, i) => <th key={i}
                                                                              scope="col"
                                                                              className="px-6 py-3 font-medium text-on-surface-light dark:text-on-surface-dark dark:text-on-surface-dark text-opacity-90 uppercase tracking-wider"
                                        >
                                            {item}
                                        </th>)}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.content.map((item, i) => (
                                        i !== 0 && <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            {item.map((item, i) => <td key={i}
                                                                       className="px-6 py-4 whitespace-nowrap text-sm font-medium text-on-surface-light dark:text-on-surface-dark dark:text-on-surface-dark">{item}</td>)}
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )
            break;
        // case "image":
        //     return <div
        //         className={`w-full mb-10 rounded-lg overflow-hidden ${data.withBackground ? "bg-gray-50" : ""} ${data.withBorder ? "border border-black border-opacity-10" : ""} ${data.stretched ? "w-full h-auto relative" : "w-fit-content"}`}>
        //         <Image width={data.stretched ? 1920 : 1920} height={data.stretched ? 1080 : 1080}
        //                objectFit={data.stretched ? "cover" : 'cover'}
        //                layout={data.stretched ? 'responsive' : 'responsive'} src={item.data.file.url}/></div>
        //     break;
    }
}

export const readContent = (content) => {
    let html = ``;
    content.blocks.map((item, i) => {
        html = convertContentType(item)


    })
    return html
    // return (html)


}
