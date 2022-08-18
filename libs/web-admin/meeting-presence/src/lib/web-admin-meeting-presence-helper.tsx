import { WebUiFormField } from '@biztobiz/web-ui/form'
import React from 'react'

// TODO: Create custom filter functions
// function regionFilterFunction(regions: Region[]) {
//   return regions?.filter((region) => !region.MeetingPresence?.id)
// }

export const meetingPresenceFields: WebUiFormField[] = [WebUiFormField.input('name', { label: 'name' })]
