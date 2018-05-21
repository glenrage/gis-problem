import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import {
  findLongestPrefix1,
  findLongestPrefix2,
  findLongestPrefix3
} from '../utilities/functions';
import DropdownMenu from './DropdownMenu';

class FunctionForm extends Component {
  state = {
    inputString: '',
    prefixes: [],
    functionList: []
  };

  handleSelect(e) {
    e.preventDefault();
    this.setState({ functionList: e.target.value });
  }

  handleClick(e) {}

  executeFindLongestPrefix() {
    findLongestPrefix1(this.state.prefixes, this.state.inputString);
  }

  render() {
    return (
      <div className="function-form">
        <Form>
          <Form.Field>
            <label>Input words with prefixes</label>
            <Input
              labelPosition="right"
              label="words"
              value={this.state.prefixes}
            />
          </Form.Field>
          <Button secondary>Add Word</Button>
          <Form.Field>
            <label>Input a string here that you want to sort prefixes</label>
            <Input />
            <Button secondary>Add Input String</Button>
          </Form.Field>
          <Form.Field>
          </Form.Field>
          <Button primary>Execute!</Button>
        </Form>
      </div>
    );
  }
}

export default FunctionForm;
