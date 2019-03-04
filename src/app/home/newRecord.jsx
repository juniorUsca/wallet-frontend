import React from 'react'
import PropTypes from 'prop-types'

function NewRecord(props) {
  const { handleClick } = props
  return (
    <div className="box">
      <div className="columns">
        <div className="column is-one-third">
          <button className="button is-primary is-active is-fullwidth is-medium" type="button">Income</button>
        </div>
        <div className="column is-one-third">
          <button className="button is-primary is-fullwidth is-medium" type="button">Expense</button>
        </div>
        <div className="column is-one-third">
          <button className="button is-primary is-fullwidth is-medium" type="button">Transfer</button>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="number" placeholder="Amount" />
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <div className="select is-primary">
                <select aria-label="account">
                  <option>Cash</option>
                  <option>Card</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="field">
            <div className="control">
              <div className="select is-primary">
                <select aria-label="category">
                  <option>Food</option>
                  <option>Transport</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <input className="input is-primary" type="text" placeholder="Picture" />
            </div>
          </div>
        </div>
        <div className="column">
          Place
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="field">
            <div className="control">
              <textarea className="textarea is-primary" placeholder="Note" rows="3" />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field">
                <div className="control">
                  <input className="input is-primary" type="date" placeholder="Date Time" />
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="control">
                  <input className="input is-primary" type="time" placeholder="Date Time" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <button
            className="is-pulled-right button is-danger is-medium"
            type="button"
            onClick={handleClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

NewRecord.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default NewRecord
