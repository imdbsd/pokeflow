import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navigation {
    background-color: #fff;
    padding: 20px;
    outline: 0;
  }
`

const HeaderButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 20px;
  outline: 0;
`

export { HeaderContainer, HeaderButton }
