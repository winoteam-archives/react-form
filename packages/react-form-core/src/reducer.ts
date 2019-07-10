import { FormAction, FormState } from './TypeDefinitions'

export default function reducer<Values>(
  state: FormState<Values>,
  action: FormAction,
) {
  console.log(action)
  return state
}
