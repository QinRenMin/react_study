import React from 'react';
import ReactDOM from 'react-dom';
import InputWithUserName from './Input';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<InputWithUserName />, document.getElementById('root'));

serviceWorker.unregister();