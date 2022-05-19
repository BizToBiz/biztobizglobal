import React from 'react'
import { useForm } from 'react-hook-form'
import { WebUiFormField, WebUiFormFieldType } from './web-ui-form-fields'

export interface WebUiFormProps {
  fields: WebUiFormField[]
  submit: (value: unknown) => Promise<void> | void
  buttonText?: string
}

export function WebUiForm({ fields, submit, buttonText }: WebUiFormProps) {
  const { register, handleSubmit, watch, errors } = useForm()

  function renderFieldWrapper(field: WebUiFormField) {
    const checkBoxWrapper = (
      <div key={field.key} className="flex items-center">
        {renderField(field)}{' '}
        <label htmlFor={field.key} className="ml-2 block text-sm text-gray-900">
          {field?.options?.label}
        </label>
      </div>
    )

    const standardWrapper = (
      <div key={field.key}>
        {field?.options?.label ? (
          <label htmlFor={field.key} className="block text-sm font-medium text-gray-700">
            {field?.options?.label}
          </label>
        ) : null}
        <div className="mt-1">
          <div>{renderField(field)}</div>
          <div>{errors[field.key] && <span className="text-red-700 text-sm">This field is required</span>}</div>
        </div>
      </div>
    )

    switch (field.type) {
      case WebUiFormFieldType.CheckBox:
        return field?.options?.customWrapper ? field.options.customWrapper(checkBoxWrapper) : checkBoxWrapper
      default:
        return field?.options?.customWrapper ? field.options.customWrapper(standardWrapper) : standardWrapper
    }
  }
  function renderField(field: WebUiFormField) {
    switch (field.type) {
      case WebUiFormFieldType.Email:
        return (
          <input
            id={field.key}
            name={field.key}
            type="email"
            defaultValue={field?.options?.defaultValue}
            ref={register({ required: field?.options?.required })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        )
      case WebUiFormFieldType.Input:
        return (
          <input
            id={field.key}
            name={field.key}
            type="text"
            defaultValue={field?.options?.defaultValue}
            ref={register({ required: field?.options?.required })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        )
      case WebUiFormFieldType.Password:
        return (
          <input
            id={field.key}
            name={field.key}
            type="password"
            defaultValue={field?.options?.defaultValue}
            ref={register({ required: field?.options?.required })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        )
      case WebUiFormFieldType.CheckBox:
        return (
          <input
            id={field.key}
            name={field.key}
            type="checkbox"
            defaultChecked={field?.options?.defaultChecked}
            ref={register({ required: field?.options?.required })}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
        )

      default:
        return (
          <div>
            Unknown field type: <strong>{field.type}</strong>
          </div>
        )
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submit)}>
      {fields.map((field) => {
        return renderFieldWrapper(field)
      })}

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {buttonText}
        </button>
      </div>
    </form>
  )
}
