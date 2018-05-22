import React, { Component } from 'react';
import { Form, Button, Input, Grid, Image } from 'semantic-ui-react';
import { findLongestPrefix3 } from '../utilities/functions';
import OutputView from './OutputView';
import img from '../img/func.png';

class FunctionForm extends Component {
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
    if (result === undefined || '' || null) {
      this.setState({ outputString: 'No Matching Prefix Found!' });
    }
  }

  render() {
    return (
      <div className="function-form">
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={10}>
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
                <Button positive onClick={this.executeFindLongestPrefix}>
                  Execute!
                </Button>
              </Form>
              <div className="image-preview">
                <Image src={img} />
              </div>
            </Grid.Column>
            <Grid.Column>
              <OutputView {...this.state} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default FunctionForm;
