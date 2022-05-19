import React, { ReactNode } from 'react'

export enum WebUiFormFieldType {
  Email = 'Email',
  Input = 'Input',
  Password = 'Password',
  CheckBox = 'CheckBox',
}

export interface WebUiFormFieldOptions {
  label?: string
  placeholder?: string
  required?: true
  customWrapper?: (children: ReactNode) => JSX.Element
  defaultValue?: string | number | readonly string[] | undefined
  defaultChecked?: boolean
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

  static input(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.Input, key, options)
  }

  static password(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.Password, key, options)
  }

  static checkbox(key: string, options: WebUiFormFieldOptions = {}): WebUiFormField {
    return this.field(WebUiFormFieldType.CheckBox, key, options)
  }
}
