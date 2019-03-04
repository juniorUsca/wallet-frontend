import { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

class ModalContainer extends Component {
  render() {
    const { children } = this.props
    return createPortal(
      children,
      document.getElementById('modal-target'),
    )
  }
}

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalContainer
