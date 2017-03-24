/*
  这里我们就正式的开始学习组件---这个React引以为傲的部分，其实React的大部分都是围绕着组件来进行的，而由组件引出来的各种问题也是在React时需要思考解决的，这样子你才能在不断壮大的React生态圈中好好的活着。
*/

/*
   1.定义组件(这里只做常规组件的讲解，无状态组件只是捎带讲解)
*/ 

class App extends Component{
    constructor(props){
        super();
    }
    render(){
        return <div>{this.props.name}</div>
    }
}

/*
   上面就是一个最简易的React组件，使用 ES6 Class 关键字构建，并且继承了React中定义的Component这个公共的父类，里面的构造函数则是App组件自己的，而Super方法的调用的目的是防止App的构造函数将父类Component的构造函数覆盖，这里讲解的这些东西对于ES6小白来说可能太过深奥，后面会有专门小节去讲解，这里就不做过多解释。

   这里你要记住这个基础组件的每一个代码细节，因为他就是你定义组件的基础模型，你要在此基础上去壮大你的每一个组件，所以他的重要性就不言而喻了。

   这里对这个基础组件的组成进行一下分析(constructor这个方法在这里不做分析，但你在定义组件时，一定要添加上)，render是React中最终要渲染的页面结构，所以这个方法在每个组件中必须有，而且必须有返回值，如果返回值是多行标签，那么在最外层也总有一个标签将多行标签包括，这里官方还建议你用小括号将多行的返回值包括起来，以表示他们是一个整体。
*/

/*
  2.组件标签添加样式
*/

/*
  2.1 行内样式
*/

const styleObj = {
    lineHeight:"30px"
}


class App extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
            <div style={{color:"red"}}>
                <p style={styleObj}>
                    hello world
                </p>
            </div>
        )
    }
}

/*
  相信你还记得React的大括号语法，这里再添加行内样式时使用的就是大括号语法，style的后面，第一层大括号是jsx的大括号语法，里面是一个json形式的样式列表，因为这里是js环境，所以这里样式的要把样式写成json的形式，就像上面定义的styleObj这种以键值对的形式来定义的才是React中合法的行内样式，样式名采用驼峰式命名法，值一律是字符创形式，数字也可以。
*/

/*
  2.2 外部样式表
*/

import "style.css";

class App extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
            <div className = "box">
                <p className = "innerBox">
                    hello world
                </p>
            </div>
        )
    }
}

/*
   外部样式的添加是通过添加类名，id，标签名... ，基本上你在HTML中，添加外部样式的方法在这里都能用，这里的 Class 不能直接写 要用 className  代替，主要是因为 class 是 js 的关键字，并且官方也推荐你使用类名来管理你的样式及其他操作。

   关于样式标的引入，你可以在Rect要渲染的页面上引入，也可以使用模块化在js文件中引入(像上面这样子，也可以用CMD，AMD)，配合打包工具，你就可以将样式打包进你的js代码中，正常的使用了。
*/


/*
   3.动态渲染数据
*/


/*
  React 的动态渲染数据都是有state和props完成的，所以他们才是React管理数据的“管家”
*/

/*
  3.1 props
*/

/*
   props是组件与外部交换数据的唯一载体，他是一个对象，里面可以储存各种各样的数据类型，并且为了你在使用时不出错，React还给出了一系列规定props数据类型以及效验的方式。

   组件自身不能去操作props，只有其父组件或者在调用组件时才能进行操作。
*/

/*
  3.1.1 props的使用场景
*/

/*
  场景一 ：组件无父组件的传值
*/

class App extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
            <div>
                <div className = "title">{this.props.title}</div>
                <div className = "content">{this.props.content}</div>
            </div>
        )
    }
}

render(<App title={"我是标题"} content = {"我是内容"} /> ,document.getElementById("app"));

/*
  上面的例子就是简单的单组件传递props，在调用时，直接用 this.props 进行调用，而具体的字段名称就是你在调用时传递的字段名称。这里不仅仅可以传递文本，还可以传递数组，函数... ，这里有一点需要注意就是，扩展运算符 ... 在传递props也是可以使用的，这种情况就是在你要传递的属性很多的情况，看下面例子
*/

class App extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div style = { this.props.styleBox }>
                <p> { this.props.title } </p>
                <p> { this.props.content } </p>
                <input type = "text" onChange={ this.state.onchange } />
                <button onClick = { this.props.handleClick }> 点我弹窗 </button>
                <span> { this.props.yes } </span>
            </div>
        )
    }
} 

var obj = {
    styleBox:{
        color:"red"
    },
    title:"我是标题啦",
    content:"我是内容啦",
    onchange:function(e){
        console.log(e.target.value);
    },
    handleClick:function(){
        alert("我是点击事件");
    },
    yes:"我在这里就同意了"
}

render(<App ...obj />,document.getElementById('app'));

/*
  这就是ES6提出的扩展运算符在React中很常见的应用，调用时跟上面一样，this.props 加上对应的字段名就可以了，这里要强调的是，所有 js 语法，你在React中都可以使用，React并不会禁止你使用任何js语法。
*/

/*
  场景二 ：父组件给子组件传递props
*/


class B extends Component{
    constructor(props){
        super();
    }
    render(){
        return <div>{ this.props.title }</div>
    }
}

class A extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <B title = { "我是A的子组件B" }/>
            </div>
        )
    }
}

render(<A title = { "我是A组件" }/>,document.getElementById('app'));


/*
  这种就是最典型的组件嵌套，也是最简单的嵌套，这里父组件 A 在调用 B 是将 title 属性传递给了 B，这就是父组件给子组件传递props的另一种场景，并且也是组件通信的一种方式。
*/

/*
   3.1.2 组件的props的默认值和类型控制
*/


class App extends Component{
    constructor(props){
        super();
    }
    render(){
        return <div> { this.props.title } </div>
    }
}


//props的默认值指定
App.defaultProps = {title:"我是标题"};
App.propsTypes = {
    title:React.propsTypes.String
}


/*
  指定默认值是通过 defaultProps ，类型控制是通过 propsTypes ,这两个是固定用法，至于类型控制的支持哪些类型，使用时可以直接查阅官网或者直接百度
*/

/*
  3.2 state 的使用
*/

/*
  3.2.1 state的初始化
*/