import React from 'react';
import { map } from 'lodash';
import moment from 'moment';
import { getFirstName } from './utils';

function App() {

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Hello I\'m widgetA, first name is `$',
      getFirstName(),
      '`'
    )
  );
}

export default App;