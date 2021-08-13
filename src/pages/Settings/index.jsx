import React from 'react'

import {PageLayout} from '@/layouts'
import {Heading} from "@/pages/Home/components"
import {SettingsOptions} from "@/pages/Settings/components"


export default props => {
  return (
    <PageLayout>
      <Heading>Settings</Heading>
      <SettingsOptions>
        <label htmlFor="theme">
          Switch theme
          <select onChange={props.handleSelectTheme} defaultValue={localStorage.getItem('theme')}
                  name="theme">
            <option>Colored Theme</option>
            <option>Light Theme</option>
            <option>Dark Theme</option>
          </select>
        </label>
        <button onClick={() => {
          localStorage.clear()
        }}>Clear all history
        </button>
      </SettingsOptions>
    </PageLayout>
  )
}
