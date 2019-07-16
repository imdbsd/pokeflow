import React, { Fragment } from 'react'
import { generateIdString } from '../../utils'
import {
  CardContainer,
  CardHeader,
  ImageCointainer,
  InfoContainer,
  PillType,
  PillWrapper,
  DescriptionText,
  ButtonCatch
} from './styles'

function PokemonDetailCard(props) {
  const { pokemon, vibrant } = props
  return (
    <CardContainer vibrant={vibrant.hex}>
      <InfoContainer>
        <CardHeader>
          {pokemon.name}
          <span className="id"># {generateIdString(pokemon.id)}</span>
        </CardHeader>
        <DescriptionText>&nbsp;</DescriptionText>
        <PillWrapper>
          {pokemon.types && (
            <Fragment>
              {pokemon.types.map(type => (
                <PillType key={type}>{type}</PillType>
              ))}
            </Fragment>
          )}
        </PillWrapper>
      </InfoContainer>
      <ImageCointainer>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.id
          }.png`}
          alt={pokemon.name}
        />
        <ButtonCatch catch={false}>
          <span>&nbsp;</span>
        </ButtonCatch>
      </ImageCointainer>
    </CardContainer>
  )
}

export default PokemonDetailCard
