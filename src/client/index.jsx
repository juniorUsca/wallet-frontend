import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { addLocaleData, IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'

// import en from 'react-intl/locale-data/en'
// import es from 'react-intl/locale-data/es'

// import messages from './messages.json'
import App from '../app/app';
import store from '../redux/store'

// addLocaleData([...en, ...es])
// const locale = navigator.languages.indexOf('es') >= 0 ? 'es' : 'en'

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('render-target'),
)
