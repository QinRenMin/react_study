import React, { Component } from 'react';

class App extends Component {

  handleOnClick(){
      alert("点击成功");
    }
    handleClick(e){
    console.log(e.target);//<h1>点击获得this</h1>
      console.log(this); //undefined
    }
    handleClick1(e){
    console.log(e.target);//<h1>点击绑定this</h1>
    console.log(this); //手动 bind 到当前实例
    }
  render() {

    return (
      <div>
          <h1 onClick={this.handleOnClick}>点击</h1>
          <h1 onClick={this.handleClick}>点击获得this</h1>
          <h1 onClick={this.handleClick1.bind(this)}>点击绑定this</h1>
      </div>
    )
  }
}

export default App;
