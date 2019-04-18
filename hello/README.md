### JSX描述UI信息 

* 什么是JSX? 

JSX其实就是 JavaScript 对象

从jsx到页面经历的过程：
![](https://huzidaha.github.io/static/assets/img/posts/44B5EC06-EAEB-4BA2-B3DC-325703E4BA45.png)
 
* ReactDOM.render()的作用  

ReactDOM.render功能就是把组件渲染并且构造DOM树，然后插入到页面上某个特定的元素上

* DOM标签包含的信息  
标签名，属性，子元素
```

<div class='box' id='content'>
  <div class='title'>Hello</div>
  <button>Click</button>
</div>
```
用js对象方法表示
```angularjs
{
    tag:'div',
    attrs:[className:'box',id:'content'],
    children:[
        {
            tag:'div',
            attrs;[className:'title'],
            children:['Hello']
        },
         {
                    tag:'button',
                    attrs;null,
                    children:['Click']
                }
    ]
}
```

react中的编译过程
```angularjs
class App extends Component{
    render(){
        return(
            React.createElement("div",null),
            React.createElement("h1",{className:'title'},'react小书')
            
        )
    }
}
```
![](../images/jsx.png);
* 本部分总结：


１．JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
２．React.js 可以用 JSX 来描述你的组件长什么样的。

３．JSX 在编译的时候会变成相应的 JavaScript 对象描述。　

４．react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。
