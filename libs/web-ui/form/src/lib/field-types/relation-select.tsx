import { useQuery } from '@apollo/client'
import React from 'react'
import { WebUiFormField } from '@biztobiz/web-ui/form'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { UptimeDocument } from '@biztobiz/shared/util-sdk'
import AsyncSelect from 'react-select/async'
import { GroupBase, OptionsOrGroups } from 'react-select'

interface RelationSelectProps {
  field: WebUiFormField
  control: Control<FieldValues, any>
}

export function RelationSelect(props: RelationSelectProps) {
  const { data, loading, refetch, error } = useQuery(props?.field?.options?.document ?? UptimeDocument)

  let dataList = props?.field?.options?.dataType && !loading ? data?.[props.field.options.dataType] : []
  if (props?.field?.options?.filter && !loading) {
    dataList = props?.field?.options?.filter?.(dataList)
  }

  const defaultOptions = props?.field?.options?.selectOptionsFunction
    ? props?.field?.options?.selectOptionsFunction(dataList)
    : [{ value: '', label: 'Loading...' }]

  async function getStorageOptions(inputText: string): Promise<OptionsOrGroups<any, GroupBase<any>>> {
    return refetch({ input: { search: inputText } }).then((res) => {
      return props?.field?.options?.selectOptionsFunction && props?.field?.options?.dataType
        ? props?.field?.options?.selectOptionsFunction(res?.data?.[props.field.options.dataType])
        : [{ value: '', label: 'Loading...' }]
    })
  }

  return (
    <Controller
      control={props.control}
      name={props.field.key}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <AsyncSelect
          name={props.field.key}
          value={value}
          key={props.field.key}
          defaultOptions={defaultOptions}
          loadOptions={getStorageOptions}
          onChange={onChange}
          isLoading={loading}
          isMulti={props.field.options.multiselect}
        />
      )}
    />
    // <select
    //   id={props.field.key}
    //   className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
    //   {...props.register(`${props.field.key}`, { required: props.field?.options?.required })}
    // >
    //   {props?.field?.options?.selectOptionsFunction && props?.field?.options?.dataType
    //     ? props?.field?.options?.selectOptionsFunction(data?.[props.field.options.dataType])
    //     : null}
    // </select>
  )
}