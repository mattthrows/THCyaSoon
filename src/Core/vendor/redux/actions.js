export const SET_VENDORS = 'SET_VENDORS'
export const SET_POPULAR_PRODUCTS = 'SET_POPULAR_PRODUCTS'
export const SET_CATEGORIES = 'SET_CATEGORIES'

export const setVendors = data => ({
  type: SET_VENDORS,
  data,
})

export const setPopularProducts = data => ({
  type: SET_POPULAR_PRODUCTS,
  data,
})

export const setCategories = data => ({
  type: SET_CATEGORIES,
  data,
})
