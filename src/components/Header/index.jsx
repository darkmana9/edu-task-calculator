import React from 'react'
import {HeaderNavLayout, HeaderTitleText, LinksText} from "@/components/Header/components"
import {HeaderLayout} from "@/layouts"

export const Header = () => {
  return (
    <HeaderLayout>
      <HeaderTitleText>
        Calculator App
      </HeaderTitleText>
      <HeaderNavLayout>
        <LinksText to="/">Home</LinksText>
        <LinksText to="/settings">Settings</LinksText>
      </HeaderNavLayout>
    </HeaderLayout>
  )
}
