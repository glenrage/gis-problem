import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import { findLongestPrefix3 } from '../utilities/functions';

class FunctionForm extends Component {
  constructor() {
    super();
    this.addWord = this.addWord.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStringChange = this.handleStringChange.bind(this);
    this.state = {
      inputString: '',
      wordInput: '',
      wordList: []
    };
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ wordInput: e.target.value });
  }

  handleStringChange(e) {
    e.preventDefault();
    this.setstate({ inputString: e.target.value });
  }

  addWord() {
    const currentWords = this.state.wordList;
    const newWords = currentWords.concat(this.state.wordInput);
    this.setState({ wordList: newWords }, () => {
      console.log(this.state.wordList);
    });
    this.setState({ wordInput: '' });
  }

  addString(e) {
    this.setState({ inputString: e.target.value });
  }

  executeFindLongestPrefix() {
    findLongestPrefix3(this.state.wordList, this.state.inputString);
  }

  render() {
    return (
      <div className="function-form">
        <Form>
          <Form.Field>
            <label>
              Type in a set of words here. You must click add to add each
              individual word.
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
              Input a string here that you want find the longest prefix when
              compared to the set of words
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
          <Button primary>Execute!</Button>
        </Form>
      </div>
    );
  }
}

export default FunctionForm;
