import React from 'react';
import ReactDOM from 'react-dom';
import LikeButton from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LikeButton />, document.getElementById('root'));

serviceWorker.unregister();