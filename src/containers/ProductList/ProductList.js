import React from "react"
import { withRouter } from "react-router"
import styled from "styled-components"
import { connect } from "react-redux"
import { Product } from "components"
import divStyles from "./ProductList.style"

const StyledDiv = styled.div`
  ${divStyles};
`

const ProductList = ({ products, perPage, match }) => {
  const { params = {} } = match
  const page = params.page || 1
  const s = (page - 1) * perPage
  const e = page * perPage
  const subSet = s < products.length ? products.slice(s, e) : []
  return (
    <StyledDiv>
      {subSet &&
        subSet.map(product => (
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
}

const mapStateToProps = ({ products }) => ({
  products: products.items,
  perPage: products.perPage,
})

export default withRouter(connect(mapStateToProps)(ProductList))
