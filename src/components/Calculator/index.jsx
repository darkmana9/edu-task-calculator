import React from 'react'
import {Display} from "@/components/Calculator/Display"
import {History} from "@/components/Calculator/History"
import {Keypad} from "@/components/Calculator/Keypad"
import {CalculatorLayout} from "@/layouts"


export const Calculator = () => {
    return (
      <CalculatorLayout>
        <Display/>
        <History/>
        <Keypad/>
      </CalculatorLayout>
    )
}
