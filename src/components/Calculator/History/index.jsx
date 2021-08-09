import React from 'react'
import {Heading} from "@/pages/Home/components"
import {HistoryTextArea, HistoryWrapper} from "@/components/Calculator/History/components"


export const History = props => {
  return (
    <HistoryWrapper>
      <Heading>History</Heading>
      <HistoryTextArea value={props.history.join('')} readOnly></HistoryTextArea>
    </HistoryWrapper>
  )
}
