import React, { Component } from "react"
import { Container } from "components"
import { Header, ProductList, Pagination } from "containers"
import { connect } from "react-redux"
import { handleGetProducts } from "redux/modules/products"

class ProductArchive extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetProducts())
  }
  render() {
    return (
      <Container>
        <Header />
        <ProductList />
        <Pagination />
      </Container>
    )
  }
}

export default connect()(ProductArchive)
