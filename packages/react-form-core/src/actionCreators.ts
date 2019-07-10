import { FieldError } from './TypeDefinitions'
import * as actionTypes from './actionTypes'

export function initializeField(name: string) {
  return {
    type: actionTypes.INITIALIZE_FIELD,
    payload: { name },
  }
}

export function teardownField(name: string) {
  return {
    type: actionTypes.TEARDOWN_FIELD,
    payload: { name },
  }
}

export function changeFieldValue(name: string, value: any) {
  return {
    type: actionTypes.CHANGE_FIELD_VALUE,
    payload: { name, value },
  }
}

export function changeFieldError(name: string, error: FieldError) {
  return {
    type: actionTypes.CHANGE_FIELD_ERROR,
    payload: { name, error },
  }
}

export function focusField(name: string) {
  return {
    type: actionTypes.FOCUS_FIELD,
    payload: { name },
  }
}

export function blurField(name: string) {
  return {
    type: actionTypes.BLUR_FIELD,
    payload: { name },
  }
}

export function resetForm() {
  return {
    type: actionTypes.RESET_FORM,
    payoad: {},
  }
}

export function submitFormRequest() {
  return {
    type: actionTypes.SUBMIT_FORM_REQUEST,
    payload: {},
  }
}

export function submitFormSuccess() {
  return {
    type: actionTypes.SUBMIT_FORM_SUCCESS,
    payload: {},
  }
}

export function submitFormFailure() {
  return {
    type: actionTypes.SUBMIT_FORM_FAILURE,
    payload: {},
  }
}
