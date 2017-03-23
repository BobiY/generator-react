// Schema  主要是用来指定对应的 model 中储存的数据字段名和对应字段的类型，这个类型时 mongoose 自身定义的类型，除此以外，Schema还可以定义方法让 Model 和 Entity 使用

//1. 定义 Schema

var Schema = mongoose.Schema;

var Person = new Schema({
	name:String,
	age:Number,
	sex:String,
	children:[Schema.Types.Mixed]
});

//2. Schema.Types  这是 mongoose 中自定义的数据类型，在你初始化 Schema 时使用这个来规定你的字段的数据类型，并且在你使用 Model 和 Entity 去操作数据库是，使用的数据的数据类型，必须与 Schema 中规定的数据类型一致，不然就会报错

//列举几个 Schema.Types 的数据类型

 var ExampleSchema = new Schema({
      name:String,
      binary:Buffer,
      living:Boolean,
      updated:Date,
      age:Number,
      mixed:Schema.Types.Mixed, //该混合类型等同于nested
      _id:Schema.Types.ObjectId,  //主键
      _fk:Schema.Types.ObjectId,  //外键
      array:[],
      arrOfString:[String],
      arrOfNumber:[Number],
      arrOfDate:[Date],
      arrOfBuffer:[Buffer],
      arrOfBoolean:[Boolean],
      arrOfMixed:[Schema.Types.Mixed],
      arrOfObjectId:[Schema.Types.ObjectId],
      nested:{
        stuff:String,
      }
    });





