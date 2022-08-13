import React, { useLayoutEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { currentPathAtom } from '@biztobiz/web/global/data-access'
import { RESET } from 'jotai/utils'
import { WebUiForm } from '@biztobiz/web-ui/form'
import { cleanOutput } from '@biztobiz/shared/utils/feature'
import { DocumentNode } from 'graphql'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'

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
  navigateTo: string
  mutationName: string
  buttonText: string
  fields: any[]
}

export function WebAdminCreateForm(props: WebAdminCreateFormProps) {
  const [currentPath, setCurrentPath] = useAtom(currentPathAtom)
  const [loading, setLoading] = useState(false)
  const [createMutation] = useMutation(props.document)
  const navigate = useNavigate()

  const submit = async (input: any) => {
    setLoading(true)
    const cleanedInput = cleanOutput(input)
    console.log(cleanedInput)
    createMutation({
      variables: {
        input: { ...cleanedInput },
      },
    }).then((data) => {
      setLoading(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      navigate(`${props.navigateTo}/${data.data[props.mutationName].id}`)
    })
  }

  useLayoutEffect(() => {
    setCurrentPath(props?.pathData)
    return () => {
      setCurrentPath(RESET)
    }
  }, [])

  return (
    <WebUiForm
      fields={props.fields}
      submit={(values) => submit(values)}
      defaultValues={undefined}
      buttonText={`Add ${props.buttonText}`}
      loading={loading}
    />
  )
}
