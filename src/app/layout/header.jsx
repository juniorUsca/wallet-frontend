import React, { Component } from 'react'
import NavBarBurger from './navBarBurger';

class Header extends Component {
  state = {
    burgerActive: false,
  }

  handleClickNavBarBurger = (event) => { // eslint-disable-line no-unused-vars
    const { burgerActive } = this.state
    this.setState({
      burgerActive: !burgerActive,
    })
  }

  render() {
    const { burgerActive } = this.state
    return (
      <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
            </a>
            <NavBarBurger handleClick={this.handleClickNavBarBurger} {...{ burgerActive }} />
          </div>

          <div id="navbarBasicExample" className={`${burgerActive ? 'is-active' : null} navbar-menu`}>
            <div className="navbar-start">
              <a className="navbar-item" href="#a">
                Home
              </a>
              <a className="navbar-item" href="#a">
                Registers
              </a>
              <a className="navbar-item" href="#a">
                Accounts (Cards)
              </a>
              <a className="navbar-item" href="#a">
                Statistics
              </a>
              <a className="navbar-item" href="#a">
                Profile
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="#a">
                  More
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="#a">
                    About
                  </a>
                  <a className="navbar-item" href="#a">
                    Jobs
                  </a>
                  <a className="navbar-item" href="#a">
                    Contact
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item" href="#a">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary" href="#a">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light" href="#a">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
