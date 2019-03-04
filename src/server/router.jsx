import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
/* import { IntlProvider } from 'react-intl' */
import { Provider } from 'react-redux'

import App from '../app/app';
import Layout from './layout';
/* import messages from './messages.json' */

import store from '../redux/store'

let staticsDomain = process.env.NODE_ENV === 'production'
  ? 'https://junior-react-statics.now.sh'
  : 'http://localhost:5000'

staticsDomain = 'http://192.168.0.7:5000'

const router = (req, res) => {
  const context = {}

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>,
  )

  res.setHeader('Content-Type', 'text/html');

  const { url } = context
  if (url) {
    res.writeHead(301, {
      Location: url,
    });
    res.end();
  }

  res.write(
    renderToStaticMarkup(
      <Layout
        html={html}
        staticsDomain={staticsDomain}
      />,
    ),
  )
  res.end()
}

export default router
