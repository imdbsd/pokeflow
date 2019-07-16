import styled from 'styled-components'

const AbilititesPill = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 2px;
  margin: 0 auto 10px;
  p {
    font-size: 14px;
    text-align: center;
    margin: 0;
    font-weight: bold;
    font-size: 12px;
  }
`

const AbilititesHiddenPill = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 2px;
  position: relative;
  margin: 0 auto 10px;
  span {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 12px;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: ${props =>
      props.vibrant
        ? `rgba(${props.vibrant.join(',')}, 0.4)`
        : 'rgba(206, 206, 206, 0.4)'};
    padding: 0 10px;
  }
  p {
    font-size: 14px;
    text-align: center;
    margin: 0;
    font-weight: bold;
    font-size: 12px;
  }
`

export { AbilititesPill, AbilititesHiddenPill }
