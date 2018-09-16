import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { Product } from "components"
import divStyles from "./ProductList.style"

const StyledDiv = styled.div`
  ${divStyles};
`

const ProductList = ({ products }) => (
  <StyledDiv>
    {products &&
      products.map(product => (
        <Product
          product={{
            title: product.product_name,
            description: product.description,
            price: product.price,
            image: {
              url: product.product_image,
              alt: "alt text",
            },
          }}
        />
      ))}
  </StyledDiv>
)

const mapStateToProps = ({ productList }) => ({
  products: productList.items,
})

export default connect(mapStateToProps)(ProductList)
