import React from 'react'

import { PageLayout } from '@/layouts'
import {Heading} from "@/pages/Home/components"
import {SettingsOptions} from "@/pages/Settings/components"


export default () => {
  return (
    <PageLayout>
      <Heading>Settings</Heading>
      <SettingsOptions>
      <label htmlFor="theme">
        Switch theme
      <select defaultValue="Colored Theme" name="theme">
        <option value="LightTheme">Light Theme</option>
        <option value="DarkTheme">Dark Theme</option>
        <option value="Colored Theme">Colored Theme</option>
      </select>
      </label>
      <button>Clear all history</button>
      </SettingsOptions>
    </PageLayout>
  )
}
