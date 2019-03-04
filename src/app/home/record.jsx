import React from 'react'
import PropTypes from 'prop-types'

function Record(props) {
  const { handleClick } = props
  return (
    <div
      className="box u-p-15"
      onClick={handleClick}
      role="button"
      tabIndex="-1"
      onKeyUp={() => {}}
    >
      <article className="media v-align">
        <figure className="media-left">
          <p className="image is-48x48">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <div className="level">
              <div>
                <h2 className="title is-6">Apple Store</h2>
                <p className="subtitle is-size-7">January 24</p>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <span className="title is-1-15">$450</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

Record.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default Record
