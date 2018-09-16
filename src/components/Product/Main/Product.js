import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "components"
import divStyles from "./Product.style"

const StyledDiv = styled.div`
  ${divStyles};
`

const propTypes = {
  product: PropTypes.object.isRequired,
}

const Product = ({ product }) => (
  <StyledDiv>
    <ProductImage url={product.image.url} alt={product.image.alt} />
    <ProductTitle text={product.title} />
    <ProductDescription text={product.description} />
    <ProductPrice price={product.price} />
  </StyledDiv>
)

Product.propTypes = propTypes

export default Product
