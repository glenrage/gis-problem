import React, { Component } from 'react';

class OutputView extends Component {
  render() {
    return (
      <div className="output-view">
        <div className="output-view--word-list">
          <h3>Word List</h3>
          <ul>
            {this.props.wordList.map((item, key) => {
              return <li key={key}>{item}</li>;
            })}
          </ul>
        </div>

        <div className="output-view--inputstring">
          <h3>Input String</h3>
          <p>{this.props.newInput}</p>
        </div>

        <div className="output-view--output">
          <h3>Output</h3>
          <p>{this.props.outputString}</p>
        </div>
      </div>
    );
  }
}

export default OutputView;
