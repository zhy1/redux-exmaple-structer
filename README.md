React 具象化知识体系 首先是知识体系关键字

创建组件
React对象
可以createClass()接受一个对象有displayName和render

使用组件
ReactDOM对象
可以调用render传入 
		React.createElement(类，参数)  － 类 就是  React创建过的Class类
 		document.getElementById(div id名字)
即可进行render

引入代码
<script type="text/babel”>即可把jsx转换为js
引用jsx
<script type="text/babel" src="src/helloworld.js"></script>

离线转换工具使代码可用
npm install -g react-tools

创建组件有多种写法
js / jsx语法和 html语法是可选的，最好的当然是嵌套html啦

不要直接修改react的Prop 应该构建一个Prop对象放入Class对象

…延展操作符

交互的例子:
render里放入 <标签> , getElementbyId

createClass里定义 render 的function
处理并return 一个包含onClick的html string

handerClick(随意定义名字)接受一个有event(浏览器原生事件)的fn

另外可以定义Class生命周期 life Cycle的 函数：
比如初始化调用get Initial State

如果是平板需要调用 React.InitializeTouchEvents(true)

react并没有把事件处理器绑定到element本身，
react只有一个event hander

react把用户界面当作状态机 stateMachines

如果现在把react想像为angular.directive全组件化，

那么什么时候才需要设置directive的scope呢，即react-this.state

当然需要被检测的时候、

react的真谛就是复合组件，定义几个组件被其他组件使用，
循环create/render

shouldComponentUpdate(false)visual DOM不调用DOM更新

getDefaultProps 定义Prop默认值

PropTypes.element可以限定只有一个子集传入

传递Props
如果不使用 JSX，可以使用一些对象辅助方法如 ES6 的 Object.assign 或 Underscore_.extend。

剩余属性和展开属性
var { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }; x; // 1 y; // 2 z; // { a: 3, b: 4 }

上文这些 … assign extend 对对象的深拷贝 就是传递props的基本思路啦
______________


受限组件 ：
如果input 这类设置value，而且定义了value的值，那就是受限组件，会被react管理，无法手动修改

修改受限组件需要自定事件处理器：
表单组件－数据修改后的取值和基本的脏值检查
render: ()=> value = this.state.value;
          return  input value={value } onChange={this.handerChange}
handerChange: event => setState({  value : event .target.value   })
getinitialState:  ()=>  {value : ‘hell ‘}
简写三步：初始化，引用，自定义修改时的事件处理器
延伸：handerChange: event => 
           this.setState({value: event.target.value.substr(0, 140)});



不受限组件：
没有设置value的input写在render中，最后渲染出来的结果和普通input没什么两样


为什么使用受限组件，
因为受限代表被react管理


textarea不提倡作为受限组件

浏览器中的工作原理
虚拟dom,   react会在内存中维护一个快速响应的虚拟dom
render 方法返回一个dom的描述，
 react利用内存中对虚拟dom的描述快速计算出差异

从上文可知，在react下工作全部都是在虚拟dom中执行
那么我们想调用原生api去使用一些jq的方法怎么做？

React.finDOMNode(component)可以调用这个来获取节点
这个方法只对已经被放入真实dom节点有效

使用的时候看上去是这样的:
render : ()=>{

return : <input type="text" ref="myTextInput" />
}

handleClick:()=> { 
  React.findDOMNode(this.refs.myTextInput).focus(); 
},


组件的生命周期:

组件的生命周期包含三个组要部分：
   挂载   组件被插入到dom
   更新   组件被修改，查看dom是否需要修改
   移除   组件从dom中移除

关于这个三个部分衍生出will 之前 和did 以后 方法

下面对这些方法做单独说明：

挂载
get initial state ()
 第一个运行的方法，状态化的组件应该实现

component will mount  ()
 在挂载发生以前被调用

component did mount  ()
 在挂载结束后立刻调用


更新

component Will Receive Props  (  object nextProps )
当一个挂载的组件接受到新的props被调用
用于比较this.props和nextProps，使this.getState 改变

