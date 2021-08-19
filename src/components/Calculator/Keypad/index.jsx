import React, { useMemo } from 'react'

import { KeypadButton, KeypadWrapper } from "@/components/Calculator/Keypad/components"

export const Keypad = ({onHandleOperationsButton}) => {

  const buttonsText = useMemo(() =>
      ['C', '7', '8', '9', '*',
        '-', '4', '5', '6', '/',
        '+', '1', '2', '3', '=',
        '.', 'CS', '0', '%', 'CE'],
    [],
  )

  return (
    <KeypadWrapper onClick={onHandleOperationsButton}>
      {buttonsText.map(el => <KeypadButton key={el}>{el}</KeypadButton>)}
    </KeypadWrapper>
  )
}
