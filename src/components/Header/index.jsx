import React from 'react'
import {NavLink} from "react-router-dom"
import {HeaderNavLayout, HeaderTitleText} from "@/components/Header/components"
import {HeaderLayout} from "@/layouts"

export const Header = () => {
  return (
    <HeaderLayout>
      <HeaderTitleText>
        Calculator App
      </HeaderTitleText>
      <HeaderNavLayout>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </HeaderNavLayout>
    </HeaderLayout>
  )
}
