import React from 'react'
import { PaginationContainer, PaginationButton } from './styles'
import RightArrow from '../../assets/icon/RightArrow.svg'
import LeftArrow from '../../assets/icon/LeftArrow.svg'

function Paginations(props) {
  const { handlePagination, next, previous } = props
  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => handlePagination(previous)}
        disabled={previous === null}
      >
        <img src={LeftArrow} alt="back" />
      </PaginationButton>
      <PaginationButton
        onClick={() => handlePagination(next)}
        disabled={next === null}
      >
        <img src={RightArrow} alt="forward" />
      </PaginationButton>
    </PaginationContainer>
  )
}

export default Paginations
