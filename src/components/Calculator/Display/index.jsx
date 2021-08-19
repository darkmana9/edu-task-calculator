import React from 'react'
import * as PropTypes from "prop-types"

import { DisplayInput, DisplayWrapper } from "@/components/Calculator/Display/components"

export const Display = props => {
  return (
    <DisplayWrapper>
      <DisplayInput
        readOnly
        value={props.inputValue}
        type="text"
      />
    </DisplayWrapper>
  )
}

Display.propTypes = {
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
