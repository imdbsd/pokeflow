// @flow
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import NVibrant from 'node-vibrant'
import {
  CardContainer,
  CardHeader,
  PillType,
  PillWrapper,
  PokemonImageWrapper
} from './styles'
import { generateIdString } from '../../utils'
import { getPokemon } from '../../requests'

type CardProps = {
  id: number,
  name: string
}

function PokemonCard(props: CardProps) {
  const { id, name } = props
  const [vibrant, changeVibrant] = React.useState('#dadada')
  const [pokemon, changePokemon] = React.useState({})
  console.log(typeof vibrant)

  const loadPokemonData = async id => {
    try {
      const result = await getPokemon(id)
      changePokemon(result)
    } catch (e) {
      console.log(e)
    }
  }

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

  React.useEffect(() => {
    if (Object.keys(pokemon).length === 0) {
      loadPokemonData(id)
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
        <PillWrapper>
          {pokemon.types && (
            <Fragment>
              {pokemon.types.map(({ type }) => (
                <PillType key={type.name}>{type.name}</PillType>
              ))}
            </Fragment>
          )}
        </PillWrapper>
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
