import * as React from 'react'
import { FormLayout } from '@shopify/polaris'
import { Form, FormProps } from '@wino/react-form-core'

type Props = FormProps & {
  children: React.ReactNode
}

export default function FormInner(props: Props) {
  const { children, ...rest } = props
  return (
    <Form {...rest}>
      <FormLayout>{children}</FormLayout>
    </Form>
  )
}
