import styled from 'styled-components'

const EvolutionChain = styled.div`
  display: flex;
  text-align: center;
  > * {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const EvolutionContainer = styled.article`
  p {
    margin: 0;
    font-size: 12px;
  }
`

const EvolutionStatus = styled.p`
  margin: 0;
  text-align: center;
  font-size: 12px;
`

export { EvolutionChain, EvolutionContainer, EvolutionStatus }
