import React, { ReactNode } from 'react'

export enum WebUiFormFieldType {
  Email = 'Email',
  Input = 'Input',
  Password = 'Password',
  CheckBox = 'CheckBox',
  DatePicker = 'DatePicker',
  TextArea = 'TextArea',
  Url = 'Url',
  Select = 'Select',
  EnumSelect = 'EnumSelect',
}

export interface WebUiFormFieldOptions {
  label?: string
  placeholder?: string
  required?: true
  customWrapper?: (children: ReactNode) => JSX.Element
  defaultValue?: string | number | readonly string[] | undefined
  defaultChecked?: boolean
  selectOptions?: { label: string; value: string }[]
  enum?: { [s: string]: unknown } | ArrayLike<unknown>
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
}
