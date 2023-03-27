import {
  AdminCreateMeetingPresenceInput,
  AdminUpdateMeetingPresenceInput,
  AdminUsersDocument,
  MeetingAttendance,
  MeetingPresence,
  useAdminCreateMeetingPresenceMutation,
  useAdminMeetingQuery,
  useAdminUpdateMeetingPresenceMutation,
} from '@biztobiz/shared/util-sdk'
import { format } from 'date-fns'
import React from 'react'
import { useParams } from 'react-router'
import { WebUiFormField } from '@biztobiz/web-ui/form'
import { Link } from 'react-router-dom'

export const WebAdminMeetingAttendance = () => {
  const { id } = useParams()
  const [createMeetingPresence] = useAdminCreateMeetingPresenceMutation()
  const [updateMeetingPresence] = useAdminUpdateMeetingPresenceMutation()
  const { data, error, loading, refetch } = useAdminMeetingQuery({
    variables: { meetingId: id },
  })

  if (error) {
    return <div>{error.message}</div>
  }

  const createPresence = async (input: AdminCreateMeetingPresenceInput) => {
    try {
      await createMeetingPresence({ variables: { input } })
      console.log(`Created Presence`)
      await refetch()
    } catch (e) {
      console.error(e.message)
    }
  }
  const updatePresence = async (meetingPresenceId: string, input: AdminUpdateMeetingPresenceInput) => {
    try {
      await updateMeetingPresence({ variables: { meetingPresenceId, input } })
      console.log(`Updated Presence`)
      await refetch()
    } catch (e) {
      console.error(e.message)
    }
  }

  const submit = (input: AdminCreateMeetingPresenceInput) => createPresence(input)
  const fieldGroup = {
    fields: [
      WebUiFormField.relationSelect('memberId', { label: 'Member', document: AdminUsersDocument, dataType: 'users' }),
      WebUiFormField.enumSelect('attendance', { label: 'Attendance', required: true, enum: MeetingAttendance }),
    ],
  }

  return (
    <div>
      {loading ? (
        <div />
      ) : (
        <div>
          <h1>
            Attendance for {format(new Date(data?.meeting?.date), 'EEEE, LLL do, yyyy')} Meeting at{' '}
            {format(new Date(data?.meeting?.date), 'h:mm a')}
          </h1>
          s
          <div>
            <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      key={'name'}
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name
                    </th>
                    )
                    <th
                      key={'stuff'}
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                      Stuff
                    </th>
                    {/*  )*/}
                    {/*default:*/}
                    {/*  return (*/}
                    {/*    <th*/}
                    {/*      key={index}*/}
                    {/*      scope="col"*/}
                    {/*      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"*/}
                    {/*    >*/}
                    {/*      {capitalizeFirstLetter(props.fields[index])}*/}
                    {/*    </th>*/}
                    {/*  )*/}
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data?.meeting?.presence?.map((item: MeetingPresence) => {
                    return (
                      <tr key={item.id}>
                        <td
                          key={item.id}
                          className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                        >
                          {item?.member?.name}
                        </td>

                        <td
                          key={`${item.id}-buttons`}
                          className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
                        >
                          {Object.keys(MeetingAttendance)
                            .map((id) => ({ id, value: id }))
                            .map((option) => (
                              <button
                                className={item.attendance === option.id ? 'bg-green-500' : 'bg-white'}
                                key={option.id}
                                onClick={() => updatePresence(item.id, { attendance: option.id as MeetingAttendance })}
                              >
                                {option.value}
                              </button>
                            ))}
                        </td>

                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link to={`/${item.id}`} className="text-blue-600 hover:text-blue-900">
                            {' '}
                            Edit
                            <span className="sr-only">,</span>
                          </Link>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/*<WebUiForm onFinish={submit} groups={[fieldGroup]} button={{ text: 'Add' }} />*/}
            {/*<WebUiDataCard data={meeting} />*/}
          </div>
        </div>
      )}
      {/*<WebUiDataCard data={data} />*/}
    </div>
  )
}
