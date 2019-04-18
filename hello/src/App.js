import React, { Component } from 'react';
// class App extends Component {
//   render() {
//     return (
//         <div>
//           <h1>react.js小书本</h1>
//         </div>
//     )
//   }
// }

class App extends Component{
    render(){

        let newVar = (
            React.createElement("div", null),
                React.createElement("h1", {className: 'title'}, 'react.js小书')
        );
        return newVar
    }
}
export default App;
