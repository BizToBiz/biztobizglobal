import React, { useEffect } from 'react'
import { useForm, UseFormProps } from 'react-hook-form'
import { WebUiFormField, WebUiFormFieldType } from './web-ui-form-fields'

export interface WebUiFormProps extends UseFormProps {
  fields: WebUiFormField[]
  submit: (values: unknown) => Promise<unknown> | unknown
  buttonText?: string
  loading?: boolean
}

export function WebUiForm({ fields, submit, buttonText, defaultValues, loading = false }: WebUiFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: defaultValues })

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues])

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
            type="email"
            {...register(`${field.key}`, { required: field?.options?.required })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        )
      case WebUiFormFieldType.Url:
        return (
          <input
            id={field.key}
            type="url"
            {...register(`${field.key}`, { required: field?.options?.required })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        )
      case WebUiFormFieldType.Input:
        return (
          <input
            id={field.key}
            type="text"
            {...register(`${field.key}`, { required: field?.options?.required })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        )
      case WebUiFormFieldType.TextArea:
        return (
          <textarea
            rows={4}
            id={field.key}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            {...register(`${field.key}`, { required: field?.options?.required })}
          />
        )
      case WebUiFormFieldType.Password:
        return (
          <input
            id={field.key}
            type="password"
            {...register(`${field.key}`, { required: field?.options?.required })}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        )
      case WebUiFormFieldType.CheckBox:
        return (
          <input
            id={field.key}
            type="checkbox"
            {...register(`${field.key}`, { required: field?.options?.required })}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        )
      case WebUiFormFieldType.DatePicker:
        return (
          <input
            id={field.key}
            type="date"
            {...register(`${field.key}`, {
              required: field?.options?.required,
              valueAsDate: true,
              setValueAs: (v) => v.toISOString().split('T')[0],
            })}
            className="text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        )
      case WebUiFormFieldType.Select:
        return (
          <select
            id={field.key}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            {...register(`${field.key}`, { required: field?.options?.required })}
          >
            {field?.options?.selectOptions?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      case WebUiFormFieldType.EnumSelect:
        return (
          <select
            id={field?.key}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            {...register(`${field.key}`, {
              required: field?.options?.required,
            })}
            defaultValue={field?.options?.defaultValue}
          >
            {(Object.keys(field.options.enum as object) as Array<keyof typeof field.options.enum>)?.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
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
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {buttonText}
        </button>
      </div>
    </form>
  )
}
