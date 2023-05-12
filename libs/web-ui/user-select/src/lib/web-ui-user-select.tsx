import { Dispatch, SetStateAction, useState } from 'react'
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Combobox } from '@headlessui/react'
import { User } from '@biztobiz/shared/util-sdk'
import { DocumentNode, TypedDocumentNode, useQuery } from '@apollo/client'

// TODO: Extract this to a utility file
function classNames(...classes: (string | undefined | null | false | 0 | '')[]) {
  return classes.filter(Boolean).join(' ')
}

interface WebUiUserSelectProps {
  selectedPerson: User | null
  setSelectedPerson: Dispatch<SetStateAction<User | null>>
  document: DocumentNode | TypedDocumentNode
  label: string
}
export function WebUiUserSelect(props: WebUiUserSelectProps) {
  const [query, setQuery] = useState('')
  const { data, loading } = useQuery(props.document, { variables: { input: { take: 20, search: query } } })

  return (
    <Combobox as="div" value={props?.selectedPerson} onChange={props?.setSelectedPerson}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">{props.label}</Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: User) => person?.name ?? ''}
        />

        {props?.selectedPerson && (
          <button
            className="absolute inset-y-0 right-6 flex items-center rounded-r-md px-2 focus:outline-none"
            onClick={() => {
              setQuery('')
              props?.setSelectedPerson(null)
            }}
          >
            <span className="sr-only">Clear</span>
            <XMarkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
        )}

        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </>
          )}
        </Combobox.Button>

        {(data?.['users']?.length ?? 0) > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data?.['users']?.map((person: User) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <img src={person?.avatarUrl ?? ''} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                      <span className={classNames('ml-3 truncate', selected && 'font-semibold')}>{person.name}</span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600',
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
