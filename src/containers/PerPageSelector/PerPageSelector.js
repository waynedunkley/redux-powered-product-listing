import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"
import { updatePerPage } from "redux/modules/products"
import selectStyles from "./PerPageSelector.style"

const StyledSelect = styled.select`
  ${selectStyles};
`

const propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const values = [8, 16, 32]

const PerPageSelector = ({ dispatch }) => (
  <StyledSelect onChange={e => dispatch(updatePerPage(e.currentTarget.value))}>
    {values && values.map(v => <option value={v}>{v} per page</option>)}
  </StyledSelect>
)

PerPageSelector.propTypes = propTypes

export default connect()(PerPageSelector)
