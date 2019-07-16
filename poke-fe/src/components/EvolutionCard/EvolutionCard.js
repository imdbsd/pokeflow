import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import DescriptionCard from '../DescriptionCard'
import { EvolutionChain, EvolutionContainer, EvolutionStatus } from './styles'
import ArrowRight from '../../assets/icon/ArrowRight.svg'

function EvolutionCard(props) {
  const { pokemon, vibrant } = props

  return (
    <DescriptionCard title="Evolution" vibrant={vibrant.hex}>
      <EvolutionChain>
        {props.pokemon.evolutionChain.map((chain, index) => (
          <Fragment key={`evolve_${chain.id}`}>
            <EvolutionContainer>
              <Link
                to={{
                  pathname: `/detail/${chain.id}`
                }}
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    chain.id
                  }.png`}
                />
              </Link>
              <p>{chain.speciesName}</p>
            </EvolutionContainer>
            {index < props.pokemon.evolutionChain.length - 1 && (
              <div>
                <EvolutionStatus>
                  {props.pokemon.evolutionChain[index + 1].triggerName.replace(
                    /-/g,
                    ' '
                  )}
                  &nbsp;
                  {props.pokemon.evolutionChain[index + 1].triggerName ===
                  'use-item'
                    ? props.pokemon.evolutionChain[index + 1].item.name
                    : 'at ' + props.pokemon.evolutionChain[index + 1].minLevel}
                </EvolutionStatus>
                <img src={ArrowRight} alt="arrow right" />
              </div>
            )}
          </Fragment>
        ))}
      </EvolutionChain>
    </DescriptionCard>
  )
}

export default EvolutionCard
