import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom, isDevAtom } from '@biztobiz/web/global/data-access'
import { RESET } from 'jotai/utils'
import { WebUiForm } from '@biztobiz/web-ui/form'
import { cleanObject } from '@biztobiz/shared/utils/feature'
import { DocumentNode } from 'graphql'
import { useMutation } from '@apollo/client'
import { WebUiDevDataFeature } from '@biztobiz/web-ui/dev-data/feature'

interface PathData {
  path: string
  name: string
  description: string
  showSearch: boolean
  actionText: string
  actionLink: string
}
interface WebAdminCreateFormProps {
  pathData: PathData
  document: DocumentNode
  idName: string
  buttonText: string
  fields: any[]
  id: string
  defaultValues: any
}

export function WebAdminUpdateForm(props: WebAdminCreateFormProps) {
  const [isDev] = useAtom(isDevAtom)
  const [currentPath, setCurrentPath] = useAtom(currentPathAtom)
  const [loading, setLoading] = useState(false)
  const [updateMutation] = useMutation(props.document)

  const submit = async (input: any) => {
    setLoading(true)
    const cleanedInput = cleanObject(input)
    updateMutation({
      variables: {
        [`${props.idName}`]: props.id,
        input: { ...cleanedInput },
      },
    }).then((data) => {
      setLoading(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  useLayoutEffect(() => {
    setCurrentPath(props?.pathData)
    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <>
      <WebUiForm
        fields={props.fields}
        submit={(values) => submit(values)}
        defaultValues={props.defaultValues}
        buttonText={props.buttonText}
        loading={loading}
      />
      {isDev ? <WebUiDevDataFeature data={props.defaultValues} /> : null}
    </>
  )
}
