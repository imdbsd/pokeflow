// @flow
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import NVibrant from 'node-vibrant'
import {
  CardContainer,
  CardHeader,
  PillType,
  PillWrapper,
  PokemonImageWrapper
} from './styles'
import { generateIdString } from '../../utils'

type CardProps = {
  id: number,
  name: string
}

const FIND_POKEMON_BY_ID = gql`
  query FIND_POKEMON_BY_ID($id: ID) {
    findPokemonById(id: $id) {
      types
    }
  }
`

function PokemonCard(props: CardProps) {
  const { id, name } = props
  const [vibrant, changeVibrant] = React.useState('#dadada')

  React.useEffect(() => {
    if (vibrant === '#dadada') {
      NVibrant.from(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      )
        .getPalette()
        .then(({ Vibrant }) => {
          changeVibrant(Vibrant.getHex())
        })
    }
  })

  return (
    <Link
      to={{
        pathname: `/detail/${id}`
      }}
    >
      <CardContainer vibrant={vibrant}>
        <CardHeader>
          <span className="id"># {generateIdString(id)}</span> {name}
        </CardHeader>
        <Query query={FIND_POKEMON_BY_ID} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            return (
              <PillWrapper>
                {data.findPokemonById.types && (
                  <Fragment>
                    {data.findPokemonById.types.map(type => (
                      <PillType key={type + id}>{type}</PillType>
                    ))}
                  </Fragment>
                )}
              </PillWrapper>
            )
          }}
        </Query>
        <PokemonImageWrapper>
          {id && (
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt={name}
            />
          )}
        </PokemonImageWrapper>
      </CardContainer>
    </Link>
  )
}

export default PokemonCard
