import React from 'react'
import DescriptionCard from '../DescriptionCard'
import { AbilititesPill, AbilititesHiddenPill } from './styles'

function AbilitiesCard(props) {
  return (
    <DescriptionCard title="Abilities" vibrant={props.vibrant.hex}>
      {props.pokemon.abilities.map(ability => {
        return (
          !ability.isHidden && (
            <AbilititesPill key={ability.name}>
              <p>{ability.name}</p>
            </AbilititesPill>
          )
        )
      })}
      {props.pokemon.abilities.map(ability => {
        return (
          ability.isHidden && (
            <AbilititesHiddenPill
              key={ability.name}
              vibrant={props.vibrant.rgb}
            >
              <span>Hidden</span>
              <p>{ability.name}</p>
            </AbilititesHiddenPill>
          )
        )
      })}
    </DescriptionCard>
  )
}

export default AbilitiesCard
