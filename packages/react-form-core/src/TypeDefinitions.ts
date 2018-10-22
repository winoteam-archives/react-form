import { FormikConfig, FormikContext } from 'formik'

export type FormConfig = FormikConfig<{}>
export type FormContext = FormikContext<{}>

export type FormField<Value> = {
  onChange: (e: React.ChangeEvent<any>) => void
  onBlur: (e: any) => void
  name: string
  value: Value
  validation: Function[]
}
