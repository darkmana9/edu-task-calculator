import React from 'react'
import {DisplayInput, DisplayWrapper} from "@/components/Calculator/Display/components"


export const Display = props => {
  return (
    <DisplayWrapper>
      <DisplayInput readOnly value={props.inputValue}
                    type="text"/>
    </DisplayWrapper>
  )
}
