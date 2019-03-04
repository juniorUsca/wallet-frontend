import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Record from './record'
import FloatingButton from '../widgets/floatingButton'
import ModalContainer from '../widgets/modalContainer'
import Modal from '../widgets/modal'

import reduxActions from '../../redux/actions/index'
import NewRecord from './newRecord';

class Home extends Component {
  state = {
    modalVisible: false,
  }

  componentDidMount = async () => {
    await this.initialFetch()
    this.setState({
      modalVisible: false,
    })
  }

  handleModalCloseClick = (event) => { // eslint-disable-line no-unused-vars
    this.setState({
      modalVisible: false,
    })
  }

  handleNewRecordClick = (event) => { // eslint-disable-line no-unused-vars
    this.setState({
      modalVisible: true,
    })
  }

  async initialFetch() {
    const { actions } = this.props
    await actions.addData()
  }


  render() {
    const { data } = this.props
    const { modalVisible } = this.state
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title is-4">List of Accounts</h1>
            <div className="columns">
              <div className="column is-2">
                <div className="box">
                  <h2 className="title">S/.1300</h2>
                  <p className="subtitle is-6">Bank Account</p>
                </div>
              </div>
              <div className="column is-2">
                <div className="box">
                  <h2 className="title">S/.2100</h2>
                  <p className="subtitle is-6">Credit Card Account</p>
                </div>
              </div>
            </div>
            <div className="column is-one-fifth is-offset-two-fifths">
              <div className="box has-text-centered">
                <h2 className="title">S/.3400</h2>
                <p className="subtitle is-6">Balance total</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title is-4">
              History
            </h1>
            <Record />
            <Record />
            <Record />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">
              Hello World
              { data }
            </h1>
            <p className="subtitle">
              My first website with <strong>Bulma</strong>!
            </p>
          </div>
        </section>

        <FloatingButton handleClick={this.handleNewRecordClick} />

        {
          modalVisible
          && (
            <ModalContainer>
              <Modal handleClick={this.handleModalCloseClick}>
                <NewRecord />
              </Modal>
            </ModalContainer>
          )
        }
      </div>
    )
  }
}

Home.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  data: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  return {
    data: state.get('data'),
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(reduxActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
