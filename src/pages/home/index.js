import React from 'react';
import Container from './styles'
import Stopwatch from '../../components/Stopwatch';
import Iframe from '../../components/Iframe';
import FormCustomUrlYB from '../../components/FormCustomUrlYB';

class Home extends React.Component {

  render() {
    return (
      <Container>
        <FormCustomUrlYB />
        <Iframe />
        <Stopwatch />
      </Container>
    )
  }
}


export default Home;