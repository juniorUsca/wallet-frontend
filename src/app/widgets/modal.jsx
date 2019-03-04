import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Modal extends Component {
  /* START handleClickOutside */
  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      const { handleClick } = this.props
      handleClick(event)
    }
  }
  // END handleClickOutside

  render() {
    const { children, handleClick } = this.props
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-content" ref={this.setWrapperRef}>{/* handleClickOutside */}
          { children }
        </div>
        <button
          onClick={handleClick}
          className="modal-close is-large"
          aria-label="close"
          type="button"
        />
      </div>
    )
  }
}

Modal.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal
