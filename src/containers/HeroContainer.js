import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/heroActions'
import Hero from '../components/Hero'

export class HeroContainer extends Component {
  handleClick (e) {
    this.props.actions.setActiveProduct('test')
  }
  render () {
    return (
      <Hero changeProduct={this.handleClick.bind(this)} activeProduct={this.props.activeProduct}/>
    )
  }
}

HeroContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  activeProduct: PropTypes.object.isRequired,
}

function mapStateToProps ({heroAppState}) {
  return {
    activeProduct: heroAppState.displayed,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroContainer)
