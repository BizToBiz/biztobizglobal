import React from 'react'
import { Controller } from 'react-hook-form'
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { NativeFormField } from './native-form-field'
import { NativeFormFieldType } from './native-form-field-type'

export function RenderFormField({ field, control }: { field: NativeFormField; control }) {
  return (
    <Controller
      control={control}
      defaultValue={field?.options?.defaultValue || ''}
      name={field.key}
      render={RenderFormFieldType({ field })}
      rules={{ required: field?.options?.required }}
    />
  )
}

export function RenderFormFieldType({ field }: { field: NativeFormField }) {
  return ({ onChange, onBlur, value }) => {
    switch (field.type) {
      case NativeFormFieldType.Email:
        return RenderTextInput({
          onChange,
          onBlur,
          value,
          keyboardType: 'email-address',
        })
      case NativeFormFieldType.Password:
        return RenderTextInput({
          onChange,
          onBlur,
          value,
          secureTextEntry: true,
        })
      default:
        return <NativeLabelError message={`Unknown field type: ${field.type}`} />
    }
  }
}

export function RenderTextInput({
  onChange,
  onBlur,
  value,
  keyboardType,
  secureTextEntry,
}: {
  onChange: (val) => void
  onBlur: (val) => void
  value: any
  keyboardType?: KeyboardTypeOptions
  secureTextEntry?: boolean
}) {
  return (
    <TextInput
      autoCapitalize="none"
      keyboardType={keyboardType || 'default'}
      secureTextEntry={secureTextEntry || false}
      style={tailwind('border border-gray-400 bg-gray-50 p-4 rounded-md')}
      onBlur={onBlur}
      onChangeText={(value) => onChange(value)}
      value={value}
    />
  )
}

export function NativeLabelError({ message }: { message: string }) {
  return (
    <View style={tailwind('flex items-center border border-red-800 bg-red-200 rounded-md my-3 py-3')}>
      <Text style={tailwind('text-red-800')}>{message}</Text>
    </View>
  )
}

export function RenderFormLabel({ field }: { field?: NativeFormField }) {
  const styles = {
    label: tailwind('flex text-gray-700 text-lg pb-2 px-3'),
    labelRequired: tailwind('text-red-700 text-sm'),
  }

  return field?.options?.label ? (
    <Text style={styles.label}>
      {field?.options?.label} {field?.options?.required ? <Text style={styles.labelRequired}>*</Text> : ''}
    </Text>
  ) : null
}

export function RenderFormError({ field, errors }: { field?: NativeFormField; errors }) {
  return (
    <View style={tailwind('flex px-3 mt-2')}>
      {errors[field.key] ? <Text style={tailwind('text-red-800')}>This field is required</Text> : <Text />}
    </View>
  )
}
