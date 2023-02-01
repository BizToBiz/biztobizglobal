import React, { Fragment, useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom, searchAtom } from '@biztobiz/web/global/data-access'
import { WebUiDataTableFeature } from '@biztobiz/web-ui/data-table/feature'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'
import { useAdminChapterPaginationQuery, useAdminChaptersQuery } from '@biztobiz/shared/util-sdk'
import { RESET } from 'jotai/utils'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

interface WebAdminChapterListProps {
  userId?: string
  chapterId?: string
  referralId?: string
}

export function WebAdminChapterList(props: WebAdminChapterListProps) {
  const [, setCurrentPath] = useAtom(currentPathAtom)
  const [search] = useAtom(searchAtom)
  const [isDev] = useAtom(isDevAtom)
  const [skip, setSkip] = useState(0)
  const [filters, setFilters] = useState([])

  console.log(filters?.['status'])

  const variables = {
    input: {
      take: 20,
      userId: props?.userId,
      chapterId: props?.chapterId,
      referralId: props?.referralId,
      ...filters,
      skip,
      search,
    },
  }

  const {
    data: chapters,
    refetch,
    loading,
  } = useAdminChaptersQuery({
    variables,
  })

  const { data: pagination, refetch: refetchPagination } = useAdminChapterPaginationQuery({
    variables,
  })

  const filterOptions = [
    {
      id: 'status',
      name: 'Status',
      options: [
        { value: 'Active', label: 'Active' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'Shutdown', label: 'Shutdown' },
      ],
    },
  ]

  useLayoutEffect(() => {
    setCurrentPath({
      path: '/admin/chapters',
      name: 'Chapters',
      description: 'View and manage all chapters in your organization',
      showSearch: true,
      actionText: 'Add Chapter',
      actionLink: '/admin/chapter/new',
    })

    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  function updateFilters(sectionId: string, option: string) {
    const currentFilter = filters?.[sectionId] || []
    currentFilter?.includes(option)
      ? currentFilter?.splice(currentFilter?.indexOf(option), 1)
      : currentFilter?.push(option)

    setFilters?.({ ...filters, [sectionId]: currentFilter })
    refetch(variables)
    refetchPagination(variables)
  }

  return (
    <>
      <Popover.Group className="hidden sm:flex sm:items-baseline sm:space-x-8">
        {filterOptions?.map(
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
                    {section.options.map((option, optionIdx) => {
                      return (
                        <div key={option.value} className="flex items-center">
                          <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}`}
                            checked={filters?.[section.id]?.includes(option.value)}
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
                      )
                    })}
                  </form>
                </Popover.Panel>
              </Transition>
            </Popover>
          ),
        )}
      </Popover.Group>
      <WebUiDataTableFeature
        data={chapters?.chapters}
        loading={loading}
        path={'/admin/chapter'}
        fields={['name', 'status']}
        pagination={pagination?.counters}
        setSkip={setSkip}
        filters={filters}
        filterOptions={filterOptions}
        setFilters={setFilters}
      />
      {isDev && chapters?.chapters ? <WebUiDevDataFeature data={chapters} /> : null}
    </>
  )
}
