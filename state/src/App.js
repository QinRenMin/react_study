import React, { Component } from 'react';

class LikeButton extends Component {

    constructor() {
        super();
        this.state = {
            isLiked:true,
           // count:0
        }
    }
    handleClick(){
        this.setState(
        {isLiked:!this.state.isLiked}
        )
    }
    handleIncrease(){
        // let {count} = this.state;
        // this.setState({
        //     count:0
        // }) ;
        // this.setState({
        //     count:count+1
        // });
        // this.setState({
        //     count:count+1
        // })

        // this.setState({
        //     count:1
        // }); // => this.state.count 还是 undefined
        // this.setState({
        //     count:this.state.count+1
        // }); // => undefined + 1 = NaN
        // this.setState({ count: this.state.count + 2});// => NaN + 2 = NaN

        //解决办法:使用prevState

        this.setState((prevState) => {
            return { count: 0 }
        });
        this.setState((prevState) => {
            return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
        });
        this.setState((prevState) => {
            return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
        })
        // 最后的结果是 this.state.count 为 3
    }
    render() {
        const {count} = this.state;
        // console.log(count)
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>
                    {this.state.isLiked
                        ?"喜欢"
                        :"不喜欢"
                    }
                </button>
                <br/>
                <br/>
                {count} <button onClick={this.handleIncrease.bind(this)}> +</button>
            </div>
        )
    }
}
export default LikeButton;
