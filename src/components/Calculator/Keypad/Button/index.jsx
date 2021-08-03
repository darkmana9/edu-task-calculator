import React from 'react'
import {KeypadButton} from "@/components/Calculator/Keypad/Button/components"


export const Button = props => {

    return (
        <KeypadButton>{props.text}</KeypadButton>
    )
}
