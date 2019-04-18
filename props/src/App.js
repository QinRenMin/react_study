import React, { Component } from 'react';

class Like extends Component {
  constructor(){
    super();
    this.state = {
      liked:true
    }
  }
  handleClick(){
    let {liked} = this.state;
    this.setState({
        liked:!liked
    })
  }
  render() {


    const {formation} = this.props;
      return (
      <div >
        <button onClick={this.handleClick.bind(this)}>{
        this.state.liked
            ?formation.likedText
            :formation.dislikeText

        }</button>
      </div>
    );
  }
}

export default Like;
