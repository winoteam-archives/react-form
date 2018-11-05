import * as React from 'react'
import { Button } from '@shopify/polaris'
import { FormSubmit } from '@wino/react-form-core'

type Props = {
  children: string
}

export default function SubmitButton(props: Props) {
  const { children } = props
  return (
    <FormSubmit>
      {({ handleSubmit, disabled }) => (
        <Button
          primary={!disabled}
          outline={disabled}
          onClick={handleSubmit as () => void}
        >
          {children}
        </Button>
      )}
    </FormSubmit>
  )
}
