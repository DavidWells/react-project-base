import * as types from '../constants/actionTypes'

export function setActiveProduct (product) {
  return { type: types.SET_PRODUCT, product }
}
