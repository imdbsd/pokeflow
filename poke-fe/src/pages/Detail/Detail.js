// @flow
import React, { Component, Fragment } from 'react'
import type { History, Location } from 'react-router'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import NVibrant from 'node-vibrant'
import { AppContainer } from '../constant.styles'
import {
  Header,
  PokemonDetailCard,
  SpeciesCard,
  AbilitiesCard,
  StatsCard,
  EvolutionCard
} from '../../components'
import { getPokemon } from '../../requests'

type DetailProps = {
  history: History,
  location: Location,
  match: {
    isExact: boolean,
    path: string,
    url: string,
    params: {
      id: string | number
    }
  }
}

const FIND_POKEMON_BY_ID = gql`
  query FIND_POKEMON_BY_ID($id: ID) {
    findPokemonById(id: $id) {
      id
      name
      height
      weight
      desc
      stats {
        baseStat
        name
      }
      abilities {
        isHidden
        name
      }
      types
      evolutionChain {
        id
        item
        minLevel
        speciesName
        triggerName
      }
      sprites
    }
  }
`

class Detail extends Component<DetailProps, *> {
  state = {
    pokemon: {},
    vibrant: '#dadada'
  }

  loadVibrant = () => {
    const { match } = this.props
    if (this.state.vibrant === '#dadada') {
      NVibrant.from(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          match.params.id
        }.png`
      )
        .getPalette()
        .then(({ Vibrant }) => {
          console.log(Vibrant.getRgb())
          this.setState({
            vibrant: {
              hex: Vibrant.getHex(),
              rgb: Vibrant.getRgb()
            }
          })
        })
    }
  }

  async componentDidMount() {
    this.loadVibrant()
    try {
      const { match } = this.props
      const response = await getPokemon(parseInt(match.params.id))
      this.setState({
        pokemon: response
      })
      console.log({ response })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <Fragment>
        <Header menuIcon="back" />
        <Query
          query={FIND_POKEMON_BY_ID}
          variables={{ id: this.props.match.params.id }}
        >
          {({ loading, error, data, fetchMore }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            const { findPokemonById } = data
            return (
              <AppContainer>
                {Object.keys(this.state.pokemon).length > 0 && (
                  <Fragment>
                    <PokemonDetailCard
                      pokemon={{
                        name: findPokemonById.name,
                        id: findPokemonById.id,
                        types: findPokemonById.types
                      }}
                      vibrant={this.state.vibrant}
                    />
                    <SpeciesCard
                      pokemon={{
                        height: findPokemonById.height,
                        weight: findPokemonById.weight,
                        flavourText: findPokemonById.desc
                      }}
                      vibrant={this.state.vibrant}
                    />
                    <AbilitiesCard
                      pokemon={{
                        abilities: findPokemonById.abilities
                      }}
                      vibrant={this.state.vibrant}
                    />
                    <StatsCard
                      pokemon={{ stats: findPokemonById.stats }}
                      vibrant={this.state.vibrant}
                    />
                    <EvolutionCard
                      pokemon={{
                        evolutionChain: findPokemonById.evolutionChain
                      }}
                      vibrant={this.state.vibrant}
                    />
                  </Fragment>
                )}
              </AppContainer>
            )
          }}
        </Query>
      </Fragment>
    )
  }
}

export default Detail
