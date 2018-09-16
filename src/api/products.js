import axios from "axios"

export const apiGetProducts = () =>
  axios.get("https://whitechdevs.github.io/reactjs-test/products.json")
