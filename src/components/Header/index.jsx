import React from 'react'
import {NavLink} from "react-router-dom"
import {HeaderTitleText} from "@/components/Header/components"
import {HeaderLayout} from "@/layouts"

export const Header = () => {
  return (
    <HeaderLayout>
      <HeaderTitleText>
        Calculator App
      </HeaderTitleText>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </HeaderLayout>
  )
}
