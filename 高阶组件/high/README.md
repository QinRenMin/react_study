#　高阶组件
定义:高阶组件就是一个函数，传给他一个组件，返回一个新的组件 

 
```const NewComponent = higherOrderComponent(OldComponent)``` 

简单的高阶组件:
```import React, { Component } from 'react'
   
   export default (WrappedComponent) => {
     class NewComponent extends Component {
       // 可以做很多自定义逻辑
       render () {
         return <WrappedComponent />
       }
     }
     return NewComponent
   }
```
