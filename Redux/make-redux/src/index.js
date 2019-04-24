//应用状态
const appState = {
    title: {
        text: 'React.js 小书',
        color: 'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
};

//渲染函数
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


//手动添加dispatch

// //应用状态
// const appState = {
//     title: {
//         text: 'React.js 小书',
//         color: 'red',
//     },
//     content: {
//         text: 'React.js 小书内容',
//         color: 'blue'
//     }
// };
// //设置对于数据的修改函数
//
// function dispatch(action) {
//     switch(action.type) {
//         case "UPDATE_TITLE_TEXT":
//             appState.title.text = action.text;
//             break;
//         case "UPDATE_TITLE_COLOR":
//             appState.title.color = action.color;
//     }
// }
//
// //渲染函数
// function renderApp (appState) {
//     renderTitle(appState.title);
//     renderContent(appState.content)
// }
//
// function renderTitle (title) {
//     const titleDOM = document.getElementById('title');
//     titleDOM.innerHTML = title.text;
//     titleDOM.style.color = title.color
// }
//
// function renderContent (content) {
//     const contentDOM = document.getElementById('content');
//     contentDOM.innerHTML = content.text;
//     contentDOM.style.color = content.color
// }
// renderApp (appState);//首次渲染
// dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) ;// 修改标题文本
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }); // 修改标题颜色
// renderApp(appState);//再次渲染