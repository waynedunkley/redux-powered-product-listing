import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import imageStyles from "./ProductImage.style"

const StyledImage = styled.div`
  ${imageStyles};
`

const propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

const ProductImage = ({ url, alt }) => (
  <StyledImage>
    <img src="" alt="" />
  </StyledImage>
)

ProductImage.propTypes = propTypes

export default ProductImage
