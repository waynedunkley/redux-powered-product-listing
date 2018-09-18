import React from "react"
import { shallow } from "enzyme"
import ProductPrice from "./ProductPrice"

it("ProductPrice renders $3.99", () => {
  const price = "$3.99"
  const wrapper = shallow(<ProductPrice price={price} />)
  expect(wrapper.contains(price)).toEqual(true)
  expect(wrapper).toMatchSnapshot()
})
