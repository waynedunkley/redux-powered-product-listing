import React from "react"
import { shallow } from "enzyme"
import Pagination from "./Pagination"

it("Pagination renders correctly", () => {
  const current = 3
  const totalPages = 9
  const wrapper = shallow(
    <Pagination current={current} totalPages={totalPages} />,
  )
  expect(wrapper.find("li")).toHaveLength(5)
  expect(wrapper.find("li.active").contains(current)).toBeTruthy()
  expect(wrapper.find("li.prev").contains("< Previous page")).toBeTruthy()
  expect(wrapper.find("li.next").contains("Next page >")).toBeTruthy()
})
