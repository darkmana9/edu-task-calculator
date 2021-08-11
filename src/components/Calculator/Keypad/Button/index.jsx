import React, {Fragment} from 'react'
import {KeypadButton} from "@/components/Calculator/Keypad/Button/components"


export const Button = props => {

  return (
    <Fragment>
      {props.text.match(/[0-9,.]/) && <KeypadButton onClick={e => {return props.handleNumbersButtons(props.text, e)}}>{props.text}</KeypadButton>}
      {props.text.match(/[%+*/-]/) && <KeypadButton onClick={e => {return props.handleOperationsButton(props.text, e)}} >{props.text}</KeypadButton>}
      {props.text.match(/[C=]/) && <KeypadButton onClick={e => {return props.handleSimpleOperationsButton(props.text, e)}} >{props.text}</KeypadButton>}
    </Fragment>
  )
}
