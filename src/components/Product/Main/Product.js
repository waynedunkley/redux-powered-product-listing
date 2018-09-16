import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "components"
import divStyles, { contentStyles } from "./Product.style"

const StyledDiv = styled.div`
  ${divStyles};
`

const ProductContent = styled.div`
  ${contentStyles};
`

const propTypes = {
  product: PropTypes.object.isRequired,
}

const Product = ({ product }) => (
  <StyledDiv>
    <ProductImage url={product.image.url} alt={product.image.alt} />
    <ProductContent>
      <ProductTitle text={product.title} />
      <ProductDescription text={product.description} />
      <ProductPrice price={product.price} />
    </ProductContent>
  </StyledDiv>
)

Product.propTypes = propTypes

export default Product