should Component update  (  object nextProps , object nextState  )
手动干预react是否更新判断
这个方法有获取this.state和nextState，
自定义比较方法如果返回false,dom不会被更新


component will update (  object nextProps , object nextState  )
在更新发生以前调用，代表前两步已经发生了
在这里可以使用this.setState

component did update  (  object prevProps , object prevState ) 
在更新发生以后调用



移除
component will unmount ()
在组件移除和销毁以前被调用     清理工作自定义


挂载的方法
find DOM Node 可以在任何挂载的组件上调用

force update  当你知道一些很深的组件state 已经改变了的时候
 可以调用  而不是使用 this .setState

————
ref 属性 其实是一种 支撑实例
全局实例保证任何时间总能拿到


————
react插件 
react.addons 是为了构建react 应用而放置的一些有用工具的地方

当使用npm install react时
使用require (‘react/addons’)  替换  react 来得到带有所有插件的react .
即 react -with -addons.js

reactjs.cn/react/docs/addons.html


react 双向绑定
React-link是一种简单表达 react 双向绑定方式

react的数据传递是有方向的，从js到虚拟树到dom的方向传递，

可以理解为单向绑定

而我们平常是怎么做react双向绑定的呢？
上文说到 需要在input中定义  value 指向状态机 onChange定义hander
然后实现init 和 hander 修改 状态机内容

React-link即是一个这样的简单封装和约定
内部仍然是  onChange  和 setState

使用 react  link 看起来是这样的：
mixins: [React.addons.LinkedStateMixin],固定语句
＋
valueLink={this.linkState('message’)}

如果使用  react link 而不使用  Linked State mixin

reactjs.cn/docs/two-way-binding-helpers.html
有详细 valueLink  和  mixin  的改善


工具： 类名操作
classSet() 
用法：
字符拼接看上去是这样：
if (this.props.isRead) { classString += ' message-read'; }

classSet提供了一个更好的方法:
var newClassName =  React.addons.classSet({
   ‘a’:true,
   ‘b’: fn  return false or true
   ‘c’: fn  return false or true
} )


测试工具
React.addons.TestUtils
为此facebook提供了一个很好的原生测试框架 Jest


性能测试



React API

React.create Class (  obj )
组件定义和 生命周期



React.create Element () 




React.create Factory(  )



React.render




React.unmount Component At Node




React.render To String



React. render To Static Markup



React  is Vaild Element


React Dom



React Prop Types 



React initialize Touch Events 



React Children




React 项目开发

npm  ls -g —depth=1 2>/dev/null | grep generator

—denpth=1 2只显示树的前两层

>/dev/null 不报错

| grep 搜索 generator

 yo react-webpack react-pagers

 yo -version

nom run serve

npm install --save-dev-d json-loader

npm install autoprefix

autoprefixer-loader?{browsers:[“last 2 version"]}

scss

json-loader


react redux 



react-native 开发须知

rn 会在本地开启一个8081端口给app读取

https://segmentfault.com/q/1010000005882935?_ea=938052
react-native 开发ios时image没有显示是由于info.plist
app transpot security settings
allow arbitrary loads

ios开发如果需要真机调试 需要使用开发者账号

AppDelegate.m 可以修改进入点和 appModule的注册名 等等

npm install -g react-native-cli

react-native run-ios


what is the react.Exponent





react     facebook
渲染库   web
react native 
渲染库   andorid ios


createClass()

render()

var style = createSheet(
  demo{
  backgroundColor:’red'
  }
 )

         FORM 提交表单  <form class=’demo’ ‘
        <Form class={style.demo}


修改setState setProps
state   props


state 是对自己属性的修饰 getInitialState 初始状态 

props 是接受上层发送的数据 getDefaultProps 自己初始化

普通js编码 和 react 区别

component []
.width
.height 

react是一个把数据和显示 分离的库  react是单向

angular 是双向 ｛｛ 页面会 传播到 内存，内存也会 影响页面｝｝

input[    asdada   ] 

onPress={function}
onClick =

性能比jquery好很多

dom很消耗性能


dangerouslySetInnerHTML <div>
