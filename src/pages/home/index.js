import React from 'react';
import Container from './styles'
import Countdown from '../../components/Countdown';
import PlayerYoutube from '../../components/PlayerYoutube';
import FormCustomUrlYB from '../../components/FormCustomUrlYB';

class Home extends React.Component {

  render() {
    return (
      <Container>
        <FormCustomUrlYB />
        <PlayerYoutube />
        <Countdown />
      </Container>
    )
  }
}


export default Home;