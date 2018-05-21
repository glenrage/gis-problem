import React, { Component } from 'react';
import FunctionForm from './components/FunctionForm';
import OutputView from './components/OutputView';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <FunctionForm />
        <OutputView />
      </div>
    );
  }
}

export default App;
