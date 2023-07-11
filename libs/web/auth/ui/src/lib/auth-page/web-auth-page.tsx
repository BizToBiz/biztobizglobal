import React, { ReactNode } from 'react'
import { WebUiForm, WebUiFormField } from '@biztobiz/web-ui/form'
import { WebUiAlert, WebUiAlertProps } from '@biztobiz/web-ui/alert'

export interface WebAuthUiProps {
  error?: WebUiAlertProps | null
  title?: string
  subtitle?: string | ReactNode
  fields: WebUiFormField[]
  submit: (val) => void
  buttonText: string
}

export function WebAuthPage(props: WebAuthUiProps) {
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{props?.title}</h2>
        {typeof props?.subtitle === 'string' ? (
          <p className="mt-2 text-center text-sm text-gray-600">{props?.subtitle}</p>
        ) : (
          props?.subtitle
        )}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {props?.error ? <WebUiAlert {...props.error} /> : null}
          <WebUiForm fields={props?.fields} submit={(values) => props?.submit(values)} buttonText={props?.buttonText} />
        </div>
      </div>
    </div>
  )
}
