import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { updatePerPage } from "redux/modules/products"
import selectStyles from "./PerPageSelector.style"

const StyledSelect = styled.select`
  ${selectStyles};
`

const PerPageSelector = ({ dispatch }) => (
  <StyledSelect onChange={e => dispatch(updatePerPage(e.currentTarget.value))}>
    <option value="8">8 per page</option>
    <option value="16">16 per page</option>
    <option value="32">32 per page</option>
  </StyledSelect>
)

export default connect()(PerPageSelector)
