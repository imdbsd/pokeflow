import React from 'react'
import DescriptionCard from '../DescriptionCard'
import { getMaximumStats, getStatsPercentage } from '../../utils'
import { StatsName, StatsPill, StatsBar } from './styles'

function StatsCard(props) {
  const maximumStats = getMaximumStats(props.pokemon.stats)
  return (
    <DescriptionCard title="Base Stats" vibrant={props.vibrant.hex}>
      {props.pokemon.stats.map(status => (
        <StatsPill key={status.name}>
          <StatsName>{status.name}</StatsName>
          <StatsBar
            style={{
              width: getStatsPercentage(status.baseStat, maximumStats) + '%'
            }}
          >
            {status.baseStat}
          </StatsBar>
        </StatsPill>
      ))}
    </DescriptionCard>
  )
}

export default StatsCard
