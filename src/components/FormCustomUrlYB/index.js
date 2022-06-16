import React from 'react';
import Form from './styles';
import { connect } from 'react-redux';
import editCustomUrlAction from '../../store/actions/editCustomUrl';
import CloseIcon from '@mui/icons-material/Close';

class FormCustomUrlYB extends React.Component {

  state = {
    urlInput: '',
    invalidLink: false,
  }

  handleSaveClick = (event) => {
    event.preventDefault();
    const { urlInput } = this.state;
    const { setUrl, openAndClose } = this.props;
    if(urlInput.includes('https://youtu.be/')) {
      const urlVideo = urlInput.replace('https://youtu.be/', '')
      setUrl(urlVideo)
      openAndClose(false)
      this.setState({
        invalidLink: false,
      })
    } else if (urlInput.includes('https://www.youtube.com/watch?v=')) {
      const urlVideo = urlInput.slice(urlInput.indexOf('watch?v=')+8, urlInput.indexOf('&ab'))
      setUrl(urlVideo)
      openAndClose(false)
      this.setState({
        invalidLink: false,
        urlInput: '',
      })
    } else {
      this.setState({
        invalidLink: true,
      })
    }
  }

  handleTrybeFiClick = (event) => {
    event.preventDefault();
    const { setUrl, openAndClose } = this.props;
    setUrl('')
    openAndClose(false)
  }

  handleChange = (event) => {
    event.preventDefault();
    const { target: { name, value} } = event;
    this.setState({
      [name]: value,
    })
  }

  handleCloseClick = (event) => {
    event.preventDefault();
    const { openAndClose } = this.props;
    openAndClose(false)
    this.setState({
      urlInput: '',
      invalidLink: false,
    })
  }

  render() {
    const { urlInput, invalidLink } = this.state;
    const { open } = this.props;
    return (
      <Form open={open}>
        <button type="button" onClick={this.handleCloseClick}><CloseIcon/></button>
        <label>
          { invalidLink ? <p>Invalid Link</p> : <p>Custom Youtube URL</p> }
          <input name="urlInput" onChange={ this.handleChange } value={ urlInput } />
        </label>
        <button onClick={ this.handleSaveClick } >Apply Custom URL</button>
        <button onClick={ this.handleTrybeFiClick } >Trybe-Fi</button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.editCustomUrlReducer.editCustomUrl.open,
})

const mapDispatchToProps = (dispatch) => ({
  setUrl: (url) => dispatch(editCustomUrlAction({ customUrl: url })),
  openAndClose: (state) => dispatch(editCustomUrlAction({ open: state }))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormCustomUrlYB);