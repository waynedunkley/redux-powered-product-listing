import { apiGetProducts } from "api/products"

const PRODUCTS_REQUEST_SENT = "PRODUCTS_REQUEST_SENT"
const PRODUCTS_REQUEST_SUCCESS = "PRODUCTS_REQUEST_SUCCESS"
const PRODUCTS_REQUEST_FAILURE = "PRODUCTS_REQUEST_FAILURE"
const CLEAR_PRODUCT_ITEMS = "CLEAR_PRODUCT_ITEMS"
const UPDATE_PRODUCT_ITEMS = "UPDATE_PRODUCT_ITEMS"
const UPDATE_PRODUCT_PER_PAGE = "UPDATE_PRODUCT_PER_PAGE"

const productsRequestSent = () => ({
  type: PRODUCTS_REQUEST_SENT,
})

const productsRequestSuccess = () => ({
  type: PRODUCTS_REQUEST_SUCCESS,
})

const productsRequestFailure = () => ({
  type: PRODUCTS_REQUEST_FAILURE,
})

const updatesProductItems = products => ({
  type: UPDATE_PRODUCT_ITEMS,
  products,
})

export const updatePerPage = num => ({
  type: UPDATE_PRODUCT_PER_PAGE,
  num,
})

export const handleGetProducts = () => dispatch => {
  dispatch(productsRequestSent())
  return apiGetProducts()
    .then(({ data }) => {
      dispatch(updatesProductItems(data))
      dispatch(productsRequestSuccess())
    })
    .catch(err => {
      dispatch(productsRequestFailure())
      console.warn("Error: ", err)
    })
}

const initialState = {
  isRequesting: false,
  perPage: 8,
  page: 1,
  items: [],
}

export default function products(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_REQUEST_SENT:
      return {
        ...state,
        isRequesting: true,
      }
    case PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        isRequesting: false,
      }
    case PRODUCTS_REQUEST_FAILURE:
      return {
        ...state,
        isRequesting: false,
        items: [],
      }
    case UPDATE_PRODUCT_ITEMS:
      return {
        ...state,
        items: action.products,
      }
    case CLEAR_PRODUCT_ITEMS:
      return {
        ...state,
        items: {},
      }
    case UPDATE_PRODUCT_PER_PAGE:
      return {
        ...state,
        perPage: action.num,
      }
    default:
      return state
  }
}
