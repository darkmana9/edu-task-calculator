import React from 'react'
import {Display} from "@/components/Calculator/Display"
import {History} from "@/components/Calculator/History"
import {Keypad} from "@/components/Calculator/Keypad"


export const Calculator = () => {
    return (
      <div>
        <Display/>
        <History/>
        <Keypad/>
      </div>
    )
}
