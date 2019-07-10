export default function createValidationRule(
  rule: (value: any) => boolean,
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
