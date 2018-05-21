import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import { findLongestPrefix3 } from '../utilities/functions';

class FunctionForm extends Component {
  state = {
    inputString: '',
    wordList: []
  };

  handleSelect(e) {
    e.preventDefault();
    this.setState({ functionList: e.target.value });
  }

  handleClick(e) {}

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
              value={this.state.prefixes}
            />
          </Form.Field>
          <Button basic color="teal">
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
            />
          </Form.Field>
          <Button basic color="teal">
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
