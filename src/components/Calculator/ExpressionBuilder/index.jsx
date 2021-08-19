import React from 'react'
import * as PropTypes from "prop-types"

import {ExpressionBuilderWrapper} from "@/components/Calculator/ExpressionBuilder/components"

export const ExpressionBuilder = ({expression}) => {
  return (
    <ExpressionBuilderWrapper id="expressionBuilder">
      Expression: {expression}
    </ExpressionBuilderWrapper>
  )
}

ExpressionBuilder.propTypes  = {
  expression: PropTypes.array.isRequired,
}


