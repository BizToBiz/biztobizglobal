import { Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '@biztobiz/shared/utils/feature'
import { CorePaging } from '@biztobiz/shared/util-sdk'

export interface WebUiDataTableFeatureProps {
  data?: any
  path: string
  fields: string[]
  pagination?: CorePaging | null
  setSkip?: (skip: number) => void
}

export function WebUiDataTableFeature(props: WebUiDataTableFeatureProps) {
  function toCount() {
    const p = props?.pagination
    if ((p?.take ?? 0) + (p?.skip ?? 0) > (p?.count ?? 0)) return p?.count
    return (p?.take ?? 0) + (p?.skip ?? 0)
  }

  return (
    <>
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
            {props?.data?.map((item: typeof props.data[0]) => (
              <tr key={item.id}>
                {props.fields.map((field, index) => {
                  switch (index) {
                    case 0:
                      return (
                        <td
                          key={index}
                          className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                        >
                          {item[props.fields[index] as keyof typeof item]}
                        </td>
                      )
                    default:
                      return (
                        <td
                          key={index}
                          className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                        >
                          {item[props.fields[index] as keyof typeof item]}
                        </td>
                      )
                  }
                })}

                <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <Link to={`${props.path}/${item.id}`} className="text-blue-600 hover:text-blue-900">
                    Edit<span className="sr-only">, {item[props.fields[0] as keyof typeof item]}</span>
                  </Link>
                </td>
              </tr>
            ))}
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
              to <span className="font-medium">{toCount()}</span> of{' '}
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
      ) : null}
    </>
  )
}
