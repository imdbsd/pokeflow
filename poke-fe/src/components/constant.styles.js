import styled from 'styled-components'

const DataWrapper = styled.section`
  border-radius: 10px;
  width: 100%;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  margin: 25px auto;
  padding: 35px 10px 20px;
  box-sizing: border-box;
  background-color: ${props => (props.vibrant ? props.vibrant : '#cecece')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const DataTitleWrapper = styled.div`
  position: absolute;
  top: -15px;
  text-align: center;
  width: 100%;
`

const DataTitlePill = styled.h3`
  padding: 10px 5px;
  font-size: 14px;
  margin: 0;
  display: inline-block;
  background-color: ${props => (props.vibrant ? props.vibrant : '#cecece')};
  width: 150px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export { DataWrapper, DataTitleWrapper, DataTitlePill }
