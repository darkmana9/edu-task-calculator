import React from 'react'
import {Heading} from "@/pages/Home/components"
import {HistoryTextArea, HistoryWrapper} from "@/components/Calculator/History/components"



export const History = () => {
    return (
      <HistoryWrapper>
        <Heading>History</Heading>
        <HistoryTextArea>History textarea</HistoryTextArea>
      </HistoryWrapper>
    )
}
