//mongoose 连接数据库

var mongoose = require("mongoose");

//1.使用 mongoose.connent();  这种方式只能连接一个数据库，并且在 mongoose 连接数据库以后，就会进行“缓存”，你在其他的文件中在引入 mongoose 时，他们使用的都是同一个 mongoose 实例
//适合应用小，使用的数据可以储存在一个数据库的场景
mongoose.connenct("mongodb:/user:password@localhost/dbName");


//2.使用 mongoose.createConnection();  这种方式可以同时连接多个数据库，因为数据库用的是 mongoose.createConnection() 返回的实例，不是公用的一个 mongoose 实例
//适合应用大，且数据要分库储存的情况，但模型创建以后，想在别的文件里使用对应数据库的引用，就要将你得到的 db 暴露出去才能使用你在其上创建的模型
var db = mongoose.createConnection("mongodb:/user:password@localhost/dbName");



//3.由于这两种方式得存在，在使用 Model 时也存在差别


//3.1 使用 mongoose.connenct() 方式进行连接，由于只能连接一个数据库，且 mongoose 被这一个数据库“霸占”，此时，不论你在什么位置引用 mongoose 这个包时，得到的 monngoose 这个对象都是你连接数据库的 mongoose 对象，这点要切记

var PersonModel = mongoose.model("Person",PersonSchema);


//3.2 使用 mongoose.createConnection() 方式进行连接时，由于可以连接多个数据库，所以你在创建 Model 时就要指定你的 Model 是在哪个数据库上面使用的

var PersonModel = db.model("Person",PersonSchema);
