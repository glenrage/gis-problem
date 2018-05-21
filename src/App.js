import React, { Component } from 'react';
import FunctionForm from './components/FunctionForm';
import OutputView from './components/OutputView';
import FunctionPreview from './components/FunctionPreview';
import { Container, Grid, Image } from 'semantic-ui-react';
import img from './img/func.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <h2>Find the Longest Prefix!</h2>
        <p>
          This app allows you to input a set of words, then input another word
          to find the longest prefix.
        </p>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={10}>
              <FunctionForm />
              <Image src={img} />
            </Grid.Column>
            <Grid.Column>
              <OutputView />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
