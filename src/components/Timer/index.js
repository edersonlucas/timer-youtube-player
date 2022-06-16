import React from 'react';
import { connect } from 'react-redux';
import H2 from './styles'

class Timer extends React.Component {

  setTwoDigits = (num) => {
    if(num < 10) {
      return '0' + num
    }
    return num
  }

  render() {
    const { timer: { hour, min, seg} } = this.props;
    return (
      <H2>{`${this.setTwoDigits(hour)}:${this.setTwoDigits(
        min
      )}:${this.setTwoDigits(seg)}`}</H2>
    )
  }
}

const mapStateToProps = (state) => ({
  timer: state.timerReducer.timer,
})

export default connect(mapStateToProps)(Timer);