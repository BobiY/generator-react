/*
  React 是一个 UI 框架，所以页面展示是他的一个“特长”，它采用了组件化的思想，将页面分割，然后再组合，做到了页面的“模块化”，所以，掌握组件的构建方法对于掌握React UI 展示至关重要。
*/

/*
  React 组件共分为两种，一种是无状态组件，一种是正常的组件，组件相比于HTML来说，就像一个包含了一些标签和功能的代码模板，就类似于 Ajax的字符串拼接创造的模板，但这种模板使用起来会更加的多样化。
*/


/*
  无状态组件是只包含props（属性），而不包含state（状态）的一类组件，所以这类组件的使用场景会很少，因为大部分情况下，我们需要用state去维护组件自身的更新和页面交互，下面就是一个典型的无状态组件，类似于构造函数的写法，因为React规定，组件的首字母要大写，以区别于普通的函数。
*/


function App(props) {
  return <div>{props.name}</div>
}

/*
    调用时就是当做HTML标签调用<App />,这个调用遵循着jsx语法，这里你可能没记住这个规则，调用规则就是，你可以使用单标签<App /> 或者双标签 <App>{ some children component }</App> ,这两种都是正确的调用方式，一般情况下，组件在没有子元素是我们使用单标签的形式，反之我们就使用双标签的形式，这是一点经验之谈。这样的规则适用于所有jsx语法定义的标签，包括组件。
*/