import React from 'react'
import * as PropTypes from "prop-types"
import {ExpressionBuilderWrapper} from "@/components/Calculator/ExpressionBuilder/components"



export const ExpressionBuilder = props => {
  return (

    <ExpressionBuilderWrapper id="expressionBuilder">
      Expression: {props.expression}
    </ExpressionBuilderWrapper>

  )
}

ExpressionBuilder.propTypes  = {
  expression: PropTypes.array,
}


