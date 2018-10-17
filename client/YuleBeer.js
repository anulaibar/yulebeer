import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getBeers} from './actions'

class YuleBeer extends Component {

  componentDidMount() {
    getBeers(this.props.dispatch)
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{width: '90%', maxWidth: 500}}>
          Hello
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        beers: state.beers,
        error: state.beersError,
        isLoading: state.beersLoading
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getBeers: () => dispatch(getBeers())
//     }
// }
export default connect(mapStateToProps)(YuleBeer)
