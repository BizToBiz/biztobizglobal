import { RegisterInput } from '@biztobiz/shared/util-sdk'
import { SharedAuthContext } from '@biztobiz/shared/auth/data-access'
import { WebAuthPage } from '@biztobiz/web/auth/ui'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { WebUiFormField } from '@biztobiz/web-ui/form'
import { WebUiAlertProps } from '@biztobiz/web-ui/alert'

export function WebFeatureRegister() {
  const { register } = useContext(SharedAuthContext)
  const navigate = useNavigate()
  const [alert, setAlert] = useState<WebUiAlertProps>()

  const registerFunction = async (input: RegisterInput) => {
    const registerInfo = await register(input)
    if (registerInfo?.user?.id) {
      navigate('/members/dashboard')
    } else if (registerInfo?.error) {
      setAlert({ alertType: 'warning', title: registerInfo?.error })
    } else {
      setAlert({ alertType: 'warning', title: `${registerInfo || 'Something went wrong'}` })
    }
  }
  const fields: WebUiFormField[] = [
    WebUiFormField.email('email', { label: 'Email', required: true }),
    WebUiFormField.password('password', { label: 'Password', required: true }),
  ]
  return (
    <WebAuthPage
      title="Create a New Account"
      subtitle={
        <p className="mt-2 text-center text-sm text-gray-600">
          Already a Member?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Log In Here
          </Link>
        </p>
      }
      submit={(input) => registerFunction(input)}
      fields={fields}
      alert={alert}
      buttonText={'Register'}
    />
  )
}
