import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import priceStyles from "./ProductPrice.style"

const StyledPrice = styled.p`
  ${priceStyles};
`

const propTypes = {
  price: PropTypes.string.isRequired,
}

const ProductPrice = ({ price }) => <StyledPrice>{price}</StyledPrice>

ProductPrice.propTypes = propTypes

export default ProductPrice
