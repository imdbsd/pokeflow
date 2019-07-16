import React, { Fragment, Component } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Header, PokemonCard, Paginations } from '../../components'
import { AppContainer } from '../constant.styles'

const GET_POKEMON_QUERY = gql`
  query GET_POKEMON_QUERY($url: String!) {
    getPokemons(url: $url) {
      next
      previous
      pokemons {
        id
        name
        url
      }
    }
  }
`

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <AppContainer>
          <Query query={GET_POKEMON_QUERY} variables={{ url: '' }}>
            {({ loading, error, data, fetchMore }) => {
              if (loading) return 'Loading...'
              if (error) return `Error! ${error.message}`
              console.log(data)
              return (
                <Fragment>
                  {data.getPokemons.pokemons.map((pokemon, index) => (
                    <PokemonCard key={pokemon.id} {...pokemon} />
                  ))}
                  <Paginations
                    handlePagination={url =>
                      fetchMore({
                        variables: {
                          url: url
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                          if (!fetchMoreResult) return prev
                          console.log({ fetchMoreResult })
                          return Object.assign({}, prev, {
                            getPokemons: { ...fetchMoreResult.getPokemons }
                          })
                        }
                      })
                    }
                    next={data.getPokemons.next}
                    previous={data.getPokemons.previous}
                  />
                </Fragment>
              )
            }}
          </Query>
        </AppContainer>
      </Fragment>
    )
  }
}

export default Home
