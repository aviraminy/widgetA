import React from 'react';
import { map } from 'lodash';
import moment from 'moment';
import { getFirstName } from './utils'

function App() {

  return <div><h1>Hello I'm widgetA, first name is `${getFirstName()}`</h1></div>
}

export default App;
