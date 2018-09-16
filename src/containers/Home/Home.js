import React from "react"
import { Container } from "components"
import { Header, ProductList, Pagination } from "containers"

const Home = () => (
  <Container>
    <Header />
    <ProductList />
    <Pagination />
  </Container>
)

export default Home
