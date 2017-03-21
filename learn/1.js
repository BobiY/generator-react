

class App extends Component{
	constructor(props){
		super();
		this.state = {
			value:"2222",
			text:"Hello World"
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(val){
       let val = this.refs[val].val;
       console.log(val);
	}
	render(){
		return (
              <div className = "box" id = "box">
                 <p style = {{color:"#333",text-index:"2em"}}>{this.state.text}</p>
                 <input type = "text" value = {this.state.value} onChange = {this.handleChange.bind(this,"in")} ref = "in"/>
                 <input type = "text" defaultValue = {"我是默认值"} onChange = { () => {this.handleChange("in2")} } ref = "in2"/>
              </div>
			)
	}
}

//react DOM布局
//与你在HTML布局一致，你可以将React 的 render方法作为你的document进行布局，不同的是，这里没有HTML中的那么多属性和方法
//就像上面的例子中，最终渲染结果就和你在HTML中得到的结果一致，不过这里要注意一点就是，最外层的div只有一个，相当于HTML中的body标签，他将所有的页面元素给包括起来


//react DOM样式
//样式的添加与HTML中略有不同，因为react 毕竟是js文件，不可能与HTML一样，直接添加，这里的行内样式要写成对象的形式去添加，并且要把样式对象放入一个大括号中将值赋给style
//外联样式的添加方法与HTML一致，添加类名或者id（建议添加类名），为对应的类名添加样式
