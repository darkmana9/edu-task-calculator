import React, { lazy, Suspense, useState, useEffect, useCallback } from 'react'
import { Switch, Route } from 'react-router-dom'

import Loader from '@/components/Loader'
import { Header } from "@/components/Header"
import { ThemeProvider } from "styled-components"
import { coloredTheme, lightTheme, darkTheme } from "@/theme"
import { themes } from "@/constants/theme"
import { keys } from "@/constants/localStorage"
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

const HomePage = lazy(() => import('@/pages/Home'))
const Settings = lazy(() => import('@/pages/Settings'))

export default () => {

  const [theme, setTheme] = useState('Colored Theme')

  const getTheme = stringTheme => {
    switch (stringTheme) {
      case themes.colored: {
        return coloredTheme
      }
      case themes.light: {
        return lightTheme
      }
      case themes.dark: {
        return darkTheme
      }
    }
  }

  useEffect(() => {
    const themeItem = localStorage.getItem(keys.theme)
    if (themeItem) {
      setTheme(themeItem)
    }
  }, [])

  const handleSelectTheme = e => {
    setTheme(e.target.value)
    localStorage.setItem(keys.theme, e.target.value)
  }

  const settingsWrapper = useCallback(
    () => <Settings onHandleSelectTheme={handleSelectTheme}/>,
    [theme])

  return (
    <ThemeProvider theme={getTheme(theme)}>
      <Suspense fallback={<Loader/>}>
        <Header/>
        <Switch>
          <Route
            exact
            path={HOME_PAGE_ROUTE}
            component={HomePage}
          />
          <Route
            exact
            path={SETTINGS_PAGE_ROUTE}
            render={settingsWrapper}
          />
        </Switch>
      </Suspense>
    </ThemeProvider>
  )
}
