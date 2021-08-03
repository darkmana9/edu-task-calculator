import React from 'react'
import {NavLink} from "react-router-dom"

export const Header = () => {
    return (
      <div>
        <div>
          Calculator App
        </div>
        <nav>
<NavLink to="/home">Home</NavLink>
<NavLink to="/settings">Settings</NavLink>
        </nav>
      </div>
    )
}
