import React from 'react'
import {Button} from "@/components/Calculator/Keypad/Button"
import {KeyPadGrid} from "@/components/Calculator/Keypad/components"


export const Keypad = () => {

  const buttonsText =
    ['C', '7', '8', '9', '*',
      '-', '4', '5', '6', '/',
      '+', '1', '2', '3', '=',
      '.', '(', '0', ')', 'CE']

  return (
    <KeyPadGrid>
      {buttonsText.map((el, i) => {

        return <Button key={i} text={buttonsText[i]}/>
      })}
    </KeyPadGrid>
  )
}
