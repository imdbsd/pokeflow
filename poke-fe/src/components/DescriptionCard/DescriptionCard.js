import React from 'react'
import {
  DataWrapper,
  DataTitleWrapper,
  DataTitlePill
} from '../constant.styles'

function DescriptionCard(props) {
  return (
    <DataWrapper vibrant={props.vibrant}>
      <DataTitleWrapper>
        <DataTitlePill vibrant={props.vibrant}>{props.title}</DataTitlePill>
      </DataTitleWrapper>
      {props.children}
    </DataWrapper>
  )
}

export default DescriptionCard
