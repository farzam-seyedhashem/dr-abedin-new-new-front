/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
    return (
        <div >
            <dl className="divide-gray-200 border-t border-b border-black border-opacity-10 py-3">

                    <Disclosure as="div" key={props.title} className="">
                        {({ open }) => (
                            <>
                                <dt className="text-lg">
                                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                                        <span className="font-medium text-gray-900">{props.title}</span>
                                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                          />
                        </span>
                                    </Disclosure.Button>
                                </dt>
                                <Disclosure.Panel as="dd" className="mt-2 pr-2">
                                   {props.children}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

            </dl>
        </div>
    )
}
