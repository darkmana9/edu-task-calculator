import React from 'react'
import {DisplayInput, DisplayWrapper} from "@/components/Calculator/Display/components"
import * as PropTypes from "prop-types"


export const Display = props => {
  return (
    <DisplayWrapper>
      <DisplayInput readOnly value={props.inputValue}
                    type="text"/>
    </DisplayWrapper>
  )
}

Display.prototype = {
  inputValue: PropTypes.string,
}
