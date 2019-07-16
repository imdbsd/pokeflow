import styled from 'styled-components'

const CardContainer = styled.article`
  position: relative;
  margin: 10px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: ${props => props.vibrant};
  width: 100%;
  height: 88px;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.5s ease;
`

const CardHeader = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  margin: 0 auto 5px;
  span.id {
    font-weight: 400;
  }
`

const PillWrapper = styled.div`
  margin: 25px auto 0;
`

const PillType = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  border: 1px solid #000;
  padding: 5px 30px;
  margin-right: 10px;
  border-radius: 50px;
  &:last-child {
    margin: 0;
  }
`

const PokemonImageWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100px;
  right: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.4);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
`

export { CardContainer, CardHeader, PillType, PillWrapper, PokemonImageWrapper }
