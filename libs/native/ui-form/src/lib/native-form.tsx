import { UiButton } from '@biztobiz/native/ui-button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import tailwind from 'tailwind-rn'
import { NativeFormField } from './native-form-field'
import { RenderFormError, RenderFormField, RenderFormLabel } from './render-form-field'

export interface NativeFormFieldOptions {
  defaultValue?: string
  label?: string
  required?: true
}

export interface NativeFormProps {
  fields: NativeFormField[]
  submit: (value) => Promise<void> | Promise<boolean> | void
  buttonLabel?: string
}

export function NativeForm({ fields, submit, buttonLabel }: NativeFormProps) {
  const { handleSubmit, control, errors } = useForm()

  return (
    <View>
      <View style={tailwind('mb-4')}>
        {fields.map((field) => (
          <View key={field.key} style={tailwind(' mb-4')}>
            <RenderFormLabel field={field} />
            <RenderFormField field={field} control={control} />
            <RenderFormError field={field} errors={errors} />
          </View>
        ))}
      </View>
      <UiButton onPress={handleSubmit(submit)} label={buttonLabel || 'Submit'} type={'primary'} />
    </View>
  )
}
