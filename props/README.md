# props 

作用:负责组件间传值，不改变props，定义外部接口
src/index.js  

```

ReactDOM.render(<Like formation={
    {likedText:"喜欢",dislikeText:"不喜欢"}
}/>, document.getElementById('root'));
```

src/app.js
接收props
```
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
```