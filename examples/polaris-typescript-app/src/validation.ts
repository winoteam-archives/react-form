import { rules, createValidationRule } from '@wino/form-validation'
import { t } from './translation'

export const isRequired = createValidationRule(
  rules.isRequired,
  t('This field is required'),
)

export const isInteger = createValidationRule(
  rules.isInteger,
  t('This field must be an integer'),
)
