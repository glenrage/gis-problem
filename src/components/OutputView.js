import React from 'react';
import { Container } from 'semantic-ui-react';

export default () => {
  return (
    <div className="output-view">
      <div className="output-view--word-list">
        <h3>Word List</h3>
      </div>
      <div className="output-view--inputstring">
        <h3>Input String</h3>
      </div>
      <div className="output-view--output">
        <h1>Output</h1>
      </div>
    </div>
  );
};
