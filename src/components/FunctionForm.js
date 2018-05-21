import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import findLongestPrefix from '../utilities/functions';

class FunctionForm extends Component {
  state = {
    inputString: '',
    prefixes: []
  };

  executeFindLongestPrefix() {
    findLongestPrefix(this.state.prefixes, this.state.inputString);
  }

  render() {
    return (
      <div className="function-form">
        <Form>
          <Form.Field>
            <label>Input prefixes here</label>
            <Input />
          </Form.Field>
          <Form.Field>
            <label>Input string here</label>
            <Input />
          </Form.Field>
          <Button primary>Button</Button>
        </Form>
      </div>
    );
  }
}

export default FunctionForm;
