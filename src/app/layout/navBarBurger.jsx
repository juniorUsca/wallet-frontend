import React from 'react'
import PropTypes from 'prop-types'

function NavBarBurger(props) {
  const { handleClick, burgerActive } = props
  return (
    <div
      role="button"
      tabIndex="0"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      className={`navbar-burger burger ${burgerActive ? 'is-active' : null}`}
      onClick={handleClick}
      onKeyUp={() => {}}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </div>
  )
}

NavBarBurger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  burgerActive: PropTypes.bool.isRequired,
}

export default NavBarBurger
