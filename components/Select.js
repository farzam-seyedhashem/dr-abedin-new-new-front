/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example({filters, value, id, handler}) {

    const [selected, setSelected] = useState()
    const [filterItems, setFilterItems] = useState([id])
    useEffect(() => {
        // filters.unshift(id)
        // const filter = filterItems
        const sortFilters = filters.filter(item=>item!=="").sort()
        setFilterItems([...filterItems,...sortFilters])
        // filterItems.unshift(id)
        setSelected(value ? value : id)
    }, [])
    const handleSelected = (value) => {
        setSelected(value)
        if (value === id) {
            handler(id, null)
        } else {
            handler(id, value)
        }
    }

    return (
        <Listbox value={selected} onChange={handleSelected}>
            {({open}) => (
                <>
                    {/*<Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label>*/}
                    <div className="mt-1 relative">
                        <Listbox.Button
                            className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm">
                            <span className="block truncate">{selected===id ? <div style={{height:20}}/> : selected}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                static
                                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                            >
                                {selected && filterItems.map((person) => (
                                    <Listbox.Option
                                        key={person.id}
                                        className={({active}) =>
                                            classNames(
                                                active ? 'text-white bg-primary' : 'text-gray-900',
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={person}
                                    >
                                        {({selected, active}) => (
                                            <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person === id ? <div style={{height:20}}/> : person}
                        </span>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active ? 'text-white' : 'text-primary',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
