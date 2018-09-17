import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Product } from "components"
import divStyles from "./ProductList.style"

const StyledDiv = styled.div`
  ${divStyles};
`

const propTypes = {
  products: PropTypes.array.isRequired,
}

const ProductList = ({ products }) => (
  <StyledDiv>
    {products &&
      products.map(product => (
        <Product
          key={product.id}
          product={{
            title: product.product_name,
            description: product.description,
            price: product.price,
            image: {
              url: product.product_image,
              alt: product.product_name,
            },
          }}
        />
      ))}
  </StyledDiv>
)

ProductList.propTypes = propTypes

export default ProductList
