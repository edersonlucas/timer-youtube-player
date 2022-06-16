import React from 'react';
import { Container, ContainerButtons, ContainerSetTime } from './styles';
import { connect } from 'react-redux';
import setTimerAction from '../../store/actions/setTimer';
import openYoutubeAction from '../../store/actions/openYoutube';
import editCustomUrlAction from '../../store/actions/editCustomUrl';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Timer from '../Timer';

class Stopwatch extends React.Component {
  state = {
    setHour: 0,
    setMin: 0,
    setSeg: 0,
    changedScreen: false,
  }

  handleStartClick = ({ target }) => {
    if(target.interval) {
      clearInterval(target.interval)
      target.innerHTML = 'Resume'
      target.interval = 0;
    } else {
      target.interval = setInterval(() => {
        const { timer: { hour, min, seg }, setTimer } = this.props;
          if(seg > 0) {
            setTimer({ hour, min, seg: seg - 1 })
          } else if (min > 0) {
            setTimer({ hour, min: min - 1, seg: 59 })
          } else if (hour > 0) {
            setTimer({ hour: hour - 1, min: 59, seg: 59 })
          } else {
            clearInterval(target.interval)
          }
      }, 1000)
      target.innerHTML = 'Pause'
    }
  }

  handleSetTimeClick = () => {
    const { setHour, setMin, setSeg } = this.state;
    if((setHour <= 24 && setHour > 0) || (setMin <= 59 && setMin > 0) || (setSeg <= 59 && setSeg > 0)) {
      const { setTimer } = this.props;
      setTimer({
        hour: Math.round(String(setHour).replace(/^0+(?!\.|$)/, '')), // Regex remover zero 
        min: Math.round(String(setMin).replace(/^0+(?!\.|$)/, '')),
        seg: Math.round(String(setSeg).replace(/^0+(?!\.|$)/, '')),
      })
      this.setState((prevState) => ({
        changedScreen: !prevState.changedScreen,
        setHour: 0,
        setMin: 0,
        setSeg: 0,
      }))
    }
  }

  handleResetClick = () => {
    const { setTimer } = this.props;
    setTimer({ hour: 0, min: 0, seg: 0 })
    this.setState((prevState) => ({
      changedScreen: !prevState.changedScreen,
    }))
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  }

  handleOpenYoutubeClick = () => {
    const { openYoutubePlayer } = this.props;
    openYoutubePlayer({ open: true, stopPlayer: false, });
  }

  componentDidUpdate() {
    const { changedScreen } = this.state;
    const { timer: { hour, min, seg }, openYoutubePlayer, openEdit } = this.props;
    if(!hour && !min && !seg && changedScreen) {
      openYoutubePlayer({ stopPlayer: true, open: false })
      openEdit({ open: false })
      this.setState((prevState) => ({
        changedScreen: !prevState.changedScreen,
      }))
    }
  }


  render() {
    const { setHour, setMin, setSeg, changedScreen } = this.state;
    const { timer: { hour, min, seg } } = this.props;
    return (
      <Container changedScreen={ changedScreen }>
        {!hour && !min && !seg ? (
          <ContainerSetTime>
            <div>
              <input min="0" max="24" name="setHour" onChange={ this.handleChange } value={ setHour } type="number" />:
              <input min="0" max="59" name="setMin" onChange={ this.handleChange } value={ setMin } type="number" />:
              <input min="0" max="59" name="setSeg" onChange={ this.handleChange } value={ setSeg } type="number" />
            </div>
            <button onClick={ this.handleSetTimeClick } >Set Time</button>
          </ContainerSetTime>
        ) : (
          ""
        )}
        {hour || min || seg ? (
          <>
            <Timer />
            <ContainerButtons>
          <button
            onClick={(event) => this.handleStartClick(event)}
          >
            Start
          </button>
          <button onClick={this.handleResetClick}>
            Reset
          </button>
        </ContainerButtons>
        <button type="button" onClick={ this.handleOpenYoutubeClick }><LibraryMusicIcon /> Player</button>
          </>
        ) : (
          ""
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.timerReducer.timer,
})

const mapDispatchToProps = (dispatch) => ({
  setTimer: (timer) => dispatch(setTimerAction(timer)),
  openYoutubePlayer: (open) => dispatch(openYoutubeAction(open)), 
  openEdit: (open) => dispatch(editCustomUrlAction(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch);