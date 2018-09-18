import React from "react"
import { shallow } from "enzyme"
import Product from "./Product"

it("Product matches snapshot", () => {
  const data = {
    title: "Product title",
    description: "Product description",
    price: "$99.99",
    image: {
      url: "path/to/img",
      alt: "alt text",
    },
  }
  const wrapper = shallow(<Product product={data} />)
  expect(wrapper).toMatchSnapshot()
})
