// @flow
import React from 'react'
import { withRouter } from 'react-router-dom'
import type { History, Location } from 'react-router'
import {
  SearchBarContainer,
  SearchForm,
  FormGroup,
  CloseButton
} from './styles'
import CloseIcon from '../../assets/icon/CloseIcon.svg'

type SearchBarProps = {
  history: History,
  location: Location,
  handleSearchPokemon: Function
}

function SearchBar(props: SearchBarProps) {
  const { history, handleSearchPokemon } = props
  const [key, changeKey] = React.useState('')
  let timeout

  const handleSubmit = async e => {
    if (e) {
      e.preventDefault()
    }
    handleSearchPokemon(key)
  }

  React.useEffect(() => {
    timeout = setTimeout(() => {
      if (key.length >= 3) {
        handleSubmit()
      }
    }, 500)
    return function clear() {
      clearTimeout(timeout)
    }
  })

  return (
    <SearchBarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <FormGroup>
          <input
            type="text"
            name="key"
            placeholder="Who is that pokemon..."
            onChange={e => changeKey(e.target.value)}
            value={key}
          />
        </FormGroup>
      </SearchForm>
      <CloseButton onClick={() => history.goBack()}>
        <img src={CloseIcon} alt="search" title="search" />
      </CloseButton>
    </SearchBarContainer>
  )
}

export default React.memo<SearchBarProps>(withRouter(SearchBar))
