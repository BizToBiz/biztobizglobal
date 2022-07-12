import { WebUiFormField } from '@biztobiz/web-ui/form'

export const userFields: WebUiFormField[] = [
  WebUiFormField.datePicker('establishedDate', { label: 'Date Established' }),
  WebUiFormField.input('name', { label: 'Member Name', required: true }),
  WebUiFormField.textArea('description', { label: 'Description' }),
  WebUiFormField.email('avatarEmail', { label: 'Avatar Email' }),
  WebUiFormField.url('avatarUrl', { label: 'Avatar URL' }),
  WebUiFormField.input('latitude', { label: 'Latitude' }),
  WebUiFormField.input('longitude', { label: 'Longitude' }),
  WebUiFormField.input('city', { label: 'City' }),
  WebUiFormField.input('state', { label: 'State' }),
  WebUiFormField.url('facebook', { label: 'Facebook URL' }),
]
