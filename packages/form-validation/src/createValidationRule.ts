export default function createValidationRule(
  rule: Function,
  errorMessage: string,
) {
  return (value: any) => {
    if (rule(value)) {
      return undefined
    } else {
      return errorMessage
    }
  }
}
