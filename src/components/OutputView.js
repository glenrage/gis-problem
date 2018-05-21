import React from 'react';
import { Container, Grid } from 'semantic-ui-react';

export default () => {
  return (
    <div className="output-view">
      <div className="output-view--word-list">
        <h3>Word List</h3>
        <p>Lorem sfkljsdfkj s klfjskljdf sjkdlf kljsdf kjsdf kljsdfjklsdf</p>
      </div>

      <div className="output-view--inputstring">
        <h3>Input String</h3>
        <p>InputString</p>
      </div>

      <div className="output-view--output">
        <h3>Output</h3>
        <p>Results</p>
      </div>
    </div>
  );
};
