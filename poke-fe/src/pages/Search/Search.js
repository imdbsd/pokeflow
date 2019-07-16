// @flow
import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { SearchBar, PokemonCard } from '../../components'
import { AppContainer } from '../constant.styles'

type SearchState = {
  pokemon: Array<Object>,
  searchKey: string
}

const FIND_POKEMON_BY_ID = gql`
  query FIND_POKEMON_BY_ID($name: String!) {
    findPokemonByName(name: $name) {
      id
      name
      types
      sprites
    }
  }
`
class Search extends Component<{}, SearchState> {
  state = {
    pokemon: [],
    searchKey: ''
  }

  handleSearchPokemon = (key: string) => {
    if (key) {
      this.setState({ searchKey: key })
    }
  }

  render() {
    return (
      <Query
        query={FIND_POKEMON_BY_ID}
        variables={{ name: this.state.searchKey }}
      >
        {({ loading, error, data, fetchMore }) => {
          console.log({ data })
          return (
            <Fragment>
              <SearchBar handleSearchPokemon={this.handleSearchPokemon} />
              {loading && 'Loading...'}
              {error && `Error! ${error.message}`}
              {data && (
                <AppContainer>
                  <PokemonCard
                    id={data.findPokemonByName ? data.findPokemonByName.id : ''}
                    name={
                      data.findPokemonByName ? data.findPokemonByName.name : ''
                    }
                    key={
                      data.findPokemonByName ? data.findPokemonByName.id : ''
                    }
                  />
                </AppContainer>
              )}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default Search
