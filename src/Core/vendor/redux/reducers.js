import { SET_VENDORS, SET_POPULAR_PRODUCTS, SET_CATEGORIES } from './actions'

const initialState = {
  vendors: [],
  categories: [],
}

export const vendor = (state = initialState, action) => {
  switch (action.type) {
    case SET_VENDORS:
      return {
        ...state,
        vendors: action.data,
      }
    case SET_POPULAR_PRODUCTS:
      return {
        ...state,
        popularProducts: action.data,
      }
      case SET_CATEGORIES:
      return {
        ...state,
        categories: action.data,
      }
    default:
      return state
  }
}
