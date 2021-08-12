import styled from 'styled-components'
import {NavLink} from "react-router-dom"

export const HeaderTitleText = styled.span`
  font-size: 50px;
`
export const HeaderNavLayout = styled.nav`
    width: 115px;
    display: flex;
    justify-content: space-between;
`
export const LinksText = styled(NavLink)`
    font-size: 16px;
    color:  ${({theme}) => theme.colors.fontColor};
    text-decoration: none;
    &.active {
    border-bottom: 1px solid;
  }
`
