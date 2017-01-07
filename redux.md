redux.md


reducer就是把处理action和data 达到更新 state的工具

按 counter 这个function 的规则 创建 数据 商店
 var store = Redux.createStore(counter)


向数据商店发送一个事件
store.dispatch({ type: 'INCREMENT' })

数据商店 会 订阅 render事件，每次商店数据有更新，render会触发
 store.subscribe(render)

// 可以手动订阅更新, 也可以事件绑定到视图层
store.subscribe(() => 
    console.log(store.getState())
);



传入  DOM语句  和  dom元素 ，把dom元素内容渲染为语句
const render = () => ReactDOM.render(<ABC />,document)


合并reduce
const todoApp = combineReducers({
  todos,
  visibilityFilter
}




...state

react-scripts


http://blog.csdn.net/geqian2010/article/details/51536960
