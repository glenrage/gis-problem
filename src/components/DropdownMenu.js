import React from 'react';
import { Dropdown } from 'semantic-ui-react';

// import { friendOptions } from '../common'
const options = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess'
  },
  {
    text: 'Function 1',
    value: 'Function 1'
  },
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess'
  }
];

const DropdownMenu = () => (
  <Dropdown placeholder="Select Function" fluid selection options={options} />
);

export default DropdownMenu;
