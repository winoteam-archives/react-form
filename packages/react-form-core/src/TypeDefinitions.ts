export type FormProps = {
  id?: string
  initialValues?: { [name: string]: any }
  onSubmit: (values: FormValues) => any
}

export type FormValues = {
  [name: string]: any
}

export type FieldError = string | undefined

export type FormErrors<Values> = {
  [K in keyof Values]?: Values[K] extends object
    ? FormErrors<Values[K]>
    : FieldError
}

export type FormTouched<Values> = {
  [K in keyof Values]?: Values[K] extends object
    ? FormTouched<Values[K]>
    : boolean
}

export type FormState<Values> = {
  values: Values
  errors: FormErrors<Values>
  touched: FormTouched<Values>
  isSubmitting: boolean
  submitCount: number
}

export type FormActionsProps = {
  handleReset: () => void
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void
}

export type FormFieldValidation<Value> = {
  [ruleName: string]: (value: Value, extra?: Object) => FieldError
}

export type FormFieldProps<Value> = {
  name: string
  initialValue?: Value
  value?: Value
  validation?: FormFieldValidation<Value>
}

export type FormFieldState<Value> = {
  name: string
  value: Value
  error?: string
  touched: boolean
}

export type FormFieldActions = {
  onChange: (e: React.ChangeEvent<any>) => void
  onBlur: (e: any) => void
}

export type FormSubmitState = {
  disabled: boolean
}

export type FormSubmitActions = {
  handleSubmit: (values: FormValues) => void
}
