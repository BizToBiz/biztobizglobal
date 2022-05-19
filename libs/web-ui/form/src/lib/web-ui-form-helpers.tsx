import React from 'react'

// import { ReactNode } from 'react'
// import { User } from '@biztobiz/shared/util-sdk'
//
// export enum FieldType {
//   checkbox = 'checkbox',
//   divider = 'divider',
//   input = 'input',
//   select = 'select',
//   dateRange = 'dateRange',
//   datePicker = 'datePicker',
//   timePicker = 'timePicker',
//   number = 'number',number
//   textarea = 'textarea',
//   password = 'password',
//   phone = 'phone',
//   email = 'email',
//   memberSelect = 'memberSelect',
//   memberStatusSelect = 'memberStatusSelect',
//   companySelect = 'companySelect',
//   terminationReasonSelect = 'terminationReasonSelect',
//   content = 'content',
//   stateSelect = 'stateSelect',
//   chapterStatusSelect = 'chapterStatusSelect',
//   chapterSelect = 'chapterSelect',
//   toggle = 'toggle',
//   numberSelect = 'numberSelect',
//   hiddenField = 'hiddenField',
// }
//
// export interface FieldDefinitions {
//   fieldType?: FieldType
//   name?: string
//   label?: string
//   rules?: unknown[]
//   prefix?: ReactNode
//   placeholder?: string
//   autocomplete?: string
//   dividerOrientation?: 'left' | 'right' | 'center'
//   dividerText?: string
//   required?: boolean
//   options?: { id?: string; value?: string }[]
//   mode?: 'multiple' | 'tags'
//   min?: number
//   max?: number
//   step?: number
//   onChange?: (val: unknown) => unknown
//   rows?: number
//   content?: ReactNode
//   chapters?: Record<string, unknown>[]
//   disabled?: boolean
//   loading?: boolean
//   defaultMember?: User
//   // defaultCompany?: Company
// }
//
// export function inputField(name: string, { label, required, disabled }: FieldDefinitions): FieldDefinitions {
//   return {
//     name,
//     label,
//     required,
//     disabled,
//     fieldType: FieldType.input,
//   }
// }
//
// export const hiddenField = (name: string, { label, required }: FieldDefinitions): FieldDefinitions => ({
//   name,
//   label,
//   required,
//   fieldType: FieldType.hiddenField,
// })
//
// export const displayContent = (content: ReactNode) => ({
//   content,
//   fieldType: FieldType.content,
// })
//
// export const phoneField = (name: string, { label, required }: FieldDefinitions): FieldDefinitions => ({
//   name,
//   label,
//   required,
//   fieldType: FieldType.phone,
// })
//
// export const emailField = (name: string, { label, required }: FieldDefinitions): FieldDefinitions => ({
//   name,
//   label,
//   required,
//   autocomplete: 'email',
//   fieldType: FieldType.email,
// })
//
// export const passwordField = (name: string, { label, required }: FieldDefinitions): FieldDefinitions => ({
//   name,
//   label,
//   required,
//   autocomplete: 'current-password',
//   fieldType: FieldType.password,
// })
//
// export const textArea = (name: string, { label, required, rows }: FieldDefinitions): FieldDefinitions => ({
//   name,
//   label,
//   required,
//   rows,
//   fieldType: FieldType.textarea,
// })
//
// export const inputNumber = (name: string, { label, required, step }: FieldDefinitions): FieldDefinitions => ({
//   name,
//   label,
//   required,
//   step,
//   fieldType: FieldType.number,
// })
//
// export const checkboxField = (name: string, { label, required }: FieldDefinitions): FieldDefinitions => ({
//   name,
//   label,
//   required,
//   fieldType: FieldType.checkbox,
// })
//
// export const dateRange = (name: string, { label, required }: FieldDefinitions): FieldDefinitions => ({
//   name,
//   label,
//   required,
//   fieldType: FieldType.dateRange,
// })
//
// export const datePicker = (name: string, { label, required }: FieldDefinitions): FieldDefinitions => ({
//   name,
//   label,
//   required,
//   fieldType: FieldType.datePicker,
// })
//
// export const timePicker = (name: string, { label, required }: FieldDefinitions): FieldDefinitions => ({
//   name,
//   label,
//   required,
//   fieldType: FieldType.timePicker,
// })
//
// export const selectField = (
//   name: string,
//   { label, required, options, placeholder, mode, onChange }: FieldDefinitions,
// ) => ({
//   name,
//   label,
//   required,
//   options,
//   placeholder,
//   mode,
//   onChange,
//   fieldType: FieldType.select,
// })
//
// export const memberSelectField = (
//   name: string,
//   { label, required, placeholder, mode, onChange }: FieldDefinitions,
//   defaultMember?: User,
// ) => ({
//   name,
//   label,
//   required,
//   placeholder,
//   mode,
//   onChange,
//   defaultMember,
//   fieldType: FieldType.memberSelect,
// })
//
// export const memberStatusSelectField = (
//   name: string,
//   { label, required, placeholder, mode, onChange }: FieldDefinitions,
// ) => ({
//   name,
//   label,
//   required,
//   placeholder,
//   mode,
//   onChange,
//   fieldType: FieldType.memberStatusSelect,
// })
//
// export const companySelectField = (
//   name: string,
//   { label, required, placeholder, mode, onChange }: FieldDefinitions,
//   defaultCompany?: Company,
// ) => ({
//   name,
//   label,
//   required,
//   placeholder,
//   mode,
//   onChange,
//   defaultCompany,
//   fieldType: FieldType.companySelect,
// })
//
// export const stateSelectField = (name: string, { label, required, placeholder, mode, onChange }: FieldDefinitions) => ({
//   name,
//   label,
//   required,
//   placeholder,
//   mode,
//   onChange,
//   fieldType: FieldType.stateSelect,
// })
//
// export const numberSelectField = (
//   name: string,
//   { label, required, placeholder, mode, onChange }: FieldDefinitions,
// ) => ({
//   name,
//   label,
//   required,
//   placeholder,
//   mode,
//   onChange,
//   fieldType: FieldType.numberSelect,
// })
//
// export const toggleField = (name: string, { label, disabled, loading, onChange }: FieldDefinitions) => ({
//   name,
//   label,
//   disabled,
//   loading,
//   onChange,
//   fieldType: FieldType.toggle,
// })
//
// export const meetingTimeOptions = [
//   '6:00 AM',
//   '6:15 AM',
//   '6:30 AM',
//   '6:45 AM',
//   '7:00 AM',
//   '7:15 AM',
//   '7:30 AM',
//   '7:45 AM',
//   '8:00 AM',
//   '8:15 AM',
//   '8:30 AM',
//   '8:45 AM',
//   '9:00 AM',
//   '9:15 AM',
//   '9:30 AM',
//   '9:45 AM',
//   '10:00 AM',
//   '10:15 AM',
//   '10:30 AM',
//   '10:45 AM',
//   '11:00 AM',
//   '11:15 AM',
//   '11:30 AM',
//   '11:45 AM',
//   '12:00 PM',
//   '12:15 PM',
//   '12:30 PM',
//   '12:45 PM',
//   '1:00 PM',
//   '1:15 PM',
//   '1:30 PM',
//   '1:45 PM',
//   '2:00 PM',
//   '2:15 PM',
//   '2:30 PM',
//   '2:45 PM',
//   '3:00 PM',
//   '3:15 PM',
//   '3:30 PM',
//   '3:45 PM',
//   '4:00 PM',
//   '4:15 PM',
//   '4:30 PM',
//   '4:45 PM',
//   '5:00 PM',
//   '5:15 PM',
//   '5:30 PM',
//   '5:45 PM',
//   '6:00 PM',
//   '6:15 PM',
//   '6:30 PM',
//   '6:45 PM',
// ].map((time) => ({ value: time, id: time }))
