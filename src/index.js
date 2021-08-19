import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Application from '@/App'
import GlobalStyles from '@/globalStyles'
import { store } from '@/reducers'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Application />
      <GlobalStyles />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
)
