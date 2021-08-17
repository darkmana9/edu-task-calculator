import React from 'react'
import {Button} from "@/components/Calculator/Keypad/Button"
import {KeypadWrapper} from "@/components/Calculator/Keypad/components"


export const Keypad = props => {

  const buttonsText =
    ['C', '7', '8', '9', '*',
      '-', '4', '5', '6', '/',
      '+', '1', '2', '3', '=',
      '.', 'CS', '0', '%', 'CE']

  return (
    <KeypadWrapper onClick={props.onHandleOperationsButton}>
      {buttonsText.map((el, i) => {
        return <Button
          key={buttonsText[i]}
          text={buttonsText[i]}/>
      })}
    </KeypadWrapper>
  )
}
