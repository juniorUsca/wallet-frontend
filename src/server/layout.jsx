import React from 'react';
import PropTypes from 'prop-types';

function Layout(props) {
  const { html, staticsDomain } = props
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Wallet
        </title>
        {/* <link data-react-helmet="true" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" /> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
        <link rel="stylesheet" href={`${staticsDomain}/main.css`} />
      </head>
      <body>
        <div
          id="render-target"
          dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
            __html: html,
          }}
        />
        <div id="modal-target" />
        <script src={`${staticsDomain}/client.bundle.js`} />
      </body>
    </html>
  )
}

Layout.propTypes = {
  html: PropTypes.string.isRequired,
  staticsDomain: PropTypes.string.isRequired,
}

Layout.defaultProps = {}

export default Layout;
