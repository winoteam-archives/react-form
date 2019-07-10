import * as React from 'react'

export type FormProps<Values> = {
  id?: string
  initialValues?: Values
  onReset?: () => void
  onSubmit: (values: Values) => any
  children: React.ReactNode
}

export type FieldError = string | undefined

export type FormErrors<Values> = { [K in keyof Values]?: FieldError }

export type FormFocused<Values> = { [K in keyof Values]?: boolean }

export type FormFocusing<Values> = { [K in keyof Values]?: boolean }

export type FormRefs<Values> = { [K in keyof Values]?: React.ReactNode }

export type FormIndexes<Values> = { [K in keyof Values]?: number }

export type FormState<Values> = {
  id: string | undefined
  initialValues: Values
  values: Values
  errors: FormErrors<Values>
  focused: FormFocused<Values>
  focusing: FormFocusing<Values>
  refs: FormRefs<Values>
  indexes: FormIndexes<Values>
  submitCount: number
  isSubmitting: boolean
  isKilled: boolean
  isProcessing: boolean
}

export type FormHandlerMethods = {
  handleReset: () => void
  handleSubmit: () => void
}

export type FormFieldValidation<Value> = {
  [ruleName: string]: (value: Value, extra?: Object) => FieldError
}

export type FormFieldState<Value> = {
  value: Value | undefined
  error?: string
  isFocused: boolean
  isFocusing: boolean
}

export type FormFieldHandlers<Value> = {
  onChange: (value: Value) => void
  onFocus: () => void
  onBlur: () => void
}

export type FormFieldProps<Value> = {
  name: string
  initialValue?: Value
  value?: Value
  validation?: FormFieldValidation<Value>
  children?: (
    props: FormFieldState<Value> & FormFieldHandlers<Value>,
  ) => React.ReactNode
}

export type FormAction = {
  type: string
  payload: { [key: string]: any }
}

export type FormContext<Values> = {
  subscribe: (fn: Function) => void
  unsubscribe: (fn: Function) => void
  getState: () => FormState<Values>
  dispatch: (action: FormAction) => void
  reset: () => void
  submit: (values: Values) => Promise<any>
}

export type FormSubmitState = {
  disabled: boolean
}
