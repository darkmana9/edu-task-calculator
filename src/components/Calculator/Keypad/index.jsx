import React from 'react'
import {Button} from "@/components/Calculator/Keypad/Button"
import {KeypadWrapper} from "@/components/Calculator/Keypad/components"


export const Keypad = props => {

  const buttonsText =
    ['C', '7', '8', '9', '*',
      '-', '4', '5', '6', '/',
      '+', '1', '2', '3', '=',
      '.', '(', '0', ')', 'CE']

  return (
    <KeypadWrapper>
      {buttonsText.map((el, i) => {
        return <Button handleNumbersButtons={props.handleNumbersButtons}
                       key={i}
                       text={buttonsText[i]}/>
      })}
    </KeypadWrapper>
  )
}