//mongoose工作

//引包  连接数据库
var mongoose = reqiure("mongoose");
var db = mongoose.createConnection("mongodb:/localhost/dbName");
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  //一次打开记录
});

//build Schema

var PersonSchema = new mongoose.Schema({
	name:string
})

//bulid Model

var Person = new mongoose.model("Person",PersonSchema);

//there is some tips. if you had build the Person of model,you can use it by simple a way in other files

var Person = mongoose.model("Person");

//build Entity

var person = new Person({name:"Tom"});

//tips: model and entity are operated db , but they also have some diff.


//what is Schema

//Schema 是用来定义集合中储存字段类型和相关限制的代码，Schema在定义以后没有任何作用，只是一段代码，只有使用Schema去创建Model时，它才真正的发挥作用

//1.定义Schema

var PersonSchema = new mongoose.Schema({
	name:string,
	age:Number
})

//2.Schema.Types  是 mongoose 内部定义的一套数据类型，只有满足此数据类型的数据才能储存进对应的集合中

var PersonSchema = new mongoose.Schema({
	name:String,
	success:Boolean,
	comment:Schema.Types.Mixed,
	_id:Schema.Types.ObjectId,  //主键
	_fk:Schema.Types.ObjectId,  //外键
	array:[Schema.Tyoes.Mixed],
	arrOfString:[String],
	arrOfNumber:[Number],
	arrOfDate:[Date],
	arrOfBuffer:[Buffer],
	nested:{
      stuff:String,
    }
})

//以上列举了常用的 Schema.Types

//3.about Schema.Types.Mixed


//他是一种混合数据类型的值，就是数据没有固定的形式，所以下面两种写法是等价的

var PersonSchema = new mongoose.Schema({ any:{} });
var PersonSchema = new mongoose.Schema({ any:{Schema.Types.Mixed} });

//因为他没有具体的数据类型，所以在修改数据以后，要调用 markModified() 方法去告诉原型

person.any = {e:[2,5,{R:"45454545"}]};
person.markModified("any");
person.save();


//4. Schema 扩展  Schema 不仅仅可以为 Model 和 Entity 提供属性，也可以为他们提供方法

var PersonSchema = new mongoose.Schema({name:String,type:String});
PersonSchema.method.findOtherPeople = function(cb){
	return this.model("Person").find({type:this.type},cb)
}







