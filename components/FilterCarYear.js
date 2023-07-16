/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import React from "react";

const tabs = [
    { name: 'All', href: '#', current: false },
    { name: '2020 and more', href: '#', current: false },
    { name: '2010 - 2020', href: '#', current: true },
    { name: 'under 2010', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [selected,setSelected] = React.useState(0)
    return (
        <div>
            <div className="block bg-gray-100 w-auto mx-auto py-1 px-1 rounded-lg justify-center">
                <nav className="flex whitespace-nowrap overflow-scroll space-x-4 md:justify-center" aria-label="Tabs">
                    {tabs.map((tab,i) => (
                        <button
                            onClick={()=>setSelected(i)}
                            key={tab.name}
                            // href={tab.href}
                            className={classNames(
                                selected===i ? 'bg-yellow-100 text-yellow-600' : 'text-gray-500 hover:text-gray-700',
                                'px-3 py-2 font-medium text-sm rounded-md'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    )
}
