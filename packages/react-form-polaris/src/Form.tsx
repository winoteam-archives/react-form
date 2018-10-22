import * as React from 'react'
import { FormLayout } from '@shopify/polaris'
import { FormBuilder, FormConfig } from 'react-form-core'

type Props = FormConfig & {
  children: React.ReactNode
}

export default function Form(props: Props) {
  const { children, ...rest } = props
  return (
    <FormBuilder {...rest}>
      <FormLayout>{children}</FormLayout>
    </FormBuilder>
  )
}
