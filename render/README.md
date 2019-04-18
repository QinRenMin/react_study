# render()方法 
* 解释{} 

{} 内可以放任何 JavaScript 的代码，包括变量、表达式计算、函数执行等等。
* 使用{}输出'hello word'
```angularjs
render(){
    const text = 'hello word';
    return(
        <div>
               <h1>{text}</h1>
        </div>
    )
}
```
运行结果显示 

![](../images/hello_word.png)

* {}条件返回 
```angularjs
render () {
  return(
        isGood
        ? <p>good</p>
        :<p>not good</p>
  )
}
```
* 元素变量 

```angularjs
render() {
    
    const isGood = true;
    const good = <h2>good</h2>;
    const notGood = <h2>not good</h2>;
    return (
      <div>
          {isGood?good:notGood}
      </div>
    )
  }
```