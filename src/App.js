import React, { Component } from 'react';
import FunctionForm from './components/FunctionForm';
import { Container } from 'semantic-ui-react';
import './reset.css';
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
        <FunctionForm />
      </Container>
    );
  }
}

export default App;
