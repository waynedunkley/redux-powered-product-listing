import React from "react"
import { connect } from "react-redux"

const ProductTotal = ({ total }) => <p>{total} Products</p>

const mapStateToProps = ({ products }) => ({
  total: products.items.length,
})

export default connect(mapStateToProps)(ProductTotal)
