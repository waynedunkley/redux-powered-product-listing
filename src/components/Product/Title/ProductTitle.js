import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import titleStyles from "./ProductTitle.style"

const StyledTitle = styled.p`
  ${titleStyles};
`

const propTypes = {
  text: PropTypes.string.isRequired,
}

const ProductTitle = ({ text }) => <StyledTitle>{text}</StyledTitle>

ProductTitle.propTypes = propTypes

export default ProductTitle
