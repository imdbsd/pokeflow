import styled from 'styled-components'

const SpeciesBody = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  text-align: center;
`

const SpeciesDiv = styled.div`
  display: flex;
  text-align: center;
  div {
    flex: 1;
    margin: 0 auto 5px;
    p:nth-child(1) {
      font-weight: bold;
      font-size: 14px;
    }
    p:nth-child(2) {
      font-weight: 400;
      font-size: 10px;
    }
  }
`

export { SpeciesBody, SpeciesDiv }
