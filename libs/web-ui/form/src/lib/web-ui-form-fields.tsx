import React, { ReactNode } from 'react'
import { DocumentNode, TypedDocumentNode } from '@apollo/client'
import { OptionsOrGroups } from 'react-select'

export enum WebUiFormFieldType {
  Email = 'Email',
  Phone = 'Phone',
  Input = 'Input',
  Password = 'Password',
  CheckBox = 'CheckBox',
  DatePicker = 'DatePicker',
  TextArea = 'TextArea',
  Url = 'Url',
  Select = 'Select',
  EnumSelect = 'EnumSelect',
  RelationSelect = 'RelationSelect',
  Switch = 'Switch',
  Number = 'Number',
}

export interface WebUiFormFieldOptions {
  label?: string
  placeholder?: string
  required?: true
  customWrapper?: (children: ReactNode) => JSX.Element
  defaultValue?: string | number | readonly string[] | undefined
  defaultChecked?: boolean
  enum?: { [s: string]: unknown } | ArrayLike<unknown>
  selectOptions?: { label: string; value: string }[]
  document?: DocumentNode | TypedDocumentNode
  dataType?: string
  selectOptionsFunction?: (data: any[]) => OptionsOrGroups<any, any>[]
  multiselect?: boolean
  filter?: (data: any) => void
}

export interface WebUiFormField {
  key: string
  type: WebUiFormFieldType
  options: WebUiFormFieldOptions
}

export class WebUiFormField {
  static field(type: WebUiFormFieldType, key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return { type, key, options }
  }

  static email(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.Email, key, options)
  }

  static phone(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.Phone, key, options)
  }

  static url(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.Url, key, options)
  }

  static input(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.Input, key, options)
  }

  static textArea(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.TextArea, key, options)
  }

  static password(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.Password, key, options)
  }

  static checkbox(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.CheckBox, key, options)
  }

  static datePicker(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.DatePicker, key, options)
  }

  static select(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.Select, key, options)
  }

  static enumSelect(key: string, options: WebUiFormFieldOptions = { enum: undefined }): WebUiFormField {
    return this.field(WebUiFormFieldType.EnumSelect, key, options)
  }

  static relationSelect(key: string, options: WebUiFormFieldOptions = { filter: undefined }): WebUiFormField {
    return this.field(WebUiFormFieldType.RelationSelect, key, options)
  }

  static switch(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.Switch, key, options)
  }

  static number(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.Number, key, options)
  }
}
