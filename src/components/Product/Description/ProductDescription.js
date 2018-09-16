import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import descriptionStyles from "./ProductDescription.style"

const StyledDescription = styled.p`
  ${descriptionStyles};
`

const propTypes = {
  text: PropTypes.string.isRequired,
}

const ProductDescription = ({ text }) => (
  <StyledDescription>{text}</StyledDescription>
)

ProductDescription.propTypes = propTypes

export default ProductDescription
