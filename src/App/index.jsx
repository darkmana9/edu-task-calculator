import React, {lazy, Suspense, useState, useEffect} from 'react'
import {Switch, Route} from 'react-router-dom'

import {HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE} from '@/constants'

import Loader from '@/components/Loader'
import {Header} from "@/components/Header"
import {ThemeProvider} from "styled-components"
import {coloredTheme, lightTheme, darkTheme} from "@/theme"

const HomePage = lazy(() => import('@/pages/Home'))
const Settings = lazy(() => import('@/pages/Settings'))

export default () => {

  const [theme, setTheme] = useState('Colored Theme')

  const getTheme = stringTheme => {
    switch (stringTheme){
      case 'Colored Theme': {
        return coloredTheme
      }
      case 'Light Theme': {
        return lightTheme
      }
      case 'Dark Theme': {
        return darkTheme
      }
    }
  }

  useEffect(() => {
    if(localStorage.getItem('theme')){
      setTheme(localStorage.getItem('theme'))
    }
  }, [])

  const handleSelectTheme = e => {
    setTheme(e.target.value)
    localStorage.setItem('theme', e.target.value)
  }

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
            render={()=><Settings handleSelectTheme={handleSelectTheme} />}
          />
        </Switch>
      </Suspense>
    </ThemeProvider>
  )
}
