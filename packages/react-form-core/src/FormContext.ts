import React from 'react'
import { FormContext } from './TypeDefinitions'

export default function createMandatoryContext<Values>(
  defaultValue?: FormContext<Values>,
) {
  return React.createContext<FormContext<Values>>(defaultValue as FormContext<
    Values
  >)
}
