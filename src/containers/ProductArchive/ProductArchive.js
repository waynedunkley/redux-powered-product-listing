import React, { Component } from "react"
import { withRouter } from "react-router"
import { Container, ProductList, Pagination } from "components"
import { Header } from "containers"
import { connect } from "react-redux"
import { handleGetProducts } from "redux/modules/products"

const getProductSubset = (products, currentPage, perPage) => {
  const start = (currentPage - 1) * perPage
  const end = currentPage * perPage
  return start < products.length ? products.slice(start, end) : []
}

class ProductArchive extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetProducts())
  }
  render() {
    const { products, perPage, match } = this.props
    const { params = {} } = match
    const currentPage = params.page || 1
    return (
      <Container>
        <Header />
        <ProductList
          products={getProductSubset(products, currentPage, perPage)}
        />
        <Pagination
          current={parseInt(currentPage, 0)}
          totalPages={Math.ceil(products.length / perPage)}
        />
      </Container>
    )
  }
}

const mapStateToProps = ({ products }) => ({
  products: products.items,
  perPage: products.perPage,
})

export default withRouter(connect(mapStateToProps)(ProductArchive))
