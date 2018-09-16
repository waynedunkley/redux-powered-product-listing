import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import containerStyles from "./Container.style"

const StyledContainer = styled.div`
  ${containerStyles};
`

const propTypes = {
  children: PropTypes.node,
}

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

Container.propTypes = propTypes

export default Container
