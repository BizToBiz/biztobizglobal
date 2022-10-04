import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tailwind from 'tailwind-rn'

export type UiButtonTypes = 'primary' | 'secondary' | 'success' | 'warning'
export interface UiButtonProps {
  label: string
  bordered?: boolean
  onPress: () => void
  rounded?: boolean
  type?: UiButtonTypes
}

function getStyle(props: UiButtonProps): { view: string; text: string } {
  const type = props.type || 'secondary'
  const bordered = props.bordered === undefined ? true : props.bordered
  const rounded = props.rounded === undefined ? true : props.rounded

  function createStyle(color: string, bg: number | string, text: number | string, border?: number | string) {
    return {
      // These classes are applied to the View
      view: [
        'mb-4',
        'py-4',
        'w-full',
        'items-center',
        `bg-${color}-${bg}`,
        bordered ? `border border-${color}-${border || text} ` : '',
        rounded ? ' rounded-md' : '',
      ].join(' '),
      // These classes are applied to the Text
      text: [`text-${color}-${text} `, `text-lg`, `font-medium`, `uppercase`].join(' '),
    }
  }

  switch (type) {
    case 'primary':
      return createStyle('indigo', 600, 200, 300)
    case 'secondary':
      return createStyle('indigo', 200, 600)
    case 'success':
      return createStyle('green', 200, 600)
    case 'warning':
      return createStyle('yellow', 100, 600)
  }
}

export function UiButton(props: UiButtonProps) {
  const styles = getStyle(props)

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={tailwind(styles.view)}>
        <Text style={tailwind(styles.text)}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  )
}
