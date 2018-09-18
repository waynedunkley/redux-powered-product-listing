import React from "react"
import { shallow } from "enzyme"
import Container from "./Container"

it("<Container /> renders", () => {
  const wrapper = shallow(<Container />)
  expect(wrapper).toMatchSnapshot()
})
