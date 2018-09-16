import React from "react"
import styled from "styled-components"
import { Product } from "components"
import divStyles from "./ProductList.style"

const StyledDiv = styled.div`
  ${divStyles};
`

const ProductList = () => (
  <StyledDiv>
    <Product
      product={{
        title: "title",
        description: "description",
        price: "$59.99",
        image: {
          url: "",
          alt: "alt text",
        },
      }}
    />
  </StyledDiv>
)

export default ProductList
