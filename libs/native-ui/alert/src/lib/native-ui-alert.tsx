import { CheckCircleIcon, ExclamationIcon, InformationCircleIcon, XCircleIcon } from 'react-native-heroicons/solid'
import React, { ReactNode } from 'react'
import { Link } from '@react-navigation/native'
import tw from 'twrnc'
import { Text, View } from 'react-native'

/* eslint-disable-next-line */
export interface NativeUiAlertProps {
  alertType: 'success' | 'info' | 'warning' | 'error'
  title?: string
  message?: string | ReactNode
  messageLink?: string
  messageLinkText?: string
}

export function NativeUiAlert(props: NativeUiAlertProps) {
  let bgColor: string,
    headingColor: string,
    textColor: string,
    hoverColor: string,
    icon: ReactNode = null

  switch (props?.alertType) {
    case 'success':
      bgColor = 'bg-green-50'
      headingColor = 'text-green-800'
      textColor = 'text-green-700'
      hoverColor = 'hover:text-green-600'
      icon = <CheckCircleIcon style={tw`h-5 w-5 text-green-400`} aria-hidden="true" />
      break
    case 'info':
      bgColor = 'bg-blue-50'
      headingColor = 'text-blue-800'
      textColor = 'text-blue-700'
      hoverColor = 'hover:text-blue-600'
      icon = <InformationCircleIcon style={tw`h-5 w-5 text-blue-400`} aria-hidden="true" />
      break
    case 'warning':
      bgColor = 'bg-yellow-50'
      headingColor = 'text-yellow-800'
      textColor = 'text-yellow-700'
      hoverColor = 'hover:text-yellow-600'
      icon = <ExclamationIcon style={tw`h-5 w-5 text-yellow-400`} aria-hidden="true" />
      break
    case 'error':
      bgColor = 'bg-red-50'
      headingColor = 'text-red-800'
      textColor = 'text-red-700'
      hoverColor = 'hover:text-red-600'
      icon = <XCircleIcon style={tw`h-5 w-5 text-red-400`} aria-hidden="true" />
      break
  }

  function RenderedAlert() {
    if (props?.title && !props?.message) {
      return (
        <View style={tw`rounded-md p-4 mb-5 ${bgColor}`}>
          <View style={tw`flex-row `}>
            <View style={tw`flex-shrink-0`}>{icon}</View>
            <View style={tw`ml-3 mt-[2px] pr-5`}>
              <Text style={tw`text-sm font-medium ${headingColor}`}>{props?.title}</Text>
            </View>
          </View>
        </View>
      )
    } else if (props?.title && props?.message) {
      return (
        <View style={tw`rounded-md p-4 mb-5 ${bgColor}`}>
          <View style={tw`flex-row `}>
            <View style={tw`flex-shrink-0`}>{icon}</View>
            <View style={tw`ml-3 mt-[2px] pr-5`}>
              <Text style={tw`text-sm font-medium ${headingColor}`}>{props?.title}</Text>
              <View style={tw`mt-2 text-sm ${textColor}`}>
                <Text>
                  {props.message}{' '}
                  {props?.messageLink ? (
                    <Link to={props.messageLink}>
                      <Text style={tw`font-medium underline ${textColor} ${hoverColor}`}>
                        {props?.messageLinkText ?? props.messageLink}
                      </Text>
                    </Link>
                  ) : null}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )
    } else if (!props?.title && props?.message) {
      return (
        <View style={tw`rounded-md p-4 mb-5 ${bgColor}`}>
          <View style={tw`flex`}>
            <View style={tw`flex-row`}>
              <View style={tw`flex-shrink-0`}>{icon}</View>
              <View style={tw`ml-3 mt-[2px]`}>
                <Text style={tw`text-sm pr-5 ${textColor}`}>
                  {props.message}{' '}
                  {props?.messageLink ? (
                    <Link to={props.messageLink}>
                      <Text style={tw`font-medium underline ${textColor} ${hoverColor}`}>
                        {props?.messageLinkText ?? props.messageLink}
                      </Text>
                    </Link>
                  ) : null}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )
    } else {
      return null
    }
  }
  return <RenderedAlert />
}

export default NativeUiAlert
