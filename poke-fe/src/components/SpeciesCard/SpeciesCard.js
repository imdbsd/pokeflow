import React from 'react'
import DescriptionCard from '../DescriptionCard'
import { getPokemonSpecies } from '../../requests'
import { SpeciesBody, SpeciesDiv } from './styles'

function SpeciesCard(props) {
  return (
    <DescriptionCard title="Species" vibrant={props.vibrant.hex}>
      <div>
        <SpeciesBody>{props.pokemon.flavourText}</SpeciesBody>
      </div>
      <SpeciesDiv>
        <div>
          <p>{(props.pokemon.height * 0.1).toFixed(1)} m</p>
          <p>Height</p>
        </div>
        <div>
          <p>{props.pokemon.weight * 0.1} m</p>
          <p>Weight</p>
        </div>
      </SpeciesDiv>
    </DescriptionCard>
  )
}

export default SpeciesCard
