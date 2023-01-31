import { capitalizeFirstLetter, toCount } from '@biztobiz/shared/utils/feature'
import { CorePaging } from '@biztobiz/shared/util-sdk'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'

export interface WebUiDataTableFeatureProps {
  data?: any
  path: string
  fields: string[]
  pagination?: CorePaging | null
  setSkip?: (skip: number) => void

  filters?: any
  setFilters?: (filters: any) => void

  filterOptions?: { id: string; name: string; options: { value: string; label: string }[] }[]
}

export function WebUiDataTableFeature(props: WebUiDataTableFeatureProps) {
  function updateFilters(sectionId: string, option: string) {
    const currentFilter = props?.filters?.[sectionId] || []
    console.log(option)
    currentFilter?.includes(option)
      ? currentFilter?.splice(currentFilter?.indexOf(option), 1)
      : currentFilter?.push(option)

    props?.setFilters?.({ ...props?.filters, [sectionId]: currentFilter })
  }

  return props.data ? (
    <>
      <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
        {props?.filterOptions?.map(
          (
            section: {
              name: string
              options: any[]
              id: any
            },
            sectionIdx: number,
          ) => (
            <Popover
              as="div"
              key={section.name}
              id={`desktop-menu-${sectionIdx}`}
              className="relative inline-block text-left"
            >
              <div>
                <Popover.Button className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  <span>{section.name}</span>
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <form className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onChange={() => updateFilters(section.id, option.value)}
                        />
                        <label
                          htmlFor={`filter-${section.id}-${optionIdx}`}
                          className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </form>
                </Popover.Panel>
              </Transition>
            </Popover>
          ),
        )}
      </Popover.Group>
      <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              {props?.fields?.map((field, index) => {
                switch (index) {
                  case 0:
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {capitalizeFirstLetter(props.fields[index])}
                      </th>
                    )
                  case props.fields.length - 1:
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                      >
                        {capitalizeFirstLetter(props.fields[index])}
                      </th>
                    )
                  default:
                    return (
                      <th
                        key={index}
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                      >
                        {capitalizeFirstLetter(props.fields[index])}
                      </th>
                    )
                }
              })}
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {props?.data?.map((item: typeof props.data[0]) => {
              return (
                <tr key={item.id}>
                  {props.fields.map((field, index) => {
                    switch (index) {
                      case 0:
                        return (
                          <td
                            key={index}
                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                          >
                            {typeof item[props.fields[index] as keyof typeof item] === 'object'
                              ? item[props.fields[index] as keyof typeof item]?.name
                              : item[props.fields[index] as keyof typeof item]}
                          </td>
                        )
                      default:
                        return (
                          <td
                            key={index}
                            className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                          >
                            {typeof item[props.fields[index] as keyof typeof item] === 'object'
                              ? item[props.fields[index] as keyof typeof item]?.name
                              : item[props.fields[index] as keyof typeof item]}
                          </td>
                        )
                    }
                  })}

                  <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <Link to={`${props.path}/${item.id}`} className="text-blue-600 hover:text-blue-900">
                      {' '}
                      Edit
                      <span className="sr-only">
                        ,{' '}
                        {typeof item[props.fields[0] as keyof typeof item] === 'object'
                          ? item[props.fields[0] as keyof typeof item]?.name
                          : item[props.fields[0] as keyof typeof item]}
                      </span>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {props?.pagination ? (
        <nav
          className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing{' '}
              <span className="font-medium">
                {props?.pagination?.count === 0 ? 0 : (props?.pagination?.skip ?? 0) + 1}
              </span>{' '}
              to <span className="font-medium">{toCount(props?.pagination)}</span> of{' '}
              <span className="font-medium">{props.pagination.count}</span> results
            </p>
          </div>
          <div className="flex-1 flex justify-between sm:justify-end">
            {(props?.pagination?.skip ?? 0) > 0 ? (
              <div
                onClick={() => {
                  props.setSkip?.((props?.pagination?.skip ?? 0) - (props?.pagination?.take ?? 0))
                }}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Previous
              </div>
            ) : null}
            {(props?.pagination?.skip ?? 0) + (props?.pagination?.take ?? 0) < (props?.pagination?.count ?? 0) ? (
              <div
                onClick={() => {
                  props.setSkip?.((props?.pagination?.skip ?? 0) + (props?.pagination?.take ?? 0))
                }}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Next
              </div>
            ) : null}
          </div>
        </nav>
      ) : (
        <Skeleton />
      )}
    </>
  ) : (
    <Skeleton count={5} />
  )
}
