import React, {Fragment} from 'react'
import {KeypadButton} from "@/components/Calculator/Keypad/Button/components"


export const Button = props => {

  return (
    <Fragment >
       <KeypadButton>{props.text}</KeypadButton>
    </Fragment>
  )
}
