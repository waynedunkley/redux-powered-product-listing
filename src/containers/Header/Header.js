import React from "react"
import styled from "styled-components"
import { PerPageSelector } from "containers"
import divStyles from "./Header.style"

const StyledDiv = styled.div`
  ${divStyles};
`

const Header = () => (
  <StyledDiv>
    <div>
      <h1>All Products</h1>
      <p>24 Products</p>
    </div>
    <PerPageSelector />
  </StyledDiv>
)

export default Header
