import React, { Component } from 'react';
import FunctionForm from './components/FunctionForm';
import OutputView from './components/OutputView';
import FunctionPreview from './components/FunctionPreview';
import { Container, Grid, Image, Form, Button, Input } from 'semantic-ui-react';
import { findLongestPrefix3 } from './utilities/functions';
import img from './img/func.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addWord = this.addWord.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStringChange = this.handleStringChange.bind(this);
    this.addString = this.addString.bind(this);
    this.executeFindLongestPrefix = this.executeFindLongestPrefix.bind(this);

    this.state = {
      inputString: '',
      wordInput: '',
      wordList: [],
      newInput: '',
      outputString: ''
    };
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ wordInput: e.target.value });
  }

  handleStringChange(e) {
    e.preventDefault();
    this.setState({ inputString: e.target.value });
  }

  addWord() {
    const currentWords = this.state.wordList;
    const newWords = currentWords.concat(this.state.wordInput);
    this.setState({ wordList: newWords });
    this.setState({ wordInput: '' });
  }

  addString(e) {
    const newInput = this.state.inputString;
    this.setState({ newInput: newInput });
  }

  executeFindLongestPrefix() {
    const result = findLongestPrefix3(
      this.state.wordList,
      this.state.inputString
    );
    this.setState({ outputString: result });
  }

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
              <div className="function-form">
                <Form>
                  <Form.Field>
                    <label>
                      Type in a set of words here. You must click add to add
                      each individual word.
                    </label>
                    <Input
                      labelPosition="right"
                      label="words"
                      value={this.state.wordInput}
                      onChange={this.handleInputChange}
                    />
                  </Form.Field>
                  <Button basic color="teal" onClick={this.addWord}>
                    Add Word
                  </Button>
                  <Form.Field>
                    <label>
                      Input a string here that you want find the longest prefix
                      when compared to the set of words
                    </label>
                    <Input
                      labelPosition="right"
                      label="Input String"
                      value={this.state.inputString}
                      onChange={this.handleStringChange}
                    />
                  </Form.Field>
                  <Button basic color="teal" onClick={this.addString}>
                    Add Input String
                  </Button>
                  <Form.Field />
                  <Button primary onClick={this.executeFindLongestPrefix}>
                    Execute!
                  </Button>
                </Form>
              </div>
              <Image src={img} />
            </Grid.Column>
            <Grid.Column>
              <OutputView {...this.state} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
