export default function createValidationRule(
  rule: Function,
  errorMessage: string,
) {
  return (value: any) => {
    if (rule(value)) {
      return null
    } else {
      return errorMessage
    }
  }
}
