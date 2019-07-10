import * as React from 'react'
import { FormLayout } from '@shopify/polaris'
import { Form, FormProps } from '@wino/react-form-core'

export default function FormInner<Values>(props: FormProps<Values>) {
  const { children, ...rest } = props
  return <Form {...rest}>{() => <FormLayout>{children}</FormLayout>}</Form>
}
