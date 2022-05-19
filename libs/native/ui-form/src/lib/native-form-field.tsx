import { NativeFormFieldOptions } from './native-form'
import { NativeFormFieldType } from './native-form-field-type'

export class NativeFormField {
  key: string
  type: NativeFormFieldType
  options: NativeFormFieldOptions

  static field(type: NativeFormFieldType, key: string, options: NativeFormFieldOptions = {}): NativeFormField {
    return { type, key, options }
  }

  static email(key: string, options: NativeFormFieldOptions = {}): NativeFormField {
    return this.field(NativeFormFieldType.Email, key, options)
  }

  static input(key: string, options: NativeFormFieldOptions = {}): NativeFormField {
    return this.field(NativeFormFieldType.Input, key, options)
  }

  static password(key: string, options: NativeFormFieldOptions = {}): NativeFormField {
    return this.field(NativeFormFieldType.Password, key, options)
  }
}
