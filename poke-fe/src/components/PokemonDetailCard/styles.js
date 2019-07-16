import styled from 'styled-components'

const CardContainer = styled.article`
  display: flex;
  position: relative;
  margin: 10px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: ${props => props.vibrant};
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  transition: all 0.5s ease;
`

const CardHeader = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  margin: 0 auto 5px;
  span.id {
    font-weight: 400;
    float: right;
  }
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 10px;
`

const ImageCointainer = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
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

const DescriptionText = styled.p`
  font-family: 'Montserrat', sans-serif;
`

const ButtonCatch = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50px;
  background: ${props => (props.catch ? 'transparent' : '#cecece')};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  CardContainer,
  CardHeader,
  ImageCointainer,
  InfoContainer,
  PillWrapper,
  PillType,
  DescriptionText,
  ButtonCatch
}
