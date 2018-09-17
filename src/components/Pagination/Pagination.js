import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
import divStyles from "./Pagination.style"

const StyledDiv = styled.div`
  ${divStyles};
`

const propTypes = {
  current: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
}

const Pagination = ({ current, totalPages }) => {
  let links = []
  if (current === 1) {
    links = [1, 2, 3]
  } else if (current === totalPages) {
    links = [totalPages - 2, totalPages - 1, totalPages]
  } else {
    links = [current - 1, current, current + 1]
  }
  return (
    <StyledDiv>
      <ul>
        <li className={`prev ${current === 1 && "active"}`}>
          <Link to={`/${current - 1}`}>{`< Previous page`}</Link>
        </li>
        {links &&
          links.map(link => (
            <li key={link} className={`num ${current === link && "active"}`}>
              <Link to={`/${link}`}>{link}</Link>
            </li>
          ))}
        <li className={`next ${current === totalPages && "active"}`}>
          <Link to={`/${current + 1}`}>{`Next page >`}</Link>
        </li>
      </ul>
    </StyledDiv>
  )
}

Pagination.propTypes = propTypes

export default Pagination
