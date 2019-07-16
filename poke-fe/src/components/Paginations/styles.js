import styled from 'styled-components'

const PaginationContainer = styled.section`
  display: flex;
  justify-content: center;
`

const PaginationButton = styled.button`
  border: 1px solid #cecece;
  display: flex;
  padding: 10px;
  img {
    width: 9px;
  }
  &:nth-child(1) {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  &:nth-child(2) {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
`

export { PaginationContainer, PaginationButton }
