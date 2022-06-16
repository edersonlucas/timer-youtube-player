import React from 'react';
import Container from './styles';
import { connect } from 'react-redux';
import openYoutubeAction from '../../store/actions/openYoutube';
import editCustomUrlAction from '../../store/actions/editCustomUrl';
import Timer from '../Timer';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import MinimizeIcon from '@mui/icons-material/Minimize';

class Iframe extends React.Component {

  handleCloseClick = () => {
    const { openYoutubePlayer, openCustomUrl } = this.props;
    openYoutubePlayer({ open: false, stopPlayer: true })
    openCustomUrl({ open: false })
  }

  handleMinimizeClick = () => {
    const { openYoutubePlayer, openCustomUrl } = this.props;
    openYoutubePlayer({ open: false })
    openCustomUrl({ open: false })
  }

  handleEditClick = () => {
    const { openCustomUrl, openEdit } = this.props;
    openCustomUrl({ open: !openEdit })
  }

  render() {
    const { openPlayer, customUrl, stopPlayer } = this.props;
    return (
      <Container open={ openPlayer }>
        <button type="button" onClick={ this.handleEditClick }><EditIcon /></button>
        <button type="button" onClick={ this.handleCloseClick }><CloseIcon/></button>
        <Timer />
        <iframe src={!stopPlayer ? customUrl ? `https://www.youtube.com/embed/${customUrl}` : "https://www.youtube.com/embed/anypqg9428Y" : "" } title="YouTube video player"></iframe>
        <button type="button" onClick={ this.handleMinimizeClick }><MinimizeIcon/></button>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  openPlayer: state.openYoutubeReducer.youtube.open,
  openEdit: state.editCustomUrlReducer.editCustomUrl.open,
  customUrl: state.editCustomUrlReducer.editCustomUrl.customUrl,
  stopPlayer: state.openYoutubeReducer.youtube.stopPlayer,
})

const mapDispatchToProps = (dispatch) => ({
  openYoutubePlayer: (open) => dispatch(openYoutubeAction(open)),
  openCustomUrl: (open) => dispatch(editCustomUrlAction(open))
})

export default connect(mapStateToProps, mapDispatchToProps)(Iframe);