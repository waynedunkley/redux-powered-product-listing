import React from "react"
import { shallow } from "enzyme"
import ProductTitle from "./ProductTitle"

it("ProductTitle renders title", () => {
  const wrapper = shallow(<ProductTitle text="title" />)
  expect(wrapper.contains("title")).toEqual(true)
})
