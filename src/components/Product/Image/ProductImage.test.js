import React from "react"
import { shallow } from "enzyme"
import ProductImage from "./ProductImage"

it("ProductDescription renders description", () => {
  const wrapper = shallow(<ProductImage url="/path/to/img" alt="alt text" />)
  expect(wrapper).toMatchSnapshot()
})
