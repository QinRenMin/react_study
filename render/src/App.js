import React, { Component } from 'react';

class App extends Component {
  render() {
    const text = 'hello world';
    const isGood = true;
    const good = <h2>good</h2>;
    const notGood = <h2>not good</h2>;
    return (
      <div>
        <h2>{text}</h2>
          {
            isGood
                ? <p>good</p>
                :<p>not good</p>
          }
          {isGood?good:notGood}
      </div>
    )
  }
}

export default App;
