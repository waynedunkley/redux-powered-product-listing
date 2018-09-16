const UPDATE_PRODUCTS = "UPDATE_PRODUCTS"

export const updateProducts = products => ({
  type: UPDATE_PRODUCTS,
  products,
})

export const handleUpdateProducts = () => dispatch => {
  dispatch(updateProducts())
}

const initialState = {
  products: [],
  pagination: 8,
  page: 1,
}

export default function products(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
      }
    default:
      return state
  }
}
