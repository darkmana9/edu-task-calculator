import React from 'react'
import {Heading} from "@/pages/Home/components"
import {HistoryTextArea, HistoryWrapper} from "@/components/Calculator/History/components"
import * as PropTypes from "prop-types"


export const History = props => {
  return (
    <HistoryWrapper>
      <Heading>History</Heading>
      <HistoryTextArea value={props.history.join('')} readOnly />
    </HistoryWrapper>
  )
}

History.propsType = {
  history: PropTypes.array,
}
