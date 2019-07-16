import styled from 'styled-components'

const SearchBarContainer = styled.section`
  display: flex;
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`

const SearchForm = styled.form`
  display: flex;
  width: 100%;
  .close-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #fff;
    padding: 0 0 0 10px;
  }
`

const FormGroup = styled.div`
  flex: 1;
  > input {
    width: 100%;
    height: 100%;
    background-color: rgba(226, 226, 226, 0.46);
    border: 1px solid #c3c3c3;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 0 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    &:focus {
      outline: none;
    }
  }
`

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #fff;
`

export { SearchBarContainer, SearchForm, FormGroup, CloseButton }
