## 手动实现redux第一篇
* 修改共享数据状态 

(1)修改public/index.html
```
<body>
    <div id='title'></div>
    <div id='content'></div>
  </body>

```
(2)删除index.js的内容，修改为
```const appState = {
       title: {
           text: 'React.js 小书',
           color: 'red',
       },
       content: {
           text: 'React.js 小书内容',
           color: 'blue'
       }
   };
   function renderApp (appState) {
       renderTitle(appState.title);
       renderContent(appState.content)
   }
   
   function renderTitle (title) {
       const titleDOM = document.getElementById('title');
       titleDOM.innerHTML = title.text;
       titleDOM.style.color = title.color
   }
   
   function renderContent (content) {
       const contentDOM = document.getElementById('content');
       contentDOM.innerHTML = content.text;
       contentDOM.style.color = content.color
   }
   renderApp (appState);

```
结果展示
![](../../images/make-redux.png)

* 手动添加dispatch()
```
//应用状态

//设置对于数据的修改函数

function dispatch(action) {
    switch(action.type) {
        case "UPDATE_TITLE_TEXT":
            appState.title.text = action.text;
            break;
        case "UPDATE_TITLE_COLOR":
            appState.title.color = action.color;
    }
}


renderApp (appState);//首次渲染
dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) ;// 修改标题文本
dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }); // 修改标题颜色
renderApp(appState);//再次渲染

```