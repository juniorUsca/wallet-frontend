import React from 'react'
import PropTypes from 'prop-types'

function FloatingButton(props) {
  const { handleClick } = props
  return (
    <div id="container-floating">

      <div className="nd5 nds" data-toggle="tooltip" data-placement="left" data-original-title="Simone" />
      <div className="nd4 nds" data-toggle="tooltip" data-placement="left" data-original-title="contract@gmail.com">
        <img className="reminder" alt="" />
        <p className="letter">C</p>
      </div>
      <div className="nd3 nds" data-toggle="tooltip" data-placement="left" data-original-title="Reminder">
        <img className="reminder" src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_reminders_speeddial_white_24dp.png" alt="" />
      </div>
      <div className="nd1 nds" data-toggle="tooltip" data-placement="left" data-original-title="Edoardo@live.it">
        <img className="reminder" alt="" />
        <p className="letter">E</p>
      </div>

      <div
        id="floating-button"
        data-toggle="tooltip"
        data-placement="left"
        data-original-title="Create"
        onClick={handleClick}
        role="button"
        tabIndex="-1"
        onKeyUp={() => {}}
      >
        <p className="plus">+</p>
        <img className="edit" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png" alt="" />
      </div>

    </div>
  )
}

FloatingButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default FloatingButton
