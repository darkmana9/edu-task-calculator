import React from 'react'
import {NavLink} from "react-router-dom"
import {HeaderTitleText} from "@/components/Header/components"

export const Header = () => {
  return (
    <div>
      <HeaderTitleText>
        Calculator App
      </HeaderTitleText>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </div>
  )
}
