import React from "react"
import { shallow } from "enzyme"
import ProductDescription from "./ProductDescription"

it("ProductDescription renders description", () => {
  const wrapper = shallow(<ProductDescription text="description" />)
  expect(wrapper.contains("description")).toEqual(true)
})
