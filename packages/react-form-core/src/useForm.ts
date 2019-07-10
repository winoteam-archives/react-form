import { useState, useContext, useEffect } from 'react'
import FormContextTypes from './FormContext'
import { FormState, FormContext } from './TypeDefinitions'

export default function useForm<Values>() {
  const [state, setState] = useState<FormState<Values>>()
  const formContext = useContext<FormContext<Values>>(FormContextTypes)

  function handleFormStateChange(formState: FormState<Values>) {
    setState(formState)
  }

  useEffect(() => {
    formContext.subscribe(handleFormStateChange)
    return () => {
      formContext.unsubscribe(handleFormStateChange)
    }
  })

  return state
}
