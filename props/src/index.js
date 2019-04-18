import React from 'react';
import ReactDOM from 'react-dom';
import Like from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Like formation={
    {likedText:"喜欢",dislikeText:"不喜欢"}
}/>, document.getElementById('root'));

serviceWorker.unregister();